/**
 * SHORTCUT MASTER - Keyboard Event & Visualizer Engine
 * Accurately detects key combinations, normalizes OS variations,
 * prevents default browser behavior where permitted, and syncs on-screen keyboard visualizer.
 */

import { bus } from './bus.js';

class KeyboardEngine {
  constructor() {
    this.pressedKeys = new Set();
    this.activeModifiers = {
      ctrl: false,
      alt: false,
      shift: false,
      meta: false
    };
    this.enabled = true;
    this.currentListener = null; // Callback for active game mode
    this.visualizerElement = null;
    if (typeof window !== 'undefined') {
      this.bindGlobalListeners();
    }
  }

  setGameListener(callback) {
    this.currentListener = callback;
  }

  clearGameListener() {
    this.currentListener = null;
    this.pressedKeys.clear();
    this.updateVisualizer();
  }

  setVisualizerElement(element) {
    this.visualizerElement = element;
    this.renderVisualizerKeys();
  }

  bindGlobalListeners() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e), { passive: false });
    window.addEventListener('keyup', (e) => this.handleKeyUp(e), { passive: false });
    window.addEventListener('blur', () => this.handleBlur());
  }

  handleBlur() {
    this.pressedKeys.clear();
    this.activeModifiers = { ctrl: false, alt: false, shift: false, meta: false };
    this.updateVisualizer();
  }

  handleKeyDown(e) {
    if (!this.enabled) return;

    // Normalize modifiers
    this.activeModifiers.ctrl = e.ctrlKey || e.key === 'Control';
    this.activeModifiers.alt = e.altKey || e.key === 'Alt';
    this.activeModifiers.shift = e.shiftKey || e.key === 'Shift';
    this.activeModifiers.meta = e.metaKey || e.key === 'Meta';

    const normalizedCode = this.normalizeKeyCode(e);

    // Track active key codes
    if (e.key === 'Control') this.pressedKeys.add('Control');
    else if (e.key === 'Alt') this.pressedKeys.add('Alt');
    else if (e.key === 'Shift') this.pressedKeys.add('Shift');
    else if (e.key === 'Meta') this.pressedKeys.add('Meta');
    else {
      this.pressedKeys.add(normalizedCode);
    }

    this.updateVisualizer();

    // Prevent default browser shortcuts when playing game mode
    const isModifierActive = e.ctrlKey || e.altKey || e.metaKey;
    const isFKey = e.key.startsWith('F') && e.key.length <= 3;
    const isNavKey = ['Home', 'End', 'PageUp', 'PageDown', 'Tab'].includes(e.key);

    if (isModifierActive || isFKey || isNavKey) {
      // Don't intercept developer tools refresh in emergency unless inside challenge
      const isDevEmergency = e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J');
      if (!isDevEmergency || this.currentListener) {
        // Prevent default for game interactions (Ctrl+S, Ctrl+P, Ctrl+F, Ctrl+W, etc.)
        try {
          e.preventDefault();
        } catch (err) {}
      }
    }

    // Build combination state
    const combo = this.getCurrentCombo(e);

    // Notify active game mode listener
    if (this.currentListener) {
      this.currentListener(combo, e);
    }

    bus.emit('keyboard:pressed', { combo, event: e });
  }

  handleKeyUp(e) {
    if (!this.enabled) return;

    const normalizedCode = this.normalizeKeyCode(e);

    if (e.key === 'Control') {
      this.pressedKeys.delete('Control');
      this.activeModifiers.ctrl = false;
    } else if (e.key === 'Alt') {
      this.pressedKeys.delete('Alt');
      this.activeModifiers.alt = false;
    } else if (e.key === 'Shift') {
      this.pressedKeys.delete('Shift');
      this.activeModifiers.shift = false;
    } else if (e.key === 'Meta') {
      this.pressedKeys.delete('Meta');
      this.activeModifiers.meta = false;
    } else {
      this.pressedKeys.delete(normalizedCode);
    }

    this.activeModifiers.ctrl = e.ctrlKey;
    this.activeModifiers.alt = e.altKey;
    this.activeModifiers.shift = e.shiftKey;
    this.activeModifiers.meta = e.metaKey;

    this.updateVisualizer();
  }

  normalizeKeyCode(e) {
    // If standard code is available, return it
    if (e.code) return e.code;

    // Fallback normalizations
    const key = e.key;
    if (key >= 'a' && key <= 'z') return `Key${key.toUpperCase()}`;
    if (key >= 'A' && key <= 'Z') return `Key${key}`;
    if (key >= '0' && key <= '9') return `Digit${key}`;
    if (key === 'ArrowLeft') return 'ArrowLeft';
    if (key === 'ArrowRight') return 'ArrowRight';
    if (key === 'ArrowUp') return 'ArrowUp';
    if (key === 'ArrowDown') return 'ArrowDown';
    if (key === 'Escape') return 'Escape';
    if (key === 'Enter') return 'Enter';
    if (key === 'Tab') return 'Tab';
    if (key === 'Home') return 'Home';
    if (key === 'End') return 'End';
    return key;
  }

  getCurrentCombo(e) {
    const keys = [];
    const displayTokens = [];

    if (e.ctrlKey || this.activeModifiers.ctrl || this.pressedKeys.has('Control')) {
      keys.push('Control');
      displayTokens.push('Ctrl');
    }
    if (e.metaKey || this.activeModifiers.meta || this.pressedKeys.has('Meta')) {
      keys.push('Meta');
      displayTokens.push('Win');
    }
    if (e.altKey || this.activeModifiers.alt || this.pressedKeys.has('Alt')) {
      keys.push('Alt');
      displayTokens.push('Alt');
    }
    if (e.shiftKey || this.activeModifiers.shift || this.pressedKeys.has('Shift')) {
      keys.push('Shift');
      displayTokens.push('Shift');
    }

    const nonModCode = this.getNonModifierKey(e);
    if (nonModCode) {
      if (!keys.includes(nonModCode)) keys.push(nonModCode);
      const displayLabel = this.formatDisplayKey(nonModCode, e);
      if (!displayTokens.includes(displayLabel)) displayTokens.push(displayLabel);
    }

    return {
      keys,
      displayTokens,
      displayString: displayTokens.join(' + '),
      rawCode: nonModCode,
      rawKey: e.key
    };
  }

  getNonModifierKey(e) {
    const key = e.key;
    if (['Control', 'Alt', 'Shift', 'Meta'].includes(key)) return null;
    return this.normalizeKeyCode(e);
  }

  formatDisplayKey(code, e) {
    if (code.startsWith('Key')) return code.slice(3);
    if (code.startsWith('Digit')) return code.slice(5);
    if (code === 'ArrowLeft') return '←';
    if (code === 'ArrowRight') return '→';
    if (code === 'ArrowUp') return '↑';
    if (code === 'ArrowDown') return '↓';
    if (code === 'Slash') return '/';
    if (code === 'Backquote') return '`';
    if (code === 'Minus') return '-';
    if (code === 'Equal') return '+';
    if (code === 'Escape') return 'Esc';
    if (code === 'Tab') return 'Tab';
    if (code === 'Home') return 'Home';
    if (code === 'End') return 'End';
    if (code === 'F12') return 'F12';
    if (code === 'F4') return 'F4';
    if (e && e.key && e.key.length === 1) return e.key.toUpperCase();
    return code;
  }

  // Check if detected combination matches target shortcut
  matchesShortcut(combo, targetShortcut) {
    if (!combo || !targetShortcut) return false;

    const targetKeys = targetShortcut.keys;
    if (!targetKeys || !targetKeys.length) return false;

    // Check count of keys
    if (combo.keys.length !== targetKeys.length) return false;

    // Match every key with loose normalization (Equal vs Plus, etc.)
    return targetKeys.every(tKey => {
      if (combo.keys.includes(tKey)) return true;

      // Handle aliases
      if (tKey === 'Equal' && (combo.keys.includes('Equal') || combo.rawKey === '=' || combo.rawKey === '+')) return true;
      if (tKey === 'Minus' && (combo.keys.includes('Minus') || combo.rawKey === '-')) return true;
      if (tKey === 'Digit0' && (combo.keys.includes('Digit0') || combo.rawKey === '0')) return true;
      if (tKey === 'Slash' && (combo.keys.includes('Slash') || combo.rawKey === '/')) return true;
      if (tKey === 'Backquote' && (combo.keys.includes('Backquote') || combo.rawKey === '`')) return true;

      return false;
    });
  }

  // --- Visualizer Rendering & Sync ---

  renderVisualizerKeys() {
    if (!this.visualizerElement) return;

    // Standard compact QWERTY layout definition
    const layout = [
      [
        { code: 'Escape', label: 'Esc', width: 'key-1' },
        { code: 'F1', label: 'F1', width: 'key-1' },
        { code: 'F2', label: 'F2', width: 'key-1' },
        { code: 'F3', label: 'F3', width: 'key-1' },
        { code: 'F4', label: 'F4', width: 'key-1' },
        { code: 'F5', label: 'F5', width: 'key-1' },
        { code: 'F12', label: 'F12', width: 'key-1' },
        { code: 'Home', label: 'Home', width: 'key-1' },
        { code: 'End', label: 'End', width: 'key-1' }
      ],
      [
        { code: 'Backquote', label: '`', width: 'key-1' },
        { code: 'Digit1', label: '1', width: 'key-1' },
        { code: 'Digit2', label: '2', width: 'key-1' },
        { code: 'Digit3', label: '3', width: 'key-1' },
        { code: 'Digit4', label: '4', width: 'key-1' },
        { code: 'Digit5', label: '5', width: 'key-1' },
        { code: 'Digit0', label: '0', width: 'key-1' },
        { code: 'Minus', label: '-', width: 'key-1' },
        { code: 'Equal', label: '+', width: 'key-1' },
        { code: 'Backspace', label: '⌫', width: 'key-1-5' }
      ],
      [
        { code: 'Tab', label: 'Tab', width: 'key-1-5' },
        { code: 'KeyQ', label: 'Q', width: 'key-1' },
        { code: 'KeyW', label: 'W', width: 'key-1' },
        { code: 'KeyE', label: 'E', width: 'key-1' },
        { code: 'KeyR', label: 'R', width: 'key-1' },
        { code: 'KeyT', label: 'T', width: 'key-1' },
        { code: 'KeyY', label: 'Y', width: 'key-1' },
        { code: 'KeyU', label: 'U', width: 'key-1' },
        { code: 'KeyI', label: 'I', width: 'key-1' },
        { code: 'KeyP', label: 'P', width: 'key-1' }
      ],
      [
        { code: 'Control', label: 'Ctrl', width: 'key-1-5', isMod: true },
        { code: 'KeyA', label: 'A', width: 'key-1' },
        { code: 'KeyS', label: 'S', width: 'key-1' },
        { code: 'KeyD', label: 'D', width: 'key-1' },
        { code: 'KeyF', label: 'F', width: 'key-1' },
        { code: 'KeyH', label: 'H', width: 'key-1' },
        { code: 'KeyJ', label: 'J', width: 'key-1' },
        { code: 'KeyK', label: 'K', width: 'key-1' },
        { code: 'KeyL', label: 'L', width: 'key-1' },
        { code: 'Enter', label: '↵', width: 'key-1-5' }
      ],
      [
        { code: 'Shift', label: 'Shift', width: 'key-2', isMod: true },
        { code: 'KeyZ', label: 'Z', width: 'key-1' },
        { code: 'KeyX', label: 'X', width: 'key-1' },
        { code: 'KeyC', label: 'C', width: 'key-1' },
        { code: 'KeyV', label: 'V', width: 'key-1' },
        { code: 'KeyB', label: 'B', width: 'key-1' },
        { code: 'Slash', label: '/', width: 'key-1' },
        { code: 'ArrowUp', label: '↑', width: 'key-1' },
        { code: 'ShiftRight', label: 'Shift', width: 'key-1-5', isMod: true }
      ],
      [
        { code: 'Control', label: 'Ctrl', width: 'key-1-5', isMod: true },
        { code: 'Meta', label: 'Win', width: 'key-1-2', isMod: true },
        { code: 'Alt', label: 'Alt', width: 'key-1-2', isMod: true },
        { code: 'Space', label: 'Space Bar', width: 'key-space' },
        { code: 'ArrowLeft', label: '←', width: 'key-1' },
        { code: 'ArrowDown', label: '↓', width: 'key-1' },
        { code: 'ArrowRight', label: '→', width: 'key-1' }
      ]
    ];

    let html = '<div class="kb-visualizer-grid">';
    layout.forEach((row, rowIdx) => {
      html += `<div class="kb-row kb-row-${rowIdx}">`;
      row.forEach(key => {
        html += `<div class="kb-key ${key.width} ${key.isMod ? 'kb-mod-key' : ''}" data-code="${key.code}">
          <span class="kb-key-label">${key.label}</span>
        </div>`;
      });
      html += `</div>`;
    });
    html += '</div>';

    this.visualizerElement.innerHTML = html;
  }

  updateVisualizer() {
    if (!this.visualizerElement) return;

    const allKeys = this.visualizerElement.querySelectorAll('.kb-key');
    allKeys.forEach(keyEl => {
      const code = keyEl.getAttribute('data-code');
      let isActive = false;

      if (code === 'Control' && (this.activeModifiers.ctrl || this.pressedKeys.has('Control'))) isActive = true;
      else if (code === 'Alt' && (this.activeModifiers.alt || this.pressedKeys.has('Alt'))) isActive = true;
      else if ((code === 'Shift' || code === 'ShiftRight') && (this.activeModifiers.shift || this.pressedKeys.has('Shift'))) isActive = true;
      else if (code === 'Meta' && (this.activeModifiers.meta || this.pressedKeys.has('Meta'))) isActive = true;
      else if (this.pressedKeys.has(code)) isActive = true;

      if (isActive) {
        keyEl.classList.add('kb-active');
      } else {
        keyEl.classList.remove('kb-active');
      }
    });

    // Update detected combination indicator
    const comboDisplay = document.getElementById('kb-detected-combo');
    if (comboDisplay) {
      if (this.pressedKeys.size > 0 || this.activeModifiers.ctrl || this.activeModifiers.alt || this.activeModifiers.shift || this.activeModifiers.meta) {
        const tokens = [];
        if (this.activeModifiers.ctrl || this.pressedKeys.has('Control')) tokens.push('Ctrl');
        if (this.activeModifiers.meta || this.pressedKeys.has('Meta')) tokens.push('Win');
        if (this.activeModifiers.alt || this.pressedKeys.has('Alt')) tokens.push('Alt');
        if (this.activeModifiers.shift || this.pressedKeys.has('Shift')) tokens.push('Shift');
        this.pressedKeys.forEach(k => {
          if (!['Control', 'Alt', 'Shift', 'Meta'].includes(k)) {
            tokens.push(this.formatDisplayKey(k));
          }
        });
        comboDisplay.textContent = tokens.join(' + ') || '...';
        comboDisplay.classList.add('has-input');
      } else {
        comboDisplay.textContent = 'Waiting for keystroke...';
        comboDisplay.classList.remove('has-input');
      }
    }
  }

  // Highlight specific keys for a hint / demonstration
  highlightTargetKeys(keysArray) {
    if (!this.visualizerElement) return;
    const allKeys = this.visualizerElement.querySelectorAll('.kb-key');
    allKeys.forEach(k => k.classList.remove('kb-hint'));

    if (!keysArray || !keysArray.length) return;

    keysArray.forEach(kCode => {
      const match = this.visualizerElement.querySelector(`.kb-key[data-code="${kCode}"]`);
      if (match) match.classList.add('kb-hint');
      if (kCode === 'Control') {
        const mods = this.visualizerElement.querySelectorAll(`.kb-key[data-code="Control"]`);
        mods.forEach(m => m.classList.add('kb-hint'));
      }
    });
  }

  clearHighlights() {
    if (!this.visualizerElement) return;
    const allKeys = this.visualizerElement.querySelectorAll('.kb-key');
    allKeys.forEach(k => k.classList.remove('kb-hint'));
  }
}

export const keyboard = new KeyboardEngine();
