/**
 * SHORTCUT MASTER - Game State & Progression Engine
 * Handles player XP, level calculations, streaks, persistence (localStorage), and stats.
 */

import { bus } from './bus.js';
import { ACHIEVEMENTS_DATA } from '../data/achievements.js';
import { SHORTCUTS_DATA } from '../data/shortcuts.js';
import { getRankBadgeSvg } from './icons.js';
import { auth } from './auth.js';

const STORAGE_KEY = 'shortcut_master_save_v1';

export const LEVEL_TIERS = [
  { level: 1, title: 'Keyboard Rookie', minXp: 0, maxXp: 500, icon: getRankBadgeSvg(1) },
  { level: 2, title: 'Shortcut Learner', minXp: 500, maxXp: 1200, icon: getRankBadgeSvg(2) },
  { level: 3, title: 'Speed User', minXp: 1200, maxXp: 2200, icon: getRankBadgeSvg(3) },
  { level: 4, title: 'Power User', minXp: 2200, maxXp: 3600, icon: getRankBadgeSvg(4) },
  { level: 5, title: 'Keyboard Expert', minXp: 3600, maxXp: 5500, icon: getRankBadgeSvg(5) },
  { level: 6, title: 'Shortcut Master', minXp: 5500, maxXp: 8000, icon: getRankBadgeSvg(6) },
  { level: 7, title: 'Keyboard Legend', minXp: 8000, maxXp: Infinity, icon: getRankBadgeSvg(7) }
];

const DEFAULT_STATE = {
  playerName: 'Player 1',
  xp: 0,
  level: 1,
  currentStreak: 0,
  highestStreak: 0,
  completedMissions: [],
  masteredShortcuts: {},
  learningShortcuts: {},
  unlockedAchievements: [],
  bossesDefeated: [],
  dailyChallenge: {
    date: new Date().toISOString().slice(0, 10),
    shortcutId: 'ctrl-s',
    targetScore: 5,
    completed: false
  },
  stats: {
    totalAttempts: 0,
    totalCorrect: 0,
    totalWrong: 0,
    highestStreak: 0,
    bestSpeedScore: 0,
    bestSurvivalWaves: 0,
    avgReactionTime: 0,
    reactionTimes: [],
    categoryStats: {
      basic: { correct: 0, attempts: 0 },
      windows: { correct: 0, attempts: 0 },
      switching: { correct: 0, attempts: 0 },
      browser: { correct: 0, attempts: 0 },
      navigation: { correct: 0, attempts: 0 },
      formatting: { correct: 0, attempts: 0 },
      developer: { correct: 0, attempts: 0 }
    }
  },
  settings: {
    sound: true,
    volume: 0.6,
    theme: 'emerald',
    mode: 'dark',
    difficulty: 'medium',
    showVisualizer: true,
    animations: true,
    platform: 'windows'
  }
};

class StateManager {
  constructor() {
    this.data = this.load();
    this.ensureDailyChallenge();
  }

  normalizeState(parsed) {
    return {
      ...DEFAULT_STATE,
      ...parsed,
      stats: {
        ...DEFAULT_STATE.stats,
        ...(parsed.stats || {}),
        categoryStats: {
          ...DEFAULT_STATE.stats.categoryStats,
          ...(parsed.stats?.categoryStats || {})
        }
      },
      settings: {
        ...DEFAULT_STATE.settings,
        ...(parsed.settings || {})
      }
    };
  }

  load() {
    const user = auth.getCurrentUser();
    if (user && user.state) {
      const normalized = this.normalizeState(user.state);
      normalized.playerName = user.username;
      return normalized;
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const normalized = this.normalizeState(parsed);
        if (user) normalized.playerName = user.username;
        return normalized;
      }
    } catch (e) {
      console.warn('Could not load saved state, falling back to default', e);
    }

    const def = JSON.parse(JSON.stringify(DEFAULT_STATE));
    if (user) def.playerName = user.username;
    return def;
  }

  loadUser(user) {
    if (user && user.state) {
      this.data = this.normalizeState(user.state);
    } else {
      this.data = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
    if (user) {
      this.data.playerName = user.username;
    }
    this.ensureDailyChallenge();
    this.save();
    bus.emit('state:updated', this.data);
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      auth.saveCurrentUserData(this.data);
      bus.emit('state:saved', this.data);
    } catch (e) {
      console.error('Failed to save game state', e);
    }
  }

  resetProgress() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.save();
    bus.emit('state:reset', this.data);
    bus.emit('state:updated', this.data);
  }

  ensureDailyChallenge() {
    const today = new Date().toISOString().slice(0, 10);
    if (!this.data.dailyChallenge || this.data.dailyChallenge.date !== today) {
      const eligible = SHORTCUTS_DATA.filter(s => !s.isRestricted);
      const randomShortcut = eligible[Math.floor(Math.random() * eligible.length)];
      this.data.dailyChallenge = {
        date: today,
        shortcutId: randomShortcut ? randomShortcut.id : 'ctrl-s',
        targetScore: 5,
        completed: false
      };
      this.save();
    }
  }

  addXp(amount, reason = '') {
    const previousLevel = this.data.level;
    this.data.xp += Math.max(0, amount);
    this.updateLevel();
    this.save();

    bus.emit('xp:added', { amount, reason, totalXp: this.data.xp, level: this.data.level });

    if (this.data.level > previousLevel) {
      bus.emit('level:up', {
        oldLevel: previousLevel,
        newLevel: this.data.level,
        tier: this.getCurrentTier()
      });
    }

    this.checkAchievements();
  }

  updateLevel() {
    let currentLvl = 1;
    for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
      if (this.data.xp >= LEVEL_TIERS[i].minXp) {
        currentLvl = LEVEL_TIERS[i].level;
        break;
      }
    }
    this.data.level = currentLvl;
  }

  getCurrentTier() {
    return LEVEL_TIERS.find(t => t.level === this.data.level) || LEVEL_TIERS[0];
  }

  getNextTier() {
    const nextLvl = this.data.level + 1;
    return LEVEL_TIERS.find(t => t.level === nextLvl) || null;
  }

  getLevelProgress() {
    const current = this.getCurrentTier();
    const next = this.getNextTier();
    if (!next) return { percent: 100, currentXp: this.data.xp, neededXp: current.minXp };
    const xpInLevel = this.data.xp - current.minXp;
    const xpRequired = next.minXp - current.minXp;
    const percent = Math.min(100, Math.max(0, Math.round((xpInLevel / xpRequired) * 100)));
    return {
      percent,
      currentXp: xpInLevel,
      neededXp: xpRequired,
      totalForNext: next.minXp
    };
  }

  recordResult({ shortcutId, category, correct, reactionTimeMs = 0, source = 'practice' }) {
    this.data.stats.totalAttempts++;

    if (category && this.data.stats.categoryStats[category]) {
      this.data.stats.categoryStats[category].attempts++;
    }

    if (correct) {
      this.data.stats.totalCorrect++;
      this.data.currentStreak++;
      if (this.data.currentStreak > this.data.stats.highestStreak) {
        this.data.stats.highestStreak = this.data.currentStreak;
      }
      if (this.data.currentStreak > this.data.highestStreak) {
        this.data.highestStreak = this.data.currentStreak;
      }

      if (category && this.data.stats.categoryStats[category]) {
        this.data.stats.categoryStats[category].correct++;
      }

      if (!this.data.masteredShortcuts[shortcutId]) {
        const currentCount = (this.data.learningShortcuts[shortcutId]?.count || 0) + 1;
        if (currentCount >= 3) {
          delete this.data.learningShortcuts[shortcutId];
          this.data.masteredShortcuts[shortcutId] = {
            count: currentCount,
            lastTrained: Date.now()
          };
          bus.emit('shortcut:mastered', { shortcutId });
        } else {
          this.data.learningShortcuts[shortcutId] = {
            count: currentCount,
            lastTrained: Date.now()
          };
        }
      } else {
        this.data.masteredShortcuts[shortcutId].count++;
        this.data.masteredShortcuts[shortcutId].lastTrained = Date.now();
      }

      if (
        this.data.dailyChallenge &&
        !this.data.dailyChallenge.completed &&
        this.data.dailyChallenge.shortcutId === shortcutId
      ) {
        this.data.dailyChallenge.completed = true;
        this.addXp(150, 'Daily Quest Completed!');
        bus.emit('daily:completed');
      }

      if (reactionTimeMs > 0) {
        this.data.stats.reactionTimes.push(reactionTimeMs);
        if (this.data.stats.reactionTimes.length > 30) {
          this.data.stats.reactionTimes.shift();
        }
        const sum = this.data.stats.reactionTimes.reduce((a, b) => a + b, 0);
        this.data.stats.avgReactionTime = Math.round(sum / this.data.stats.reactionTimes.length);
      }
    } else {
      this.data.stats.totalWrong++;
      this.data.currentStreak = 0;
    }

    this.save();
    this.checkAchievements();
    bus.emit('state:updated', this.data);
  }

  completeMission(missionId, xpAward) {
    if (!this.data.completedMissions.includes(missionId)) {
      this.data.completedMissions.push(missionId);
      this.addXp(xpAward, `Mission Complete!`);
      this.save();
      bus.emit('mission:completed', { missionId });
    }
  }

  recordBossDefeat(bossId, xpReward) {
    if (!this.data.bossesDefeated.includes(bossId)) {
      this.data.bossesDefeated.push(bossId);
    }
    this.addXp(xpReward, `Boss Defeated!`);
    this.save();
    bus.emit('boss:defeated', { bossId });
    this.checkAchievements();
  }

  recordSpeedScore(score) {
    if (score > (this.data.stats.bestSpeedScore || 0)) {
      this.data.stats.bestSpeedScore = score;
      this.save();
    }
    this.checkAchievements();
  }

  recordSurvivalWaves(waves) {
    if (waves > (this.data.stats.bestSurvivalWaves || 0)) {
      this.data.stats.bestSurvivalWaves = waves;
      this.save();
    }
    this.checkAchievements();
  }

  checkAchievements() {
    ACHIEVEMENTS_DATA.forEach(ach => {
      if (!this.data.unlockedAchievements.includes(ach.id)) {
        if (ach.check(this.data)) {
          this.data.unlockedAchievements.push(ach.id);
          this.addXp(ach.xpReward, `Achievement: ${ach.title}`);
          this.save();
          bus.emit('achievement:unlocked', ach);
        }
      }
    });
  }

  getAccuracy() {
    const total = this.data.stats.totalAttempts;
    if (!total) return 100;
    return Math.round((this.data.stats.totalCorrect / total) * 100);
  }

  getMasterySummary() {
    const totalShortcuts = SHORTCUTS_DATA.length;
    const mastered = Object.keys(this.data.masteredShortcuts || {}).length;
    const learning = Object.keys(this.data.learningShortcuts || {}).length;
    const notStarted = Math.max(0, totalShortcuts - mastered - learning);
    const percent = Math.round((mastered / totalShortcuts) * 100);
    return { totalShortcuts, mastered, learning, notStarted, percent };
  }

  updateSettings(newSettings) {
    this.data.settings = {
      ...this.data.settings,
      ...newSettings
    };
    this.save();
    bus.emit('settings:updated', this.data.settings);
  }
}

export const state = new StateManager();
