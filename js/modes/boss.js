/**
 * SHORTCUT MASTER - Boss Battles Controller
 * Epic encounters against The Mouse Monster, Tab Destroyer, Syntax Dragon, and Grandmaster Kernel.
 */

import { BOSSES_DATA, getBossById } from '../data/bosses.js';
import { getShortcutById } from '../data/shortcuts.js';
import { keyboard } from '../engine/keyboard.js';
import { sound } from '../engine/audio.js';
import { state } from '../engine/state.js';
import { ICONS } from '../engine/icons.js';

export class BossScreen {
  constructor(container, navigateFn) {
    this.container = container;
    this.navigate = navigateFn;
    this.activeBoss = null;
    this.bossHealth = 100;
    this.playerHealth = 100;
    this.currentPhaseIndex = 0;
    this.currentShortcut = null;
    this.attackTimer = null;
    this.attackTimeLeft = 10;
    this.isFighting = false;
    this.isProcessing = false;
  }

  mount() {
    this.isFighting = false;
    this.renderLobby();
  }

  unmount() {
    this.stopAttackTimer();
    keyboard.clearGameListener();
    keyboard.clearHighlights();
  }

  renderLobby() {
    this.container.innerHTML = `
      <div class="boss-lobby-container">
        <header class="boss-lobby-header">
          <h2>Boss Battle Arena</h2>
          <p>Test your mastery against the legendary Keyboard Nemeses. High stakes, zero mouse tolerance!</p>
        </header>

        <div class="bosses-grid">
          ${BOSSES_DATA.map(b => {
            const isDefeated = (state.data.bossesDefeated || []).includes(b.id);
            return `
              <div class="boss-card ${isDefeated ? 'defeated' : ''}" data-boss="${b.id}">
                <div class="boss-avatar-large">${b.avatar}</div>
                <div class="boss-meta">
                  <div class="boss-badge-row">
                    <span class="boss-diff-tag">${b.difficulty}</span>
                    ${isDefeated ? `<span class="defeated-pill">${ICONS.crown} SLAIN</span>` : ''}
                  </div>
                  <h3 class="boss-name">${b.name}</h3>
                  <span class="boss-sub">${b.title}</span>
                </div>
                <p class="boss-desc">${b.description}</p>
                <div class="boss-rewards-row">
                  <span>Reward: <strong>+${b.xpReward} XP</strong></span>
                  <span>Phases: <strong>${b.phases.length}</strong></span>
                </div>
                <button class="btn-primary boss-fight-btn" data-boss="${b.id}">
                  ${isDefeated ? 'Rematch Boss' : 'Challenge Boss'}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    const fightBtns = this.container.querySelectorAll('.boss-fight-btn');
    fightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.click();
        const bId = btn.getAttribute('data-boss');
        const boss = getBossById(bId);
        if (boss) {
          this.startBossFight(boss);
        }
      });
    });
  }

  startBossFight(boss) {
    this.activeBoss = boss;
    this.bossHealth = boss.maxHealth;
    this.playerHealth = 100;
    this.currentPhaseIndex = 0;
    this.isFighting = true;
    this.isProcessing = false;

    this.renderArena();
    this.nextTurn();
    this.setupKeyboard();
  }

  stopAttackTimer() {
    if (this.attackTimer) {
      clearInterval(this.attackTimer);
      this.attackTimer = null;
    }
  }

  setupKeyboard() {
    keyboard.setGameListener((combo) => {
      if (!this.isFighting || this.isProcessing || !this.currentShortcut) return;

      const isMatch = keyboard.matchesShortcut(combo, this.currentShortcut);
      if (isMatch) {
        this.handlePlayerStrike();
      } else {
        if (combo.keys.length > 0) {
          this.handlePlayerMiss();
        }
      }
    });
  }

  nextTurn() {
    this.stopAttackTimer();
    this.isProcessing = false;

    const phase = this.activeBoss.phases[this.currentPhaseIndex] || this.activeBoss.phases[0];
    const pool = phase.allowedShortcuts.map(id => getShortcutById(id)).filter(Boolean);
    this.currentShortcut = pool[Math.floor(Math.random() * pool.length)];

    this.attackTimeLeft = this.activeBoss.timePerAttack;
    this.updateArena();

    this.attackTimer = setInterval(() => {
      this.attackTimeLeft--;
      this.updateBossTimerBar();

      if (this.attackTimeLeft <= 0) {
        this.handleBossAttack('Time expired! The boss unleashed a furious attack!');
      }
    }, 1000);
  }

  handlePlayerStrike() {
    this.isProcessing = true;
    this.stopAttackTimer();
    sound.bossHit();

    const damage = 25;
    this.bossHealth = Math.max(0, this.bossHealth - damage);

    const arenaEl = this.container.querySelector('.boss-arena-layout');
    if (arenaEl) {
      arenaEl.classList.add('shake-hit');
      setTimeout(() => arenaEl.classList.remove('shake-hit'), 400);
    }

    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: true,
      source: 'boss'
    });

    this.showDamageNumber(damage, 'boss');

    if (this.bossHealth <= 50 && this.currentPhaseIndex === 0 && this.activeBoss.phases.length > 1) {
      this.currentPhaseIndex = 1;
      this.showPhaseDialog(this.activeBoss.phases[1].dialog);
    }

    this.updateHealthBars();

    if (this.bossHealth <= 0) {
      this.handleBossVictory();
    } else {
      setTimeout(() => {
        if (this.isFighting) this.nextTurn();
      }, 700);
    }
  }

  handlePlayerMiss() {
    sound.wrong();
    state.recordResult({
      shortcutId: this.currentShortcut.id,
      category: this.currentShortcut.category,
      correct: false,
      source: 'boss'
    });

    this.playerHealth = Math.max(0, this.playerHealth - 10);
    this.showDamageNumber(10, 'player');
    this.updateHealthBars();

    if (this.playerHealth <= 0) {
      this.handleBossDefeat();
    }
  }

  handleBossAttack(reason) {
    this.stopAttackTimer();
    sound.wrong();

    const damage = 20;
    this.playerHealth = Math.max(0, this.playerHealth - damage);
    this.showDamageNumber(damage, 'player');
    this.updateHealthBars();

    if (this.playerHealth <= 0) {
      this.handleBossDefeat();
    } else {
      setTimeout(() => {
        if (this.isFighting) this.nextTurn();
      }, 800);
    }
  }

  showDamageNumber(val, target) {
    const slot = this.container.querySelector(target === 'boss' ? '#boss-dmg-slot' : '#player-dmg-slot');
    if (slot) {
      slot.textContent = `-${val}`;
      slot.className = 'damage-pop animate';
      setTimeout(() => { slot.className = 'damage-pop'; }, 600);
    }
  }

  showPhaseDialog(text) {
    const bubble = this.container.querySelector('#boss-taunt-bubble');
    if (bubble) {
      bubble.textContent = `"${text}"`;
      bubble.classList.add('phase-change');
    }
  }

  updateHealthBars() {
    const bossFill = this.container.querySelector('#boss-health-fill');
    if (bossFill) {
      const pct = Math.max(0, (this.bossHealth / this.activeBoss.maxHealth) * 100);
      bossFill.style.width = `${pct}%`;
    }
    const bossHpText = this.container.querySelector('#boss-hp-text');
    if (bossHpText) bossHpText.textContent = `${this.bossHealth} / ${this.activeBoss.maxHealth} HP`;

    const playerFill = this.container.querySelector('#player-health-fill');
    if (playerFill) {
      const pct = Math.max(0, this.playerHealth);
      playerFill.style.width = `${pct}%`;
    }
    const playerHpText = this.container.querySelector('#player-hp-text');
    if (playerHpText) playerHpText.textContent = `${this.playerHealth} / 100 HP`;
  }

  updateBossTimerBar() {
    const timerFill = this.container.querySelector('#boss-timer-fill');
    if (timerFill) {
      const pct = Math.max(0, (this.attackTimeLeft / this.activeBoss.timePerAttack) * 100);
      timerFill.style.width = `${pct}%`;
    }
  }

  renderArena() {
    const b = this.activeBoss;

    this.container.innerHTML = `
      <div class="boss-arena-layout">
        <!-- Boss VS Player Top Meters -->
        <header class="boss-meters-header">
          <!-- Boss Health Bar -->
          <div class="meter-box boss-meter-box">
            <div class="meter-labels">
              <span class="entity-name">${b.name}</span>
              <span id="boss-hp-text" class="hp-count">${this.bossHealth} / ${b.maxHealth} HP</span>
            </div>
            <div class="health-track">
              <div id="boss-health-fill" class="health-fill boss-fill" style="width: 100%"></div>
            </div>
            <div id="boss-dmg-slot" class="damage-pop"></div>
          </div>

          <div class="vs-badge">VS</div>

          <!-- Player Health Bar -->
          <div class="meter-box player-meter-box">
            <div class="meter-labels">
              <span class="entity-name">${state.data.playerName}</span>
              <span id="player-hp-text" class="hp-count">100 / 100 HP</span>
            </div>
            <div class="health-track">
              <div id="player-health-fill" class="health-fill player-fill" style="width: 100%"></div>
            </div>
            <div id="player-dmg-slot" class="damage-pop"></div>
          </div>
        </header>

        <!-- Boss Avatar & Speech Stage -->
        <section class="boss-stage">
          <div class="boss-avatar-wrapper">
            <div class="boss-animated-avatar">${b.avatar}</div>
          </div>
          <div class="boss-speech-bubble" id="boss-taunt-bubble">
            "${b.taunts[0]}"
          </div>
        </section>

        <!-- Boss Timer Bar -->
        <div class="boss-turn-timer-track">
          <div id="boss-timer-fill" class="boss-timer-fill" style="width: 100%"></div>
        </div>

        <!-- Shortcut Prompt -->
        <main class="boss-target-card" id="boss-target-slot">
          <!-- Populated by updateArena() -->
        </main>
      </div>
    `;
  }

  updateArena() {
    const slot = this.container.querySelector('#boss-target-slot');
    if (!slot || !this.currentShortcut) return;

    slot.innerHTML = `
      <div class="boss-prompt-inner">
        <span class="boss-cue-label">COUNTER ATTACK TARGET:</span>
        <h2 class="boss-strike-name">${this.currentShortcut.name}</h2>
        <p class="boss-strike-desc">${this.currentShortcut.description}</p>
        <div class="boss-input-guide">
          <span class="pulse-fire">${ICONS.bolt}</span>
          <span>Execute the hotkey combo to strike the boss!</span>
        </div>
      </div>
    `;
    this.updateHealthBars();
  }

  handleBossVictory() {
    this.isFighting = false;
    this.stopAttackTimer();
    sound.bossDefeat();

    state.recordBossDefeat(this.activeBoss.id, this.activeBoss.xpReward);

    this.container.innerHTML = `
      <div class="boss-victory-card">
        <div class="victory-crown">${ICONS.crown} BOSS SLAIN!</div>
        <h2 class="victory-boss-name">${this.activeBoss.name} Has Been Defeated!</h2>
        
        <div class="boss-quote-box">
          <em>"${this.activeBoss.deathQuote}"</em>
        </div>

        <div class="victory-rewards-banner">
          <span class="victory-xp">+${this.activeBoss.xpReward} XP REWARDED!</span>
          <span class="victory-badge">${ICONS.shield} Boss Slayer Badge Unlocked</span>
        </div>

        <div class="victory-actions">
          <button class="btn-primary" id="btn-boss-victory-return">Return to Boss Arena</button>
          <button class="btn-secondary" id="btn-boss-home">Back to Home</button>
        </div>
      </div>
    `;

    const retBtn = this.container.querySelector('#btn-boss-victory-return');
    if (retBtn) retBtn.addEventListener('click', () => this.renderLobby());

    const homeBtn = this.container.querySelector('#btn-boss-home');
    if (homeBtn) homeBtn.addEventListener('click', () => this.navigate('home'));
  }

  handleBossDefeat() {
    this.isFighting = false;
    this.stopAttackTimer();
    sound.wrong();

    this.container.innerHTML = `
      <div class="boss-defeat-card">
        <div class="defeat-badge">DEFEATED</div>
        <h2>${this.activeBoss.name} Overpowered You!</h2>
        <p>Do not give up! Practice your shortcut reflexes and try again.</p>

        <div class="results-actions">
          <button class="btn-primary" id="btn-boss-retry">Retry Battle</button>
          <button class="btn-secondary" id="btn-boss-lobby-back">Back to Arena</button>
        </div>
      </div>
    `;

    const retryBtn = this.container.querySelector('#btn-boss-retry');
    if (retryBtn) retryBtn.addEventListener('click', () => this.startBossFight(this.activeBoss));

    const backBtn = this.container.querySelector('#btn-boss-lobby-back');
    if (backBtn) backBtn.addEventListener('click', () => this.renderLobby());
  }
}
