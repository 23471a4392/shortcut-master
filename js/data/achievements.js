/**
 * SHORTCUT MASTER - Achievements Database
 * 16 real unlocked achievements with handcrafted vector iconography.
 */

import { ICONS } from '../engine/icons.js';

export const ACHIEVEMENTS_DATA = [
  {
    id: 'first_shortcut',
    title: 'First Keystroke',
    description: 'Execute your very first keyboard shortcut successfully.',
    icon: ICONS.bolt,
    category: 'beginner',
    xpReward: 50,
    check: (state) => state.stats.totalCorrect >= 1
  },
  {
    id: 'shortcuts_10',
    title: 'Rookie Typist',
    description: 'Master 10 unique keyboard shortcuts.',
    icon: ICONS.shield,
    category: 'mastery',
    xpReward: 100,
    check: (state) => Object.keys(state.masteredShortcuts || {}).length >= 10
  },
  {
    id: 'shortcuts_25',
    title: 'Shortcut Specialist',
    description: 'Master 25 unique keyboard shortcuts.',
    icon: ICONS.shield,
    category: 'mastery',
    xpReward: 250,
    check: (state) => Object.keys(state.masteredShortcuts || {}).length >= 25
  },
  {
    id: 'shortcuts_50',
    title: 'Grandmaster Archivist',
    description: 'Master 50 unique keyboard shortcuts across all categories.',
    icon: ICONS.crown,
    category: 'mastery',
    xpReward: 500,
    check: (state) => Object.keys(state.masteredShortcuts || {}).length >= 50
  },
  {
    id: 'combo_5',
    title: 'Flow State',
    description: 'Achieve a 5x shortcut combo streak without mistakes.',
    icon: ICONS.flame,
    category: 'skill',
    xpReward: 100,
    check: (state) => state.stats.highestStreak >= 5
  },
  {
    id: 'combo_10',
    title: 'Combo King',
    description: 'Achieve a blistering 10x shortcut combo streak.',
    icon: ICONS.flame,
    category: 'skill',
    xpReward: 250,
    check: (state) => state.stats.highestStreak >= 10
  },
  {
    id: 'combo_20',
    title: 'Keyboard Deity',
    description: 'Achieve a godlike 20x consecutive combo streak.',
    icon: ICONS.crown,
    category: 'skill',
    xpReward: 500,
    check: (state) => state.stats.highestStreak >= 20
  },
  {
    id: 'speed_demon',
    title: 'Speed Demon',
    description: 'Score 1,000+ points in a single Speed Challenge run.',
    icon: ICONS.speed,
    category: 'speed',
    xpReward: 200,
    check: (state) => (state.stats.bestSpeedScore || 0) >= 1000
  },
  {
    id: 'speed_god',
    title: 'Lightning Reflexes',
    description: 'Achieve an average reaction time under 800ms across 10+ challenges.',
    icon: ICONS.bolt,
    category: 'speed',
    xpReward: 300,
    check: (state) => state.stats.totalCorrect >= 10 && state.stats.avgReactionTime > 0 && state.stats.avgReactionTime < 800
  },
  {
    id: 'survival_master',
    title: 'Immortal Finger',
    description: 'Survive 15 consecutive waves in Survival Mode.',
    icon: ICONS.survival,
    category: 'survival',
    xpReward: 300,
    check: (state) => (state.stats.bestSurvivalWaves || 0) >= 15
  },
  {
    id: 'mouse_monster_slayer',
    title: 'Mouse Monster Defeated',
    description: 'Defeat Boss 1: The Mouse Monster without using a pointer.',
    icon: ICONS.boss,
    category: 'boss',
    xpReward: 350,
    check: (state) => (state.bossesDefeated || []).includes('mouse-monster')
  },
  {
    id: 'tab_destroyer_slayer',
    title: 'Tab Destroyer Vanquished',
    description: 'Defeat Boss 2: The Tab Destroyer in epic browser combat.',
    icon: ICONS.globe,
    category: 'boss',
    xpReward: 400,
    check: (state) => (state.bossesDefeated || []).includes('tab-destroyer')
  },
  {
    id: 'syntax_dragon_slayer',
    title: 'Dragon Tamer',
    description: 'Defeat Boss 3: The Syntax Dragon with flawless code keys.',
    icon: ICONS.terminal,
    category: 'boss',
    xpReward: 500,
    check: (state) => (state.bossesDefeated || []).includes('syntax-dragon')
  },
  {
    id: 'missions_chapter1',
    title: 'Office Certified',
    description: 'Complete all missions in Chapter 1: The Office Apprentice.',
    icon: ICONS.learn,
    category: 'campaign',
    xpReward: 200,
    check: (state) => {
      const ch1Missions = ['m-1-1','m-1-2','m-1-3','m-1-4','m-1-5','m-1-6','m-1-7','m-1-8','m-1-9','m-1-10'];
      return ch1Missions.every(id => (state.completedMissions || []).includes(id));
    }
  },
  {
    id: 'perfect_accuracy',
    title: 'Precision Master',
    description: 'Maintain over 90% overall accuracy across at least 30 attempts.',
    icon: ICONS.practice,
    category: 'skill',
    xpReward: 250,
    check: (state) => {
      const total = (state.stats.totalCorrect || 0) + (state.stats.totalWrong || 0);
      if (total < 30) return false;
      const acc = ((state.stats.totalCorrect || 0) / total) * 100;
      return acc >= 90;
    }
  },
  {
    id: 'shortcut_legend',
    title: 'Shortcut Legend',
    description: 'Reach Level 7 and achieve Keyboard Legend status.',
    icon: ICONS.crown,
    category: 'mastery',
    xpReward: 1000,
    check: (state) => state.level >= 7
  }
];

export function getAchievementById(id) {
  return ACHIEVEMENTS_DATA.find(a => a.id === id);
}
