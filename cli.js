#!/usr/bin/env node
/**
 * SHORTCUT MASTER - Interactive Terminal CLI Game Edition
 * Play Shortcut Master directly in your terminal/console with real-time keypress challenges.
 */

import readline from 'node:readline';

// ASCII Banner
const BANNER = `
\x1b[36m╔═══════════════════════════════════════════════════════════════╗
║   \x1b[1m\x1b[32m⚡ SHORTCUT MASTER — TERMINAL ARCADE EDITION\x1b[0m\x1b[36m                 ║
║   Master real keyboard muscle memory directly in your CLI!    ║
╚═══════════════════════════════════════════════════════════════╝\x1b[0m
`;

// Sample CLI Drills
const CLI_SHORTCUT_DRILLS = [
  { name: 'Save Document', keys: 'Ctrl + S', tip: 'S for Save' },
  { name: 'Undo Mistake', keys: 'Ctrl + Z', tip: 'Z for Zero/Reset' },
  { name: 'Redo Action', keys: 'Ctrl + Y', tip: 'Y for Yes, do it again' },
  { name: 'Copy to Clipboard', keys: 'Ctrl + C', tip: 'C for Copy' },
  { name: 'Paste from Clipboard', keys: 'Ctrl + V', tip: 'V points down like a wedge' },
  { name: 'Cut Selected Text', keys: 'Ctrl + X', tip: 'X looks like scissors' },
  { name: 'Select All', keys: 'Ctrl + A', tip: 'A for All' },
  { name: 'Find in Document', keys: 'Ctrl + F', tip: 'F for Find' },
  { name: 'New Browser Tab', keys: 'Ctrl + T', tip: 'T for Tab' },
  { name: 'Reopen Closed Tab', keys: 'Ctrl + Shift + T', tip: 'Shift reverses the tab closure' },
  { name: 'Jump to Address Bar', keys: 'Ctrl + L', tip: 'L for Location bar' },
  { name: 'Toggle Terminal', keys: 'Ctrl + `', tip: 'Backtick toggles drawer in VS Code' }
];

class TerminalArcade {
  constructor() {
    this.score = 0;
    this.streak = 0;
    this.currentIndex = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start() {
    console.clear();
    console.log(BANNER);

    const args = process.argv.slice(2);
    if (args.includes('--help') || args.includes('-h')) {
      console.log('Usage:');
      console.log('  node cli.js          Start interactive terminal game');
      console.log('  node cli.js --list   List all supported core shortcuts');
      console.log('  node cli.js --help   Display this help guide\n');
      process.exit(0);
    }

    if (args.includes('--list') || args.includes('-l')) {
      console.log('\x1b[1m\x1b[33mSupported Core Shortcut Library:\x1b[0m');
      CLI_SHORTCUT_DRILLS.forEach((s, idx) => {
        console.log(`  ${(idx + 1).toString().padStart(2, ' ')}. \x1b[32m${s.keys.padEnd(20, ' ')}\x1b[0m — ${s.name}`);
      });
      console.log('');
      process.exit(0);
    }

    console.log('\x1b[1mType the exact shortcut keys (e.g. "Ctrl+S" or "Ctrl + S") to strike the targets!\x1b[0m');
    console.log('Type \x1b[31mexit\x1b[0m to quit anytime.\n');

    this.askQuestion();
  }

  askQuestion() {
    if (this.currentIndex >= CLI_SHORTCUT_DRILLS.length) {
      this.finish();
      return;
    }

    const current = CLI_SHORTCUT_DRILLS[this.currentIndex];
    console.log(`\x1b[34m[Drill ${this.currentIndex + 1}/${CLI_SHORTCUT_DRILLS.length}]\x1b[0m Goal: \x1b[1m${current.name}\x1b[0m`);
    const startTime = Date.now();

    this.rl.question('\x1b[33m⚡ Enter Shortcut Combo: \x1b[0m', (answer) => {
      const trimmed = (answer || '').trim();
      if (trimmed.toLowerCase() === 'exit' || trimmed.toLowerCase() === 'quit') {
        this.finish();
        return;
      }

      const elapsed = Date.now() - startTime;
      const normalize = str => str.toLowerCase().replace(/[\s\+\-]/g, '');
      const isCorrect = normalize(trimmed) === normalize(current.keys);

      if (isCorrect) {
        this.streak++;
        const speedBonus = elapsed < 2000 ? 50 : 0;
        const pts = 100 + speedBonus;
        this.score += pts;
        console.log(`\x1b[32m✓ CORRECT! (${current.keys})\x1b[0m +${pts} pts \x1b[90m(${elapsed}ms)\x1b[0m | Streak: \x1b[33m${this.streak}x\x1b[0m\n`);
      } else {
        this.streak = 0;
        console.log(`\x1b[31m✗ MISSED!\x1b[0m Correct combination was: \x1b[1m${current.keys}\x1b[0m (Tip: ${current.tip})\n`);
      }

      this.currentIndex++;
      this.askQuestion();
    });
  }

  finish() {
    console.log('\x1b[36m===============================================================\x1b[0m');
    console.log(`\x1b[1m\x1b[32mSESSION COMPLETED!\x1b[0m Final Score: \x1b[1m\x1b[33m${this.score} PTS\x1b[0m`);
    console.log('Launch the full graphical web experience: \x1b[36mhttp://localhost:8080\x1b[0m');
    console.log('\x1b[36m===============================================================\x1b[0m\n');
    this.rl.close();
    process.exit(0);
  }
}

// Run standalone
const arcade = new TerminalArcade();
arcade.start();
