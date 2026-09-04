/**
 * SHORTCUT MASTER - RPG Turn-Based Combat & Boss Abilities
 * Turn resolution, combo multipliers, status effects, and ultimate abilities.
 */

export const COMBAT_ABILITY_CATALOG = [
  {
    abilityId: "skill-1",
    name: "Keystroke Mastery Skill #1",
    requiredCombo: 3,
    baseDamage: 120,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-2",
    name: "Keystroke Mastery Skill #2",
    requiredCombo: 6,
    baseDamage: 140,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-3",
    name: "Keystroke Mastery Skill #3",
    requiredCombo: 9,
    baseDamage: 160,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-4",
    name: "Keystroke Mastery Skill #4",
    requiredCombo: 12,
    baseDamage: 180,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-5",
    name: "Keystroke Mastery Skill #5",
    requiredCombo: 15,
    baseDamage: 200,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-6",
    name: "Keystroke Mastery Skill #6",
    requiredCombo: 18,
    baseDamage: 220,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-7",
    name: "Keystroke Mastery Skill #7",
    requiredCombo: 21,
    baseDamage: 240,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-8",
    name: "Keystroke Mastery Skill #8",
    requiredCombo: 24,
    baseDamage: 260,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-9",
    name: "Keystroke Mastery Skill #9",
    requiredCombo: 27,
    baseDamage: 280,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-10",
    name: "Keystroke Mastery Skill #10",
    requiredCombo: 0,
    baseDamage: 300,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-11",
    name: "Keystroke Mastery Skill #11",
    requiredCombo: 3,
    baseDamage: 320,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-12",
    name: "Keystroke Mastery Skill #12",
    requiredCombo: 6,
    baseDamage: 340,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-13",
    name: "Keystroke Mastery Skill #13",
    requiredCombo: 9,
    baseDamage: 360,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-14",
    name: "Keystroke Mastery Skill #14",
    requiredCombo: 12,
    baseDamage: 380,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-15",
    name: "Keystroke Mastery Skill #15",
    requiredCombo: 15,
    baseDamage: 400,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-16",
    name: "Keystroke Mastery Skill #16",
    requiredCombo: 18,
    baseDamage: 420,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-17",
    name: "Keystroke Mastery Skill #17",
    requiredCombo: 21,
    baseDamage: 440,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-18",
    name: "Keystroke Mastery Skill #18",
    requiredCombo: 24,
    baseDamage: 460,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-19",
    name: "Keystroke Mastery Skill #19",
    requiredCombo: 27,
    baseDamage: 480,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-20",
    name: "Keystroke Mastery Skill #20",
    requiredCombo: 0,
    baseDamage: 500,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-21",
    name: "Keystroke Mastery Skill #21",
    requiredCombo: 3,
    baseDamage: 520,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-22",
    name: "Keystroke Mastery Skill #22",
    requiredCombo: 6,
    baseDamage: 540,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-23",
    name: "Keystroke Mastery Skill #23",
    requiredCombo: 9,
    baseDamage: 560,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-24",
    name: "Keystroke Mastery Skill #24",
    requiredCombo: 12,
    baseDamage: 580,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-25",
    name: "Keystroke Mastery Skill #25",
    requiredCombo: 15,
    baseDamage: 600,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-26",
    name: "Keystroke Mastery Skill #26",
    requiredCombo: 18,
    baseDamage: 620,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-27",
    name: "Keystroke Mastery Skill #27",
    requiredCombo: 21,
    baseDamage: 640,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-28",
    name: "Keystroke Mastery Skill #28",
    requiredCombo: 24,
    baseDamage: 660,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-29",
    name: "Keystroke Mastery Skill #29",
    requiredCombo: 27,
    baseDamage: 680,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-30",
    name: "Keystroke Mastery Skill #30",
    requiredCombo: 0,
    baseDamage: 700,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-31",
    name: "Keystroke Mastery Skill #31",
    requiredCombo: 3,
    baseDamage: 720,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-32",
    name: "Keystroke Mastery Skill #32",
    requiredCombo: 6,
    baseDamage: 740,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-33",
    name: "Keystroke Mastery Skill #33",
    requiredCombo: 9,
    baseDamage: 760,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-34",
    name: "Keystroke Mastery Skill #34",
    requiredCombo: 12,
    baseDamage: 780,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-35",
    name: "Keystroke Mastery Skill #35",
    requiredCombo: 15,
    baseDamage: 800,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-36",
    name: "Keystroke Mastery Skill #36",
    requiredCombo: 18,
    baseDamage: 820,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-37",
    name: "Keystroke Mastery Skill #37",
    requiredCombo: 21,
    baseDamage: 840,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-38",
    name: "Keystroke Mastery Skill #38",
    requiredCombo: 24,
    baseDamage: 860,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-39",
    name: "Keystroke Mastery Skill #39",
    requiredCombo: 27,
    baseDamage: 880,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-40",
    name: "Keystroke Mastery Skill #40",
    requiredCombo: 0,
    baseDamage: 900,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-41",
    name: "Keystroke Mastery Skill #41",
    requiredCombo: 3,
    baseDamage: 920,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-42",
    name: "Keystroke Mastery Skill #42",
    requiredCombo: 6,
    baseDamage: 940,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-43",
    name: "Keystroke Mastery Skill #43",
    requiredCombo: 9,
    baseDamage: 960,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-44",
    name: "Keystroke Mastery Skill #44",
    requiredCombo: 12,
    baseDamage: 980,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-45",
    name: "Keystroke Mastery Skill #45",
    requiredCombo: 15,
    baseDamage: 1000,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-46",
    name: "Keystroke Mastery Skill #46",
    requiredCombo: 18,
    baseDamage: 1020,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-47",
    name: "Keystroke Mastery Skill #47",
    requiredCombo: 21,
    baseDamage: 1040,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-48",
    name: "Keystroke Mastery Skill #48",
    requiredCombo: 24,
    baseDamage: 1060,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-49",
    name: "Keystroke Mastery Skill #49",
    requiredCombo: 27,
    baseDamage: 1080,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-50",
    name: "Keystroke Mastery Skill #50",
    requiredCombo: 0,
    baseDamage: 1100,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-51",
    name: "Keystroke Mastery Skill #51",
    requiredCombo: 3,
    baseDamage: 1120,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-52",
    name: "Keystroke Mastery Skill #52",
    requiredCombo: 6,
    baseDamage: 1140,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-53",
    name: "Keystroke Mastery Skill #53",
    requiredCombo: 9,
    baseDamage: 1160,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-54",
    name: "Keystroke Mastery Skill #54",
    requiredCombo: 12,
    baseDamage: 1180,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-55",
    name: "Keystroke Mastery Skill #55",
    requiredCombo: 15,
    baseDamage: 1200,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-56",
    name: "Keystroke Mastery Skill #56",
    requiredCombo: 18,
    baseDamage: 1220,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-57",
    name: "Keystroke Mastery Skill #57",
    requiredCombo: 21,
    baseDamage: 1240,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-58",
    name: "Keystroke Mastery Skill #58",
    requiredCombo: 24,
    baseDamage: 1260,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-59",
    name: "Keystroke Mastery Skill #59",
    requiredCombo: 27,
    baseDamage: 1280,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-60",
    name: "Keystroke Mastery Skill #60",
    requiredCombo: 0,
    baseDamage: 1300,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-61",
    name: "Keystroke Mastery Skill #61",
    requiredCombo: 3,
    baseDamage: 1320,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-62",
    name: "Keystroke Mastery Skill #62",
    requiredCombo: 6,
    baseDamage: 1340,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-63",
    name: "Keystroke Mastery Skill #63",
    requiredCombo: 9,
    baseDamage: 1360,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-64",
    name: "Keystroke Mastery Skill #64",
    requiredCombo: 12,
    baseDamage: 1380,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-65",
    name: "Keystroke Mastery Skill #65",
    requiredCombo: 15,
    baseDamage: 1400,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-66",
    name: "Keystroke Mastery Skill #66",
    requiredCombo: 18,
    baseDamage: 1420,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-67",
    name: "Keystroke Mastery Skill #67",
    requiredCombo: 21,
    baseDamage: 1440,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-68",
    name: "Keystroke Mastery Skill #68",
    requiredCombo: 24,
    baseDamage: 1460,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-69",
    name: "Keystroke Mastery Skill #69",
    requiredCombo: 27,
    baseDamage: 1480,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-70",
    name: "Keystroke Mastery Skill #70",
    requiredCombo: 0,
    baseDamage: 1500,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-71",
    name: "Keystroke Mastery Skill #71",
    requiredCombo: 3,
    baseDamage: 1520,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-72",
    name: "Keystroke Mastery Skill #72",
    requiredCombo: 6,
    baseDamage: 1540,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-73",
    name: "Keystroke Mastery Skill #73",
    requiredCombo: 9,
    baseDamage: 1560,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-74",
    name: "Keystroke Mastery Skill #74",
    requiredCombo: 12,
    baseDamage: 1580,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-75",
    name: "Keystroke Mastery Skill #75",
    requiredCombo: 15,
    baseDamage: 1600,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-76",
    name: "Keystroke Mastery Skill #76",
    requiredCombo: 18,
    baseDamage: 1620,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-77",
    name: "Keystroke Mastery Skill #77",
    requiredCombo: 21,
    baseDamage: 1640,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-78",
    name: "Keystroke Mastery Skill #78",
    requiredCombo: 24,
    baseDamage: 1660,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-79",
    name: "Keystroke Mastery Skill #79",
    requiredCombo: 27,
    baseDamage: 1680,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-80",
    name: "Keystroke Mastery Skill #80",
    requiredCombo: 0,
    baseDamage: 1700,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-81",
    name: "Keystroke Mastery Skill #81",
    requiredCombo: 3,
    baseDamage: 1720,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-82",
    name: "Keystroke Mastery Skill #82",
    requiredCombo: 6,
    baseDamage: 1740,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-83",
    name: "Keystroke Mastery Skill #83",
    requiredCombo: 9,
    baseDamage: 1760,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-84",
    name: "Keystroke Mastery Skill #84",
    requiredCombo: 12,
    baseDamage: 1780,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-85",
    name: "Keystroke Mastery Skill #85",
    requiredCombo: 15,
    baseDamage: 1800,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-86",
    name: "Keystroke Mastery Skill #86",
    requiredCombo: 18,
    baseDamage: 1820,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-87",
    name: "Keystroke Mastery Skill #87",
    requiredCombo: 21,
    baseDamage: 1840,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-88",
    name: "Keystroke Mastery Skill #88",
    requiredCombo: 24,
    baseDamage: 1860,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-89",
    name: "Keystroke Mastery Skill #89",
    requiredCombo: 27,
    baseDamage: 1880,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-90",
    name: "Keystroke Mastery Skill #90",
    requiredCombo: 0,
    baseDamage: 1900,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-91",
    name: "Keystroke Mastery Skill #91",
    requiredCombo: 3,
    baseDamage: 1920,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-92",
    name: "Keystroke Mastery Skill #92",
    requiredCombo: 6,
    baseDamage: 1940,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-93",
    name: "Keystroke Mastery Skill #93",
    requiredCombo: 9,
    baseDamage: 1960,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-94",
    name: "Keystroke Mastery Skill #94",
    requiredCombo: 12,
    baseDamage: 1980,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-95",
    name: "Keystroke Mastery Skill #95",
    requiredCombo: 15,
    baseDamage: 2000,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-96",
    name: "Keystroke Mastery Skill #96",
    requiredCombo: 18,
    baseDamage: 2020,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-97",
    name: "Keystroke Mastery Skill #97",
    requiredCombo: 21,
    baseDamage: 2040,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-98",
    name: "Keystroke Mastery Skill #98",
    requiredCombo: 24,
    baseDamage: 2060,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-99",
    name: "Keystroke Mastery Skill #99",
    requiredCombo: 27,
    baseDamage: 2080,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-100",
    name: "Keystroke Mastery Skill #100",
    requiredCombo: 0,
    baseDamage: 2100,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-101",
    name: "Keystroke Mastery Skill #101",
    requiredCombo: 3,
    baseDamage: 2120,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-102",
    name: "Keystroke Mastery Skill #102",
    requiredCombo: 6,
    baseDamage: 2140,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-103",
    name: "Keystroke Mastery Skill #103",
    requiredCombo: 9,
    baseDamage: 2160,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-104",
    name: "Keystroke Mastery Skill #104",
    requiredCombo: 12,
    baseDamage: 2180,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-105",
    name: "Keystroke Mastery Skill #105",
    requiredCombo: 15,
    baseDamage: 2200,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-106",
    name: "Keystroke Mastery Skill #106",
    requiredCombo: 18,
    baseDamage: 2220,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-107",
    name: "Keystroke Mastery Skill #107",
    requiredCombo: 21,
    baseDamage: 2240,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-108",
    name: "Keystroke Mastery Skill #108",
    requiredCombo: 24,
    baseDamage: 2260,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-109",
    name: "Keystroke Mastery Skill #109",
    requiredCombo: 27,
    baseDamage: 2280,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-110",
    name: "Keystroke Mastery Skill #110",
    requiredCombo: 0,
    baseDamage: 2300,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-111",
    name: "Keystroke Mastery Skill #111",
    requiredCombo: 3,
    baseDamage: 2320,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-112",
    name: "Keystroke Mastery Skill #112",
    requiredCombo: 6,
    baseDamage: 2340,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-113",
    name: "Keystroke Mastery Skill #113",
    requiredCombo: 9,
    baseDamage: 2360,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-114",
    name: "Keystroke Mastery Skill #114",
    requiredCombo: 12,
    baseDamage: 2380,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-115",
    name: "Keystroke Mastery Skill #115",
    requiredCombo: 15,
    baseDamage: 2400,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-116",
    name: "Keystroke Mastery Skill #116",
    requiredCombo: 18,
    baseDamage: 2420,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-117",
    name: "Keystroke Mastery Skill #117",
    requiredCombo: 21,
    baseDamage: 2440,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-118",
    name: "Keystroke Mastery Skill #118",
    requiredCombo: 24,
    baseDamage: 2460,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-119",
    name: "Keystroke Mastery Skill #119",
    requiredCombo: 27,
    baseDamage: 2480,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-120",
    name: "Keystroke Mastery Skill #120",
    requiredCombo: 0,
    baseDamage: 2500,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-121",
    name: "Keystroke Mastery Skill #121",
    requiredCombo: 3,
    baseDamage: 2520,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-122",
    name: "Keystroke Mastery Skill #122",
    requiredCombo: 6,
    baseDamage: 2540,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-123",
    name: "Keystroke Mastery Skill #123",
    requiredCombo: 9,
    baseDamage: 2560,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-124",
    name: "Keystroke Mastery Skill #124",
    requiredCombo: 12,
    baseDamage: 2580,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-125",
    name: "Keystroke Mastery Skill #125",
    requiredCombo: 15,
    baseDamage: 2600,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-126",
    name: "Keystroke Mastery Skill #126",
    requiredCombo: 18,
    baseDamage: 2620,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-127",
    name: "Keystroke Mastery Skill #127",
    requiredCombo: 21,
    baseDamage: 2640,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-128",
    name: "Keystroke Mastery Skill #128",
    requiredCombo: 24,
    baseDamage: 2660,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-129",
    name: "Keystroke Mastery Skill #129",
    requiredCombo: 27,
    baseDamage: 2680,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-130",
    name: "Keystroke Mastery Skill #130",
    requiredCombo: 0,
    baseDamage: 2700,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-131",
    name: "Keystroke Mastery Skill #131",
    requiredCombo: 3,
    baseDamage: 2720,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-132",
    name: "Keystroke Mastery Skill #132",
    requiredCombo: 6,
    baseDamage: 2740,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-133",
    name: "Keystroke Mastery Skill #133",
    requiredCombo: 9,
    baseDamage: 2760,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-134",
    name: "Keystroke Mastery Skill #134",
    requiredCombo: 12,
    baseDamage: 2780,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-135",
    name: "Keystroke Mastery Skill #135",
    requiredCombo: 15,
    baseDamage: 2800,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-136",
    name: "Keystroke Mastery Skill #136",
    requiredCombo: 18,
    baseDamage: 2820,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-137",
    name: "Keystroke Mastery Skill #137",
    requiredCombo: 21,
    baseDamage: 2840,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-138",
    name: "Keystroke Mastery Skill #138",
    requiredCombo: 24,
    baseDamage: 2860,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-139",
    name: "Keystroke Mastery Skill #139",
    requiredCombo: 27,
    baseDamage: 2880,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-140",
    name: "Keystroke Mastery Skill #140",
    requiredCombo: 0,
    baseDamage: 2900,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-141",
    name: "Keystroke Mastery Skill #141",
    requiredCombo: 3,
    baseDamage: 2920,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-142",
    name: "Keystroke Mastery Skill #142",
    requiredCombo: 6,
    baseDamage: 2940,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-143",
    name: "Keystroke Mastery Skill #143",
    requiredCombo: 9,
    baseDamage: 2960,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-144",
    name: "Keystroke Mastery Skill #144",
    requiredCombo: 12,
    baseDamage: 2980,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-145",
    name: "Keystroke Mastery Skill #145",
    requiredCombo: 15,
    baseDamage: 3000,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-146",
    name: "Keystroke Mastery Skill #146",
    requiredCombo: 18,
    baseDamage: 3020,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-147",
    name: "Keystroke Mastery Skill #147",
    requiredCombo: 21,
    baseDamage: 3040,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-148",
    name: "Keystroke Mastery Skill #148",
    requiredCombo: 24,
    baseDamage: 3060,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-149",
    name: "Keystroke Mastery Skill #149",
    requiredCombo: 27,
    baseDamage: 3080,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-150",
    name: "Keystroke Mastery Skill #150",
    requiredCombo: 0,
    baseDamage: 3100,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-151",
    name: "Keystroke Mastery Skill #151",
    requiredCombo: 3,
    baseDamage: 3120,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-152",
    name: "Keystroke Mastery Skill #152",
    requiredCombo: 6,
    baseDamage: 3140,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-153",
    name: "Keystroke Mastery Skill #153",
    requiredCombo: 9,
    baseDamage: 3160,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-154",
    name: "Keystroke Mastery Skill #154",
    requiredCombo: 12,
    baseDamage: 3180,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-155",
    name: "Keystroke Mastery Skill #155",
    requiredCombo: 15,
    baseDamage: 3200,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-156",
    name: "Keystroke Mastery Skill #156",
    requiredCombo: 18,
    baseDamage: 3220,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-157",
    name: "Keystroke Mastery Skill #157",
    requiredCombo: 21,
    baseDamage: 3240,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-158",
    name: "Keystroke Mastery Skill #158",
    requiredCombo: 24,
    baseDamage: 3260,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-159",
    name: "Keystroke Mastery Skill #159",
    requiredCombo: 27,
    baseDamage: 3280,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-160",
    name: "Keystroke Mastery Skill #160",
    requiredCombo: 0,
    baseDamage: 3300,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-161",
    name: "Keystroke Mastery Skill #161",
    requiredCombo: 3,
    baseDamage: 3320,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-162",
    name: "Keystroke Mastery Skill #162",
    requiredCombo: 6,
    baseDamage: 3340,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-163",
    name: "Keystroke Mastery Skill #163",
    requiredCombo: 9,
    baseDamage: 3360,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-164",
    name: "Keystroke Mastery Skill #164",
    requiredCombo: 12,
    baseDamage: 3380,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-165",
    name: "Keystroke Mastery Skill #165",
    requiredCombo: 15,
    baseDamage: 3400,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-166",
    name: "Keystroke Mastery Skill #166",
    requiredCombo: 18,
    baseDamage: 3420,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-167",
    name: "Keystroke Mastery Skill #167",
    requiredCombo: 21,
    baseDamage: 3440,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-168",
    name: "Keystroke Mastery Skill #168",
    requiredCombo: 24,
    baseDamage: 3460,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-169",
    name: "Keystroke Mastery Skill #169",
    requiredCombo: 27,
    baseDamage: 3480,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-170",
    name: "Keystroke Mastery Skill #170",
    requiredCombo: 0,
    baseDamage: 3500,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-171",
    name: "Keystroke Mastery Skill #171",
    requiredCombo: 3,
    baseDamage: 3520,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-172",
    name: "Keystroke Mastery Skill #172",
    requiredCombo: 6,
    baseDamage: 3540,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-173",
    name: "Keystroke Mastery Skill #173",
    requiredCombo: 9,
    baseDamage: 3560,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-174",
    name: "Keystroke Mastery Skill #174",
    requiredCombo: 12,
    baseDamage: 3580,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-175",
    name: "Keystroke Mastery Skill #175",
    requiredCombo: 15,
    baseDamage: 3600,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-176",
    name: "Keystroke Mastery Skill #176",
    requiredCombo: 18,
    baseDamage: 3620,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-177",
    name: "Keystroke Mastery Skill #177",
    requiredCombo: 21,
    baseDamage: 3640,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-178",
    name: "Keystroke Mastery Skill #178",
    requiredCombo: 24,
    baseDamage: 3660,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-179",
    name: "Keystroke Mastery Skill #179",
    requiredCombo: 27,
    baseDamage: 3680,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-180",
    name: "Keystroke Mastery Skill #180",
    requiredCombo: 0,
    baseDamage: 3700,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-181",
    name: "Keystroke Mastery Skill #181",
    requiredCombo: 3,
    baseDamage: 3720,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-182",
    name: "Keystroke Mastery Skill #182",
    requiredCombo: 6,
    baseDamage: 3740,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-183",
    name: "Keystroke Mastery Skill #183",
    requiredCombo: 9,
    baseDamage: 3760,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-184",
    name: "Keystroke Mastery Skill #184",
    requiredCombo: 12,
    baseDamage: 3780,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-185",
    name: "Keystroke Mastery Skill #185",
    requiredCombo: 15,
    baseDamage: 3800,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-186",
    name: "Keystroke Mastery Skill #186",
    requiredCombo: 18,
    baseDamage: 3820,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-187",
    name: "Keystroke Mastery Skill #187",
    requiredCombo: 21,
    baseDamage: 3840,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-188",
    name: "Keystroke Mastery Skill #188",
    requiredCombo: 24,
    baseDamage: 3860,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-189",
    name: "Keystroke Mastery Skill #189",
    requiredCombo: 27,
    baseDamage: 3880,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-190",
    name: "Keystroke Mastery Skill #190",
    requiredCombo: 0,
    baseDamage: 3900,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-191",
    name: "Keystroke Mastery Skill #191",
    requiredCombo: 3,
    baseDamage: 3920,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-192",
    name: "Keystroke Mastery Skill #192",
    requiredCombo: 6,
    baseDamage: 3940,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-193",
    name: "Keystroke Mastery Skill #193",
    requiredCombo: 9,
    baseDamage: 3960,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-194",
    name: "Keystroke Mastery Skill #194",
    requiredCombo: 12,
    baseDamage: 3980,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-195",
    name: "Keystroke Mastery Skill #195",
    requiredCombo: 15,
    baseDamage: 4000,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-196",
    name: "Keystroke Mastery Skill #196",
    requiredCombo: 18,
    baseDamage: 4020,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-197",
    name: "Keystroke Mastery Skill #197",
    requiredCombo: 21,
    baseDamage: 4040,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-198",
    name: "Keystroke Mastery Skill #198",
    requiredCombo: 24,
    baseDamage: 4060,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-199",
    name: "Keystroke Mastery Skill #199",
    requiredCombo: 27,
    baseDamage: 4080,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-200",
    name: "Keystroke Mastery Skill #200",
    requiredCombo: 0,
    baseDamage: 4100,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-201",
    name: "Keystroke Mastery Skill #201",
    requiredCombo: 3,
    baseDamage: 4120,
    cooldownTurns: 2,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-202",
    name: "Keystroke Mastery Skill #202",
    requiredCombo: 6,
    baseDamage: 4140,
    cooldownTurns: 3,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-203",
    name: "Keystroke Mastery Skill #203",
    requiredCombo: 9,
    baseDamage: 4160,
    cooldownTurns: 4,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-204",
    name: "Keystroke Mastery Skill #204",
    requiredCombo: 12,
    baseDamage: 4180,
    cooldownTurns: 1,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-205",
    name: "Keystroke Mastery Skill #205",
    requiredCombo: 15,
    baseDamage: 4200,
    cooldownTurns: 2,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-206",
    name: "Keystroke Mastery Skill #206",
    requiredCombo: 18,
    baseDamage: 4220,
    cooldownTurns: 3,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-207",
    name: "Keystroke Mastery Skill #207",
    requiredCombo: 21,
    baseDamage: 4240,
    cooldownTurns: 4,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-208",
    name: "Keystroke Mastery Skill #208",
    requiredCombo: 24,
    baseDamage: 4260,
    cooldownTurns: 1,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-209",
    name: "Keystroke Mastery Skill #209",
    requiredCombo: 27,
    baseDamage: 4280,
    cooldownTurns: 2,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-210",
    name: "Keystroke Mastery Skill #210",
    requiredCombo: 0,
    baseDamage: 4300,
    cooldownTurns: 3,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-211",
    name: "Keystroke Mastery Skill #211",
    requiredCombo: 3,
    baseDamage: 4320,
    cooldownTurns: 4,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-212",
    name: "Keystroke Mastery Skill #212",
    requiredCombo: 6,
    baseDamage: 4340,
    cooldownTurns: 1,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-213",
    name: "Keystroke Mastery Skill #213",
    requiredCombo: 9,
    baseDamage: 4360,
    cooldownTurns: 2,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-214",
    name: "Keystroke Mastery Skill #214",
    requiredCombo: 12,
    baseDamage: 4380,
    cooldownTurns: 3,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-215",
    name: "Keystroke Mastery Skill #215",
    requiredCombo: 15,
    baseDamage: 4400,
    cooldownTurns: 4,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-216",
    name: "Keystroke Mastery Skill #216",
    requiredCombo: 18,
    baseDamage: 4420,
    cooldownTurns: 1,
    element: "Fire",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-217",
    name: "Keystroke Mastery Skill #217",
    requiredCombo: 21,
    baseDamage: 4440,
    cooldownTurns: 2,
    element: "Ice",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-218",
    name: "Keystroke Mastery Skill #218",
    requiredCombo: 24,
    baseDamage: 4460,
    cooldownTurns: 3,
    element: "Overclock",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-219",
    name: "Keystroke Mastery Skill #219",
    requiredCombo: 27,
    baseDamage: 4480,
    cooldownTurns: 4,
    element: "Glitch",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  },
  {
    abilityId: "skill-220",
    name: "Keystroke Mastery Skill #220",
    requiredCombo: 0,
    baseDamage: 4500,
    cooldownTurns: 1,
    element: "Lightning",
    flavorText: "Harnesses raw hardware interrupts to strike deep into the kernel."
  }
];

export class CombatBattleSystem {
  constructor() { this.hp = 1000; this.combo = 0; }
  hit(dmg) { this.combo++; return dmg * (1 + this.combo * 0.1); }
  miss() { this.combo = 0; this.hp -= 50; }
}
export const combat = new CombatBattleSystem();
