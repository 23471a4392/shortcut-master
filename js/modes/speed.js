/**
 * SHORTCUT MASTER - Speed Challenge Controller
 * High-velocity timed rush (15s, 30s, 60s) with reaction time tracking and combo multipliers.
 */

import { SHORTCUTS_DATA } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class SpeedScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.duration = 30;
    this.timeLeft = 30;
    this.timerInterval = null;
    this.isPlaying = false;
    this.score = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.currentShortcut = null;
    this.questionStartTime = 0;
    this.reactionTimes = [];
    this.pool = [];
  }

  mount() {
    this.isPlaying = false;
    this.renderLobby();
  }

  unmount() {
    this.stopTimer();
    keyboard.clearGameListener();
    keyboard.clearHighlights();
  }

  renderLobby() {
    this.container.innerHTML = `
      <div class="speed-lobby-container">
        <div class="speed-hero-card">
          <div class="speed-icon-large">${ICONS.speed}</div>
          <h2>Speed Challenge</h2>
          <p>Race against the clock! Trigger as many correct keyboard shortcuts as you can before time expires.</p>

          <div class="time-select-row">
            <span class="select-label">CHOOSE DURATION:</span>
            <div class="duration-buttons">
              <button class="dur-btn ${this.duration === 15 ? 'active' : ''}" data-dur="15">15 Seconds</button>
              <button class="dur-btn ${this.duration === 30 ? 'active' : ''}" data-dur="30">30 Seconds</button>
              <button class="dur-btn ${this.duration === 60 ? 'active' : ''}" data-dur="60">60 Seconds</button>
            </div>
          </div>

          <div class="speed-rules-box">
            <div class="rule-item">${ICONS.check} Correct = +100 PTS</div>
            <div class="rule-item">${ICONS.bolt} Sub-1s Answer = +50 BONUS</div>
            <div class="rule-item">${ICONS.flame} 3+ Streak = 2x Multiplier (up to 4x)</div>
            <div class="rule-item">${ICONS.cross} Wrong Answer = -50 PTS & Reset Combo</div>
          </div>

          <div class="speed-stats-summary">
            <span>Best Speed Score: <strong>${state.data.stats.bestSpeedScore || 0} PTS</strong></span>
          </div>

          <button class="btn-primary start-speed-btn" id="btn-start-speed">START CHALLENGE</button>
        </div>
      </div>
    `;

    const durBtns = this.container.querySelectorAll('.dur-btn');
    durBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.click();
        this.duration = parseInt(btn.getAttribute('data-dur'), 10);
        this.renderLobby();
      });
    });

    const startBtn = this.container.querySelector('#btn-start-speed');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        sound.click();
        this.startChallenge();
      });
    }
  }

  startChallenge() {
    this.isPlaying = true;
    this.timeLeft = this.duration;
    this.score = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.reactionTimes = [];

    this.pool = SHORTCUTS_DATA.filter(s => !s.isRestricted).sort(() => Math.random() - 0.5);

    this.renderActiveGame();
    this.nextQuestion();

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 5 && this.timeLeft > 0) {
        sound.dangerTick();
      }
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        this.endChallenge();
      }
    }, 1000);

    this.setupKeyboard();
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  setupKeyboard() {
    keyboard.setGameListener((combo) => {
      if (!this.isPlaying || !this.currentShortcut) return;

      const isMatch = keyboard.matchesShortcut(combo, this.currentShortcut);
      const reactionTime = Math.round(performance.now() - this.questionStartTime);

      if (isMatch) {
        this.handleCorrect(reactionTime);
      } else if (!combo.isModifierOnly && combo.keys.length > 0) {
        this.handleWrong();
      }
    });
  }

  handleCorrect(reactionTime) {
    this.correctCount++;
    this.streak++;
    if (this.streak > this.maxStreak) this.maxStreak = this.streak;
    this.reactionTimes.push(reactionTime);

    const comboMult = Math.min(4, 1 + Math.floor(this.streak / 3));
    if (this.streak >= 3) {
      sound.combo(comboMult);
    } else {
      sound.correct();
    }

    let points = 100 * comboMult;
    if (reactionTime < 1000) points += 50 * comboMult;

    this.score += points;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: true,
      reactionTimeMs: reactionTime,
      source: 'speed'
    });

    state.addXp(Math.round(points / 2), 'Speed Challenge Strike');

    this.showFloatingScore(`+${points}`, true);
    this.nextQuestion();
  }

  handleWrong() {
    sound.wrong();
    this.wrongCount++;
    this.streak = 0;
    this.score = Math.max(0, this.score - 50);

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: false,
      source: 'speed'
    });

    this.showFloatingScore(`-50`, false);
  }

  nextQuestion() {
    if (!this.pool.length) {
      this.pool = SHORTCUTS_DATA.filter(s => !s.isRestricted).sort(() => Math.random() - 0.5);
    }
    this.currentShortcut = this.pool.pop();
    this.questionStartTime = performance.now();
    this.updateCard();
  }

  updateTimerDisplay() {
    const timerEl = this.container.querySelector('#speed-timer-val');
    if (timerEl) {
      timerEl.textContent = `${this.timeLeft}s`;
      if (this.timeLeft <= 5) {
        timerEl.classList.add('urgent');
      }
    }
  }

  showFloatingScore(text, isPositive) {
    const floater = this.container.querySelector('#speed-score-floater');
    if (floater) {
      floater.textContent = text;
      floater.className = `score-floater ${isPositive ? 'positive' : 'negative'} animate`;
      setTimeout(() => {
        floater.classList.remove('animate');
      }, 600);
    }
    const scoreVal = this.container.querySelector('#speed-score-val');
    if (scoreVal) scoreVal.textContent = this.score;

    const streakVal = this.container.querySelector('#speed-streak-val');
    if (streakVal) {
      const mult = Math.min(4, 1 + Math.floor(this.streak / 3));
      streakVal.innerHTML = `${this.streak} ${mult > 1 ? `<span class="mult-tag">x${mult}</span>` : ''}`;
    }
  }

  renderActiveGame() {
    this.container.innerHTML = `
      <div class="speed-game-layout">
        <!-- HUD Header -->
        <header class="speed-hud">
          <div class="hud-item hud-timer">
            <span class="hud-label">TIME REMAINING</span>
            <span class="hud-value" id="speed-timer-val">${this.timeLeft}s</span>
          </div>

          <div class="hud-item hud-score">
            <span class="hud-label">SCORE</span>
            <span class="hud-value" id="speed-score-val">0</span>
            <div id="speed-score-floater" class="score-floater"></div>
          </div>

          <div class="hud-item hud-streak">
            <span class="hud-label">STREAK</span>
            <span class="hud-value" id="speed-streak-val">0</span>
          </div>
        </header>

        <!-- Question Prompt Card -->
        <main class="speed-prompt-card" id="speed-prompt-slot">
          <!-- Populated by updateCard() -->
        </main>
      </div>
    `;
  }

  updateCard() {
    const slot = this.container.querySelector('#speed-prompt-slot');
    if (!slot || !this.currentShortcut) return;

    slot.innerHTML = `
      <div class="speed-card-content">
        <span class="speed-action-tag">ACTION REQUIRED:</span>
        <h2 class="speed-target-name">${this.currentShortcut.name}</h2>
        <p class="speed-target-desc">${this.currentShortcut.description}</p>
        <div class="speed-input-indicator">
          <span class="pulse-indicator">${ICONS.keyboard}</span>
          <span>PRESS COMBINATION NOW!</span>
        </div>
      </div>
    `;
  }

  endChallenge() {
    this.isPlaying = false;
    this.stopTimer();
    keyboard.clearGameListener();

    state.recordSpeedScore(this.score);

    const isHighScore = this.score >= (state.data.stats.bestSpeedScore || 0) && this.score > 0;
    const avgReaction = this.reactionTimes.length 
      ? Math.round(this.reactionTimes.reduce((a, b) => a + b, 0) / this.reactionTimes.length) 
      : 0;

    const totalXp = Math.round(this.score / 2);
    state.addXp(totalXp, 'Speed Challenge Final Score');

    this.container.innerHTML = `
      <div class="speed-results-card">
        <div class="results-badge">TIME'S UP!</div>
        ${isHighScore ? '<div class="high-score-banner">NEW HIGH SCORE!</div>' : ''}
        <h2 class="final-score-title">${this.score} <span class="pts">PTS</span></h2>

        <div class="results-stats-grid">
          <div class="res-stat-box">
            <span class="res-val">${this.correctCount}</span>
            <span class="res-lbl">Correct</span>
          </div>
          <div class="res-stat-box">
            <span class="res-val">${this.wrongCount}</span>
            <span class="res-lbl">Errors</span>
          </div>
          <div class="res-stat-box">
            <span class="res-val">${this.maxStreak}</span>
            <span class="res-lbl">Max Combo</span>
          </div>
          <div class="res-stat-box">
            <span class="res-val">${avgReaction ? avgReaction + 'ms' : '--'}</span>
            <span class="res-lbl">Avg Reaction</span>
          </div>
        </div>

        <div class="xp-earned-banner">+${totalXp} XP EARNED!</div>

        <div class="results-actions">
          <button class="btn-primary" id="btn-speed-again">Play Again</button>
          <button class="btn-secondary" id="btn-speed-lobby">Back to Lobby</button>
        </div>
      </div>
    `;

    const againBtn = this.container.querySelector('#btn-speed-again');
    if (againBtn) {
      againBtn.addEventListener('click', () => {
        sound.click();
        this.startChallenge();
      });
    }

    const lobbyBtn = this.container.querySelector('#btn-speed-lobby');
    if (lobbyBtn) {
      lobbyBtn.addEventListener('click', () => {
        sound.click();
        this.renderLobby();
      });
    }
  }
}
