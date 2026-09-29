/**
 * SHORTCUT MASTER - Survival Mode Controller
 * 3-Hearts endurance mode with escalating timer pressure and wave tracking.
 */

import { SHORTCUTS_DATA } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class SurvivalScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.lives = 3;
    this.waves = 0;
    this.score = 0;
    this.isPlaying = false;
    this.currentShortcut = null;
    this.timePerQuestion = 10;
    this.timeLeft = 10;
    this.timerInterval = null;
    this.gameStartTime = 0;
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
      <div class="survival-lobby-container">
        <div class="survival-hero-card">
          <div class="survival-hearts-hero">
            <span class="surv-heart-icon">${ICONS.survival}</span>
            <span class="surv-heart-icon">${ICONS.survival}</span>
            <span class="surv-heart-icon">${ICONS.survival}</span>
          </div>
          <h2>Survival Mode</h2>
          <p>You have 3 Lives. Make three mistakes and your run is terminated. How many waves can you survive as the pressure escalates?</p>

          <div class="survival-rules-box">
            <div class="rule-item">${ICONS.survival} Start with 3 Hearts</div>
            <div class="rule-item">${ICONS.speed} 10-Second Timer per wave (speeds up every 5 waves!)</div>
            <div class="rule-item">${ICONS.cross} Wrong Keystroke or Timeout = Lose 1 Heart</div>
            <div class="rule-item">${ICONS.crown} Survive as many waves as possible for massive XP</div>
          </div>

          <div class="survival-record-box">
            <span>Best Survival Record: <strong>${state.data.stats.bestSurvivalWaves || 0} Waves</strong></span>
          </div>

          <button class="btn-primary start-survival-btn" id="btn-start-survival">ENTER SURVIVAL ARENA</button>
        </div>
      </div>
    `;

    const startBtn = this.container.querySelector('#btn-start-survival');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        sound.click();
        this.startSurvival();
      });
    }
  }

  startSurvival() {
    this.isPlaying = true;
    this.lives = 3;
    this.waves = 0;
    this.score = 0;
    this.gameStartTime = Date.now();
    this.timePerQuestion = 10;
    this.pool = SHORTCUTS_DATA.filter(s => !s.isRestricted).sort(() => Math.random() - 0.5);

    this.renderActiveGame();
    this.nextWave();
    this.setupKeyboard();
  }

  setupKeyboard() {
    keyboard.setGameListener((combo) => {
      if (!this.isPlaying || !this.currentShortcut) return;

      const isMatch = keyboard.matchesShortcut(combo, this.currentShortcut);
      if (isMatch) {
        this.handleWaveSuccess();
      } else if (!combo.isModifierOnly && combo.keys.length > 0) {
        this.handleWaveMistake('Wrong combination entered!');
      }
    });
  }

  nextWave() {
    this.stopTimer();

    this.timePerQuestion = Math.max(5, 10 - Math.floor(this.waves / 5));
    this.timeLeft = this.timePerQuestion;

    if (!this.pool.length) {
      this.pool = SHORTCUTS_DATA.filter(s => !s.isRestricted).sort(() => Math.random() - 0.5);
    }
    this.currentShortcut = this.pool.pop();

    this.updateCard();
    this.updateHUD();

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 3 && this.timeLeft > 0) {
        sound.dangerTick();
      }
      this.updateTimerBar();

      if (this.timeLeft <= 0) {
        this.handleWaveMistake('Time Expired!');
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  handleWaveSuccess() {
    this.stopTimer();
    sound.correct();
    this.waves++;
    const points = 100 + (this.waves * 10);
    this.score += points;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: true,
      source: 'survival'
    });

    state.addXp(30, 'Survival Wave Survived');

    const flash = this.container.querySelector('#survival-flash-overlay');
    if (flash) {
      flash.className = 'survival-flash success-flash';
      setTimeout(() => { flash.className = 'survival-flash'; }, 300);
    }

    setTimeout(() => {
      if (this.isPlaying) {
        this.nextWave();
      }
    }, 400);
  }

  handleWaveMistake(reason) {
    this.stopTimer();
    sound.wrong();
    this.lives--;

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: false,
      source: 'survival'
    });

    const flash = this.container.querySelector('#survival-flash-overlay');
    if (flash) {
      flash.className = 'survival-flash damage-flash';
      setTimeout(() => { flash.className = 'survival-flash'; }, 400);
    }

    this.updateHUD();

    if (this.lives <= 0) {
      this.gameOver();
    } else {
      setTimeout(() => {
        if (this.isPlaying) {
          this.nextWave();
        }
      }, 700);
    }
  }

  renderActiveGame() {
    this.container.innerHTML = `
      <div class="survival-game-layout">
        <div id="survival-flash-overlay" class="survival-flash"></div>

        <!-- HUD Header -->
        <header class="survival-hud">
          <div class="hud-item hud-lives" id="survival-lives-slot">
            <!-- Hearts -->
          </div>

          <div class="hud-item hud-wave">
            <span class="hud-label">WAVE</span>
            <span class="hud-value" id="survival-wave-val">${this.waves + 1}</span>
          </div>

          <div class="hud-item hud-score">
            <span class="hud-label">SURVIVAL SCORE</span>
            <span class="hud-value" id="survival-score-val">${this.score}</span>
          </div>
        </header>

        <!-- Dynamic Timer Bar -->
        <div class="survival-timer-track">
          <div class="survival-timer-fill" id="survival-timer-fill" style="width: 100%"></div>
        </div>

        <!-- Wave Target Prompt -->
        <main class="survival-prompt-card" id="survival-prompt-slot">
          <!-- Populated by updateCard() -->
        </main>
      </div>
    `;
    this.updateHUD();
  }

  updateHUD() {
    const livesSlot = this.container.querySelector('#survival-lives-slot');
    if (livesSlot) {
      let heartsHtml = '';
      for (let i = 0; i < 3; i++) {
        if (i < this.lives) {
          heartsHtml += `<span class="surv-hud-heart active">${ICONS.survival}</span>`;
        } else {
          heartsHtml += `<span class="surv-hud-heart depleted">${ICONS.survivalOutline}</span>`;
        }
      }
      livesSlot.innerHTML = `<span class="hud-label">LIVES</span><span class="hearts-display">${heartsHtml}</span>`;
    }

    const waveVal = this.container.querySelector('#survival-wave-val');
    if (waveVal) waveVal.textContent = this.waves + 1;

    const scoreVal = this.container.querySelector('#survival-score-val');
    if (scoreVal) scoreVal.textContent = this.score;
  }

  updateTimerBar() {
    const fill = this.container.querySelector('#survival-timer-fill');
    if (fill) {
      const pct = Math.max(0, (this.timeLeft / this.timePerQuestion) * 100);
      fill.style.width = `${pct}%`;
      if (pct <= 30) {
        fill.classList.add('low-time');
      } else {
        fill.classList.remove('low-time');
      }
    }
  }

  updateCard() {
    const slot = this.container.querySelector('#survival-prompt-slot');
    if (!slot || !this.currentShortcut) return;

    slot.innerHTML = `
      <div class="survival-card-body">
        <span class="survival-wave-indicator">WAVE #${this.waves + 1}</span>
        <h2 class="survival-target-title">${this.currentShortcut.name}</h2>
        <p class="survival-target-desc">${this.currentShortcut.description}</p>
        <div class="survival-input-cue">
          <span class="pulse-icon">${ICONS.keyboard}</span>
          <span>ENTER SHORTCUT BEFORE TIMER RUNS OUT!</span>
        </div>
      </div>
    `;
  }

  gameOver() {
    this.isPlaying = false;
    this.stopTimer();
    keyboard.clearGameListener();

    state.recordSurvivalWaves(this.waves);

    const timeSurvivedSec = Math.round((Date.now() - this.gameStartTime) / 1000);
    const earnedXp = Math.round(this.score / 2) + (this.waves * 20);
    state.addXp(earnedXp, `Survival Mode ${this.waves} Waves`);

    this.container.innerHTML = `
      <div class="survival-results-card">
        <div class="game-over-badge">GAME OVER</div>
        <h2 class="survival-end-title">You Survived ${this.waves} Waves!</h2>

        <div class="survival-stats-grid">
          <div class="surv-stat-box">
            <span class="surv-val">${this.waves}</span>
            <span class="surv-lbl">Waves Cleared</span>
          </div>
          <div class="surv-stat-box">
            <span class="surv-val">${this.score}</span>
            <span class="surv-lbl">Final Score</span>
          </div>
          <div class="surv-stat-box">
            <span class="surv-val">${timeSurvivedSec}s</span>
            <span class="surv-lbl">Time Survived</span>
          </div>
          <div class="surv-stat-box">
            <span class="surv-val">+${earnedXp}</span>
            <span class="surv-lbl">XP Earned</span>
          </div>
        </div>

        <div class="results-actions">
          <button class="btn-primary" id="btn-survival-restart">Try Again</button>
          <button class="btn-secondary" id="btn-survival-lobby">Back to Lobby</button>
        </div>
      </div>
    `;

    const restartBtn = this.container.querySelector('#btn-survival-restart');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        sound.click();
        this.startSurvival();
      });
    }

    const lobbyBtn = this.container.querySelector('#btn-survival-lobby');
    if (lobbyBtn) {
      lobbyBtn.addEventListener('click', () => {
        sound.click();
        this.renderLobby();
      });
    }
  }
}
