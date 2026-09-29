/**
 * SHORTCUT MASTER - Progression & Tier Hierarchy Unit Tests
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { LEVEL_TIERS, state } from '../js/engine/state.js';
import { SHORTCUTS_DATA, getShortcutById } from '../js/data/shortcuts.js';

test('Tier Progression: all 7 tiers are defined in strict ascending order', () => {
  assert.equal(LEVEL_TIERS.length, 7);
  const expectedTiers = ['Basic', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Apex'];
  LEVEL_TIERS.forEach((tier, idx) => {
    assert.equal(tier.level, idx + 1);
    assert.equal(tier.tierName, expectedTiers[idx]);
    if (idx > 0) {
      assert.ok(tier.minXp > LEVEL_TIERS[idx - 1].minXp);
    }
  });
});

test('Tier Progression: player advances from Silver to Gold at 900 XP', () => {
  // Test Silver threshold (450 to 899 XP)
  state.data.xp = 600;
  state.updateLevel();
  assert.equal(state.data.level, 3);
  assert.equal(state.getCurrentTier().tierName, 'Silver');

  // Test Gold promotion (900 XP) - user is never stuck at Level 3
  state.data.xp = 950;
  state.updateLevel();
  assert.equal(state.data.level, 4);
  assert.equal(state.getCurrentTier().tierName, 'Gold');

  // Test Platinum promotion (1600 XP)
  state.data.xp = 1800;
  state.updateLevel();
  assert.equal(state.data.level, 5);
  assert.equal(state.getCurrentTier().tierName, 'Platinum');
});

test('Tier Progress: getLevelProgress calculates percentage and remaining XP accurately', () => {
  // At Level 3 (minXp: 450, next: 900, delta: 450)
  state.data.xp = 675; // 225 XP into level = 50%
  state.updateLevel();
  const progress = state.getLevelProgress();

  assert.equal(progress.percent, 50);
  assert.equal(progress.currentXp, 225);
  assert.equal(progress.neededXp, 450);
  assert.equal(progress.remainingXp, 225);
  assert.equal(progress.nextTier.tierName, 'Gold');
});

test('Shortcut Safety: dangerous and OS-captured hotkeys are marked isRestricted', () => {
  const ctrlW = getShortcutById('ctrl-w');
  assert.ok(ctrlW, 'ctrl-w shortcut must exist');
  assert.equal(ctrlW.isRestricted, true, 'ctrl-w must have isRestricted: true to prevent closing browser tabs');

  const winL = getShortcutById('win-l');
  assert.ok(winL, 'win-l shortcut must exist');
  assert.equal(winL.isRestricted, true, 'win-l must have isRestricted: true to prevent locking Windows PC');
});
