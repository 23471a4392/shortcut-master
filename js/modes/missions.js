/**
 * SHORTCUT MASTER - Campaign Missions Controller
 * Real-world situation missions with story scenarios, hints, simulated outputs, and rewards.
 */

import { MISSION_CHAPTERS, MISSIONS_DATA, getMissionsByChapter, getMissionById } from '../data/missions.js';
import { getShortcutById } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class MissionsScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.activeChapterId = 'ch-1';
    this.activeMission = null;
    this.viewMode = 'chapters';
    this.hintRevealed = false;
    this.isProcessing = false;
  }

  mount() {
    this.viewMode = 'chapters';
    this.activeMission = null;
    this.render();
  }

  unmount() {
    keyboard.clearGameListener();
    keyboard.clearHighlights();
  }

  render() {
    if (this.viewMode === 'chapters') {
      this.renderChapterSelector();
    } else if (this.viewMode === 'mission') {
      this.renderMissionRunner();
    }
  }

  renderChapterSelector() {
    this.container.innerHTML = `
      <div class="missions-dashboard">
        <header class="missions-header">
          <div class="header-left">
            <h2>Campaign Mission Chapters</h2>
            <p>Complete real-world scenarios to unlock achievements and level up.</p>
          </div>
          <div class="header-stats">
            <span class="missions-completed-count">
              Completed: <strong>${state.data.completedMissions.length}</strong> / ${MISSIONS_DATA.length}
            </span>
          </div>
        </header>

        <div class="chapters-grid">
          ${MISSION_CHAPTERS.map((chap, idx) => {
            const missions = getMissionsByChapter(chap.id);
            const completedInChap = missions.filter(m => state.data.completedMissions.includes(m.id)).length;
            const isCompleted = completedInChap === missions.length;
            const percent = Math.round((completedInChap / missions.length) * 100);

            return `
              <div class="chapter-card ${isCompleted ? 'chapter-complete' : ''}" data-chap="${chap.id}">
                <div class="chapter-card-header">
                  <div class="chap-badge-wrap">${chap.badge}</div>
                  <div class="chap-meta">
                    <span class="chap-tier">CHAPTER ${idx + 1}</span>
                    <h3 class="chap-title">${chap.title.split(': ')[1] || chap.title}</h3>
                  </div>
                </div>

                <p class="chap-desc">${chap.description}</p>

                <div class="chap-progress-row">
                  <div class="progress-track">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                  </div>
                  <span class="chap-progress-text">${completedInChap}/${missions.length}</span>
                </div>

                <div class="mission-pills-list">
                  ${missions.map((m, mIdx) => {
                    const done = state.data.completedMissions.includes(m.id);
                    return `
                      <button class="mission-pill-item ${done ? 'done' : ''}" data-mission="${m.id}">
                        <span class="pill-number">${mIdx + 1}</span>
                        <span class="pill-title">${m.title}</span>
                        ${done ? `<span class="pill-check">${ICONS.check}</span>` : ''}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.bindChapterEvents();
  }

  bindChapterEvents() {
    const missionBtns = this.container.querySelectorAll('.mission-pill-item');
    missionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        sound.click();
        const mId = btn.getAttribute('data-mission');
        const mission = getMissionById(mId);
        if (mission) {
          this.startMission(mission);
        }
      });
    });
  }

  startMission(mission) {
    this.activeMission = mission;
    this.viewMode = 'mission';
    this.hintRevealed = false;
    this.isProcessing = false;
    this.render();
    this.setupMissionKeyboard();
  }

  setupMissionKeyboard() {
    const targetShortcut = getShortcutById(this.activeMission.targetShortcutId);
    if (!targetShortcut) return;

    keyboard.clearHighlights();

    keyboard.setGameListener((combo) => {
      if (this.isProcessing || !this.activeMission) return;

      const isMatch = keyboard.matchesShortcut(combo, targetShortcut);

      if (isMatch) {
        this.handleMissionSuccess(targetShortcut);
      } else if (!combo.isModifierOnly && combo.keys.length > 0) {
        this.handleMissionFail();
      }
    });
  }

  handleMissionSuccess(targetShortcut) {
    this.isProcessing = true;
    sound.correct();

    state.recordResult({
      shortcutId: targetShortcut.id,
      category: targetShortcut.category,
      correct: true,
      source: 'mission'
    });

    state.completeMission(this.activeMission.id, this.activeMission.xpReward);

    const feedbackSlot = this.container.querySelector('#mission-feedback-slot');
    if (feedbackSlot) {
      feedbackSlot.innerHTML = `
        <div class="mission-result-card success-pop">
          <div class="result-header">
            <span class="result-icon">${ICONS.check}</span>
            <h3>MISSION COMPLETE!</h3>
          </div>
          
          <div class="simulated-terminal">
            <code>${this.activeMission.simulatedOutput}</code>
          </div>

          <div class="rewards-row">
            <span class="reward-pill">+${this.activeMission.xpReward} XP</span>
            <span class="reward-pill">Shortcut Mastered</span>
            <span class="reward-pill">+10 Accuracy</span>
          </div>

          <!-- Educational Takeaway Card -->
          <div class="takeaway-card">
            <div class="takeaway-keys">${targetShortcut.displayKeys.join(' + ')}</div>
            <div class="takeaway-info">
              <strong>${targetShortcut.name}</strong> — ${targetShortcut.whatItDoes}
              <p class="takeaway-tip"><em>Tip: ${targetShortcut.memoryTip}</em></p>
            </div>
          </div>

          <div class="next-mission-actions">
            <button class="btn-primary" id="btn-next-mission">Next Mission →</button>
            <button class="btn-secondary" id="btn-back-missions">Chapter Select</button>
          </div>
        </div>
      `;

      const nextBtn = this.container.querySelector('#btn-next-mission');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          sound.click();
          this.advanceNextMission();
        });
      }

      const backBtn = this.container.querySelector('#btn-back-missions');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          sound.click();
          this.viewMode = 'chapters';
          this.render();
        });
      }
    }
  }

  handleMissionFail() {
    sound.wrong();
    state.recordResult({
      shortcutId: this.activeMission.targetShortcutId,
      category: 'basic',
      correct: false,
      source: 'mission'
    });

    const statusMsg = this.container.querySelector('#mission-status-msg');
    if (statusMsg) {
      statusMsg.innerHTML = `
        <div class="mission-error-alert">
          <span>Wrong Shortcut combination! Need assistance? Reveal a hint below.</span>
        </div>
      `;
    }
  }

  advanceNextMission() {
    const allMissions = MISSIONS_DATA;
    const currentIndex = allMissions.findIndex(m => m.id === this.activeMission.id);
    if (currentIndex >= 0 && currentIndex < allMissions.length - 1) {
      this.startMission(allMissions[currentIndex + 1]);
    } else {
      this.viewMode = 'chapters';
      this.render();
    }
  }

  revealHint() {
    this.hintRevealed = true;
    sound.click();
    const targetShortcut = getShortcutById(this.activeMission.targetShortcutId);
    if (targetShortcut) {
      keyboard.highlightTargetKeys(targetShortcut.keys);
    }

    const hintContainer = this.container.querySelector('#mission-hint-box');
    if (hintContainer) {
      hintContainer.innerHTML = `
        <div class="hint-revealed-card">
          <div class="hint-title-row">
            <span class="hint-icon">${ICONS.lightbulb}</span>
            <strong>Hint:</strong>
          </div>
          <p>${this.activeMission.hint}</p>
          ${targetShortcut ? `<div class="hint-keys-preview">Keys: <code>${targetShortcut.displayKeys.join(' + ')}</code></div>` : ''}
        </div>
      `;
    }
  }

  renderMissionRunner() {
    const m = this.activeMission;
    const isDone = state.data.completedMissions.includes(m.id);
    const targetShortcut = getShortcutById(m.targetShortcutId);

    this.container.innerHTML = `
      <div class="mission-play-container">
        <header class="mission-play-header">
          <button class="back-btn" id="btn-mission-back">← Back to Chapters</button>
          <div class="mission-tags">
            <span class="diff-tag ${m.difficulty}">${m.difficulty.toUpperCase()}</span>
            <span class="xp-tag">+${m.xpReward} XP</span>
            ${isDone ? `<span class="done-tag">${ICONS.check} COMPLETED</span>` : ''}
          </div>
        </header>

        <main class="mission-brief-card">
          <div class="mission-headline">
            <span class="mission-badge-icon">${ICONS.missions}</span>
            <h2>${m.title}</h2>
          </div>

          <div class="scenario-box">
            <span class="scenario-label">SCENARIO:</span>
            <p class="scenario-text">${m.scenario}</p>
          </div>

          <div class="mission-prompt-prompt">
            <div class="prompt-icon-radar">${ICONS.bolt}</div>
            <p>Execute the required keyboard shortcut to solve this challenge!</p>
          </div>

          ${targetShortcut && targetShortcut.isRestricted ? `
            <div class="os-restricted-mission-banner">
              <span class="os-banner-icon">${ICONS.windows}</span>
              <div class="os-banner-text">
                <strong>System Intercepted Shortcut:</strong> <code>${targetShortcut.displayKeys.join(' + ')}</code> is captured directly by Windows OS (locking screen or switching windows).
                <span>Click the Safe Trigger button below to safely complete this challenge without disturbing your laptop!</span>
              </div>
            </div>
            <div class="mission-safe-action-wrap">
              <button type="button" class="btn-primary btn-safe-trigger" id="btn-safe-trigger-hotkey">
                ⚡ Safe Trigger Simulation (${targetShortcut.displayKeys.join(' + ')})
              </button>
            </div>
          ` : ''}

          <div id="mission-status-msg"></div>
          <div id="mission-hint-box"></div>
          <div id="mission-feedback-slot"></div>

          <div class="mission-footer-controls">
            <button class="btn-hint" id="btn-reveal-mission-hint">${ICONS.lightbulb} Reveal Hint</button>
          </div>
        </main>
      </div>
    `;

    const backBtn = this.container.querySelector('#btn-mission-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        sound.click();
        this.viewMode = 'chapters';
        this.render();
      });
    }

    const hintBtn = this.container.querySelector('#btn-reveal-mission-hint');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => this.revealHint());
    }

    const safeTriggerBtn = this.container.querySelector('#btn-safe-trigger-hotkey');
    if (safeTriggerBtn) {
      safeTriggerBtn.addEventListener('click', () => {
        if (!this.isProcessing && targetShortcut) {
          this.handleMissionSuccess(targetShortcut);
        }
      });
    }
  }
}
