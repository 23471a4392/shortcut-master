/**
 * SHORTCUT MASTER - Free Practice & Category Drill Controller
 */

import { SHORTCUTS_DATA, SHORTCUT_CATEGORIES } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class PracticeScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.selectedCategory = 'all';
    this.currentList = [];
    this.currentIndex = 0;
    this.currentShortcut = null;
    this.startTime = 0;
    this.streak = 0;
    this.hintRevealed = false;
    this.isProcessing = false;
  }

  mount() {
    this.streak = 0;
    this.filterPracticeList();
    this.render();
    this.startDrill();
  }

  unmount() {
    keyboard.clearGameListener();
    keyboard.clearHighlights();
  }

  filterPracticeList() {
    let pool = SHORTCUTS_DATA.filter(s => !s.isRestricted);
    if (this.selectedCategory !== 'all') {
      pool = pool.filter(s => s.category === this.selectedCategory);
    }
    this.currentList = [...pool].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
  }

  startDrill() {
    if (!this.currentList.length) {
      this.filterPracticeList();
    }

    this.currentShortcut = this.currentList[this.currentIndex] || this.currentList[0];
    this.hintRevealed = false;
    this.isProcessing = false;
    this.startTime = performance.now();
    keyboard.clearHighlights();

    this.updateCard();
    this.setupKeyboard();
  }

  setupKeyboard() {
    keyboard.setGameListener((combo) => {
      if (this.isProcessing || !this.currentShortcut) return;

      const isMatch = keyboard.matchesShortcut(combo, this.currentShortcut);
      const reactionTime = Math.round(performance.now() - this.startTime);

      if (isMatch) {
        this.handleSuccess(reactionTime);
      } else {
        if (combo.keys.length > 0) {
          this.handleFail();
        }
      }
    });
  }

  handleSuccess(reactionTime) {
    this.isProcessing = true;
    this.streak++;

    const comboMult = Math.min(4, 1 + Math.floor(this.streak / 3));
    if (this.streak >= 3) {
      sound.combo(comboMult);
    } else {
      sound.correct();
    }

    const baseScore = 20;
    const speedBonus = reactionTime < 1000 ? 10 : 0;
    const earnedXp = (baseScore + speedBonus) * comboMult;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: true,
      reactionTimeMs: reactionTime,
      source: 'practice'
    });

    state.addXp(earnedXp, `Practice Correct (${reactionTime}ms)`);

    this.showFeedbackCard('success', reactionTime, earnedXp, comboMult);

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.currentList.length;
      this.startDrill();
    }, 1200);
  }

  handleFail() {
    sound.wrong();
    this.streak = 0;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: false,
      source: 'practice'
    });

    const statusBox = this.container.querySelector('#drill-feedback-box');
    if (statusBox) {
      statusBox.innerHTML = `
        <div class="feedback-msg feedback-fail">
          <span class="fb-icon">${ICONS.cross}</span>
          <span>Wrong combination! Check memory tip or reveal hint.</span>
        </div>
      `;
    }
  }

  revealHint() {
    this.hintRevealed = true;
    sound.click();
    keyboard.highlightTargetKeys(this.currentShortcut.keys);
    const hintBox = this.container.querySelector('#hint-reveal-content');
    if (hintBox) {
      hintBox.innerHTML = `
        <div class="revealed-hint-banner">
          <span class="hint-svg">${ICONS.lightbulb}</span>
          <div class="hint-text-wrap">
            <span>Target: <strong>${this.currentShortcut.displayKeys.join(' + ')}</strong></span>
            <p>Tip: ${this.currentShortcut.memoryTip}</p>
          </div>
        </div>
      `;
    }
  }

  skipCurrent() {
    sound.click();
    this.streak = 0;
    this.currentIndex = (this.currentIndex + 1) % this.currentList.length;
    this.startDrill();
  }

  render() {
    const categories = Object.values(SHORTCUT_CATEGORIES);

    this.container.innerHTML = `
      <div class="practice-layout">
        <!-- Practice Top Bar -->
        <header class="practice-topbar">
          <div class="category-selector-group">
            <span class="label-tag">CATEGORY:</span>
            <select id="practice-cat-select" class="practice-cat-dropdown">
              <option value="all" ${this.selectedCategory === 'all' ? 'selected' : ''}>All Categories</option>
              ${categories.map(c => `
                <option value="${c.id}" ${this.selectedCategory === c.id ? 'selected' : ''}>
                  ${c.name}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="streak-indicator-chip" id="practice-streak-chip">
            <span class="streak-flame">${ICONS.flame}</span>
            <span class="streak-count">STREAK: <strong>${this.streak}</strong></span>
          </div>
        </header>

        <!-- Main Interactive Drill Card -->
        <main class="practice-drill-area" id="practice-card-slot">
          <!-- Populated by updateCard() -->
        </main>
      </div>
    `;

    const catSelect = this.container.querySelector('#practice-cat-select');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        sound.click();
        this.selectedCategory = e.target.value;
        this.filterPracticeList();
        this.startDrill();
      });
    }
  }

  updateCard() {
    const slot = this.container.querySelector('#practice-card-slot');
    if (!slot || !this.currentShortcut) return;

    const s = this.currentShortcut;
    const cat = SHORTCUT_CATEGORIES[s.category] || { name: s.category, icon: ICONS.bolt };

    slot.innerHTML = `
      <div class="drill-card">
        <div class="drill-header">
          <span class="drill-cat-tag"><span class="cat-svg-icon">${cat.icon}</span> ${cat.name}</span>
          <span class="drill-index">#${this.currentIndex + 1} of ${this.currentList.length}</span>
        </div>

        <div class="drill-prompt-box">
          <span class="drill-prompt-label">ACTION / GOAL:</span>
          <h2 class="drill-prompt-title">${s.name}</h2>
          <p class="drill-prompt-desc">${s.description}</p>
        </div>

        <div class="drill-instruction-box">
          <div class="pulse-key-icon">${ICONS.keyboard}</div>
          <p>Press the correct keyboard shortcut combination now!</p>
        </div>

        <div id="drill-feedback-box" class="drill-feedback-container"></div>
        <div id="hint-reveal-content" class="hint-content-slot"></div>

        <div class="drill-actions-footer">
          <button class="drill-btn btn-hint" id="btn-practice-hint">${ICONS.lightbulb} Reveal Hint</button>
          <button class="drill-btn btn-skip" id="btn-practice-skip">Skip Shortcut →</button>
        </div>
      </div>
    `;

    const streakChip = this.container.querySelector('#practice-streak-chip');
    if (streakChip) {
      streakChip.innerHTML = `
        <span class="streak-flame">${ICONS.flame}</span>
        <span class="streak-count">STREAK: <strong>${this.streak}</strong> ${this.streak >= 3 ? `<span class="combo-badge">x${Math.min(4, 1 + Math.floor(this.streak / 3))}</span>` : ''}</span>
      `;
    }

    const hintBtn = this.container.querySelector('#btn-practice-hint');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => this.revealHint());
    }

    const skipBtn = this.container.querySelector('#btn-practice-skip');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => this.skipCurrent());
    }
  }

  showFeedbackCard(type, reactionTime, xpEarned, comboMult) {
    const statusBox = this.container.querySelector('#drill-feedback-box');
    if (statusBox) {
      statusBox.innerHTML = `
        <div class="feedback-msg feedback-success">
          <span class="feedback-icon">${ICONS.check}</span>
          <div class="feedback-text">
            <strong>CORRECT!</strong> (${this.currentShortcut.displayKeys.join(' + ')})
            <span class="xp-pop">+${xpEarned} XP</span>
            <span class="time-pop">${reactionTime}ms ${comboMult > 1 ? `• ${comboMult}x Combo!` : ''}</span>
          </div>
        </div>
      `;
    }
  }
}
