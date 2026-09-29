/**
 * SHORTCUT MASTER - Memory Challenge Controller
 */

import { SHORTCUTS_DATA } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class MemoryScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.mode = 'flash';
    this.currentShortcut = null;
    this.options = [];
    this.phase = 'flash';
    this.streak = 0;
    this.flashTimeout = null;
    this.isProcessing = false;
  }

  mount() {
    this.streak = 0;
    this.render();
    this.startRound();
  }

  unmount() {
    if (this.flashTimeout) clearTimeout(this.flashTimeout);
    keyboard.clearGameListener();
    keyboard.clearHighlights();
  }

  startRound() {
    this.isProcessing = false;
    const pool = SHORTCUTS_DATA.filter(s => !s.isRestricted);
    this.currentShortcut = pool[Math.floor(Math.random() * pool.length)];

    if (this.mode === 'flash') {
      this.startFlashRound(pool);
    } else {
      this.startBlindRound();
    }
  }

  startFlashRound(pool) {
    this.phase = 'flash';
    const distractors = pool.filter(s => s.id !== this.currentShortcut.id).sort(() => Math.random() - 0.5).slice(0, 3);
    this.options = [this.currentShortcut, ...distractors].sort(() => Math.random() - 0.5);

    this.renderFlashPhase();

    if (this.flashTimeout) clearTimeout(this.flashTimeout);
    this.flashTimeout = setTimeout(() => {
      this.phase = 'hidden';
      this.renderHiddenPhase();
    }, 1500);
  }

  startBlindRound() {
    this.phase = 'blind_playing';
    this.renderBlindPhase();

    keyboard.setGameListener((combo) => {
      if (this.isProcessing || !this.currentShortcut) return;

      const isMatch = keyboard.matchesShortcut(combo, this.currentShortcut);
      if (isMatch) {
        this.handleBlindSuccess();
      } else if (!combo.isModifierOnly && combo.keys.length > 0) {
        this.handleBlindFail();
      }
    });
  }

  handleBlindSuccess() {
    this.isProcessing = true;
    sound.correct();
    this.streak++;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: true,
      source: 'memory'
    });
    state.addXp(40, 'Blind Memory Recall');

    this.renderBlindResult(true);
  }

  handleBlindFail() {
    sound.wrong();
    this.streak = 0;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: false,
      source: 'memory'
    });

    this.renderBlindResult(false);
  }

  handleOptionSelect(selectedId) {
    if (this.isProcessing) return;
    this.isProcessing = true;

    const isCorrect = selectedId === this.currentShortcut.id;
    if (isCorrect) {
      sound.correct();
      this.streak++;
      state.recordResult({
        shortcutId: this.currentShortcut.id,
        category: this.currentShortcut.category,
        correct: true,
        source: 'memory'
      });
      state.addXp(30, 'Memory Flash Recall');
    } else {
      sound.wrong();
      this.streak = 0;
      state.recordResult({
        shortcutId: this.currentShortcut.id,
        category: this.currentShortcut.category,
        correct: false,
        source: 'memory'
      });
    }

    this.renderFlashResult(selectedId, isCorrect);
  }

  render() {
    this.container.innerHTML = `
      <div class="memory-layout">
        <!-- Top Navigation / Mode Selector -->
        <header class="memory-header">
          <div class="memory-mode-toggle">
            <button class="mem-mode-btn ${this.mode === 'flash' ? 'active' : ''}" data-mode="flash">
              <span class="mode-btn-svg">${ICONS.bolt}</span> Flash & Recall
            </button>
            <button class="mem-mode-btn ${this.mode === 'blind' ? 'active' : ''}" data-mode="blind">
              <span class="mode-btn-svg">${ICONS.practice}</span> Blind Execution
            </button>
          </div>

          <div class="memory-streak-badge">
            <span class="streak-icon-wrap">${ICONS.flame}</span>
            <span>MEMORY STREAK: <strong>${this.streak}</strong></span>
          </div>
        </header>

        <main class="memory-card-arena" id="memory-arena">
          <!-- Populated by phases -->
        </main>
      </div>
    `;

    const modeBtns = this.container.querySelectorAll('.mem-mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.click();
        this.mode = btn.getAttribute('data-mode');
        this.streak = 0;
        this.render();
        this.startRound();
      });
    });
  }

  renderFlashPhase() {
    const arena = this.container.querySelector('#memory-arena');
    if (!arena) return;

    arena.innerHTML = `
      <div class="memory-flash-card animate-flash">
        <span class="flash-label">MEMORIZE THIS SHORTCUT (1.5s):</span>
        <div class="flash-keys-display">
          ${this.currentShortcut.displayKeys.map(k => `<kbd class="large-kbd">${k}</kbd>`).join('<span class="combo-plus">+</span>')}
        </div>
        <div class="flash-progress-bar">
          <div class="flash-bar-fill"></div>
        </div>
      </div>
    `;
  }

  renderHiddenPhase() {
    const arena = this.container.querySelector('#memory-arena');
    if (!arena) return;

    arena.innerHTML = `
      <div class="memory-hidden-card">
        <span class="hidden-label">RECALL CHALLENGE:</span>
        <h3 class="hidden-question">What does the flashed shortcut do?</h3>
        
        <div class="memory-options-grid">
          ${this.options.map((opt, idx) => `
            <button class="memory-opt-btn" data-id="${opt.id}">
              <span class="opt-idx">${String.fromCharCode(65 + idx)}</span>
              <div class="opt-body">
                <strong>${opt.name}</strong>
                <p>${opt.description}</p>
              </div>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const optBtns = this.container.querySelectorAll('.memory-opt-btn');
    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.handleOptionSelect(id);
      });
    });
  }

  renderFlashResult(selectedId, isCorrect) {
    const arena = this.container.querySelector('#memory-arena');
    if (!arena) return;

    const s = this.currentShortcut;

    arena.innerHTML = `
      <div class="memory-result-card ${isCorrect ? 'res-success' : 'res-fail'}">
        <div class="res-badge">${isCorrect ? `<span class="res-badge-icon">${ICONS.check}</span> PERFECT RECALL!` : `<span class="res-badge-icon">${ICONS.cross}</span> INCORRECT!`}</div>
        
        <div class="res-shortcut-reveal">
          <div class="keys">${s.displayKeys.join(' + ')}</div>
          <div class="info">
            <strong>${s.name}</strong> — ${s.whatItDoes}
          </div>
        </div>

        <div class="res-tip-box">
          <span class="tip-icon">${ICONS.lightbulb}</span>
          <strong>Memory Tip:</strong> ${s.memoryTip}
        </div>

        <button class="btn-primary" id="btn-next-memory">Next Round →</button>
      </div>
    `;

    const nextBtn = this.container.querySelector('#btn-next-memory');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        sound.click();
        this.startRound();
      });
    }
  }

  renderBlindPhase() {
    const arena = this.container.querySelector('#memory-arena');
    if (!arena) return;

    arena.innerHTML = `
      <div class="blind-memory-card">
        <span class="blind-label">BLIND EXECUTION:</span>
        <h2 class="blind-goal">${this.currentShortcut.name}</h2>
        <p class="blind-desc">${this.currentShortcut.description}</p>
        
        <div class="blind-cue-box">
          <span class="pulse-icon">${ICONS.memory}</span>
          <span>Recall from memory and press the exact keyboard keys now!</span>
        </div>
      </div>
    `;
  }

  renderBlindResult(isCorrect) {
    const arena = this.container.querySelector('#memory-arena');
    if (!arena) return;

    const s = this.currentShortcut;

    arena.innerHTML = `
      <div class="memory-result-card ${isCorrect ? 'res-success' : 'res-fail'}">
        <div class="res-badge">${isCorrect ? `<span class="res-badge-icon">${ICONS.check}</span> BLIND RECALL SUCCESS!` : `<span class="res-badge-icon">${ICONS.cross}</span> MISSED KEYSTROKE`}</div>
        
        <div class="res-shortcut-reveal">
          <div class="keys">${s.displayKeys.join(' + ')}</div>
          <div class="info">
            <strong>${s.name}</strong> — ${s.whatItDoes}
          </div>
        </div>

        <div class="res-tip-box">
          <span class="tip-icon">${ICONS.lightbulb}</span>
          <strong>Memory Tip:</strong> ${s.memoryTip}
        </div>

        <button class="btn-primary" id="btn-next-memory">Next Challenge →</button>
      </div>
    `;

    const nextBtn = this.container.querySelector('#btn-next-memory');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        sound.click();
        this.startRound();
      });
    }
  }
}
