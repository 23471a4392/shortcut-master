/**
 * SHORTCUT MASTER - Help & Documentation Controller
 * Explains keyboard interception rules, browser limitations, scoring, and mechanics.
 */

import { ICONS } from '../engine/icons.js';

export class HelpScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
  }

  mount() {
    this.render();
  }

  unmount() {}

  render() {
    this.container.innerHTML = `
      <div class="help-page-layout">
        <header class="help-header">
          <h2>Player Guide & Technical Reference</h2>
          <p>Everything you need to know about keyboard detection, scoring, game modes, and browser capabilities.</p>
        </header>

        <main class="help-grid">
          <!-- Section 1: How Keyboard Detection Works -->
          <article class="help-card">
            <div class="help-card-header">
              <span class="help-icon">${ICONS.keyboard}</span>
              <h3>Real Keyboard Input Detection</h3>
            </div>
            <div class="help-body">
              <p>Shortcut Master uses real-time browser keyboard listeners (<code>keydown</code> / <code>keyup</code>) to detect your physical keystrokes and modifier combinations.</p>
              <ul>
                <li><strong>Modifiers:</strong> Ctrl, Alt, Shift, and Windows/Meta keys are tracked independently.</li>
                <li><strong>Browser Shortcuts Intercepted:</strong> The game suppresses standard browser default actions (such as Ctrl+S saving a webpage or Ctrl+P printing) so you can freely practice inside the game arena.</li>
                <li><strong>On-Screen Visualizer:</strong> The keyboard visualizer at the bottom of the screen illuminates in real-time as you press physical keys.</li>
              </ul>
            </div>
          </article>

          <!-- Section 2: Browser Limitations & OS Security -->
          <article class="help-card highlight-notice">
            <div class="help-card-header">
              <span class="help-icon">${ICONS.shield}</span>
              <h3>Important: Browser Limitations & OS Security</h3>
            </div>
            <div class="help-body">
              <p>For security and operating system architecture reasons, certain hotkeys are intercepted at the hardware/OS kernel level before any web browser receives the event:</p>
              <ul>
                <li><code>Win + L</code> (Lock workstation) is captured directly by the Windows OS kernel.</li>
                <li><code>Ctrl + Alt + Del</code> (Security lock screen) is an OS interrupt.</li>
                <li><code>Alt + Tab</code> and <code>Alt + F4</code> are captured by the desktop window manager in most browsers.</li>
              </ul>
              <p class="help-note">
                <strong>How Shortcut Master handles them:</strong> These shortcuts are explicitly labeled with an <strong>"OS"</strong> badge in the library, along with their practical usage, when to use them, and memory tips, so you can still learn and remember them for your daily desktop workflow!
              </p>
            </div>
          </article>

          <!-- Section 3: Game Modes -->
          <article class="help-card">
            <div class="help-card-header">
              <span class="help-icon">${ICONS.practice}</span>
              <h3>Game Modes Explained</h3>
            </div>
            <div class="help-body">
              <ul>
                <li><strong>Campaign Missions:</strong> Real-world scenarios (e.g., rescuing lost text or organizing tabs) where you execute hotkeys to solve situations.</li>
                <li><strong>Speed Challenge:</strong> Fast-paced 15s, 30s, or 60s time trials with combo multipliers and reaction time scoring.</li>
                <li><strong>Survival Mode:</strong> 3-Lives endurance mode where mistakes cost a heart as wave timers accelerate.</li>
                <li><strong>Memory Challenge:</strong> Two drills: Flash & Recall (memorize flashed keys) and Blind Execution (execute hotkey from memory without on-screen cues).</li>
                <li><strong>Boss Battles:</strong> Multi-phase boss showdowns (The Mouse Monster, Tab Destroyer, Syntax Dragon) where speed and accuracy damage the boss.</li>
              </ul>
            </div>
          </article>

          <!-- Section 4: Scoring & Progression -->
          <article class="help-card">
            <div class="help-card-header">
              <span class="help-icon">${ICONS.bolt}</span>
              <h3>XP, Levels & Combo Multipliers</h3>
            </div>
            <div class="help-body">
              <ul>
                <li><strong>Combos:</strong> 3+ consecutive correct shortcuts activate <strong>x2 Multiplier</strong>, 6+ activate <strong>x3</strong>, and 10+ activate <strong>x4</strong>.</li>
                <li><strong>Fast Reflex Bonus:</strong> Responding in under 1,000 milliseconds earns bonus XP points.</li>
                <li><strong>Mastery Status:</strong> Successfully executing a shortcut 3+ times in drills transitions it from "Learning" to "Mastered".</li>
                <li><strong>Levels:</strong> Progress from Level 1 (Keyboard Rookie) up to Level 7 (Keyboard Legend) as you accumulate XP.</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    `;
  }
}
