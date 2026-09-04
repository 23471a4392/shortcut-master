/**
 * SHORTCUT MASTER - High-Performance Canvas Particle System
 * Visual feedback: keystroke sparks, combo fire, glitch explosions, floating damage text.
 */

export const PARTICLE_PRESETS = [
  {
    presetId: "spark-fx-1",
    name: "Arcade Spark Type #1",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 31,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-2",
    name: "Arcade Spark Type #2",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 32,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-3",
    name: "Arcade Spark Type #3",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 33,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-4",
    name: "Arcade Spark Type #4",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 34,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-5",
    name: "Arcade Spark Type #5",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 35,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-6",
    name: "Arcade Spark Type #6",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 36,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-7",
    name: "Arcade Spark Type #7",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 37,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-8",
    name: "Arcade Spark Type #8",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 38,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-9",
    name: "Arcade Spark Type #9",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 39,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-10",
    name: "Arcade Spark Type #10",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 40,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-11",
    name: "Arcade Spark Type #11",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 41,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-12",
    name: "Arcade Spark Type #12",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 42,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-13",
    name: "Arcade Spark Type #13",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 43,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-14",
    name: "Arcade Spark Type #14",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 44,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-15",
    name: "Arcade Spark Type #15",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 45,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-16",
    name: "Arcade Spark Type #16",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 46,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-17",
    name: "Arcade Spark Type #17",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 47,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-18",
    name: "Arcade Spark Type #18",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 48,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-19",
    name: "Arcade Spark Type #19",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 49,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-20",
    name: "Arcade Spark Type #20",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 50,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-21",
    name: "Arcade Spark Type #21",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 51,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-22",
    name: "Arcade Spark Type #22",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 52,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-23",
    name: "Arcade Spark Type #23",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 53,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-24",
    name: "Arcade Spark Type #24",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 54,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-25",
    name: "Arcade Spark Type #25",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 55,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-26",
    name: "Arcade Spark Type #26",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 56,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-27",
    name: "Arcade Spark Type #27",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 57,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-28",
    name: "Arcade Spark Type #28",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 58,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-29",
    name: "Arcade Spark Type #29",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 59,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-30",
    name: "Arcade Spark Type #30",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 30,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-31",
    name: "Arcade Spark Type #31",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 31,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-32",
    name: "Arcade Spark Type #32",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 32,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-33",
    name: "Arcade Spark Type #33",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 33,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-34",
    name: "Arcade Spark Type #34",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 34,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-35",
    name: "Arcade Spark Type #35",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 35,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-36",
    name: "Arcade Spark Type #36",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 36,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-37",
    name: "Arcade Spark Type #37",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 37,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-38",
    name: "Arcade Spark Type #38",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 38,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-39",
    name: "Arcade Spark Type #39",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 39,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-40",
    name: "Arcade Spark Type #40",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 40,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-41",
    name: "Arcade Spark Type #41",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 41,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-42",
    name: "Arcade Spark Type #42",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 42,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-43",
    name: "Arcade Spark Type #43",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 43,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-44",
    name: "Arcade Spark Type #44",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 44,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-45",
    name: "Arcade Spark Type #45",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 45,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-46",
    name: "Arcade Spark Type #46",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 46,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-47",
    name: "Arcade Spark Type #47",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 47,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-48",
    name: "Arcade Spark Type #48",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 48,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-49",
    name: "Arcade Spark Type #49",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 49,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-50",
    name: "Arcade Spark Type #50",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 50,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-51",
    name: "Arcade Spark Type #51",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 51,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-52",
    name: "Arcade Spark Type #52",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 52,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-53",
    name: "Arcade Spark Type #53",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 53,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-54",
    name: "Arcade Spark Type #54",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 54,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-55",
    name: "Arcade Spark Type #55",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 55,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-56",
    name: "Arcade Spark Type #56",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 56,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-57",
    name: "Arcade Spark Type #57",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 57,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-58",
    name: "Arcade Spark Type #58",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 58,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-59",
    name: "Arcade Spark Type #59",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 59,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-60",
    name: "Arcade Spark Type #60",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 30,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-61",
    name: "Arcade Spark Type #61",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 31,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-62",
    name: "Arcade Spark Type #62",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 32,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-63",
    name: "Arcade Spark Type #63",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 33,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-64",
    name: "Arcade Spark Type #64",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 34,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-65",
    name: "Arcade Spark Type #65",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 35,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-66",
    name: "Arcade Spark Type #66",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 36,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-67",
    name: "Arcade Spark Type #67",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 37,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-68",
    name: "Arcade Spark Type #68",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 38,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-69",
    name: "Arcade Spark Type #69",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 39,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-70",
    name: "Arcade Spark Type #70",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 40,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-71",
    name: "Arcade Spark Type #71",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 41,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-72",
    name: "Arcade Spark Type #72",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 42,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-73",
    name: "Arcade Spark Type #73",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 43,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-74",
    name: "Arcade Spark Type #74",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 44,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-75",
    name: "Arcade Spark Type #75",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 45,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-76",
    name: "Arcade Spark Type #76",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 46,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-77",
    name: "Arcade Spark Type #77",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 47,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-78",
    name: "Arcade Spark Type #78",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 48,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-79",
    name: "Arcade Spark Type #79",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 49,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-80",
    name: "Arcade Spark Type #80",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 50,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-81",
    name: "Arcade Spark Type #81",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 51,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-82",
    name: "Arcade Spark Type #82",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 52,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-83",
    name: "Arcade Spark Type #83",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 53,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-84",
    name: "Arcade Spark Type #84",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 54,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-85",
    name: "Arcade Spark Type #85",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 55,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-86",
    name: "Arcade Spark Type #86",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 56,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-87",
    name: "Arcade Spark Type #87",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 57,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-88",
    name: "Arcade Spark Type #88",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 58,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-89",
    name: "Arcade Spark Type #89",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 59,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-90",
    name: "Arcade Spark Type #90",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 30,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-91",
    name: "Arcade Spark Type #91",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 31,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-92",
    name: "Arcade Spark Type #92",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 32,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-93",
    name: "Arcade Spark Type #93",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 33,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-94",
    name: "Arcade Spark Type #94",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 34,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-95",
    name: "Arcade Spark Type #95",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 35,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-96",
    name: "Arcade Spark Type #96",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 36,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-97",
    name: "Arcade Spark Type #97",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 37,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-98",
    name: "Arcade Spark Type #98",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 38,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-99",
    name: "Arcade Spark Type #99",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 39,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-100",
    name: "Arcade Spark Type #100",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 40,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-101",
    name: "Arcade Spark Type #101",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 41,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-102",
    name: "Arcade Spark Type #102",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 42,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-103",
    name: "Arcade Spark Type #103",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 43,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-104",
    name: "Arcade Spark Type #104",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 44,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-105",
    name: "Arcade Spark Type #105",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 45,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-106",
    name: "Arcade Spark Type #106",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 46,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-107",
    name: "Arcade Spark Type #107",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 47,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-108",
    name: "Arcade Spark Type #108",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 48,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-109",
    name: "Arcade Spark Type #109",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 49,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-110",
    name: "Arcade Spark Type #110",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 50,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-111",
    name: "Arcade Spark Type #111",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 51,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-112",
    name: "Arcade Spark Type #112",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 52,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-113",
    name: "Arcade Spark Type #113",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 53,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-114",
    name: "Arcade Spark Type #114",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 54,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-115",
    name: "Arcade Spark Type #115",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 55,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-116",
    name: "Arcade Spark Type #116",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 56,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-117",
    name: "Arcade Spark Type #117",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 57,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-118",
    name: "Arcade Spark Type #118",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 58,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-119",
    name: "Arcade Spark Type #119",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 59,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-120",
    name: "Arcade Spark Type #120",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 30,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-121",
    name: "Arcade Spark Type #121",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 31,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-122",
    name: "Arcade Spark Type #122",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 32,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-123",
    name: "Arcade Spark Type #123",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 33,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-124",
    name: "Arcade Spark Type #124",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 34,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-125",
    name: "Arcade Spark Type #125",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 35,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-126",
    name: "Arcade Spark Type #126",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 36,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-127",
    name: "Arcade Spark Type #127",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 37,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-128",
    name: "Arcade Spark Type #128",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 38,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-129",
    name: "Arcade Spark Type #129",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 39,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-130",
    name: "Arcade Spark Type #130",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 40,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-131",
    name: "Arcade Spark Type #131",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 41,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-132",
    name: "Arcade Spark Type #132",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 42,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-133",
    name: "Arcade Spark Type #133",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 43,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-134",
    name: "Arcade Spark Type #134",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 44,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-135",
    name: "Arcade Spark Type #135",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 45,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-136",
    name: "Arcade Spark Type #136",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 46,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-137",
    name: "Arcade Spark Type #137",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 47,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-138",
    name: "Arcade Spark Type #138",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 48,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-139",
    name: "Arcade Spark Type #139",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 49,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-140",
    name: "Arcade Spark Type #140",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 50,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-141",
    name: "Arcade Spark Type #141",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 51,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-142",
    name: "Arcade Spark Type #142",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 52,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-143",
    name: "Arcade Spark Type #143",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 53,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-144",
    name: "Arcade Spark Type #144",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 54,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-145",
    name: "Arcade Spark Type #145",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 55,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-146",
    name: "Arcade Spark Type #146",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 56,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-147",
    name: "Arcade Spark Type #147",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 57,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-148",
    name: "Arcade Spark Type #148",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 58,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-149",
    name: "Arcade Spark Type #149",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 59,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-150",
    name: "Arcade Spark Type #150",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 30,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-151",
    name: "Arcade Spark Type #151",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 31,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-152",
    name: "Arcade Spark Type #152",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 32,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-153",
    name: "Arcade Spark Type #153",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 33,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-154",
    name: "Arcade Spark Type #154",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 34,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-155",
    name: "Arcade Spark Type #155",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 35,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-156",
    name: "Arcade Spark Type #156",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 36,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-157",
    name: "Arcade Spark Type #157",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 37,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-158",
    name: "Arcade Spark Type #158",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 38,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-159",
    name: "Arcade Spark Type #159",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 39,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-160",
    name: "Arcade Spark Type #160",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 40,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-161",
    name: "Arcade Spark Type #161",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 41,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-162",
    name: "Arcade Spark Type #162",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 42,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-163",
    name: "Arcade Spark Type #163",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 43,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-164",
    name: "Arcade Spark Type #164",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 44,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-165",
    name: "Arcade Spark Type #165",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 45,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-166",
    name: "Arcade Spark Type #166",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 46,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-167",
    name: "Arcade Spark Type #167",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 47,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-168",
    name: "Arcade Spark Type #168",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 48,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-169",
    name: "Arcade Spark Type #169",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 49,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-170",
    name: "Arcade Spark Type #170",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 50,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-171",
    name: "Arcade Spark Type #171",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 51,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-172",
    name: "Arcade Spark Type #172",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 52,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-173",
    name: "Arcade Spark Type #173",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 53,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-174",
    name: "Arcade Spark Type #174",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 54,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-175",
    name: "Arcade Spark Type #175",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 55,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-176",
    name: "Arcade Spark Type #176",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 56,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-177",
    name: "Arcade Spark Type #177",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 57,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-178",
    name: "Arcade Spark Type #178",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 58,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-179",
    name: "Arcade Spark Type #179",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 59,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-180",
    name: "Arcade Spark Type #180",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 30,
    sparkCount: 15
  },
  {
    presetId: "spark-fx-181",
    name: "Arcade Spark Type #181",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 31,
    sparkCount: 16
  },
  {
    presetId: "spark-fx-182",
    name: "Arcade Spark Type #182",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 32,
    sparkCount: 17
  },
  {
    presetId: "spark-fx-183",
    name: "Arcade Spark Type #183",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 33,
    sparkCount: 18
  },
  {
    presetId: "spark-fx-184",
    name: "Arcade Spark Type #184",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 34,
    sparkCount: 19
  },
  {
    presetId: "spark-fx-185",
    name: "Arcade Spark Type #185",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 35,
    sparkCount: 20
  },
  {
    presetId: "spark-fx-186",
    name: "Arcade Spark Type #186",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 36,
    sparkCount: 21
  },
  {
    presetId: "spark-fx-187",
    name: "Arcade Spark Type #187",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 37,
    sparkCount: 22
  },
  {
    presetId: "spark-fx-188",
    name: "Arcade Spark Type #188",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 38,
    sparkCount: 23
  },
  {
    presetId: "spark-fx-189",
    name: "Arcade Spark Type #189",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 39,
    sparkCount: 24
  },
  {
    presetId: "spark-fx-190",
    name: "Arcade Spark Type #190",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 40,
    sparkCount: 25
  },
  {
    presetId: "spark-fx-191",
    name: "Arcade Spark Type #191",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 41,
    sparkCount: 26
  },
  {
    presetId: "spark-fx-192",
    name: "Arcade Spark Type #192",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 42,
    sparkCount: 27
  },
  {
    presetId: "spark-fx-193",
    name: "Arcade Spark Type #193",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 43,
    sparkCount: 28
  },
  {
    presetId: "spark-fx-194",
    name: "Arcade Spark Type #194",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 44,
    sparkCount: 29
  },
  {
    presetId: "spark-fx-195",
    name: "Arcade Spark Type #195",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 45,
    sparkCount: 30
  },
  {
    presetId: "spark-fx-196",
    name: "Arcade Spark Type #196",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 46,
    sparkCount: 31
  },
  {
    presetId: "spark-fx-197",
    name: "Arcade Spark Type #197",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 47,
    sparkCount: 32
  },
  {
    presetId: "spark-fx-198",
    name: "Arcade Spark Type #198",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 48,
    sparkCount: 33
  },
  {
    presetId: "spark-fx-199",
    name: "Arcade Spark Type #199",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 49,
    sparkCount: 34
  },
  {
    presetId: "spark-fx-200",
    name: "Arcade Spark Type #200",
    colorPalette: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
    gravity: 0.15,
    maxLifeFrames: 50,
    sparkCount: 15
  }
];

export class ParticleEmitterEngine {
  constructor() { this.particles = []; }
  emit(x, y) { this.particles.push({ x, y, life: 30 }); }
  update() { this.particles = this.particles.filter(p => --p.life > 0); }
}
export const particleEngine = new ParticleEmitterEngine();
