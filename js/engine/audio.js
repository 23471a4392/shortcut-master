/**
 * SHORTCUT MASTER - Web Audio Synthesizer Engine
 * Generates rich, crisp arcade sound effects purely through the browser Web Audio API.
 * No external asset files or CDN downloads required.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.5;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    } catch (e) {
      console.warn('Web Audio API not supported in this browser environment', e);
    }
  }

  ensureContext() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setEnabled(val) {
    this.enabled = !!val;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
  }

  // Helper to create oscillator tone
  playTone(freq, type, duration, startTime = 0, gainLevel = 1) {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime + startTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(this.volume * gainLevel, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Audio context might be restricted
    }
  }

  // --- Sound Effects ---

  click() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    this.playTone(800, 'sine', 0.04, 0, 0.15);
  }

  correct() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    // Harmonious two-note upward bell
    this.playTone(587.33, 'triangle', 0.12, 0, 0.3); // D5
    this.playTone(880.00, 'sine', 0.22, 0.08, 0.4); // A5
  }

  wrong() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    // Low double buzz
    this.playTone(180, 'sawtooth', 0.12, 0, 0.25);
    this.playTone(130, 'sawtooth', 0.18, 0.1, 0.3);
  }

  combo(multiplier = 1) {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    const base = Math.min(1200, 440 + (multiplier * 60));
    this.playTone(base, 'triangle', 0.08, 0, 0.3);
    this.playTone(base * 1.25, 'sine', 0.14, 0.05, 0.35);
    this.playTone(base * 1.5, 'sine', 0.2, 0.1, 0.4);
  }

  levelUp() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    // Grand arpeggio fanfare: C5 -> E5 -> G5 -> C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.25, idx * 0.1, 0.4);
      this.playTone(freq, 'sine', 0.35, idx * 0.1 + 0.02, 0.2);
    });
  }

  achievement() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    // Shimmering chord sequence
    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.4, idx * 0.07, 0.3);
    });
  }

  bossHit() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    // Punchy impact with sub-bass drop
    this.playTone(90, 'triangle', 0.2, 0, 0.6);
    this.playTone(220, 'sawtooth', 0.1, 0, 0.3);
  }

  bossDefeat() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    // Glorious explosion & victory chord
    const chord = [392.00, 493.88, 587.33, 783.99, 987.77];
    chord.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.6, idx * 0.08, 0.4);
    });
  }

  tick() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    this.playTone(1000, 'sine', 0.03, 0, 0.2);
  }

  dangerTick() {
    this.ensureContext();
    if (!this.enabled || !this.ctx) return;
    this.playTone(400, 'square', 0.05, 0, 0.3);
  }
}

export const sound = new SoundEngine();
