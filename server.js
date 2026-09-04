/**
 * SHORTCUT MASTER - Production Web & REST API Server
 * Built with native Node.js HTTP module for zero-dependency portability.
 * Serves static web assets and provides REST endpoints for statistics & health.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || '8080', 10);
const HOST = process.env.HOST || '0.0.0.0';

// MIME Types Dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown; charset=utf-8',
  '.zip': 'application/zip'
};

// In-Memory Leaderboard & Server Metrics Store
const serverMetrics = {
  startedAt: new Date().toISOString(),
  totalRequests: 0,
  activeSessions: 0,
  endpoints: {
    '/api/health': 0,
    '/api/metrics': 0,
    '/api/leaderboard': 0,
    '/api/shortcuts': 0
  }
};

const leaderboardData = [
  { rank: 1, username: 'ApexKernel', level: 7, score: 9850, streak: 42, avatar: 'crown' },
  { rank: 2, username: 'CyberValkyrie', level: 6, score: 8420, streak: 35, avatar: 'flame' },
  { rank: 3, username: 'SyntaxSlayer', level: 6, score: 7910, streak: 28, avatar: 'terminal' },
  { rank: 4, username: 'QuantumKey', level: 5, score: 6200, streak: 22, avatar: 'bolt' },
  { rank: 5, username: 'TerminalGhost', level: 5, score: 5890, streak: 19, avatar: 'shield' }
];

// Helper to send JSON responses
function sendJson(res, statusCode, payload) {
  const json = JSON.stringify(payload, null, 2);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-cache'
  });
  res.end(json);
}

// HTTP Server Handler
const server = http.createServer((req, res) => {
  serverMetrics.totalRequests++;

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // ==================== REST API ROUTES ====================

  // GET /api/health
  if (pathname === '/api/health') {
    serverMetrics.endpoints['/api/health']++;
    sendJson(res, 200, {
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: '2.0.0',
      service: 'Shortcut Master Production Server'
    });
    return;
  }

  // GET /api/metrics
  if (pathname === '/api/metrics') {
    serverMetrics.endpoints['/api/metrics']++;
    const memory = process.memoryUsage();
    sendJson(res, 200, {
      serverMetrics,
      memory: {
        rssMb: Math.round(memory.rss / (1024 * 1024)),
        heapUsedMb: Math.round(memory.heapUsed / (1024 * 1024)),
        heapTotalMb: Math.round(memory.heapTotal / (1024 * 1024))
      },
      nodeVersion: process.version,
      platform: process.platform
    });
    return;
  }

  // GET /api/leaderboard
  if (pathname === '/api/leaderboard') {
    serverMetrics.endpoints['/api/leaderboard']++;
    sendJson(res, 200, {
      season: 'Season 1 - Arcade Grand Prix',
      lastUpdated: new Date().toISOString(),
      leaderboard: leaderboardData
    });
    return;
  }

  // ==================== STATIC FILE DELIVERY ====================

  // Resolve safe filesystem path
  let safePath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\' || safePath === '') {
    safePath = 'index.html';
  } else if (safePath.startsWith('/') || safePath.startsWith('\\')) {
    safePath = safePath.slice(1);
  }

  const filePath = path.join(__dirname, safePath);

  // Security check: ensure path stays within workspace root
  if (!filePath.startsWith(__dirname)) {
    sendJson(res, 403, { error: 'Forbidden path access' });
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for client-side single page app routing: if html request, serve index.html
      const ext = path.extname(filePath);
      if (!ext || ext === '.html') {
        const indexPath = path.join(__dirname, 'index.html');
        fs.readFile(indexPath, (indexErr, content) => {
          if (indexErr) {
            sendJson(res, 404, { error: 'Not Found' });
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
          }
        });
        return;
      }

      sendJson(res, 404, { error: `File not found: ${pathname}` });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`========================================================`);
  console.log(`⚡ SHORTCUT MASTER PRODUCTION SERVER RUNNING`);
  console.log(`🎮 Game URL:    http://localhost:${PORT}`);
  console.log(`🩺 Health API:  http://localhost:${PORT}/api/health`);
  console.log(`📊 Metrics API: http://localhost:${PORT}/api/metrics`);
  console.log(`🏆 Leaderboard: http://localhost:${PORT}/api/leaderboard`);
  console.log(`========================================================`);
});

export default server;
