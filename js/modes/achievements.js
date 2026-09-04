/**
 * SHORTCUT MASTER - Achievements Gallery Controller
 */

import { ACHIEVEMENTS_DATA } from '../data/achievements.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class AchievementsScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
  }

  mount() {
    this.render();
  }

  unmount() {}

  render() {
    const unlocked = state.data.unlockedAchievements || [];
    const total = ACHIEVEMENTS_DATA.length;
    const count = unlocked.length;
    const percent = Math.round((count / total) * 100);

    this.container.innerHTML = `
      <div class="achievements-layout">
        <header class="achievements-header">
          <div class="header-left">
            <h2>Trophies & Achievements</h2>
            <p>Unlock badges by mastering shortcuts, achieving high combos, and defeating bosses.</p>
          </div>
          <div class="ach-progress-card">
            <div class="ach-count">
              <strong>${count}</strong> / ${total} Unlocked (${percent}%)
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${percent}%"></div>
            </div>
          </div>
        </header>

        <main class="achievements-grid">
          ${ACHIEVEMENTS_DATA.map(ach => {
            const isUnlocked = unlocked.includes(ach.id);
            return `
              <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="ach-icon-box">
                  <span class="ach-icon">${ach.icon}</span>
                  ${isUnlocked ? `<span class="unlocked-check">${ICONS.check}</span>` : `<span class="lock-icon">${ICONS.lock}</span>`}
                </div>
                <div class="ach-info">
                  <div class="ach-title-row">
                    <h3 class="ach-title">${ach.title}</h3>
                    <span class="ach-reward">+${ach.xpReward} XP</span>
                  </div>
                  <p class="ach-desc">${ach.description}</p>
                  <span class="ach-status-label">${isUnlocked ? 'UNLOCKED' : 'LOCKED'}</span>
                </div>
              </div>
            `;
          }).join('')}
        </main>
      </div>
    `;
  }
}
