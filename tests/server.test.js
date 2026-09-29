/**
 * SHORTCUT MASTER - Production Server & Security Integration Tests
 */

import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import server from '../server.js';

after(() => {
  server.close();
});

function request(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

test('Server API: GET /api/health returns healthy payload with security headers', async () => {
  const addr = server.address();
  const port = addr && addr.port ? addr.port : 8080;

  const res = await request({
    hostname: '127.0.0.1',
    port,
    path: '/api/health',
    method: 'GET'
  });

  assert.equal(res.statusCode, 200);
  assert.equal(res.headers['x-content-type-options'], 'nosniff');
  assert.equal(res.headers['x-frame-options'], 'SAMEORIGIN');

  const json = JSON.parse(res.body);
  assert.equal(json.status, 'healthy');
  assert.equal(json.version, '2.0.0');
});

test('Server API: GET /api/metrics returns system metrics', async () => {
  const addr = server.address();
  const port = addr && addr.port ? addr.port : 8080;

  const res = await request({
    hostname: '127.0.0.1',
    port,
    path: '/api/metrics',
    method: 'GET'
  });

  assert.equal(res.statusCode, 200);
  const json = JSON.parse(res.body);
  assert.ok(json.memory);
  assert.ok(json.nodeVersion);
});

test('Server API: GET /api/leaderboard returns active season leaderboard', async () => {
  const addr = server.address();
  const port = addr && addr.port ? addr.port : 8080;

  const res = await request({
    hostname: '127.0.0.1',
    port,
    path: '/api/leaderboard',
    method: 'GET'
  });

  assert.equal(res.statusCode, 200);
  const json = JSON.parse(res.body);
  assert.ok(Array.isArray(json.leaderboard));
  assert.ok(json.leaderboard.length >= 5);
});

test('Server Static: GET /favicon.ico serves clean SVG without 404', async () => {
  const addr = server.address();
  const port = addr && addr.port ? addr.port : 8080;

  const res = await request({
    hostname: '127.0.0.1',
    port,
    path: '/favicon.ico',
    method: 'GET'
  });

  assert.equal(res.statusCode, 200);
  assert.ok(res.headers['content-type'].includes('image/svg+xml'));
  assert.ok(res.body.includes('<svg'));
});

test('Server Security: Malformed URI path returns 400 instead of crashing', async () => {
  const addr = server.address();
  const port = addr && addr.port ? addr.port : 8080;

  const res = await request({
    hostname: '127.0.0.1',
    port,
    path: '/%c0%ae/%c0%ae/malformed',
    method: 'GET'
  });

  assert.equal(res.statusCode, 400);
  const json = JSON.parse(res.body);
  assert.ok(json.error.includes('Malformed URI'));
});
