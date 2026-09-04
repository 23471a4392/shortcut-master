/**
 * SHORTCUT MASTER - Keyboard Normalization Unit Tests
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { keyboard } from '../js/engine/keyboard.js';

test('Keyboard Normalization: normalizes key events correctly', () => {
  assert.equal(keyboard.normalizeKeyCode({ code: 'KeyS', key: 's' }), 'KeyS');
  assert.equal(keyboard.normalizeKeyCode({ code: 'KeyA', key: 'A' }), 'KeyA');
  assert.equal(keyboard.normalizeKeyCode({ key: 's' }), 'KeyS');
  assert.equal(keyboard.normalizeKeyCode({ key: '1' }), 'Digit1');
});

test('Keyboard Formatting: formats display labels for keys', () => {
  assert.equal(keyboard.formatDisplayKey('KeyS'), 'S');
  assert.equal(keyboard.formatDisplayKey('Digit1'), '1');
  assert.equal(keyboard.formatDisplayKey('Escape'), 'Esc');
  assert.equal(keyboard.formatDisplayKey('ArrowLeft'), '←');
});

test('Keyboard Matching: matches combo against target shortcut', () => {
  const target = {
    keys: ['Control', 'KeyS'],
    displayKeys: ['Ctrl', 'S']
  };

  const matchingCombo = {
    keys: ['Control', 'KeyS'],
    displayTokens: ['Ctrl', 'S']
  };

  const mismatchCombo = {
    keys: ['KeyS'],
    displayTokens: ['S']
  };

  assert.equal(keyboard.matchesShortcut(matchingCombo, target), true);
  assert.equal(keyboard.matchesShortcut(mismatchCombo, target), false);
});
