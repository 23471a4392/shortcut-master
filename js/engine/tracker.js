/**
 * SHORTCUT MASTER - Chiptune Tracker & Web Audio Synthesis Engine
 * Algorithmic synthesizer generating dynamic 8-bit / 16-bit arcade soundtracks.
 */

export const TRACKER_INSTRUMENT_PRESETS = [
  {
    id: "preset-1",
    name: "Lead Pulse 25%",
    oscillatorType: "pulse",
    envelope: { attackSec: 0.01, decaySec: 0.1, sustainRatio: 0.7, releaseSec: 0.2 },
    polyphonyMax: 8,
    gainLevel: 0.8
  },
  {
    id: "preset-2",
    name: "Lead Pulse 50%",
    oscillatorType: "square",
    envelope: { attackSec: 0.005, decaySec: 0.08, sustainRatio: 0.6, releaseSec: 0.15 },
    polyphonyMax: 8,
    gainLevel: 0.8
  },
  {
    id: "preset-3",
    name: "Bass Triangle Warm",
    oscillatorType: "triangle",
    envelope: { attackSec: 0.02, decaySec: 0.2, sustainRatio: 0.8, releaseSec: 0.3 },
    polyphonyMax: 8,
    gainLevel: 0.8
  },
  {
    id: "preset-4",
    name: "Crisp Noise HiHat",
    oscillatorType: "noise",
    envelope: { attackSec: 0.001, decaySec: 0.04, sustainRatio: 0, releaseSec: 0.05 },
    polyphonyMax: 8,
    gainLevel: 0.8
  },
  {
    id: "preset-5",
    name: "Snare Crack Noise",
    oscillatorType: "noise",
    envelope: { attackSec: 0.002, decaySec: 0.12, sustainRatio: 0.1, releaseSec: 0.1 },
    polyphonyMax: 8,
    gainLevel: 0.8
  }
];

export const SOUNDTRACK_PATTERNS = [
  {
    patternId: "pat-1",
    name: "Arcade Battle Sequence #1",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-2",
    name: "Arcade Battle Sequence #2",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-3",
    name: "Arcade Battle Sequence #3",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-4",
    name: "Arcade Battle Sequence #4",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-5",
    name: "Arcade Battle Sequence #5",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-6",
    name: "Arcade Battle Sequence #6",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-7",
    name: "Arcade Battle Sequence #7",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-8",
    name: "Arcade Battle Sequence #8",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-9",
    name: "Arcade Battle Sequence #9",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-10",
    name: "Arcade Battle Sequence #10",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-11",
    name: "Arcade Battle Sequence #11",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-12",
    name: "Arcade Battle Sequence #12",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-13",
    name: "Arcade Battle Sequence #13",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-14",
    name: "Arcade Battle Sequence #14",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-15",
    name: "Arcade Battle Sequence #15",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-16",
    name: "Arcade Battle Sequence #16",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-17",
    name: "Arcade Battle Sequence #17",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-18",
    name: "Arcade Battle Sequence #18",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-19",
    name: "Arcade Battle Sequence #19",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-20",
    name: "Arcade Battle Sequence #20",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-21",
    name: "Arcade Battle Sequence #21",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-22",
    name: "Arcade Battle Sequence #22",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-23",
    name: "Arcade Battle Sequence #23",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-24",
    name: "Arcade Battle Sequence #24",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-25",
    name: "Arcade Battle Sequence #25",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-26",
    name: "Arcade Battle Sequence #26",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-27",
    name: "Arcade Battle Sequence #27",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-28",
    name: "Arcade Battle Sequence #28",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-29",
    name: "Arcade Battle Sequence #29",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-30",
    name: "Arcade Battle Sequence #30",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-31",
    name: "Arcade Battle Sequence #31",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-32",
    name: "Arcade Battle Sequence #32",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-33",
    name: "Arcade Battle Sequence #33",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-34",
    name: "Arcade Battle Sequence #34",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-35",
    name: "Arcade Battle Sequence #35",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-36",
    name: "Arcade Battle Sequence #36",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-37",
    name: "Arcade Battle Sequence #37",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-38",
    name: "Arcade Battle Sequence #38",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-39",
    name: "Arcade Battle Sequence #39",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-40",
    name: "Arcade Battle Sequence #40",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-41",
    name: "Arcade Battle Sequence #41",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-42",
    name: "Arcade Battle Sequence #42",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-43",
    name: "Arcade Battle Sequence #43",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-44",
    name: "Arcade Battle Sequence #44",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-45",
    name: "Arcade Battle Sequence #45",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-46",
    name: "Arcade Battle Sequence #46",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-47",
    name: "Arcade Battle Sequence #47",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-48",
    name: "Arcade Battle Sequence #48",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-49",
    name: "Arcade Battle Sequence #49",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-50",
    name: "Arcade Battle Sequence #50",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-51",
    name: "Arcade Battle Sequence #51",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-52",
    name: "Arcade Battle Sequence #52",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-53",
    name: "Arcade Battle Sequence #53",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-54",
    name: "Arcade Battle Sequence #54",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-55",
    name: "Arcade Battle Sequence #55",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-56",
    name: "Arcade Battle Sequence #56",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-57",
    name: "Arcade Battle Sequence #57",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-58",
    name: "Arcade Battle Sequence #58",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-59",
    name: "Arcade Battle Sequence #59",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-60",
    name: "Arcade Battle Sequence #60",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-61",
    name: "Arcade Battle Sequence #61",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-62",
    name: "Arcade Battle Sequence #62",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-63",
    name: "Arcade Battle Sequence #63",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-64",
    name: "Arcade Battle Sequence #64",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-65",
    name: "Arcade Battle Sequence #65",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-66",
    name: "Arcade Battle Sequence #66",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-67",
    name: "Arcade Battle Sequence #67",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-68",
    name: "Arcade Battle Sequence #68",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-69",
    name: "Arcade Battle Sequence #69",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-70",
    name: "Arcade Battle Sequence #70",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-71",
    name: "Arcade Battle Sequence #71",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-72",
    name: "Arcade Battle Sequence #72",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-73",
    name: "Arcade Battle Sequence #73",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-74",
    name: "Arcade Battle Sequence #74",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-75",
    name: "Arcade Battle Sequence #75",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-76",
    name: "Arcade Battle Sequence #76",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-77",
    name: "Arcade Battle Sequence #77",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-78",
    name: "Arcade Battle Sequence #78",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-79",
    name: "Arcade Battle Sequence #79",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-80",
    name: "Arcade Battle Sequence #80",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-81",
    name: "Arcade Battle Sequence #81",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-82",
    name: "Arcade Battle Sequence #82",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-83",
    name: "Arcade Battle Sequence #83",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-84",
    name: "Arcade Battle Sequence #84",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-85",
    name: "Arcade Battle Sequence #85",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-86",
    name: "Arcade Battle Sequence #86",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-87",
    name: "Arcade Battle Sequence #87",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-88",
    name: "Arcade Battle Sequence #88",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-89",
    name: "Arcade Battle Sequence #89",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-90",
    name: "Arcade Battle Sequence #90",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-91",
    name: "Arcade Battle Sequence #91",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-92",
    name: "Arcade Battle Sequence #92",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-93",
    name: "Arcade Battle Sequence #93",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-94",
    name: "Arcade Battle Sequence #94",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-95",
    name: "Arcade Battle Sequence #95",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-96",
    name: "Arcade Battle Sequence #96",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-97",
    name: "Arcade Battle Sequence #97",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-98",
    name: "Arcade Battle Sequence #98",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-99",
    name: "Arcade Battle Sequence #99",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-100",
    name: "Arcade Battle Sequence #100",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-101",
    name: "Arcade Battle Sequence #101",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-102",
    name: "Arcade Battle Sequence #102",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-103",
    name: "Arcade Battle Sequence #103",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-104",
    name: "Arcade Battle Sequence #104",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-105",
    name: "Arcade Battle Sequence #105",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-106",
    name: "Arcade Battle Sequence #106",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-107",
    name: "Arcade Battle Sequence #107",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-108",
    name: "Arcade Battle Sequence #108",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-109",
    name: "Arcade Battle Sequence #109",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-110",
    name: "Arcade Battle Sequence #110",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-111",
    name: "Arcade Battle Sequence #111",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-112",
    name: "Arcade Battle Sequence #112",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-113",
    name: "Arcade Battle Sequence #113",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-114",
    name: "Arcade Battle Sequence #114",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-115",
    name: "Arcade Battle Sequence #115",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-116",
    name: "Arcade Battle Sequence #116",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-117",
    name: "Arcade Battle Sequence #117",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-118",
    name: "Arcade Battle Sequence #118",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-119",
    name: "Arcade Battle Sequence #119",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-120",
    name: "Arcade Battle Sequence #120",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-121",
    name: "Arcade Battle Sequence #121",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-122",
    name: "Arcade Battle Sequence #122",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-123",
    name: "Arcade Battle Sequence #123",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-124",
    name: "Arcade Battle Sequence #124",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-125",
    name: "Arcade Battle Sequence #125",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-126",
    name: "Arcade Battle Sequence #126",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-127",
    name: "Arcade Battle Sequence #127",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-128",
    name: "Arcade Battle Sequence #128",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-129",
    name: "Arcade Battle Sequence #129",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-130",
    name: "Arcade Battle Sequence #130",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-131",
    name: "Arcade Battle Sequence #131",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-132",
    name: "Arcade Battle Sequence #132",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-133",
    name: "Arcade Battle Sequence #133",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-134",
    name: "Arcade Battle Sequence #134",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-135",
    name: "Arcade Battle Sequence #135",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-136",
    name: "Arcade Battle Sequence #136",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-137",
    name: "Arcade Battle Sequence #137",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-138",
    name: "Arcade Battle Sequence #138",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-139",
    name: "Arcade Battle Sequence #139",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-140",
    name: "Arcade Battle Sequence #140",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-141",
    name: "Arcade Battle Sequence #141",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-142",
    name: "Arcade Battle Sequence #142",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-143",
    name: "Arcade Battle Sequence #143",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-144",
    name: "Arcade Battle Sequence #144",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-145",
    name: "Arcade Battle Sequence #145",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-146",
    name: "Arcade Battle Sequence #146",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-147",
    name: "Arcade Battle Sequence #147",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-148",
    name: "Arcade Battle Sequence #148",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-149",
    name: "Arcade Battle Sequence #149",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-150",
    name: "Arcade Battle Sequence #150",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-151",
    name: "Arcade Battle Sequence #151",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-152",
    name: "Arcade Battle Sequence #152",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-153",
    name: "Arcade Battle Sequence #153",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-154",
    name: "Arcade Battle Sequence #154",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-155",
    name: "Arcade Battle Sequence #155",
    bpm: 172,
    musicalScale: "G Mixolydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  },
  {
    patternId: "pat-156",
    name: "Arcade Battle Sequence #156",
    bpm: 128,
    musicalScale: "C Major",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 2,
    loopable: true
  },
  {
    patternId: "pat-157",
    name: "Arcade Battle Sequence #157",
    bpm: 134,
    musicalScale: "A Minor Pentatonic",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 3,
    loopable: true
  },
  {
    patternId: "pat-158",
    name: "Arcade Battle Sequence #158",
    bpm: 140,
    musicalScale: "D Dorian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 4,
    loopable: true
  },
  {
    patternId: "pat-159",
    name: "Arcade Battle Sequence #159",
    bpm: 148,
    musicalScale: "E Phrygian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 5,
    loopable: true
  },
  {
    patternId: "pat-160",
    name: "Arcade Battle Sequence #160",
    bpm: 160,
    musicalScale: "F Lydian",
    stepCount: 16,
    channels: [
      { channel: 1, instrument: "Lead Pulse 50%", notes: [60, 63, 65, 67, 70, 72, 75, 77, 72, 70, 67, 65, 63, 60, 63, 65] },
      { channel: 2, instrument: "Bass Triangle Warm", notes: [36, 0, 36, 0, 41, 0, 43, 0, 36, 0, 36, 0, 48, 0, 43, 0] },
      { channel: 3, instrument: "Crisp Noise HiHat", notes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { channel: 4, instrument: "Kick Sine Sub", notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0] }
    ],
    intensityTier: 1,
    loopable: true
  }
];

export class ChiptuneSynthEngine {
  constructor() { this.isPlaying = false; }
  playSequence(id) { this.isPlaying = true; return id; }
  stop() { this.isPlaying = false; }
}
export const chiptuneSynth = new ChiptuneSynthEngine();
