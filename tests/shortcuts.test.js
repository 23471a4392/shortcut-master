/**
 * SHORTCUT MASTER - Shortcuts Database Integrity Tests
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { SHORTCUTS_DATA, SHORTCUT_CATEGORIES, getShortcutById, getShortcutsByCategory } from '../js/data/shortcuts.js';

test('Shortcuts Database: all shortcuts have required fields', () => {
  assert.ok(SHORTCUTS_DATA.length > 50, 'Database must have at least 50 core shortcuts');

  SHORTCUTS_DATA.forEach(s => {
    assert.ok(s.id, `Shortcut must have an id: ${JSON.stringify(s)}`);
    assert.ok(s.name, `Shortcut ${s.id} must have a name`);
    assert.ok(Array.isArray(s.keys), `Shortcut ${s.id} must have keys array`);
    assert.ok(Array.isArray(s.displayKeys), `Shortcut ${s.id} must have displayKeys array`);
    assert.ok(s.whatItDoes, `Shortcut ${s.id} must have whatItDoes explanation`);
    assert.ok(s.whenToUse, `Shortcut ${s.id} must have whenToUse explanation`);
    assert.ok(s.memoryTip, `Shortcut ${s.id} must have a memoryTip`);
    assert.ok(SHORTCUT_CATEGORIES[s.category], `Shortcut ${s.id} has valid category: ${s.category}`);
  });
});

test('Shortcuts Database: lookup functions return correct records', () => {
  const save = getShortcutById('ctrl-s');
  assert.ok(save);
  assert.equal(save.id, 'ctrl-s');
  assert.equal(save.name, 'Save');

  const basicList = getShortcutsByCategory('basic');
  assert.ok(basicList.length > 0);
  assert.ok(basicList.every(s => s.category === 'basic'));
});
