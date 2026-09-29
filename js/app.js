/**
 * SHORTCUT MASTER - Main Application Router & Entry Point
 * Manages navigation between all 12 modes, user authentication gate, toasts,
 * visualizer lifecycle, and global UI state.
 */

import { state } from './engine/state.js';
import { sound } from './engine/audio.js';
import { keyboard } from './engine/keyboard.js';
import { bus } from './engine/bus.js';
import { auth, USER_AVATARS } from './engine/auth.js';
import { ICONS } from './engine/icons.js';

// Screens
import { HomeScreen } from './modes/home.js';
import { LearnScreen } from './modes/learn.js';
import { PracticeScreen } from './modes/practice.js';
import { MissionsScreen } from './modes/missions.js';
import { SpeedScreen } from './modes/speed.js';
import { SurvivalScreen } from './modes/survival.js';
import { MemoryScreen } from './modes/memory.js';
import { BossScreen } from './modes/boss.js';
import { AchievementsScreen } from './modes/achievements.js';
import { ProgressScreen } from './modes/progress.js';
import { SettingsScreen } from './modes/settings.js';
import { HelpScreen } from './modes/help.js';

class App {
  constructor() {
    this.currentScreenId = 'home';
    this.currentScreen = null;
    this.screens = {};
    this.contentContainer = null;
    this.toastContainer = null;
    this.levelModal = null;
    this.authOverlay = null;
    this.selectedSignupAvatar = 'bolt';
  }

  init() {
    this.contentContainer = document.getElementById('screen-content-container');
    this.toastContainer = document.getElementById('toast-container');
    this.levelModal = document.getElementById('level-up-modal');
    this.authOverlay = document.getElementById('auth-portal-overlay');

    // Apply saved theme & mode
    const theme = state.data.settings.theme || 'emerald';
    const mode = state.data.settings.mode || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
    this.updateModeToggleUI(mode);

    sound.setEnabled(state.data.settings.sound);
    sound.setVolume(state.data.settings.volume);

    // Initialize keyboard visualizer
    const kbEl = document.getElementById('keyboard-visualizer-container');
    if (kbEl) {
      keyboard.setVisualizerElement(kbEl);
      if (!state.data.settings.showVisualizer) {
        kbEl.classList.add('hidden');
      }
    }

    // Instantiate all 12 screens
    const nav = (scrId) => this.navigateTo(scrId);
    this.screens = {
      home: new HomeScreen(this.contentContainer, nav),
      learn: new LearnScreen(this.contentContainer, nav),
      practice: new PracticeScreen(this.contentContainer, nav),
      missions: new MissionsScreen(this.contentContainer, nav),
      speed: new SpeedScreen(this.contentContainer, nav),
      survival: new SurvivalScreen(this.contentContainer, nav),
      memory: new MemoryScreen(this.contentContainer, nav),
      boss: new BossScreen(this.contentContainer, nav),
      achievements: new AchievementsScreen(this.contentContainer, nav),
      progress: new ProgressScreen(this.contentContainer, nav),
      settings: new SettingsScreen(this.contentContainer, nav),
      help: new HelpScreen(this.contentContainer, nav)
    };

    this.bindNavigation();
    this.bindEventListeners();
    this.setupAuthEngine();

    // Check authentication state
    const currentUser = auth.getCurrentUser();
    const initialRoute = this.getRouteFromHash();
    if (currentUser) {
      state.loadUser(currentUser);
      this.hideAuthPortal();
      this.navigateTo(initialRoute || 'home', true);
    } else {
      this.showAuthPortal();
    }

    this.updateHeaderHUD();
  }

  getRouteFromHash() {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
    return this.screens[hash] ? hash : null;
  }

  bindNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn[data-screen]');
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.click();
        const targetScreen = btn.getAttribute('data-screen');
        this.navigateTo(targetScreen);
      });
    });

    const logoBtn = document.getElementById('app-brand-logo');
    if (logoBtn) {
      logoBtn.addEventListener('click', () => {
        sound.click();
        this.navigateTo('home');
      });
    }

    // Browser Back / Forward History and Direct URL Hash changes
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', () => {
        const route = this.getRouteFromHash();
        if (route && route !== this.currentScreenId) {
          this.navigateTo(route, false);
        }
      });

      window.addEventListener('popstate', () => {
        const route = this.getRouteFromHash();
        if (route && route !== this.currentScreenId) {
          this.navigateTo(route, false);
        }
      });
    }
  }

  navigateTo(screenId, updateHash = true) {
    if (!this.screens[screenId]) {
      screenId = 'home';
    }

    if (this.currentScreen && typeof this.currentScreen.unmount === 'function') {
      this.currentScreen.unmount();
    }

    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(b => {
      if (b.getAttribute('data-screen') === screenId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    this.currentScreenId = screenId;
    this.currentScreen = this.screens[screenId];
    this.currentScreen.mount();

    if (updateHash && typeof window !== 'undefined') {
      if (window.location.hash !== `#${screenId}`) {
        window.history.pushState(null, '', `#${screenId}`);
      }
    }

    const screenTitles = {
      home: 'Command Center',
      learn: 'Shortcut Database & Sandbox',
      practice: 'Daily Drill Arena',
      missions: 'Campaign Missions',
      speed: 'Speed Rush Challenge',
      survival: 'Survival Gauntlet',
      memory: 'Blind Memory Trial',
      boss: 'Boss Encounters',
      achievements: 'Trophy Hall',
      progress: 'Mastery & Stats',
      settings: 'Audio & Preferences',
      help: 'Hotkeys & Guide'
    };

    if (typeof document !== 'undefined') {
      const titleSuffix = screenTitles[screenId] || 'Arcade';
      document.title = `Shortcut Master — ${titleSuffix}`;
    }

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.updateHeaderHUD();
  }

  updateHeaderHUD() {
    const lvlEl = document.getElementById('hud-player-level');
    const xpEl = document.getElementById('hud-player-xp');
    const streakEl = document.getElementById('hud-streak-count');

    if (lvlEl) lvlEl.textContent = `LVL ${state.data.level}`;
    if (xpEl) xpEl.textContent = `${state.data.xp} XP`;
    if (streakEl) streakEl.textContent = `${state.data.currentStreak}`;

    // Update user profile pill
    const user = auth.getCurrentUser();
    const avatarSlot = document.getElementById('hud-user-avatar-slot');
    const nameSlot = document.getElementById('hud-user-name-slot');
    const dropdownUser = document.getElementById('dropdown-username');

    if (avatarSlot) {
      avatarSlot.innerHTML = user ? auth.getUserAvatarSvg(user.avatar) : ICONS.bolt;
    }
    if (nameSlot) {
      nameSlot.textContent = user ? user.username : 'Sign In';
    }
    if (dropdownUser) {
      dropdownUser.textContent = user ? user.username : 'Guest Player';
    }
  }

  bindEventListeners() {
    // State updates
    bus.on('state:updated', () => this.updateHeaderHUD());
    bus.on('xp:added', ({ amount, reason }) => {
      this.updateHeaderHUD();
      if (amount >= 50 && reason) {
        this.showToast(`✨ +${amount} XP: ${reason}`, 'xp');
      }
    });

    // Achievement unlock
    bus.on('achievement:unlocked', (ach) => {
      sound.achievement();
      this.showToast(`🏆 ACHIEVEMENT UNLOCKED: ${ach.title}`, 'achievement');
    });

    // Level up popup
    bus.on('level:up', ({ newLevel, tier }) => {
      sound.levelUp();
      this.showLevelUpModal(newLevel, tier);
    });

    // Visualizer toggle from settings
    bus.on('visualizer:toggle', (show) => {
      const kbEl = document.getElementById('keyboard-visualizer-container');
      if (kbEl) {
        if (show) kbEl.classList.remove('hidden');
        else kbEl.classList.add('hidden');
      }
    });

    // Theme and mode updates from settings
    bus.on('settings:updated', (s) => {
      if (s.theme) document.documentElement.setAttribute('data-theme', s.theme);
      if (s.mode) {
        document.documentElement.setAttribute('data-mode', s.mode);
        this.updateModeToggleUI(s.mode);
      }
    });

    // Header Theme Mode Button click
    const modeToggleBtn = document.getElementById('btn-theme-mode-toggle');
    if (modeToggleBtn) {
      modeToggleBtn.addEventListener('click', () => {
        this.toggleThemeMode();
      });
    }

    // Close Level modal
    const closeLvlBtn = document.getElementById('btn-close-level-modal');
    if (closeLvlBtn && this.levelModal) {
      closeLvlBtn.addEventListener('click', () => {
        sound.click();
        this.levelModal.classList.add('hidden');
      });
    }

    // User Profile Dropdown Toggle
    const userBtn = document.getElementById('hud-user-btn');
    const userMenu = document.getElementById('user-dropdown-menu');
    if (userBtn && userMenu) {
      userBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        userMenu.classList.remove('show');
      });
    }

    // Switch Account click
    const switchBtn = document.getElementById('btn-switch-account');
    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        if (userMenu) userMenu.classList.remove('show');
        this.showAuthPortal();
      });
    }

    // Log out click
    const logoutBtn = document.getElementById('btn-hud-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        if (userMenu) userMenu.classList.remove('show');
        auth.logout();
        sound.click();
        this.showToast('Logged out successfully.', 'info');
        this.showAuthPortal();
      });
    }

    // Bus auth listeners
    bus.on('auth:login', (user) => {
      state.loadUser(user);
      this.updateHeaderHUD();
      if (this.currentScreen && typeof this.currentScreen.mount === 'function') {
        this.currentScreen.mount();
      }
    });

    bus.on('auth:signup', (user) => {
      state.loadUser(user);
      this.updateHeaderHUD();
      if (this.currentScreen && typeof this.currentScreen.mount === 'function') {
        this.currentScreen.mount();
      }
    });

    bus.on('auth:logout', () => {
      this.updateHeaderHUD();
      this.showAuthPortal();
    });
  }

  // ==================== AUTHENTICATION UI & FLOWS ====================

  setupAuthEngine() {
    // Tab switching (Login vs Signup)
    const tabLogin = document.getElementById('tab-btn-login');
    const tabSignup = document.getElementById('tab-btn-signup');
    const formLogin = document.getElementById('form-auth-login');
    const formSignup = document.getElementById('form-auth-signup');

    if (tabLogin && tabSignup && formLogin && formSignup) {
      tabLogin.addEventListener('click', () => {
        sound.click();
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        formLogin.classList.remove('hidden');
        formSignup.classList.add('hidden');
        this.clearAuthAlert();
      });

      tabSignup.addEventListener('click', () => {
        sound.click();
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        formSignup.classList.remove('hidden');
        formLogin.classList.add('hidden');
        this.clearAuthAlert();
      });
    }

    // Render avatar selection chips in sign-up form
    this.renderAvatarPicker();

    // Close Auth Portal Button (allows dismissing when switching accounts or opting into guest)
    const closeAuthBtn = document.getElementById('btn-close-auth-portal');
    if (closeAuthBtn) {
      closeAuthBtn.addEventListener('click', () => {
        sound.click();
        if (auth.getCurrentUser()) {
          this.hideAuthPortal();
        } else {
          // If no active session, initialize guest session
          auth.guestLogin();
          this.hideAuthPortal();
          const target = this.getRouteFromHash() || 'home';
          this.navigateTo(target);
        }
      });
    }

    // Login Form Submission
    if (formLogin) {
      formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        try {
          await auth.login(username, password);
          sound.correct();
          this.hideAuthPortal();
          this.showToast(`Welcome back, ${username}!`, 'info');
          const target = this.getRouteFromHash() || 'home';
          this.navigateTo(target);
        } catch (err) {
          sound.wrong();
          this.showAuthAlert(err.message || 'Login failed. Please check credentials.');
        }
      });
    }

    // Sign Up Form Submission
    if (formSignup) {
      formSignup.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        try {
          await auth.signup(username, password, this.selectedSignupAvatar);
          sound.levelUp();
          this.hideAuthPortal();
          this.showToast(`Operator profile created! Welcome, ${username}!`, 'achievement');
          const target = this.getRouteFromHash() || 'home';
          this.navigateTo(target);
        } catch (err) {
          sound.wrong();
          this.showAuthAlert(err.message || 'Registration failed.');
        }
      });
    }

    // Guest Play Option
    const guestBtn = document.getElementById('btn-guest-play');
    if (guestBtn) {
      guestBtn.addEventListener('click', () => {
        sound.click();
        auth.guestLogin();
        this.hideAuthPortal();
        this.showToast('Playing as Guest. Progress will not be persisted across sessions.', 'info');
        const target = this.getRouteFromHash() || 'home';
        this.navigateTo(target);
      });
    }
  }

  showAuthPortal() {
    if (!this.authOverlay) return;
    this.clearAuthAlert();
    this.populateSavedProfiles();
    this.authOverlay.classList.remove('hidden');
  }

  hideAuthPortal() {
    if (!this.authOverlay) return;
    this.authOverlay.classList.add('hidden');
    this.clearAuthAlert();
  }

  showAuthAlert(message) {
    const alertBox = document.getElementById('auth-alert-box');
    if (alertBox) {
      alertBox.textContent = message;
      alertBox.classList.add('show');
    }
  }

  clearAuthAlert() {
    const alertBox = document.getElementById('auth-alert-box');
    if (alertBox) {
      alertBox.textContent = '';
      alertBox.classList.remove('show');
    }
  }

  renderAvatarPicker() {
    const container = document.getElementById('avatar-picker-grid');
    if (!container) return;

    container.innerHTML = USER_AVATARS.map(av => `
      <button type="button" class="avatar-pick-btn ${av.id === this.selectedSignupAvatar ? 'active' : ''}" data-avatar="${av.id}" title="${av.name}">
        ${av.icon}
      </button>
    `).join('');

    const btns = container.querySelectorAll('.avatar-pick-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.click();
        this.selectedSignupAvatar = btn.getAttribute('data-avatar');
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  populateSavedProfiles() {
    const wrapper = document.getElementById('saved-profiles-wrapper');
    const list = document.getElementById('saved-profiles-list');
    if (!wrapper || !list) return;

    const profiles = auth.getSavedProfiles();
    if (profiles.length === 0) {
      wrapper.style.display = 'none';
      return;
    }

    wrapper.style.display = 'flex';
    list.innerHTML = profiles.map(p => `
      <button type="button" class="profile-quick-chip" data-user="${p.username}">
        <span class="profile-chip-avatar">${auth.getUserAvatarSvg(p.avatar)}</span>
        <span>${p.username} (Lvl ${p.level})</span>
      </button>
    `).join('');

    const chips = list.querySelectorAll('.profile-quick-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        sound.click();
        const username = chip.getAttribute('data-user');
        const loginUserField = document.getElementById('login-username');
        const loginPassField = document.getElementById('login-password');
        if (loginUserField) loginUserField.value = username;
        if (loginPassField) loginPassField.focus();
      });
    });
  }

  toggleThemeMode() {
    const currentMode = state.data.settings.mode || 'dark';
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    state.updateSettings({ mode: newMode });
    document.documentElement.setAttribute('data-mode', newMode);
    this.updateModeToggleUI(newMode);
    sound.click();
    this.showToast(newMode === 'light' ? '☀️ Frost Battlestation Enabled' : '🌙 Cyber Arcade Theme Enabled', 'info');
  }

  updateModeToggleUI(mode) {
    const label = document.getElementById('mode-toggle-label');
    if (label) {
      label.textContent = mode === 'light' ? 'Light' : 'Dark';
    }
  }

  showToast(message, type = 'info') {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type} animate-in`;
    toast.innerHTML = `
      <span class="toast-text">${message}</span>
      <button class="toast-close">✕</button>
    `;

    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.remove();
    });

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('animate-out');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  showLevelUpModal(newLevel, tier) {
    if (!this.levelModal) return;
    const lvlNum = this.levelModal.querySelector('#modal-lvl-number');
    const lvlTitle = this.levelModal.querySelector('#modal-lvl-title');
    const lvlIcon = this.levelModal.querySelector('#modal-lvl-icon');

    if (lvlNum) lvlNum.textContent = `LEVEL ${newLevel}`;
    if (lvlTitle) lvlTitle.textContent = tier.title;
    if (lvlIcon) lvlIcon.innerHTML = tier.icon;

    this.levelModal.classList.remove('hidden');
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
  window.app.init();
});
