/**
 * SHORTCUT MASTER - Boss Battles & Phases Unit Tests
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { BOSSES_DATA, getBossById } from '../js/data/bosses.js';
import { getShortcutById } from '../js/data/shortcuts.js';

test('Bosses Database: all bosses have valid attributes and phases', () => {
  assert.ok(BOSSES_DATA.length >= 4, 'Should have at least 4 unique boss encounters');

  BOSSES_DATA.forEach(boss => {
    assert.ok(boss.id, 'Boss must have an id');
    assert.ok(boss.name, 'Boss must have a name');
    assert.ok(boss.maxHealth > 0, `Boss ${boss.id} must have positive maxHealth`);
    assert.ok(boss.timePerAttack > 0, `Boss ${boss.id} must have positive timePerAttack`);
    assert.ok(Array.isArray(boss.phases) && boss.phases.length >= 2, `Boss ${boss.id} must have at least 2 phases`);
    assert.ok(boss.xpReward > 0, `Boss ${boss.id} must have positive xpReward`);

    // Verify all allowed shortcuts exist in shortcuts database
    boss.phases.forEach((phase, idx) => {
      assert.ok(phase.name, `Phase ${idx} of ${boss.id} must have a name`);
      assert.ok(phase.healthThreshold <= boss.maxHealth, `Phase ${idx} threshold must not exceed max health`);
      assert.ok(phase.allowedShortcuts.length > 0, `Phase ${idx} must specify allowed shortcuts`);

      phase.allowedShortcuts.forEach(scId => {
        const sc = getShortcutById(scId);
        assert.ok(sc, `Shortcut ${scId} in boss ${boss.id} phase ${idx} must exist in SHORTCUTS_DATA`);
      });
    });
  });
});

test('Boss Phase Progression: phase thresholds are ordered strictly descending', () => {
  BOSSES_DATA.forEach(boss => {
    for (let i = 1; i < boss.phases.length; i++) {
      const prevPhase = boss.phases[i - 1];
      const currPhase = boss.phases[i];
      assert.ok(
        currPhase.healthThreshold < prevPhase.healthThreshold,
        `Boss ${boss.id} phase ${i} threshold (${currPhase.healthThreshold}) must be strictly less than phase ${i - 1} (${prevPhase.healthThreshold})`
      );
    }
  });
});

test('Boss Lookup: retrieves correct boss by ID', () => {
  const dragon = getBossById('syntax-dragon');
  assert.ok(dragon);
  assert.equal(dragon.name, 'The Syntax Dragon');
  assert.equal(dragon.phases[1].healthThreshold, 75);

  const missing = getBossById('non-existent-boss');
  assert.equal(missing, undefined);
});
