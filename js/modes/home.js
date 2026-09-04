/**
 * SHORTCUT MASTER - Home Dashboard Controller
 */

import { state } from '../engine/state.js';
import { sound } from '../engine/audio.js';
import { getShortcutById } from '../data/shortcuts.js';
import { ICONS } from '../engine/icons.js';

export class HomeScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
  }

  mount() {
    this.render();
  }

  unmount() {}

  render() {
    const tier = state.getCurrentTier();
    const progress = state.getLevelProgress();
    const accuracy = state.getAccuracy();
    const mastery = state.getMasterySummary();
    const daily = state.data.dailyChallenge;
    const dailyShortcut = daily ? getShortcutById(daily.shortcutId) : null;

    this.container.innerHTML = `
      <div class="dashboard-grid">
        <!-- Hero Profile Banner -->
        <section class="dashboard-card profile-hero-card">
          <div class="profile-hero-inner">
            <div class="player-avatar-badge">
              <div class="avatar-icon">${tier.icon}</div>
              <span class="level-pill">LVL ${state.data.level}</span>
            </div>
            <div class="profile-details">
              <div class="profile-title-row">
                <h2 class="player-name">${state.data.playerName}</h2>
                <span class="rank-badge">${tier.title}</span>
              </div>
              <div class="xp-progress-bar-container">
                <div class="xp-labels">
                  <span>XP: <strong>${state.data.xp}</strong></span>
                  <span>${progress.neededXp === Infinity ? 'MAX LEVEL' : `${progress.currentXp} / ${progress.neededXp} XP`}</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${progress.percent}%"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats Counter Strip -->
        <section class="stats-counter-strip">
          <div class="stat-box">
            <span class="stat-icon-wrap">${ICONS.flame}</span>
            <div class="stat-meta">
              <span class="stat-value">${state.data.currentStreak}</span>
              <span class="stat-label">Current Streak</span>
            </div>
          </div>
          <div class="stat-box">
            <span class="stat-icon-wrap">${ICONS.bolt}</span>
            <div class="stat-meta">
              <span class="stat-value">${mastery.mastered}</span>
              <span class="stat-label">Shortcuts Mastered</span>
            </div>
          </div>
          <div class="stat-box">
            <span class="stat-icon-wrap">${ICONS.practice}</span>
            <div class="stat-meta">
              <span class="stat-value">${accuracy}%</span>
              <span class="stat-label">Accuracy</span>
            </div>
          </div>
          <div class="stat-box">
            <span class="stat-icon-wrap">${ICONS.speed}</span>
            <div class="stat-meta">
              <span class="stat-value">${state.data.stats.avgReactionTime ? state.data.stats.avgReactionTime + 'ms' : '--'}</span>
              <span class="stat-label">Avg Reaction</span>
            </div>
          </div>
        </section>

        <!-- Daily Quest Card -->
        <section class="dashboard-card daily-quest-card">
          <div class="card-header-flex">
            <div class="badge-tag">DAILY QUEST</div>
            <span class="daily-date">${daily ? daily.date : 'Today'}</span>
          </div>
          <div class="daily-content">
            <div class="daily-shortcut-badge">
              <span class="daily-key">${dailyShortcut ? dailyShortcut.displayKeys.join(' + ') : 'Ctrl + S'}</span>
            </div>
            <div class="daily-info">
              <h4>${dailyShortcut ? dailyShortcut.name : 'Quick Save'}</h4>
              <p>${dailyShortcut ? dailyShortcut.description : 'Save documents rapidly without losing work.'}</p>
              <div class="daily-status">
                ${daily && daily.completed 
                  ? `<span class="status-complete">${ICONS.check} Completed (+150 XP Claimed)</span>` 
                  : '<span class="status-pending">Practice this shortcut today for +150 XP!</span>'}
              </div>
            </div>
          </div>
        </section>

        <!-- Quick Launch Action Matrix -->
        <section class="quick-launch-grid">
          <button class="launch-card launch-missions" id="btn-home-missions">
            <div class="launch-icon">${ICONS.missions}</div>
            <div class="launch-text">
              <h3>Campaign Missions</h3>
              <p>Scenario-driven challenges to build real muscle memory</p>
            </div>
            <span class="launch-arrow">→</span>
          </button>

          <button class="launch-card launch-speed" id="btn-home-speed">
            <div class="launch-icon">${ICONS.speed}</div>
            <div class="launch-text">
              <h3>Speed Challenge</h3>
              <p>Test your reaction time in 15s, 30s & 60s rushes</p>
            </div>
            <span class="launch-arrow">→</span>
          </button>

          <button class="launch-card launch-boss" id="btn-home-boss">
            <div class="launch-icon">${ICONS.boss}</div>
            <div class="launch-text">
              <h3>Boss Battles</h3>
              <p>Face the Mouse Monster and Tab Destroyer</p>
            </div>
            <span class="launch-arrow">→</span>
          </button>

          <button class="launch-card launch-learn" id="btn-home-learn">
            <div class="launch-icon">${ICONS.learn}</div>
            <div class="launch-text">
              <h3>Shortcut Library</h3>
              <p>Browse 80+ shortcuts with memory tips & examples</p>
            </div>
            <span class="launch-arrow">→</span>
          </button>
        </section>

        <!-- Mode Carousel / Shortcuts Quick Access -->
        <section class="dashboard-card quick-modes-card">
          <h3>Other Play Modes</h3>
          <div class="modes-pill-row">
            <button class="mode-pill-btn" id="btn-home-survival">${ICONS.survival} Survival Mode (3 Lives)</button>
            <button class="mode-pill-btn" id="btn-home-memory">${ICONS.memory} Memory Challenge</button>
            <button class="mode-pill-btn" id="btn-home-practice">${ICONS.practice} Free Practice</button>
            <button class="mode-pill-btn" id="btn-home-progress">${ICONS.progress} Progress Analytics</button>
          </div>
        </section>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const bindClick = (id, targetScreen) => {
      const btn = this.container.querySelector(`#${id}`);
      if (btn) {
        btn.addEventListener('click', () => {
          sound.click();
          this.navigate(targetScreen);
        });
      }
    };

    bindClick('btn-home-missions', 'missions');
    bindClick('btn-home-speed', 'speed');
    bindClick('btn-home-boss', 'boss');
    bindClick('btn-home-learn', 'learn');
    bindClick('btn-home-survival', 'survival');
    bindClick('btn-home-memory', 'memory');
    bindClick('btn-home-practice', 'practice');
    bindClick('btn-home-progress', 'progress');
  }
}
