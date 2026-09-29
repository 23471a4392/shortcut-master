/**
 * SHORTCUT MASTER - Progress & Statistics Controller
 * Displays comprehensive player statistics, category breakdowns, reaction times, and mastery matrix.
 */

import { state, LEVEL_TIERS } from '../engine/state.js';
import { SHORTCUTS_DATA, SHORTCUT_CATEGORIES } from '../data/shortcuts.js';
import { ICONS, getTierEmblemSvg } from '../engine/icons.js';

export class ProgressScreen {
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
    const nextTier = state.getNextTier();
    const lvlProgress = state.getLevelProgress();
    const mastery = state.getMasterySummary();
    const accuracy = state.getAccuracy();
    const stats = state.data.stats;
    const categories = Object.values(SHORTCUT_CATEGORIES);

    this.container.innerHTML = `
      <div class="progress-page-layout">
        <!-- Top Summary Cards -->
        <section class="progress-hero-strip">
          <div class="summary-hero-card">
            <div class="hero-icon-wrap">${tier.icon}</div>
            <div class="hero-meta">
              <span class="hero-rank">${tier.title}</span>
              <h2 class="hero-level">Level ${state.data.level}</h2>
              <div class="hero-xp-track">
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${lvlProgress.percent}%"></div>
                </div>
                <span class="xp-ratio">${state.data.xp} / ${nextTier ? nextTier.minXp : state.data.xp} Total XP</span>
              </div>
            </div>
          </div>

          <div class="summary-metric-card">
            <span class="metric-icon-wrap">${ICONS.practice}</span>
            <div class="metric-body">
              <span class="metric-val">${accuracy}%</span>
              <span class="metric-lbl">Overall Accuracy</span>
              <small>${stats.totalCorrect} correct / ${stats.totalAttempts} attempts</small>
            </div>
          </div>

          <div class="summary-metric-card">
            <span class="metric-icon-wrap">${ICONS.speed}</span>
            <div class="metric-body">
              <span class="metric-val">${stats.avgReactionTime ? stats.avgReactionTime + 'ms' : '--'}</span>
              <span class="metric-lbl">Average Reaction Time</span>
              <small>Sampled from last 30 strikes</small>
            </div>
          </div>

          <div class="summary-metric-card">
            <span class="metric-icon-wrap">${ICONS.flame}</span>
            <div class="metric-body">
              <span class="metric-val">${stats.highestStreak}</span>
              <span class="metric-lbl">Longest Combo Streak</span>
              <small>Current streak: ${state.data.currentStreak}</small>
            </div>
          </div>
        </section>

        <!-- Operator Tier Progression Ladder -->
        <section class="tier-ladder-section">
          <div class="ladder-header-row">
            <span class="ladder-section-title">GLOBAL OPERATOR TIER HIERARCHY</span>
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

          <div class="tier-active-progress-wrap">
            <div class="tier-active-meta">
              <span class="active-tier-name">Current Rank: <strong style="color: ${tier.color};">${tier.title}</strong></span>
              <span class="next-tier-target">
                ${nextTier ? `Next Promotion: <strong style="color: ${nextTier.color};">${nextTier.title}</strong> (${lvlProgress.neededXp - lvlProgress.currentXp} XP remaining)` : 'MAX OPERATOR TIER ACHIEVED!'}
              </span>
            </div>
            <div class="progress-track large-track">
              <div class="progress-fill" style="width: ${lvlProgress.percent}%; background: linear-gradient(90deg, var(--color-accent), ${tier.color});"></div>
            </div>
          </div>
        </section>

        <!-- Mastery Matrix Segment -->
        <section class="dashboard-card mastery-matrix-card">
          <div class="card-header-flex">
            <h3>Library Mastery Matrix</h3>
            <span class="mastery-percent">${mastery.percent}% Mastered</span>
          </div>

          <div class="mastery-distribution-bar">
            <div class="mastery-fill mastered" style="width: ${(mastery.mastered / mastery.totalShortcuts) * 100}%" title="Mastered"></div>
            <div class="mastery-fill learning" style="width: ${(mastery.learning / mastery.totalShortcuts) * 100}%" title="Learning"></div>
            <div class="mastery-fill unstarted" style="width: ${(mastery.notStarted / mastery.totalShortcuts) * 100}%" title="Not Started"></div>
          </div>

          <div class="mastery-legend-grid">
            <div class="legend-item">
              <span class="legend-dot dot-mastered"></span>
              <span class="legend-text"><strong>${mastery.mastered}</strong> Mastered (3+ correct drills)</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot dot-learning"></span>
              <span class="legend-text"><strong>${mastery.learning}</strong> In Progress</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot dot-unstarted"></span>
              <span class="legend-text"><strong>${mastery.notStarted}</strong> Not Yet Practiced</span>
            </div>
          </div>
        </section>

        <!-- Category Performance Breakdown -->
        <section class="dashboard-card category-breakdown-card">
          <h3>Category Accuracy Breakdown</h3>
          <div class="category-bars-grid">
            ${categories.map(c => {
              const cStat = stats.categoryStats[c.id] || { correct: 0, attempts: 0 };
              const catAcc = cStat.attempts > 0 ? Math.round((cStat.correct / cStat.attempts) * 100) : 0;
              return `
                <div class="cat-bar-item">
                  <div class="cat-bar-label-row">
                    <span class="cat-name"><span class="cat-svg-icon">${c.icon}</span> ${c.name}</span>
                    <span class="cat-stats">${catAcc}% (${cStat.correct}/${cStat.attempts})</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width: ${catAcc}%; background: ${c.color};"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Lifetime High Scores & Campaign Stats -->
        <section class="lifetime-stats-grid">
          <div class="dashboard-card">
            <h4>Campaign Progress</h4>
            <div class="lifetime-stat-val">${state.data.completedMissions.length} / 40+</div>
            <p>Missions completed across 5 chapters</p>
          </div>

          <div class="dashboard-card">
            <h4>Speed Challenge Record</h4>
            <div class="lifetime-stat-val">${stats.bestSpeedScore || 0} PTS</div>
            <p>Highest recorded speed score</p>
          </div>

          <div class="dashboard-card">
            <h4>Survival Record</h4>
            <div class="lifetime-stat-val">${stats.bestSurvivalWaves || 0} Waves</div>
            <p>Longest survival run survived</p>
          </div>

          <div class="dashboard-card">
            <h4>Bosses Defeated</h4>
            <div class="lifetime-stat-val">${(state.data.bossesDefeated || []).length} / 4</div>
            <p>Unique bosses slain in combat</p>
          </div>
        </section>
      </div>
    `;
  }
}
