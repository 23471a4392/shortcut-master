/**
 * SHORTCUT MASTER - Auth Engine Unit Tests
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { auth, USER_AVATARS } from '../js/engine/auth.js';

test('Auth Engine: avatar library contains essential avatars', () => {
  assert.ok(USER_AVATARS.length >= 6);
  const ids = USER_AVATARS.map(a => a.id);
  assert.ok(ids.includes('bolt'));
  assert.ok(ids.includes('flame'));
  assert.ok(ids.includes('crown'));
  assert.ok(ids.includes('shield'));
});

test('Auth Engine: guest login initializes session', () => {
  const res = auth.guestLogin();
  assert.ok(res.success);
  assert.equal(auth.getCurrentUser().isGuest, true);
  assert.equal(auth.getCurrentUser().username, 'Guest Player');
});

test('Auth Engine: password hashing produces valid hex string', async () => {
  const hash = await auth.hashPassword('SecretPass123');
  assert.ok(typeof hash === 'string');
  assert.ok(hash.length > 8);
});
