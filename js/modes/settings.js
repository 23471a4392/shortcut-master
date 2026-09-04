/**
 * SHORTCUT MASTER - Settings Controller
 * Sound, theme, difficulty, visualizer display, and reset data confirmation.
 */

import { state } from '../engine/state.js';
import { sound } from '../engine/audio.js';
import { bus } from '../engine/bus.js';
import { ICONS } from '../engine/icons.js';
import { auth } from '../engine/auth.js';

export class SettingsScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
  }

  mount() {
    this.render();
  }

  unmount() {}

  render() {
    const s = state.data.settings;
    const currentUser = auth.getCurrentUser();

    this.container.innerHTML = `
      <div class="settings-page-layout">
        <header class="settings-header">
          <h2>Game Settings & Preferences</h2>
          <p>Customize audio, theme palettes, keyboard options, and manage your save data.</p>
        </header>

        <main class="settings-cards-list">
          <!-- Operator Account & Profile -->
          <section class="settings-section-card">
            <h3>Operator Profile</h3>
            <div class="setting-row">
              <div class="setting-info">
                <strong>Current Operator: ${currentUser ? currentUser.username : 'Guest Player'}</strong>
                <p>${currentUser && !currentUser.isGuest ? `Profile registered • Rank Level ${state.data.level} (${state.data.xp} XP)` : 'Playing in temporary guest mode without profile persistence.'}</p>
              </div>
              <button class="btn-secondary" id="btn-settings-logout">
                ${currentUser && !currentUser.isGuest ? 'Log Out / Switch Account' : 'Sign In / Register'}
              </button>
            </div>
          </section>

          <!-- Audio Settings -->
          <section class="settings-section-card">
            <h3>Audio & Sound FX</h3>
            
            <div class="setting-row">
              <div class="setting-info">
                <strong>Sound Effects</strong>
                <p>Play synthetic arcade sound effects for correct, wrong, combo, and boss hits.</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-sound-toggle" ${s.sound ? 'checked' : ''} />
                <span class="toggle-slider"></span>
              </label>
            </div>

            <div class="setting-row">
              <div class="setting-info">
                <strong>Master Volume</strong>
                <p>Adjust the volume intensity of synthesized sounds.</p>
              </div>
              <div class="volume-slider-wrapper">
                <input type="range" id="setting-volume-slider" min="0" max="1" step="0.05" value="${s.volume}" />
                <span id="volume-val-display">${Math.round(s.volume * 100)}%</span>
              </div>
            </div>
          </section>

          <!-- Visual & Themes -->
          <section class="settings-section-card">
            <h3>Appearance & Themes</h3>
            
            <div class="setting-mode-block">
              <span class="setting-sub-label">Color Mode:</span>
              <div class="mode-selector-grid">
                <button class="mode-choice-card ${(s.mode || 'dark') === 'dark' ? 'active' : ''}" data-mode-val="dark">
                  <div class="mode-choice-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  </div>
                  <div class="mode-choice-meta">
                    <strong>Dark Theme</strong>
                    <span>High-contrast midnight obsidian for low eye strain</span>
                  </div>
                </button>

                <button class="mode-choice-card ${s.mode === 'light' ? 'active' : ''}" data-mode-val="light">
                  <div class="mode-choice-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  </div>
                  <div class="mode-choice-meta">
                    <strong>Light Theme</strong>
                    <span>Clean daylight platinum with crisp readability</span>
                  </div>
                </button>
              </div>
            </div>

            <div class="setting-accents-block">
              <span class="setting-sub-label">Accent Color Palette:</span>
              <div class="themes-selector-grid">
                <button class="theme-card ${s.theme === 'emerald' ? 'active' : ''}" data-theme="emerald">
                  <div class="theme-preview emerald-preview"></div>
                  <strong>Cyber Emerald</strong>
                  <span>Neon Mint & Obsidian / Crisp Emerald</span>
                </button>

                <button class="theme-card ${s.theme === 'amber' ? 'active' : ''}" data-theme="amber">
                  <div class="theme-preview amber-preview"></div>
                  <strong>Neon Amber</strong>
                  <span>High Energy Gold & Carbon</span>
                </button>

                <button class="theme-card ${s.theme === 'violet' ? 'active' : ''}" data-theme="violet">
                  <div class="theme-preview violet-preview"></div>
                  <strong>Synth Violet</strong>
                  <span>Cyberpunk Electric Violet</span>
                </button>

                <button class="theme-card ${s.theme === 'carbon' ? 'active' : ''}" data-theme="carbon">
                  <div class="theme-preview carbon-preview"></div>
                  <strong>Dark Obsidian / Slate</strong>
                  <span>Monochrome High-Contrast Stealth</span>
                </button>
              </div>
            </div>
          </section>

          <!-- Gameplay & Visualizer -->
          <section class="settings-section-card">
            <h3>Gameplay & Display</h3>

            <div class="setting-row">
              <div class="setting-info">
                <strong>On-Screen Keyboard Visualizer</strong>
                <p>Display real-time interactive keyboard showing pressed keys & combinations.</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-visualizer-toggle" ${s.showVisualizer ? 'checked' : ''} />
                <span class="toggle-slider"></span>
              </label>
            </div>

            <div class="setting-row">
              <div class="setting-info">
                <strong>Player Name</strong>
                <p>Your display name on the dashboard and boss arena.</p>
              </div>
              <div class="name-edit-wrapper">
                <input type="text" id="setting-player-name" value="${state.data.playerName}" maxlength="20" class="player-name-input" />
                <button class="btn-secondary" id="btn-save-name">Save Name</button>
              </div>
            </div>
          </section>

          <!-- Danger Zone: Reset Progress -->
          <section class="settings-section-card danger-card">
            <h3>Danger Zone</h3>
            <div class="setting-row">
              <div class="setting-info">
                <strong>Reset All Game Progress</strong>
                <p>Permanently delete all XP, levels, unlocked achievements, mission progress, and stats from localStorage.</p>
              </div>
              <button class="btn-danger" id="btn-reset-progress">Reset Progress</button>
            </div>
          </section>
        </main>
      </div>

      <!-- Confirmation Modal -->
      <div id="reset-confirm-modal" class="modal-overlay hidden">
        <div class="modal-card">
          <div class="modal-icon-wrap">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-error)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h3>Reset All Progress?</h3>
          <p>Are you completely sure? This will wipe your level, XP, mastered shortcuts, and high scores. This action cannot be undone.</p>
          <div class="modal-actions">
            <button class="btn-danger" id="btn-confirm-reset">Yes, Wipe Everything</button>
            <button class="btn-secondary" id="btn-cancel-reset">Cancel</button>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const soundToggle = this.container.querySelector('#setting-sound-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('change', (e) => {
        const enabled = e.target.checked;
        sound.setEnabled(enabled);
        state.updateSettings({ sound: enabled });
        if (enabled) sound.click();
      });
    }

    const volumeSlider = this.container.querySelector('#setting-volume-slider');
    const volumeDisplay = this.container.querySelector('#volume-val-display');
    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        sound.setVolume(val);
        state.updateSettings({ volume: val });
        if (volumeDisplay) volumeDisplay.textContent = `${Math.round(val * 100)}%`;
      });
      volumeSlider.addEventListener('change', () => sound.click());
    }

    const settingsLogoutBtn = this.container.querySelector('#btn-settings-logout');
    if (settingsLogoutBtn) {
      settingsLogoutBtn.addEventListener('click', () => {
        sound.click();
        auth.logout();
      });
    }

    const modeChoiceCards = this.container.querySelectorAll('.mode-choice-card');
    modeChoiceCards.forEach(card => {
      card.addEventListener('click', () => {
        sound.click();
        const mode = card.getAttribute('data-mode-val');
        state.updateSettings({ mode });
        document.documentElement.setAttribute('data-mode', mode);
        this.render();
      });
    });

    const themeCards = this.container.querySelectorAll('.theme-card');
    themeCards.forEach(card => {
      card.addEventListener('click', () => {
        sound.click();
        const theme = card.getAttribute('data-theme');
        state.updateSettings({ theme });
        document.documentElement.setAttribute('data-theme', theme);
        this.render();
      });
    });

    const visToggle = this.container.querySelector('#setting-visualizer-toggle');
    if (visToggle) {
      visToggle.addEventListener('change', (e) => {
        const show = e.target.checked;
        state.updateSettings({ showVisualizer: show });
        bus.emit('visualizer:toggle', show);
      });
    }

    const saveNameBtn = this.container.querySelector('#btn-save-name');
    const nameInput = this.container.querySelector('#setting-player-name');
    if (saveNameBtn && nameInput) {
      saveNameBtn.addEventListener('click', () => {
        sound.click();
        const name = nameInput.value.trim() || 'Player 1';
        state.data.playerName = name;
        state.save();
        bus.emit('state:updated', state.data);
        saveNameBtn.textContent = 'Saved! ✓';
        setTimeout(() => { saveNameBtn.textContent = 'Save Name'; }, 1500);
      });
    }

    const resetBtn = this.container.querySelector('#btn-reset-progress');
    const modal = this.container.querySelector('#reset-confirm-modal');
    const confirmResetBtn = this.container.querySelector('#btn-confirm-reset');
    const cancelResetBtn = this.container.querySelector('#btn-cancel-reset');

    if (resetBtn && modal) {
      resetBtn.addEventListener('click', () => {
        sound.click();
        modal.classList.remove('hidden');
      });
    }

    if (cancelResetBtn && modal) {
      cancelResetBtn.addEventListener('click', () => {
        sound.click();
        modal.classList.add('hidden');
      });
    }

    if (confirmResetBtn && modal) {
      confirmResetBtn.addEventListener('click', () => {
        sound.wrong();
        state.resetProgress();
        modal.classList.add('hidden');
        this.render();
      });
    }
  }
}
