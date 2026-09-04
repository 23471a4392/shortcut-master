/**
 * SHORTCUT MASTER - Theme Engine Controller
 * Manages active theme state (Dark Arcade, Cyberpunk, OLED, Daylight) and persistence.
 */

export const THEMES = [
  { id: 'dark-arcade', name: 'Dark Arcade', icon: '🎮', description: 'Classic arcade aesthetic with neon cyan & violet accents' },
  { id: 'cyberpunk', name: 'Neo-Tokyo Cyberpunk', icon: '⚡', description: 'Electric yellow, hot magenta, and hyper-saturated contrast' },
  { id: 'oled', name: 'Midnight OLED', icon: '🌌', description: 'Pure obsidian pitch black with crisp minimal illumination' },
  { id: 'daylight', name: 'Clean Daylight', icon: '☀️', description: 'High-contrast ergonomic light mode for well-lit environments' }
];

export class ThemeManager {
  constructor() {
    this.currentTheme = this.loadSavedTheme() || 'dark-arcade';
    this.applyTheme(this.currentTheme);
  }

  loadSavedTheme() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('sm_theme') || 'dark-arcade';
    }
    return 'dark-arcade';
  }

  applyTheme(themeId) {
    this.currentTheme = themeId;
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.setAttribute('data-theme', themeId);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('sm_theme', themeId);
    }
  }

  cycleTheme() {
    const idx = THEMES.findIndex(t => t.id === this.currentTheme);
    const nextIdx = (idx + 1) % THEMES.length;
    this.applyTheme(THEMES[nextIdx].id);
    return THEMES[nextIdx];
  }

  getThemeInfo() {
    return THEMES.find(t => t.id === this.currentTheme) || THEMES[0];
  }
}

export const themeManager = new ThemeManager();
