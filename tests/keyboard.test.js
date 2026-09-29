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

test('Keyboard Chords: correctly identifies modifier-only state vs full chord', () => {
  // Simulating user holding Ctrl key alone
  const modOnlyEvent = {
    ctrlKey: true,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    key: 'Control',
    code: 'ControlLeft'
  };

  const modCombo = keyboard.getCurrentCombo(modOnlyEvent);
  assert.equal(modCombo.isModifierOnly, true);
  assert.equal(modCombo.hasNonModifier, false);
  assert.deepEqual(modCombo.keys, ['Control']);

  // Simulating user striking 'C' with Ctrl held
  const fullChordEvent = {
    ctrlKey: true,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    key: 'c',
    code: 'KeyC'
  };

  const fullCombo = keyboard.getCurrentCombo(fullChordEvent);
  assert.equal(fullCombo.isModifierOnly, false);
  assert.equal(fullCombo.hasNonModifier, true);
  assert.deepEqual(fullCombo.keys, ['Control', 'KeyC']);
});

test('Keyboard Isolation: ignores keystrokes inside input fields', () => {
  let gameListenerFired = false;
  keyboard.setGameListener(() => {
    gameListenerFired = true;
  });

  const inputEvent = {
    ctrlKey: true,
    key: 'c',
    code: 'KeyC',
    target: { tagName: 'INPUT' },
    preventDefault() {}
  };

  keyboard.handleKeyDown(inputEvent);
  assert.equal(gameListenerFired, false, 'Keyboard listener must not fire when target is INPUT');
  keyboard.clearGameListener();
});
