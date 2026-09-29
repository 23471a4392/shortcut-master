/**
 * SHORTCUT MASTER - Free Practice & Category Drill Controller
 * Enhanced with real-time keystroke HUD, detailed error feedback & correct solutions,
 * retry / muscle memory drills, session performance reports, and rank tier ladder progression.
 */

import { SHORTCUTS_DATA, SHORTCUT_CATEGORIES } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state, LEVEL_TIERS } from '../engine/state.js';
import { ICONS, getTierEmblemSvg } from '../engine/icons.js';

export class PracticeScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.selectedCategory = 'all';
    this.drillMode = '10'; // '10', '20', or 'endless'
    this.currentList = [];
    this.currentIndex = 0;
    this.currentShortcut = null;
    this.startTime = 0;
    this.streak = 0;
    this.hintRevealed = false;
    this.isProcessing = false;
    this.autoAdvanceTimer = null;
    this.autoAdvanceInterval = null;

    // Session Statistics & Report Log
    this.sessionHistory = [];
    this.sessionCorrect = 0;
    this.sessionWrong = 0;
    this.sessionXpEarned = 0;
    this.maxSessionStreak = 0;
    this.isShowingReport = false;
  }

  mount() {
    this.streak = 0;
    this.sessionHistory = [];
    this.sessionCorrect = 0;
    this.sessionWrong = 0;
    this.sessionXpEarned = 0;
    this.maxSessionStreak = 0;
    this.isShowingReport = false;

    this.filterPracticeList();
    this.render();
    this.startDrill();
  }

  unmount() {
    this.clearTimers();
    keyboard.clearGameListener();
    keyboard.clearHighlights();
  }

  clearTimers() {
    if (this.autoAdvanceTimer) {
      clearTimeout(this.autoAdvanceTimer);
      this.autoAdvanceTimer = null;
    }
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
      this.autoAdvanceInterval = null;
    }
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
    this.clearTimers();

    if (!this.currentList.length) {
      this.filterPracticeList();
    }

    // Check if session drill target reached
    const targetCount = parseInt(this.drillMode, 10);
    if (!isNaN(targetCount) && this.sessionHistory.length >= targetCount) {
      this.finishSession();
      return;
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
      // Live update detected keystroke badge in question card
      this.updateLiveComboBadge(combo);

      if (this.isProcessing || !this.currentShortcut) return;

      const isMatch = keyboard.matchesShortcut(combo, this.currentShortcut);
      const reactionTime = Math.round(performance.now() - this.startTime);

      if (isMatch) {
        this.handleSuccess(reactionTime, combo);
      } else if (!combo.isModifierOnly && combo.keys.length > 0) {
        this.handleFail(combo);
      }
    });
  }

  updateLiveComboBadge(combo) {
    const liveEl = this.container.querySelector('#practice-live-combo');
    if (!liveEl) return;

    if (combo && combo.keys && combo.keys.length > 0) {
      liveEl.innerHTML = combo.displayTokens.map(k => `<kbd class="live-kbd">${k}</kbd>`).join(' + ');
      liveEl.classList.add('has-active-input');
    } else {
      liveEl.innerHTML = '<span class="live-placeholder">Waiting for keystrokes...</span>';
      liveEl.classList.remove('has-active-input');
    }
  }

  handleSuccess(reactionTime, combo) {
    this.clearTimers();
    this.isProcessing = true;
    this.streak++;
    if (this.streak > this.maxSessionStreak) {
      this.maxSessionStreak = this.streak;
    }

    this.sessionCorrect++;

    const comboMult = Math.min(4, 1 + Math.floor(this.streak / 3));
    if (this.streak >= 3) {
      sound.combo(comboMult);
    } else {
      sound.correct();
    }

    const baseScore = 40;
    const speedBonus = reactionTime < 1200 ? 25 : 0;
    const earnedXp = (baseScore + speedBonus) * comboMult;
    this.sessionXpEarned += earnedXp;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: true,
      reactionTimeMs: reactionTime,
      source: 'practice'
    });

    state.addXp(earnedXp, `Practice Correct (${reactionTime}ms)`);

    this.sessionHistory.push({
      shortcut: this.currentShortcut,
      userPressed: combo.displayString || this.currentShortcut.displayKeys.join(' + '),
      correct: true,
      reactionTimeMs: reactionTime,
      xpEarned: earnedXp
    });

    this.showFeedbackCard('success', reactionTime, earnedXp, comboMult);

    this.autoAdvanceTimer = setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.currentList.length;
      this.startDrill();
    }, 1200);
  }

  handleFail(combo) {
    this.clearTimers();
    this.isProcessing = true;
    sound.wrong();
    this.streak = 0;
    this.sessionWrong++;

    keyboard.highlightTargetKeys(this.currentShortcut.keys);

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: false,
      source: 'practice'
    });

    this.sessionHistory.push({
      shortcut: this.currentShortcut,
      userPressed: combo.displayString || 'Wrong Key',
      correct: false,
      reactionTimeMs: 0,
      xpEarned: 0
    });

    this.showFeedbackCard('fail', 0, 0, 1, combo);
  }

  retryCurrent() {
    this.clearTimers();
    sound.click();
    this.isProcessing = false;
    this.startTime = performance.now();
    keyboard.clearHighlights();

    // Reset feedback box
    const statusBox = this.container.querySelector('#drill-feedback-box');
    if (statusBox) statusBox.innerHTML = '';

    const liveEl = this.container.querySelector('#practice-live-combo');
    if (liveEl) {
      liveEl.innerHTML = '<span class="live-placeholder">Waiting for keystrokes...</span>';
      liveEl.classList.remove('has-active-input');
    }
  }

  nextDrill() {
    this.clearTimers();
    sound.click();
    this.currentIndex = (this.currentIndex + 1) % this.currentList.length;
    this.startDrill();
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
            <span>Target Combination: <strong>${this.currentShortcut.displayKeys.join(' + ')}</strong></span>
            <p>Tip: ${this.currentShortcut.memoryTip}</p>
          </div>
        </div>
      `;
    }
  }

  skipCurrent() {
    this.clearTimers();
    sound.click();
    this.streak = 0;

    this.sessionHistory.push({
      shortcut: this.currentShortcut,
      userPressed: 'Skipped',
      correct: false,
      reactionTimeMs: 0,
      xpEarned: 0
    });

    this.currentIndex = (this.currentIndex + 1) % this.currentList.length;
    this.startDrill();
  }

  finishSession() {
    this.clearTimers();
    keyboard.clearGameListener();
    keyboard.clearHighlights();
    this.isShowingReport = true;

    // Award Session Completion Bonus
    if (this.sessionHistory.length >= 3 && this.sessionCorrect > 0) {
      const completionBonus = this.sessionHistory.length >= 20 ? 300 : (this.sessionHistory.length >= 10 ? 150 : 75);
      state.addXp(completionBonus, `Practice Set Bonus (${this.sessionCorrect}/${this.sessionHistory.length} correct)`);
      this.sessionXpEarned += completionBonus;
    }

    sound.levelUp();
    this.renderReport();
  }

  render() {
    const categories = Object.values(SHORTCUT_CATEGORIES);

    this.container.innerHTML = `
      <div class="practice-layout">
        <!-- Practice Top Bar -->
        <header class="practice-topbar">
          <div class="topbar-left-group">
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

            <div class="session-mode-group">
              <span class="label-tag">DRILLS:</span>
              <select id="practice-mode-select" class="practice-cat-dropdown">
                <option value="10" ${this.drillMode === '10' ? 'selected' : ''}>10 Drills Set</option>
                <option value="20" ${this.drillMode === '20' ? 'selected' : ''}>20 Drills Set</option>
                <option value="endless" ${this.drillMode === 'endless' ? 'selected' : ''}>Endless Training</option>
              </select>
            </div>
          </div>

          <div class="topbar-right-group">
            <div class="streak-indicator-chip" id="practice-streak-chip">
              <span class="streak-flame">${ICONS.flame}</span>
              <span class="streak-count">STREAK: <strong>${this.streak}</strong></span>
            </div>

            <button class="btn-secondary finish-report-btn" id="btn-finish-report" title="Generate Session Summary Report">
              <span class="btn-icon">${ICONS.trophy}</span> Finish & Report
            </button>
          </div>
        </header>

        <!-- Main Interactive Drill Card / Report Slot -->
        <main class="practice-drill-area" id="practice-card-slot">
          <!-- Populated dynamically by updateCard() or renderReport() -->
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

    const modeSelect = this.container.querySelector('#practice-mode-select');
    if (modeSelect) {
      modeSelect.addEventListener('change', (e) => {
        sound.click();
        this.drillMode = e.target.value;
        this.startDrill();
      });
    }

    const finishBtn = this.container.querySelector('#btn-finish-report');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        this.finishSession();
      });
    }
  }

  updateCard() {
    const slot = this.container.querySelector('#practice-card-slot');
    if (!slot || !this.currentShortcut) return;

    const s = this.currentShortcut;
    const cat = SHORTCUT_CATEGORIES[s.category] || { name: s.category, icon: ICONS.bolt };
    const targetCount = parseInt(this.drillMode, 10);
    const progressLabel = !isNaN(targetCount)
      ? `Drill ${this.sessionHistory.length + 1} of ${targetCount}`
      : `#${this.currentIndex + 1} of ${this.currentList.length}`;

    const progressPercent = !isNaN(targetCount)
      ? Math.min(100, Math.round((this.sessionHistory.length / targetCount) * 100))
      : 0;

    slot.innerHTML = `
      <div class="drill-card">
        <!-- Session Progress Strip -->
        ${!isNaN(targetCount) ? `
          <div class="drill-session-progress-strip">
            <div class="progress-info-row">
              <span class="progress-step-text">${progressLabel}</span>
              <span class="session-score-pill">Score: ${this.sessionCorrect} Correct</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${progressPercent}%;"></div>
            </div>
          </div>
        ` : ''}

        <div class="drill-header">
          <span class="drill-cat-tag"><span class="cat-svg-icon">${cat.icon}</span> ${cat.name}</span>
          <span class="drill-index">${progressLabel}</span>
        </div>

        <div class="drill-prompt-box">
          <span class="drill-prompt-label">EXECUTE THIS ACTION:</span>
          <h2 class="drill-prompt-title">${s.name}</h2>
          <p class="drill-prompt-desc">${s.description}</p>
        </div>

        <!-- Real-Time Live Keystroke Detector Panel -->
        <div class="live-keystroke-panel">
          <div class="live-ks-header">
            <span class="pulse-dot"></span>
            <span class="live-ks-label">LIVE DETECTED KEYSTROKE:</span>
          </div>
          <div class="live-ks-badge" id="practice-live-combo">
            <span class="live-placeholder">Waiting for keystrokes...</span>
          </div>
        </div>

        <div class="drill-instruction-box">
          <div class="pulse-key-icon">${ICONS.keyboard}</div>
          <p>Press the matching shortcut key combination on your keyboard now!</p>
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

  showFeedbackCard(type, reactionTime, xpEarned, comboMult, combo = null) {
    const statusBox = this.container.querySelector('#drill-feedback-box');
    if (!statusBox) return;

    if (type === 'success') {
      statusBox.innerHTML = `
        <div class="feedback-msg feedback-success animate-pop">
          <span class="feedback-icon">${ICONS.check}</span>
          <div class="feedback-text">
            <strong>PERFECT MATCH!</strong> (${this.currentShortcut.displayKeys.join(' + ')})
            <span class="xp-pop">+${xpEarned} XP</span>
            <span class="time-pop">${reactionTime}ms ${comboMult > 1 ? `• ${comboMult}x Combo!` : ''}</span>
          </div>
        </div>
      `;
    } else {
      // Detailed Wrong Answer Feedback with Correct Solution & Retry Options
      const userPressedStr = (combo && combo.displayString) ? combo.displayString : 'Unknown key';
      const rightShortcutStr = this.currentShortcut.displayKeys.join(' + ');

      let countdownSeconds = 3;

      statusBox.innerHTML = `
        <div class="feedback-msg feedback-fail-detailed animate-pop">
          <div class="fail-banner-top">
            <span class="fail-alert-icon">${ICONS.cross}</span>
            <div class="fail-alert-text">
              <strong>INCORRECT COMBINATION!</strong>
              <span>Check the correct keys below and try again or proceed.</span>
            </div>
          </div>

          <div class="solution-comparison-grid">
            <div class="comparison-card comp-wrong">
              <span class="comp-label">YOU PRESSED</span>
              <div class="comp-keyset"><kbd class="kbd-wrong">${userPressedStr}</kbd></div>
            </div>
            <div class="comparison-divider">➔</div>
            <div class="comparison-card comp-correct">
              <span class="comp-label">CORRECT SHORTCUT</span>
              <div class="comp-keyset">${this.currentShortcut.displayKeys.map(k => `<kbd class="kbd-correct">${k}</kbd>`).join('<span class="plus">+</span>')}</div>
            </div>
          </div>

          <div class="solution-tip-box">
            <span class="tip-icon">${ICONS.lightbulb}</span>
            <div class="tip-body">
              <strong>Memory Tip:</strong> ${this.currentShortcut.memoryTip}
            </div>
          </div>

          <div class="fail-control-buttons">
            <button type="button" class="btn-secondary btn-retry-drill" id="btn-drill-retry">
              ↺ Try Again (Muscle Memory)
            </button>
            <button type="button" class="btn-primary btn-next-drill" id="btn-drill-next">
              Next Shortcut → (<span id="auto-advance-counter">${countdownSeconds}</span>s)
            </button>
          </div>

          <div class="auto-advance-track">
            <div class="auto-advance-progress-bar" id="auto-advance-bar"></div>
          </div>
        </div>
      `;

      // Wire up buttons
      const retryBtn = statusBox.querySelector('#btn-drill-retry');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => this.retryCurrent());
      }

      const nextBtn = statusBox.querySelector('#btn-drill-next');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => this.nextDrill());
      }

      // Smooth countdown and auto-advance
      const counterEl = statusBox.querySelector('#auto-advance-counter');
      const barEl = statusBox.querySelector('#auto-advance-bar');
      if (barEl) {
        barEl.style.transition = 'width 3.5s linear';
        requestAnimationFrame(() => {
          barEl.style.width = '100%';
        });
      }

      this.autoAdvanceInterval = setInterval(() => {
        countdownSeconds--;
        if (counterEl) counterEl.textContent = Math.max(0, countdownSeconds);
        if (countdownSeconds <= 0) {
          clearInterval(this.autoAdvanceInterval);
          this.autoAdvanceInterval = null;
        }
      }, 1000);

      this.autoAdvanceTimer = setTimeout(() => {
        this.nextDrill();
      }, 3500);
    }
  }

  // ==================== PRACTICE REPORT & TIER PROGRESSION ====================

  renderReport() {
    const slot = this.container.querySelector('#practice-card-slot');
    if (!slot) return;

    const total = this.sessionHistory.length || 1;
    const accuracy = Math.round((this.sessionCorrect / total) * 100);

    // Calculate Grade
    let grade = 'D';
    let gradeColor = '#ef4444';
    if (accuracy >= 95) { grade = 'S'; gradeColor = '#00f08a'; }
    else if (accuracy >= 85) { grade = 'A'; gradeColor = '#38bdf8'; }
    else if (accuracy >= 70) { grade = 'B'; gradeColor = '#f59e0b'; }
    else if (accuracy >= 55) { grade = 'C'; gradeColor = '#ec4899'; }

    // Calculate average reaction time of correct answers
    const correctItems = this.sessionHistory.filter(h => h.correct && h.reactionTimeMs > 0);
    const avgReactionTime = correctItems.length
      ? Math.round(correctItems.reduce((acc, c) => acc + c.reactionTimeMs, 0) / correctItems.length)
      : 0;

    // Current Player Tier & Progress
    const currentTier = state.getCurrentTier();
    const nextTier = state.getNextTier();
    const progress = state.getLevelProgress();

    slot.innerHTML = `
      <div class="practice-report-container animate-fade-in">
        <!-- Report Header Card -->
        <header class="report-header-banner">
          <div class="report-header-left">
            <span class="report-badge-pill">SESSION COMPLETED</span>
            <h2 class="report-title">PRACTICE PERFORMANCE REPORT</h2>
            <p class="report-subtitle">Telemetry analytics, shortcut muscle memory breakdown & operator tier progression.</p>
          </div>
          <div class="report-grade-badge" style="border-color: ${gradeColor}; color: ${gradeColor}; box-shadow: 0 0 25px ${gradeColor}40;">
            <span class="grade-letter">${grade}</span>
            <span class="grade-label">RANK</span>
          </div>
        </header>

        <!-- Rank & Tier Progression Ladder (Basic -> Bronze -> Silver -> Gold -> Platinum -> Diamond -> Apex) -->
        <section class="tier-ladder-section">
          <div class="ladder-header-row">
            <span class="ladder-section-title">OPERATOR TIER LADDER</span>
            <span class="current-xp-counter">Total Operator XP: <strong>${state.data.xp} XP</strong></span>
          </div>

          <div class="tier-milestones-row">
            ${LEVEL_TIERS.map(t => {
              const isAchieved = state.data.level >= t.level;
              const isCurrent = state.data.level === t.level;
              return `
                <div class="tier-milestone-step ${isAchieved ? 'achieved' : ''} ${isCurrent ? 'current-step' : ''}">
                  <div class="tier-step-crest" style="border-color: ${t.color};">
                    ${getTierEmblemSvg(t.tierName, 24)}
                  </div>
                  <span class="tier-step-name" style="color: ${isAchieved ? t.color : 'var(--color-text-muted)'};">${t.tierName}</span>
                  <span class="tier-step-xp">${t.minXp} XP</span>
                </div>
              `;
            }).join('<div class="tier-connector-line"></div>')}
          </div>

          <!-- Active Level Progress -->
          <div class="tier-active-progress-wrap">
            <div class="tier-active-meta">
              <span class="active-tier-name">Current Rank: <strong style="color: ${currentTier.color};">${currentTier.title}</strong></span>
              <span class="next-tier-target">
                ${nextTier ? `Next: <strong style="color: ${nextTier.color};">${nextTier.title}</strong> (${progress.neededXp - progress.currentXp} XP remaining)` : 'MAX RANK ACHIEVED!'}
              </span>
            </div>
            <div class="progress-track large-track">
              <div class="progress-fill" style="width: ${progress.percent}%; background: linear-gradient(90deg, var(--color-accent), ${currentTier.color});"></div>
            </div>
          </div>
        </section>

        <!-- Metrics Overview Grid -->
        <div class="report-stats-grid">
          <div class="report-stat-card">
            <span class="stat-number" style="color: ${gradeColor};">${accuracy}%</span>
            <span class="stat-label">Accuracy Rate</span>
          </div>
          <div class="report-stat-card">
            <span class="stat-number">${this.sessionCorrect} / ${this.sessionHistory.length}</span>
            <span class="stat-label">Correct Drills</span>
          </div>
          <div class="report-stat-card">
            <span class="stat-number">${avgReactionTime}ms</span>
            <span class="stat-label">Avg Speed</span>
          </div>
          <div class="report-stat-card">
            <span class="stat-number" style="color: #f59e0b;">${this.maxSessionStreak}x</span>
            <span class="stat-label">Max Streak</span>
          </div>
          <div class="report-stat-card">
            <span class="stat-number" style="color: var(--color-accent);">+${this.sessionXpEarned}</span>
            <span class="stat-label">XP Acquired</span>
          </div>
        </div>

        <!-- Detailed Breakdown History Table -->
        <section class="report-table-section">
          <h3 class="table-section-title">Itemized Shortcut Breakdown</h3>
          <div class="report-table-wrap">
            <table class="report-history-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Action / Shortcut</th>
                  <th>Target Combination</th>
                  <th>Your Keystroke</th>
                  <th>Status</th>
                  <th>Speed</th>
                </tr>
              </thead>
              <tbody>
                ${this.sessionHistory.map((item, idx) => {
                  return `
                    <tr class="${item.correct ? 'row-correct' : 'row-wrong'}">
                      <td class="col-num">${idx + 1}</td>
                      <td class="col-name"><strong>${item.shortcut.name}</strong></td>
                      <td class="col-keys">
                        ${item.shortcut.displayKeys.map(k => `<kbd class="table-kbd">${k}</kbd>`).join(' + ')}
                      </td>
                      <td class="col-input">
                        <kbd class="table-kbd ${item.correct ? 'kbd-success' : 'kbd-fail'}">${item.userPressed}</kbd>
                      </td>
                      <td class="col-status">
                        ${item.correct ? `<span class="badge-status-ok">${ICONS.check} Correct</span>` : `<span class="badge-status-err">${ICONS.cross} Miss</span>`}
                      </td>
                      <td class="col-time">${item.reactionTimeMs ? `${item.reactionTimeMs}ms` : '—'}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- Next Actions Bar -->
        <footer class="report-actions-bar">
          <button class="btn-primary report-btn" id="btn-report-restart">
            🔄 Start Another Practice Set
          </button>
          <button class="btn-secondary report-btn" id="btn-report-speed">
            ⚡ Test in Speed Rush
          </button>
          <button class="btn-secondary report-btn" id="btn-report-boss">
            ⚔️ Fight Boss Battles
          </button>
        </footer>
      </div>
    `;

    this.bindReportEvents();
  }

  bindReportEvents() {
    const restartBtn = this.container.querySelector('#btn-report-restart');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        sound.click();
        this.mount();
      });
    }

    const speedBtn = this.container.querySelector('#btn-report-speed');
    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        sound.click();
        this.navigate('speed');
      });
    }

    const bossBtn = this.container.querySelector('#btn-report-boss');
    if (bossBtn) {
      bossBtn.addEventListener('click', () => {
        sound.click();
        this.navigate('boss');
      });
    }
  }
}
