/**
 * SHORTCUT MASTER - Boss Battles Database
 * Multi-stage boss encounters with customized vector crests, health bars, taunts, attack timers, and phases.
 */

import { BOSS_CRESTS } from '../engine/icons.js';

export const BOSSES_DATA = [
  {
    id: 'mouse-monster',
    name: 'The Mouse Monster',
    title: 'Lord of the Point-and-Click Pit',
    avatar: BOSS_CRESTS['mouse-monster'],
    color: '#f59e0b',
    difficulty: 'Normal',
    maxHealth: 100,
    timePerAttack: 12,
    description: 'A lazy behemoth who tries to force you to reach for your mouse. Strike back with fundamental editing shortcuts to break its hold!',
    taunts: [
      "Why use two keys when you could just slowly move a cursor and click?",
      "You cannot escape my dragging menus!",
      "My scroll wheel will grind your speed to dust!"
    ],
    deathQuote: "Nooo! My mouse cursor is disintegrating into thin air!",
    phases: [
      {
        name: 'Phase 1: The Click Trap',
        healthThreshold: 100,
        dialog: "Try saving or undoing without your precious cursor!",
        allowedShortcuts: ['ctrl-s', 'ctrl-z', 'ctrl-y', 'ctrl-a', 'ctrl-c', 'ctrl-v']
      },
      {
        name: 'Phase 2: Menu Maze',
        healthThreshold: 50,
        dialog: "Faster! I am throwing Find and Replace chaos at you!",
        allowedShortcuts: ['ctrl-f', 'ctrl-h', 'ctrl-x', 'ctrl-p', 'ctrl-z', 'ctrl-s']
      }
    ],
    xpReward: 350
  },
  {
    id: 'tab-destroyer',
    name: 'The Tab Destroyer',
    title: 'Terror of the 100-Tab Heap',
    avatar: BOSS_CRESTS['tab-destroyer'],
    color: '#ec4899',
    difficulty: 'Hard',
    maxHealth: 120,
    timePerAttack: 10,
    description: 'A chaotic cyber storm of runaway browser tabs and unpinned windows. Master browser navigation before your RAM catches fire!',
    taunts: [
      "I just opened 40 background tabs with auto-playing video!",
      "You will never find that closed tab in time!",
      "Your RAM belongs to me now!"
    ],
    deathQuote: "All tabs pinned... memory stabilized... I have been closed!",
    phases: [
      {
        name: 'Phase 1: The Tab Swarm',
        healthThreshold: 120,
        dialog: "Close and open tabs before your browser crashes!",
        allowedShortcuts: ['ctrl-t', 'ctrl-w', 'ctrl-tab', 'ctrl-l', 'ctrl-r']
      },
      {
        name: 'Phase 2: The Lost Session',
        healthThreshold: 60,
        dialog: "I closed your most important tab! Can your fingers resurrect it?!",
        allowedShortcuts: ['ctrl-shift-t', 'ctrl-shift-tab', 'ctrl-shift-r', 'ctrl-d', 'ctrl-j']
      }
    ],
    xpReward: 400
  },
  {
    id: 'syntax-dragon',
    name: 'The Syntax Dragon',
    title: 'Breaker of Builds & Indentation',
    avatar: BOSS_CRESTS['syntax-dragon'],
    color: '#f97316',
    difficulty: 'Expert',
    maxHealth: 150,
    timePerAttack: 8,
    description: 'A fire-breathing beast of broken code, rogue comments, and misplaced lines. Use your developer hotkeys to slay the compile errors!',
    taunts: [
      "Your lines are in the wrong order and your terminal is missing!",
      "A missing semicolon will burn your codebase to ash!",
      "Tremble before my indentation errors!"
    ],
    deathQuote: "0 errors, 0 warnings... Build succeeded... *roars and dissolves*",
    phases: [
      {
        name: 'Phase 1: Code Reorder',
        healthThreshold: 150,
        dialog: "Shift the code statements and summon Developer Tools!",
        allowedShortcuts: ['alt-arrow-up', 'alt-arrow-down', 'ctrl-slash', 'f12', 'ctrl-grave']
      },
      {
        name: 'Phase 2: Master Refactor',
        healthThreshold: 75,
        dialog: "Feel the wrath of the Command Palette and clone onslaught!",
        allowedShortcuts: ['ctrl-shift-p', 'shift-alt-arrow-down', 'ctrl-d-vscode', 'ctrl-shift-i', 'ctrl-grave']
      }
    ],
    xpReward: 500
  },
  {
    id: 'kernel-overlord',
    name: 'Grandmaster Kernel',
    title: 'The Ultimate Keyboard AI Overlord',
    avatar: BOSS_CRESTS['kernel-overlord'],
    color: '#a855f7',
    difficulty: 'Master',
    maxHealth: 200,
    timePerAttack: 7,
    description: 'The final sentinel of the keyboard universe. Combines all 7 categories with rapid-fire multi-key challenges.',
    taunts: [
      "You think you know shortcuts? I was forged in raw machine code!",
      "Hesitate for one second and your streak is obliterated!",
      "Show me true finger dexterity or yield!"
    ],
    deathQuote: "Incredible... you have truly achieved SHORTCUT MASTERY!",
    phases: [
      {
        name: 'Phase 1: High Velocity Mix',
        healthThreshold: 200,
        dialog: "Let us see if you can switch between editing and navigation without pause!",
        allowedShortcuts: ['ctrl-s', 'ctrl-z', 'ctrl-t', 'home', 'end', 'ctrl-arrow-left', 'ctrl-b', 'ctrl-i']
      },
      {
        name: 'Phase 2: Overclocked Core',
        healthThreshold: 100,
        dialog: "FULL POWER! Triple-key combinations unleashed!",
        allowedShortcuts: ['ctrl-shift-t', 'ctrl-shift-esc', 'ctrl-shift-p', 'ctrl-shift-arrow-left', 'ctrl-shift-r', 'shift-alt-arrow-down', 'win-shift-s']
      }
    ],
    xpReward: 1000
  }
];

export function getBossById(id) {
  return BOSSES_DATA.find(b => b.id === id);
}
