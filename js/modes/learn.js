/**
 * SHORTCUT MASTER - Learn Database & Interactive Sandbox Controller
 */

import { SHORTCUTS_DATA, SHORTCUT_CATEGORIES, getShortcutById, getShortcutsByCategory } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class LearnScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.selectedCategoryId = 'all';
    this.searchQuery = '';
    this.activeShortcut = SHORTCUTS_DATA[0];
    this.testStatus = null;
  }

  mount() {
    this.render();
    this.setupKeyboardTesting();
  }

  unmount() {
    keyboard.clearGameListener();
    keyboard.clearHighlights();
  }

  setupKeyboardTesting() {
    keyboard.setGameListener((combo) => {
      if (!this.activeShortcut) return;

      if (this.activeShortcut.isRestricted) {
        this.testStatus = 'restricted';
        this.updateSandboxFeedback();
        return;
      }

      const isMatch = keyboard.matchesShortcut(combo, this.activeShortcut);
      if (isMatch) {
        sound.correct();
        this.testStatus = 'success';
        state.recordResult({
          shortcutId: this.activeShortcut.id,
          category: this.activeShortcut.category,
          correct: true,
          source: 'learn'
        });
        state.addXp(15, 'Practiced in Learn Sandbox');
      } else if (!combo.isModifierOnly && combo.keys.length > 0) {
        sound.wrong();
        this.testStatus = 'fail';
      }
      this.updateSandboxFeedback();
    });

    if (this.activeShortcut) {
      keyboard.highlightTargetKeys(this.activeShortcut.keys);
    }
  }

  render() {
    const categories = Object.values(SHORTCUT_CATEGORIES);
    const filtered = this.getFilteredShortcuts();

    this.container.innerHTML = `
      <div class="learn-container">
        <!-- Filter and Search Header -->
        <header class="learn-header">
          <div class="search-input-wrapper">
            <span class="search-icon">${ICONS.search}</span>
            <input 
              type="text" 
              id="learn-search-input" 
              class="learn-search-field" 
              placeholder="Search shortcut, name, or description (e.g., Save, Ctrl+Z, Tab)..." 
              value="${this.searchQuery}"
            />
            ${this.searchQuery ? '<button id="btn-clear-search" class="clear-search-btn">✕</button>' : ''}
          </div>

          <div class="category-chips-row">
            <button class="cat-chip ${this.selectedCategoryId === 'all' ? 'active' : ''}" data-cat="all">
              <span>All (${SHORTCUTS_DATA.length})</span>
            </button>
            ${categories.map(cat => {
              const count = getShortcutsByCategory(cat.id).length;
              return `
                <button class="cat-chip ${this.selectedCategoryId === cat.id ? 'active' : ''}" data-cat="${cat.id}">
                  <span class="cat-chip-icon">${cat.icon}</span>
                  <span>${cat.name} (${count})</span>
                </button>
              `;
            }).join('')}
          </div>
        </header>

        <!-- Main 2-Column Explorer: List + Rich Detail Card -->
        <div class="learn-split-layout">
          <!-- Left List Sidebar -->
          <aside class="learn-sidebar">
            <div class="sidebar-list-header">
              <span>Showing ${filtered.length} Shortcuts</span>
            </div>
            <div class="shortcuts-scroll-list" id="shortcuts-list">
              ${filtered.map(s => {
                const isSelected = this.activeShortcut && this.activeShortcut.id === s.id;
                const isMastered = !!state.data.masteredShortcuts[s.id];
                return `
                  <div class="shortcut-list-item ${isSelected ? 'active' : ''}" data-id="${s.id}">
                    <div class="item-left">
                      <div class="item-keys-badge">${s.displayKeys.join(' + ')}</div>
                      <span class="item-name">${s.name}</span>
                    </div>
                    <div class="item-right">
                      ${isMastered ? `<span class="mastered-icon" title="Mastered">${ICONS.check}</span>` : ''}
                      ${s.isRestricted ? '<span class="restricted-tag" title="OS Intercepted">OS</span>' : ''}
                    </div>
                  </div>
                `;
              }).join('')}
              ${filtered.length === 0 ? '<div class="no-results">No shortcuts found matching your search.</div>' : ''}
            </div>
          </aside>

          <!-- Right Detail & Sandbox Panel -->
          <main class="learn-detail-panel" id="learn-detail-panel">
            ${this.renderDetailContent()}
          </main>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderDetailContent() {
    if (!this.activeShortcut) {
      return '<div class="empty-selection">Select a shortcut from the list to view details and practice.</div>';
    }

    const s = this.activeShortcut;
    const cat = SHORTCUT_CATEGORIES[s.category] || { name: s.category, icon: ICONS.bolt };
    const isMastered = !!state.data.masteredShortcuts[s.id];
    const relatedList = (s.relatedShortcuts || [])
      .map(id => getShortcutById(id))
      .filter(Boolean);

    return `
      <div class="detail-card-inner">
        <!-- Detail Header -->
        <div class="detail-header-strip">
          <div class="header-left">
            <span class="category-badge" style="background: rgba(0, 240, 138, 0.1); color: var(--color-accent-emerald);">
              <span class="cat-svg-icon">${cat.icon}</span> ${cat.name}
            </span>
            <span class="difficulty-badge difficulty-${s.difficulty}">${s.difficulty.toUpperCase()}</span>
            ${s.isRestricted ? '<span class="os-warning-badge">OS-Restricted</span>' : ''}
          </div>
          <div class="header-right">
            ${isMastered ? `<span class="mastered-pill">${ICONS.check} MASTERED</span>` : '<span class="learning-pill">LEARNING</span>'}
          </div>
        </div>

        <div class="detail-main-title">
          <h2 class="shortcut-hero-name">${s.name}</h2>
          <div class="hero-key-combo">
            ${s.displayKeys.map(k => `<kbd class="large-kbd">${k}</kbd>`).join('<span class="combo-plus">+</span>')}
          </div>
        </div>

        <!-- Metadata Spec Grid -->
        <div class="spec-grid">
          <div class="spec-item">
            <div class="spec-label">WHAT IT DOES</div>
            <div class="spec-value">${s.whatItDoes}</div>
          </div>

          <div class="spec-item">
            <div class="spec-label">WHEN TO USE IT</div>
            <div class="spec-value">${s.whenToUse}</div>
          </div>

          <div class="spec-item memory-tip-item">
            <div class="spec-label">MEMORY TIP</div>
            <div class="spec-value highlight-tip">${s.memoryTip}</div>
          </div>

          <div class="spec-item">
            <div class="spec-label">REAL-WORLD EXAMPLE</div>
            <div class="spec-value">${s.realWorldExample}</div>
          </div>
        </div>

        ${s.isRestricted ? `
          <div class="restricted-info-box">
            <span class="info-icon">${ICONS.windows}</span>
            <div>
              <strong>Browser Limitation Note:</strong> ${s.restrictionNote || 'This shortcut is captured directly by the operating system.'}
              <br><small>You can still learn and remember this combination for your daily workflow!</small>
            </div>
          </div>
        ` : ''}

        <!-- Interactive Sandbox Drill -->
        <div class="interactive-sandbox-card">
          <div class="sandbox-header">
            <h4>${ICONS.practice} Interactive Try-It Sandbox</h4>
            <span class="sandbox-subtext">Press the physical keys on your keyboard now!</span>
          </div>
          
          <div class="sandbox-live-area" id="sandbox-feedback">
            ${this.getSandboxStatusHtml()}
          </div>
        </div>

        <!-- Related Shortcuts -->
        ${relatedList.length > 0 ? `
          <div class="related-shortcuts-section">
            <h4>Related Shortcuts</h4>
            <div class="related-chips-row">
              ${relatedList.map(r => `
                <button class="related-chip-btn" data-id="${r.id}">
                  <span class="rel-keys">${r.displayKeys.join('+')}</span>
                  <span class="rel-name">${r.name}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  getSandboxStatusHtml() {
    if (!this.activeShortcut) return '';

    if (this.activeShortcut.isRestricted) {
      if (this.testStatus === 'success') {
        return `
          <div class="sandbox-status status-success">
            <span class="sandbox-status-icon">${ICONS.check}</span>
            <div class="status-msg">
              <strong>SAFE TRIGGER EXECUTED!</strong> Simulated <code>${this.activeShortcut.displayKeys.join(' + ')}</code>! (+15 XP)
            </div>
          </div>
        `;
      }
      return `
        <div class="sandbox-status status-restricted">
          <span class="sandbox-status-icon">${ICONS.windows}</span>
          <div class="status-msg">
            <strong>Browser / OS-Protected Hotkey:</strong>
            <p style="margin: 4px 0 8px 0; font-size: 12px; color: #fef08a;">
              Pressing <code>${this.activeShortcut.displayKeys.join(' + ')}</code> physically would close your browser tab or switch windows. Use Safe Trigger below:
            </p>
            <button type="button" class="btn-primary btn-learn-safe-trigger" id="btn-learn-safe-trigger" style="font-size: 12px; padding: 6px 14px; cursor: pointer;">
              ⚡ Safe Trigger Simulation (+15 XP)
            </button>
          </div>
        </div>
      `;
    }

    if (this.testStatus === 'success') {
      return `
        <div class="sandbox-status status-success">
          <span class="sandbox-status-icon">${ICONS.check}</span>
          <div class="status-msg">
            <strong>PERFECT MATCH!</strong> You triggered <code>${this.activeShortcut.displayKeys.join(' + ')}</code>! (+15 XP)
          </div>
        </div>
      `;
    }

    if (this.testStatus === 'fail') {
      return `
        <div class="sandbox-status status-fail">
          <span class="sandbox-status-icon">${ICONS.cross}</span>
          <div class="status-msg">
            <strong>Not quite!</strong> Try holding <code>${this.activeShortcut.displayKeys[0]}</code> and pressing <code>${this.activeShortcut.displayKeys.slice(1).join(' + ')}</code>.
          </div>
        </div>
      `;
    }

    return `
      <div class="sandbox-status status-waiting">
        <span class="sandbox-pulse-dot"></span>
        <div class="status-msg">
          Ready! Press <strong>${this.activeShortcut.displayKeys.join(' + ')}</strong> on your keyboard...
        </div>
      </div>
    `;
  }

  updateSandboxFeedback() {
    const container = this.container.querySelector('#sandbox-feedback');
    if (container) {
      container.innerHTML = this.getSandboxStatusHtml();
    }
  }

  getFilteredShortcuts() {
    return SHORTCUTS_DATA.filter(s => {
      if (this.selectedCategoryId !== 'all' && s.category !== this.selectedCategoryId) {
        return false;
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase().trim();
        const matchesName = s.name.toLowerCase().includes(q);
        const matchesDesc = s.description.toLowerCase().includes(q);
        const matchesTip = s.memoryTip.toLowerCase().includes(q);
        const matchesKeys = s.displayKeys.join(' ').toLowerCase().includes(q) || s.displayKeys.join('+').toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesTip || matchesKeys;
      }
      return true;
    });
  }

  selectShortcut(shortcut) {
    this.activeShortcut = shortcut;
    this.testStatus = null;
    keyboard.highlightTargetKeys(shortcut.keys);
    const detailPanel = this.container.querySelector('#learn-detail-panel');
    if (detailPanel) {
      detailPanel.innerHTML = this.renderDetailContent();
      this.bindDetailEvents();
    }

    const items = this.container.querySelectorAll('.shortcut-list-item');
    items.forEach(item => {
      if (item.getAttribute('data-id') === shortcut.id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  bindEvents() {
    const catChips = this.container.querySelectorAll('.cat-chip');
    catChips.forEach(chip => {
      chip.addEventListener('click', () => {
        sound.click();
        this.selectedCategoryId = chip.getAttribute('data-cat');
        this.render();
      });
    });

    const searchInput = this.container.querySelector('#learn-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        const listEl = this.container.querySelector('#shortcuts-list');
        if (listEl) {
          const filtered = this.getFilteredShortcuts();
          listEl.innerHTML = filtered.map(s => {
            const isSelected = this.activeShortcut && this.activeShortcut.id === s.id;
            const isMastered = !!state.data.masteredShortcuts[s.id];
            return `
              <div class="shortcut-list-item ${isSelected ? 'active' : ''}" data-id="${s.id}">
                <div class="item-left">
                  <div class="item-keys-badge">${s.displayKeys.join(' + ')}</div>
                  <span class="item-name">${s.name}</span>
                </div>
                <div class="item-right">
                  ${isMastered ? `<span class="mastered-icon" title="Mastered">${ICONS.check}</span>` : ''}
                  ${s.isRestricted ? '<span class="restricted-tag" title="OS Intercepted">OS</span>' : ''}
                </div>
              </div>
            `;
          }).join('') || '<div class="no-results">No shortcuts found matching your search.</div>';
          this.bindListClickEvents();
        }
      });
    }

    const clearBtn = this.container.querySelector('#btn-clear-search');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        sound.click();
        this.searchQuery = '';
        this.render();
      });
    }

    this.bindListClickEvents();
    this.bindDetailEvents();
  }

  bindListClickEvents() {
    const items = this.container.querySelectorAll('.shortcut-list-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        sound.click();
        const id = item.getAttribute('data-id');
        const sc = getShortcutById(id);
        if (sc) {
          this.selectShortcut(sc);
        }
      });
    });
  }

  bindDetailEvents() {
    const relatedBtns = this.container.querySelectorAll('.related-chip-btn');
    relatedBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.click();
        const id = btn.getAttribute('data-id');
        const sc = getShortcutById(id);
        if (sc) {
          this.selectShortcut(sc);
        }
      });
    });

    const simBtn = this.container.querySelector('#btn-learn-safe-trigger');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        sound.correct();
        this.testStatus = 'success';
        state.recordResult({
          shortcutId: this.activeShortcut.id,
          category: this.activeShortcut.category,
          correct: true,
          source: 'learn'
        });
        state.addXp(15, `Practiced in Learn: ${this.activeShortcut.name}`);
        this.updateSandboxFeedback();
      });
    }
  }
}
