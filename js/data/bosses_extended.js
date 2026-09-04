/**
 * SHORTCUT MASTER - Extended Boss Battles & Raid Encounters
 * 60 unique Boss Encounters with dynamic mechanics, multi-phase rotations, and voice lines.
 */

export const BOSSES_EXTENDED_DATABASE = [
  {
    id: "boss-ext-1-tier-1",
    name: "The Clipboard Phantom",
    subtitle: "Raid Level 10",
    element: "Glitch",
    totalHealth: 1200,
    shieldPoints: 420,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Clipboard Phantom was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 1500
  },
  {
    id: "boss-ext-2-tier-1",
    name: "Vim Overlord Modalus",
    subtitle: "Raid Level 11",
    element: "Binary",
    totalHealth: 1350,
    shieldPoints: 472,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Vim Overlord Modalus was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 1700
  },
  {
    id: "boss-ext-3-tier-1",
    name: "The Memory Leak Behemoth",
    subtitle: "Raid Level 12",
    element: "Void",
    totalHealth: 1500,
    shieldPoints: 525,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Memory Leak Behemoth was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 1900
  },
  {
    id: "boss-ext-4-tier-1",
    name: "Syntax Error Archon",
    subtitle: "Raid Level 13",
    element: "Overclock",
    totalHealth: 1650,
    shieldPoints: 577,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Syntax Error Archon was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 2100
  },
  {
    id: "boss-ext-5-tier-1",
    name: "The Infinite Loop Hydra",
    subtitle: "Raid Level 14",
    element: "Cyber",
    totalHealth: 1800,
    shieldPoints: 630,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Infinite Loop Hydra was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 2300
  },
  {
    id: "boss-ext-6-tier-1",
    name: "NullPointer Dragon",
    subtitle: "Raid Level 15",
    element: "Glitch",
    totalHealth: 1950,
    shieldPoints: 682,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "NullPointer Dragon was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 2500
  },
  {
    id: "boss-ext-7-tier-1",
    name: "The Merge Conflict Leviathan",
    subtitle: "Raid Level 16",
    element: "Binary",
    totalHealth: 2100,
    shieldPoints: 735,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Merge Conflict Leviathan was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 2700
  },
  {
    id: "boss-ext-8-tier-1",
    name: "Stack Overflow Colossus",
    subtitle: "Raid Level 17",
    element: "Void",
    totalHealth: 2250,
    shieldPoints: 787,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Stack Overflow Colossus was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 2900
  },
  {
    id: "boss-ext-9-tier-1",
    name: "Race Condition Ghoul",
    subtitle: "Raid Level 18",
    element: "Overclock",
    totalHealth: 2400,
    shieldPoints: 840,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Race Condition Ghoul was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 3100
  },
  {
    id: "boss-ext-10-tier-1",
    name: "Deadlock Titan",
    subtitle: "Raid Level 19",
    element: "Cyber",
    totalHealth: 2550,
    shieldPoints: 892,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Deadlock Titan was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 3300
  },
  {
    id: "boss-ext-11-tier-1",
    name: "Garbage Collector Reaper",
    subtitle: "Raid Level 20",
    element: "Glitch",
    totalHealth: 2700,
    shieldPoints: 944,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Garbage Collector Reaper was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 3500
  },
  {
    id: "boss-ext-12-tier-1",
    name: "Kernel Panic Emperor",
    subtitle: "Raid Level 21",
    element: "Binary",
    totalHealth: 2850,
    shieldPoints: 997,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Kernel Panic Emperor was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 3700
  },
  {
    id: "boss-ext-13-tier-1",
    name: "Segfault Nightmare",
    subtitle: "Raid Level 22",
    element: "Void",
    totalHealth: 3000,
    shieldPoints: 1050,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Segfault Nightmare was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 3900
  },
  {
    id: "boss-ext-14-tier-1",
    name: "The CSS Centering Sphinx",
    subtitle: "Raid Level 23",
    element: "Overclock",
    totalHealth: 3150,
    shieldPoints: 1102,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The CSS Centering Sphinx was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 4100
  },
  {
    id: "boss-ext-15-tier-1",
    name: "RegEx Quantum Demon",
    subtitle: "Raid Level 24",
    element: "Cyber",
    totalHealth: 3300,
    shieldPoints: 1155,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "RegEx Quantum Demon was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 100,
    xpReward: 4300
  },
  {
    id: "boss-ext-1-tier-2",
    name: "The Clipboard Phantom MK-2",
    subtitle: "Raid Level 20",
    element: "Glitch",
    totalHealth: 2400,
    shieldPoints: 840,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Clipboard Phantom MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 3000
  },
  {
    id: "boss-ext-2-tier-2",
    name: "Vim Overlord Modalus MK-2",
    subtitle: "Raid Level 21",
    element: "Binary",
    totalHealth: 2550,
    shieldPoints: 892,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Vim Overlord Modalus MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 3200
  },
  {
    id: "boss-ext-3-tier-2",
    name: "The Memory Leak Behemoth MK-2",
    subtitle: "Raid Level 22",
    element: "Void",
    totalHealth: 2700,
    shieldPoints: 944,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Memory Leak Behemoth MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 3400
  },
  {
    id: "boss-ext-4-tier-2",
    name: "Syntax Error Archon MK-2",
    subtitle: "Raid Level 23",
    element: "Overclock",
    totalHealth: 2850,
    shieldPoints: 997,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Syntax Error Archon MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 3600
  },
  {
    id: "boss-ext-5-tier-2",
    name: "The Infinite Loop Hydra MK-2",
    subtitle: "Raid Level 24",
    element: "Cyber",
    totalHealth: 3000,
    shieldPoints: 1050,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Infinite Loop Hydra MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 3800
  },
  {
    id: "boss-ext-6-tier-2",
    name: "NullPointer Dragon MK-2",
    subtitle: "Raid Level 25",
    element: "Glitch",
    totalHealth: 3150,
    shieldPoints: 1102,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "NullPointer Dragon MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 4000
  },
  {
    id: "boss-ext-7-tier-2",
    name: "The Merge Conflict Leviathan MK-2",
    subtitle: "Raid Level 26",
    element: "Binary",
    totalHealth: 3300,
    shieldPoints: 1155,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Merge Conflict Leviathan MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 4200
  },
  {
    id: "boss-ext-8-tier-2",
    name: "Stack Overflow Colossus MK-2",
    subtitle: "Raid Level 27",
    element: "Void",
    totalHealth: 3450,
    shieldPoints: 1207,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Stack Overflow Colossus MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 4400
  },
  {
    id: "boss-ext-9-tier-2",
    name: "Race Condition Ghoul MK-2",
    subtitle: "Raid Level 28",
    element: "Overclock",
    totalHealth: 3600,
    shieldPoints: 1260,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Race Condition Ghoul MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 4600
  },
  {
    id: "boss-ext-10-tier-2",
    name: "Deadlock Titan MK-2",
    subtitle: "Raid Level 29",
    element: "Cyber",
    totalHealth: 3750,
    shieldPoints: 1312,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Deadlock Titan MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 4800
  },
  {
    id: "boss-ext-11-tier-2",
    name: "Garbage Collector Reaper MK-2",
    subtitle: "Raid Level 30",
    element: "Glitch",
    totalHealth: 3900,
    shieldPoints: 1365,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Garbage Collector Reaper MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 5000
  },
  {
    id: "boss-ext-12-tier-2",
    name: "Kernel Panic Emperor MK-2",
    subtitle: "Raid Level 31",
    element: "Binary",
    totalHealth: 4050,
    shieldPoints: 1417,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Kernel Panic Emperor MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 5200
  },
  {
    id: "boss-ext-13-tier-2",
    name: "Segfault Nightmare MK-2",
    subtitle: "Raid Level 32",
    element: "Void",
    totalHealth: 4200,
    shieldPoints: 1470,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Segfault Nightmare MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 5400
  },
  {
    id: "boss-ext-14-tier-2",
    name: "The CSS Centering Sphinx MK-2",
    subtitle: "Raid Level 33",
    element: "Overclock",
    totalHealth: 4350,
    shieldPoints: 1522,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The CSS Centering Sphinx MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 5600
  },
  {
    id: "boss-ext-15-tier-2",
    name: "RegEx Quantum Demon MK-2",
    subtitle: "Raid Level 34",
    element: "Cyber",
    totalHealth: 4500,
    shieldPoints: 1575,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "RegEx Quantum Demon MK-2 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 120,
    xpReward: 5800
  },
  {
    id: "boss-ext-1-tier-3",
    name: "The Clipboard Phantom MK-3",
    subtitle: "Raid Level 30",
    element: "Glitch",
    totalHealth: 3600,
    shieldPoints: 1260,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Clipboard Phantom MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 4500
  },
  {
    id: "boss-ext-2-tier-3",
    name: "Vim Overlord Modalus MK-3",
    subtitle: "Raid Level 31",
    element: "Binary",
    totalHealth: 3750,
    shieldPoints: 1312,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Vim Overlord Modalus MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 4700
  },
  {
    id: "boss-ext-3-tier-3",
    name: "The Memory Leak Behemoth MK-3",
    subtitle: "Raid Level 32",
    element: "Void",
    totalHealth: 3900,
    shieldPoints: 1365,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Memory Leak Behemoth MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 4900
  },
  {
    id: "boss-ext-4-tier-3",
    name: "Syntax Error Archon MK-3",
    subtitle: "Raid Level 33",
    element: "Overclock",
    totalHealth: 4050,
    shieldPoints: 1417,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Syntax Error Archon MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 5100
  },
  {
    id: "boss-ext-5-tier-3",
    name: "The Infinite Loop Hydra MK-3",
    subtitle: "Raid Level 34",
    element: "Cyber",
    totalHealth: 4200,
    shieldPoints: 1470,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Infinite Loop Hydra MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 5300
  },
  {
    id: "boss-ext-6-tier-3",
    name: "NullPointer Dragon MK-3",
    subtitle: "Raid Level 35",
    element: "Glitch",
    totalHealth: 4350,
    shieldPoints: 1522,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "NullPointer Dragon MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 5500
  },
  {
    id: "boss-ext-7-tier-3",
    name: "The Merge Conflict Leviathan MK-3",
    subtitle: "Raid Level 36",
    element: "Binary",
    totalHealth: 4500,
    shieldPoints: 1575,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Merge Conflict Leviathan MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 5700
  },
  {
    id: "boss-ext-8-tier-3",
    name: "Stack Overflow Colossus MK-3",
    subtitle: "Raid Level 37",
    element: "Void",
    totalHealth: 4650,
    shieldPoints: 1627,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Stack Overflow Colossus MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 5900
  },
  {
    id: "boss-ext-9-tier-3",
    name: "Race Condition Ghoul MK-3",
    subtitle: "Raid Level 38",
    element: "Overclock",
    totalHealth: 4800,
    shieldPoints: 1680,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Race Condition Ghoul MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 6100
  },
  {
    id: "boss-ext-10-tier-3",
    name: "Deadlock Titan MK-3",
    subtitle: "Raid Level 39",
    element: "Cyber",
    totalHealth: 4950,
    shieldPoints: 1732,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Deadlock Titan MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 6300
  },
  {
    id: "boss-ext-11-tier-3",
    name: "Garbage Collector Reaper MK-3",
    subtitle: "Raid Level 40",
    element: "Glitch",
    totalHealth: 5100,
    shieldPoints: 1785,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Garbage Collector Reaper MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 6500
  },
  {
    id: "boss-ext-12-tier-3",
    name: "Kernel Panic Emperor MK-3",
    subtitle: "Raid Level 41",
    element: "Binary",
    totalHealth: 5250,
    shieldPoints: 1837,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Kernel Panic Emperor MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 6700
  },
  {
    id: "boss-ext-13-tier-3",
    name: "Segfault Nightmare MK-3",
    subtitle: "Raid Level 42",
    element: "Void",
    totalHealth: 5400,
    shieldPoints: 1889,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Segfault Nightmare MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 6900
  },
  {
    id: "boss-ext-14-tier-3",
    name: "The CSS Centering Sphinx MK-3",
    subtitle: "Raid Level 43",
    element: "Overclock",
    totalHealth: 5550,
    shieldPoints: 1942,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The CSS Centering Sphinx MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 7100
  },
  {
    id: "boss-ext-15-tier-3",
    name: "RegEx Quantum Demon MK-3",
    subtitle: "Raid Level 44",
    element: "Cyber",
    totalHealth: 5700,
    shieldPoints: 1994,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "RegEx Quantum Demon MK-3 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 140,
    xpReward: 7300
  },
  {
    id: "boss-ext-1-tier-4",
    name: "The Clipboard Phantom MK-4",
    subtitle: "Raid Level 40",
    element: "Glitch",
    totalHealth: 4800,
    shieldPoints: 1680,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Clipboard Phantom MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 6000
  },
  {
    id: "boss-ext-2-tier-4",
    name: "Vim Overlord Modalus MK-4",
    subtitle: "Raid Level 41",
    element: "Binary",
    totalHealth: 4950,
    shieldPoints: 1732,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Vim Overlord Modalus MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 6200
  },
  {
    id: "boss-ext-3-tier-4",
    name: "The Memory Leak Behemoth MK-4",
    subtitle: "Raid Level 42",
    element: "Void",
    totalHealth: 5100,
    shieldPoints: 1785,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Memory Leak Behemoth MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 6400
  },
  {
    id: "boss-ext-4-tier-4",
    name: "Syntax Error Archon MK-4",
    subtitle: "Raid Level 43",
    element: "Overclock",
    totalHealth: 5250,
    shieldPoints: 1837,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Syntax Error Archon MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 6600
  },
  {
    id: "boss-ext-5-tier-4",
    name: "The Infinite Loop Hydra MK-4",
    subtitle: "Raid Level 44",
    element: "Cyber",
    totalHealth: 5400,
    shieldPoints: 1889,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Infinite Loop Hydra MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 6800
  },
  {
    id: "boss-ext-6-tier-4",
    name: "NullPointer Dragon MK-4",
    subtitle: "Raid Level 45",
    element: "Glitch",
    totalHealth: 5550,
    shieldPoints: 1942,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "NullPointer Dragon MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 7000
  },
  {
    id: "boss-ext-7-tier-4",
    name: "The Merge Conflict Leviathan MK-4",
    subtitle: "Raid Level 46",
    element: "Binary",
    totalHealth: 5700,
    shieldPoints: 1994,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The Merge Conflict Leviathan MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 7200
  },
  {
    id: "boss-ext-8-tier-4",
    name: "Stack Overflow Colossus MK-4",
    subtitle: "Raid Level 47",
    element: "Void",
    totalHealth: 5850,
    shieldPoints: 2047,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Stack Overflow Colossus MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 7400
  },
  {
    id: "boss-ext-9-tier-4",
    name: "Race Condition Ghoul MK-4",
    subtitle: "Raid Level 48",
    element: "Overclock",
    totalHealth: 6000,
    shieldPoints: 2100,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Race Condition Ghoul MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 7600
  },
  {
    id: "boss-ext-10-tier-4",
    name: "Deadlock Titan MK-4",
    subtitle: "Raid Level 49",
    element: "Cyber",
    totalHealth: 6150,
    shieldPoints: 2152,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Deadlock Titan MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 7800
  },
  {
    id: "boss-ext-11-tier-4",
    name: "Garbage Collector Reaper MK-4",
    subtitle: "Raid Level 50",
    element: "Glitch",
    totalHealth: 6300,
    shieldPoints: 2205,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Garbage Collector Reaper MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 8000
  },
  {
    id: "boss-ext-12-tier-4",
    name: "Kernel Panic Emperor MK-4",
    subtitle: "Raid Level 51",
    element: "Binary",
    totalHealth: 6450,
    shieldPoints: 2257,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Kernel Panic Emperor MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 8200
  },
  {
    id: "boss-ext-13-tier-4",
    name: "Segfault Nightmare MK-4",
    subtitle: "Raid Level 52",
    element: "Void",
    totalHealth: 6600,
    shieldPoints: 2310,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "Segfault Nightmare MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 8400
  },
  {
    id: "boss-ext-14-tier-4",
    name: "The CSS Centering Sphinx MK-4",
    subtitle: "Raid Level 53",
    element: "Overclock",
    totalHealth: 6750,
    shieldPoints: 2362,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "The CSS Centering Sphinx MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 8600
  },
  {
    id: "boss-ext-15-tier-4",
    name: "RegEx Quantum Demon MK-4",
    subtitle: "Raid Level 54",
    element: "Cyber",
    totalHealth: 6900,
    shieldPoints: 2415,
    phases: [
      {
        phaseNumber: 1,
        name: "Phase I: Initialization",
        thresholdPct: 100,
        attackSpeedMs: 1800,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 1: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 2,
        name: "Phase II: Overdrive Corruption",
        thresholdPct: 67,
        attackSpeedMs: 1500,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 2: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      },
      {
        phaseNumber: 3,
        name: "Phase III: Desperation Surge",
        thresholdPct: 34,
        attackSpeedMs: 1200,
        requiredShortcuts: [
          { key: "Ctrl+C", damage: 150, counterName: "Buffer Intercept" },
          { key: "Ctrl+V", damage: 180, counterName: "Paste Barrage" },
          { key: "Ctrl+Z", damage: 220, counterName: "Temporal Rewind" },
          { key: "Ctrl+F", damage: 250, counterName: "Deep Scan Piercer" },
          { key: "Alt+Tab", damage: 300, counterName: "Window Phasing" }
        ],
        bossDialogue: "Phase 3: You cannot escape the keystroke singularity, mortal!",
        specialMove: "Overclock Havoc Blast"
      }
    ],
    lootTable: [
      { item: "Golden Mechanical Switch", dropRate: 0.15 },
      { item: "APM Surge Crystal", dropRate: 0.35 },
      { item: "RGB LED Keycap Core", dropRate: 0.50 }
    ],
    loreDescription: "RegEx Quantum Demon MK-4 was forged from unhandled promise rejections and corrupted clipboard buffers.",
    recommendedApm: 160,
    xpReward: 8800
  },
];

export function getExtendedBosses() { return BOSSES_EXTENDED_DATABASE; }
