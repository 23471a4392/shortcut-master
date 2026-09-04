/**
 * SHORTCUT MASTER - Missions Campaign Data
 * 40+ practical, scenario-driven missions organized across progressive chapters.
 */

import { ICONS } from '../engine/icons.js';

export const MISSION_CHAPTERS = [
  {
    id: 'ch-1',
    title: 'Chapter 1: The Office Apprentice',
    description: 'Master the fundamental editing shortcuts used by every computer power user.',
    badge: ICONS.bolt,
    color: '#00f08a'
  },
  {
    id: 'ch-2',
    title: 'Chapter 2: Browser Prodigy',
    description: 'Speed through tabs, downloads, bookmarks, and web navigation without reaching for the mouse.',
    badge: ICONS.globe,
    color: '#ec4899'
  },
  {
    id: 'ch-3',
    title: 'Chapter 3: Text Navigator & Stylist',
    description: 'Fly across paragraphs, select whole words, and style documents at lightspeed.',
    badge: ICONS.navigate,
    color: '#a855f7'
  },
  {
    id: 'ch-4',
    title: 'Chapter 4: Windows & OS Power Operator',
    description: 'Manage windows, lock stations, capture screens, and switch apps like a pro.',
    badge: ICONS.windows,
    color: '#38bdf8'
  },
  {
    id: 'ch-5',
    title: 'Chapter 5: Code Commander & Terminal Hero',
    description: 'Master developer shortcuts, command palettes, terminals, and multiline manipulation.',
    badge: ICONS.terminal,
    color: '#f97316'
  }
];

export const MISSIONS_DATA = [
  // ==================== CHAPTER 1 ====================
  {
    id: 'm-1-1',
    chapterId: 'ch-1',
    title: 'Disaster Prevention',
    scenario: 'You just typed the final closing paragraph of a crucial 20-page client report. Save your progress immediately to avoid losing everything!',
    targetShortcutId: 'ctrl-s',
    hint: 'Think of the first letter in "Save". Hold down the Control key and tap that letter.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Document saved successfully: "client_report_final.docx"'
  },
  {
    id: 'm-1-2',
    chapterId: 'ch-1',
    title: 'The Accidental Wipeout',
    scenario: 'Catastrophe! Your elbow hit the delete key and erased an entire table of quarterly financial numbers! Restore the lost work instantly.',
    targetShortcutId: 'ctrl-z',
    hint: 'Use the universal "Undo" combination (Control + Z).',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Action undone! All quarterly financial tables restored.'
  },
  {
    id: 'm-1-3',
    chapterId: 'ch-1',
    title: 'Second Thoughts',
    scenario: 'Wait! You hit Undo one time too many and reversed a correction you actually wanted to keep. Redo the action!',
    targetShortcutId: 'ctrl-y',
    hint: 'Redo is the forward counterpart to Undo. Control + Y.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'Action redone! The correction has been re-applied.'
  },
  {
    id: 'm-1-4',
    chapterId: 'ch-1',
    title: 'Total Document Grab',
    scenario: 'You want to copy an entire article into another workspace. Rather than dragging your mouse across 500 lines, select everything in one keystroke.',
    targetShortcutId: 'ctrl-a',
    hint: 'Select "All" starts with A. Hold Control and press A.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Entire document selected (1,420 words, 8,920 characters).'
  },
  {
    id: 'm-1-5',
    chapterId: 'ch-1',
    title: 'Clipboard Duplication',
    scenario: 'You have highlighted a key password string. Copy it to your clipboard without removing it from the screen.',
    targetShortcutId: 'ctrl-c',
    hint: 'Copy starts with C. Control + C.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Copied to clipboard: "XK9#mQ2$8Lp!"'
  },
  {
    id: 'm-1-6',
    chapterId: 'ch-1',
    title: 'Deposit Content',
    scenario: 'You are now in the destination field. Paste the password you just copied from your clipboard.',
    targetShortcutId: 'ctrl-v',
    hint: 'Paste points downward like the letter V. Control + V.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Pasted: "XK9#mQ2$8Lp!" into authentication box.'
  },
  {
    id: 'm-1-7',
    chapterId: 'ch-1',
    title: 'Relocation Extraction',
    scenario: 'A sensitive paragraph is in the public section of your draft. Cut it out of the document so you can move it into the confidential appendix.',
    targetShortcutId: 'ctrl-x',
    hint: 'X looks like scissors cutting paper. Control + X.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'Text cut to clipboard. Source paragraph cleared.'
  },
  {
    id: 'm-1-8',
    chapterId: 'ch-1',
    title: 'Keyword Hunt',
    scenario: 'Your supervisor asked for the revenue figure on page 42. Open the quick search box to find the word "Revenue".',
    targetShortcutId: 'ctrl-f',
    hint: 'Find starts with F. Control + F.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'Search panel opened. 14 matches found for "Revenue".'
  },
  {
    id: 'm-1-9',
    chapterId: 'ch-1',
    title: 'Physical Copy Required',
    scenario: 'The boardroom meeting starts in 2 minutes and the director requested a paper handout of the executive summary. Open the print dialog!',
    targetShortcutId: 'ctrl-p',
    hint: 'Print starts with P. Control + P.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'Print dialog opened: Sending 2 copies to "Boardroom Laser Jet".'
  },
  {
    id: 'm-1-10',
    chapterId: 'ch-1',
    title: 'Batch Typo Overhaul',
    scenario: 'A company product was rebranded from "Apex 1.0" to "Apex Pro". Open Find and Replace to fix all 47 occurrences at once.',
    targetShortcutId: 'ctrl-h',
    hint: 'Replace dialog / History key. Control + H.',
    xpReward: 120,
    difficulty: 'medium',
    simulatedOutput: 'Replace panel active: "Apex 1.0" -> "Apex Pro" (47 instances replaced).'
  },

  // ==================== CHAPTER 2 ====================
  {
    id: 'm-2-1',
    chapterId: 'ch-2',
    title: 'Spur-of-the-Moment Search',
    scenario: 'While reading an article about quantum computing, you encounter an unfamiliar term. Open a new browser tab without leaving this page.',
    targetShortcutId: 'ctrl-t',
    hint: 'New Tab starts with T. Control + T.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'New tab created & cursor focused in address bar.'
  },
  {
    id: 'm-2-2',
    chapterId: 'ch-2',
    title: 'Tab Overload Cleanup',
    scenario: 'You have 34 browser tabs open and your computer fans are screaming. Close the active, unnecessary tab instantly.',
    targetShortcutId: 'ctrl-w',
    hint: 'Wipe/Window tab close: Control + W.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'Active tab closed. Memory freed: 140MB.'
  },
  {
    id: 'm-2-3',
    chapterId: 'ch-2',
    title: 'The Tab Resurrection',
    scenario: 'Horror! You just accidentally closed the tab holding your flight confirmation itinerary! Reopen the closed tab immediately.',
    targetShortcutId: 'ctrl-shift-t',
    hint: 'Add Shift to the tab shortcut to reverse the closure. Control + Shift + T.',
    xpReward: 150,
    difficulty: 'hard',
    simulatedOutput: 'Resurrected tab: "Flight Itinerary #AA-9421" fully restored!'
  },
  {
    id: 'm-2-4',
    chapterId: 'ch-2',
    title: 'Hands-Free Address Bar',
    scenario: 'You want to navigate directly to "github.com". Jump your cursor straight into the browser address bar without touching the mouse.',
    targetShortcutId: 'ctrl-l',
    hint: 'L stands for Location bar. Control + L.',
    xpReward: 120,
    difficulty: 'medium',
    simulatedOutput: 'Address bar selected: Type your URL now.'
  },
  {
    id: 'm-2-5',
    chapterId: 'ch-2',
    title: 'Ticket Drop Countdown',
    scenario: 'Concert tickets go on sale at exactly 10:00:00 AM. The clock just struck 10! Refresh the ticket webpage immediately.',
    targetShortcutId: 'ctrl-r',
    hint: 'Refresh / Reload: Control + R.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'Page reloaded: "Tickets Now Available! Buy Now!"'
  },
  {
    id: 'm-2-6',
    chapterId: 'ch-2',
    title: 'Bust the Stale Cache',
    scenario: 'You deployed a CSS stylesheet update to your server, but your browser is still displaying cached old button styles. Force a hard reload!',
    targetShortcutId: 'ctrl-shift-r',
    hint: 'Add Shift to reload to bypass the cache. Control + Shift + R.',
    xpReward: 150,
    difficulty: 'hard',
    simulatedOutput: 'Hard reload complete: Cached assets purged, new CSS loaded.'
  },
  {
    id: 'm-2-7',
    chapterId: 'ch-2',
    title: 'Keep It for Later',
    scenario: 'You discovered a goldmine tutorial on mastering regular expressions. Bookmark this page into your favorites library.',
    targetShortcutId: 'ctrl-d',
    hint: 'Deposit bookmark: Control + D.',
    xpReward: 110,
    difficulty: 'easy',
    simulatedOutput: 'Page bookmarked to "Tech / Learning" folder.'
  },
  {
    id: 'm-2-8',
    chapterId: 'ch-2',
    title: 'Rapid Tab Hopper',
    scenario: 'You have three reference documents side by side. Switch to the next tab to the right.',
    targetShortcutId: 'ctrl-tab',
    hint: 'Cycle tabs forward with Control + Tab.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'Switched to next tab: "API Reference v2".'
  },
  {
    id: 'm-2-9',
    chapterId: 'ch-2',
    title: 'The Downloads Drawer',
    scenario: 'You just clicked download on a financial invoice PDF. Open the browser Downloads manager to view the downloaded file.',
    targetShortcutId: 'ctrl-j',
    hint: 'Control + J opens Downloads in Chrome/Edge/Firefox.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'Downloads hub opened: "invoice_9942.pdf" (1.2 MB).'
  },
  {
    id: 'm-2-10',
    chapterId: 'ch-2',
    title: 'Microscopic Text Rescue',
    scenario: 'An archaic web page has tiny 8px font that hurts your eyes. Zoom in to make the text readable.',
    targetShortcutId: 'ctrl-plus',
    hint: 'Hold Control and tap + (Plus/Equal).',
    xpReward: 120,
    difficulty: 'easy',
    simulatedOutput: 'Zoom level increased to 125%.'
  },

  // ==================== CHAPTER 3 ====================
  {
    id: 'm-3-1',
    chapterId: 'ch-3',
    title: 'Headline Impact',
    scenario: 'Make the title text "**CONFIDENTIAL DISCLOSURE**" bold so stakeholders immediately notice its urgency.',
    targetShortcutId: 'ctrl-b',
    hint: 'Bold text starts with B. Control + B.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Selected text bolded: **CONFIDENTIAL DISCLOSURE**.'
  },
  {
    id: 'm-3-2',
    chapterId: 'ch-3',
    title: 'Literary Emphasis',
    scenario: 'You are quoting Shakespeare in your essay. Italicize the title "*Romeo and Juliet*".',
    targetShortcutId: 'ctrl-i',
    hint: 'Italics starts with I. Control + I.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Selected text italicized: *Romeo and Juliet*.'
  },
  {
    id: 'm-3-3',
    chapterId: 'ch-3',
    title: 'The Underlined Notice',
    scenario: 'Underline the warning label "<u>DO NOT DISTRIBUTE</u>" for statutory compliance.',
    targetShortcutId: 'ctrl-u',
    hint: 'Underline starts with U. Control + U.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Underline applied to selection: <u>DO NOT DISTRIBUTE</u>.'
  },
  {
    id: 'm-3-4',
    chapterId: 'ch-3',
    title: 'The Web Hyperlink',
    scenario: 'Turn the highlighted words "Visit Project Website" into a clickable hyperlink.',
    targetShortcutId: 'ctrl-k',
    hint: 'K is the universal link shortcut in Docs/Slack/Notion. Control + K.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'Hyperlink insertion popup: [Visit Project Website](https://example.com).'
  },
  {
    id: 'm-3-5',
    chapterId: 'ch-3',
    title: 'To the Beginning of the Line',
    scenario: 'Your cursor is at the far right of a 120-character line. Jump your cursor to the very beginning of this line in one tap.',
    targetShortcutId: 'home',
    hint: 'Press the dedicated Home key.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Cursor placed at column 0 (beginning of line).'
  },
  {
    id: 'm-3-6',
    chapterId: 'ch-3',
    title: 'To the Finish Line',
    scenario: 'You need to add a closing semicolon at the end of the line. Jump your cursor straight to the line end.',
    targetShortcutId: 'end',
    hint: 'Press the dedicated End key.',
    xpReward: 100,
    difficulty: 'easy',
    simulatedOutput: 'Cursor placed at the very end of the line.'
  },
  {
    id: 'm-3-7',
    chapterId: 'ch-3',
    title: 'Summon the Document Apex',
    scenario: 'You are down on line 4,000 of a giant code file and need to check the top import statements. Jump to the absolute beginning of the document.',
    targetShortcutId: 'ctrl-home',
    hint: 'Combine Control with the Home key.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'Caret jumped to line 1, column 0 of document.'
  },
  {
    id: 'm-3-8',
    chapterId: 'ch-3',
    title: 'Leap Whole Words',
    scenario: 'Instead of tapping the left arrow 30 times, jump backward across full words to reach a typo.',
    targetShortcutId: 'ctrl-arrow-left',
    hint: 'Hold Control and tap the Left Arrow key.',
    xpReward: 120,
    difficulty: 'medium',
    simulatedOutput: 'Caret skipped backward by one complete word boundary.'
  },
  {
    id: 'm-3-9',
    chapterId: 'ch-3',
    title: 'Highlight Whole Word Left',
    scenario: 'You want to select the word immediately to the left of the cursor to replace it.',
    targetShortcutId: 'ctrl-shift-arrow-left',
    hint: 'Hold Control + Shift and tap Left Arrow.',
    xpReward: 150,
    difficulty: 'hard',
    simulatedOutput: 'Selected preceding word: "[exceptional]".'
  },
  {
    id: 'm-3-10',
    chapterId: 'ch-3',
    title: 'Purge Formatted Formatting',
    scenario: 'You copied a paragraph from Wikipedia with ugly font, purple links, and gray boxes. Paste it as pure clean plain text into your doc!',
    targetShortcutId: 'ctrl-shift-v',
    hint: 'Paste without formatting: Control + Shift + V.',
    xpReward: 150,
    difficulty: 'hard',
    simulatedOutput: 'Pasted clean unformatted text matching default document styles.'
  },

  // ==================== CHAPTER 4 ====================
  {
    id: 'm-4-1',
    chapterId: 'ch-4',
    title: 'The Coffee Break Shield',
    scenario: 'You are stepping away from your desk at a busy coffee shop. Lock your workstation immediately to safeguard your confidential files.',
    targetShortcutId: 'win-l',
    hint: 'Lock starts with L. Windows Key + L.',
    xpReward: 120,
    difficulty: 'easy',
    simulatedOutput: 'Workstation locked securely. Screen saver active.'
  },
  {
    id: 'm-4-2',
    chapterId: 'ch-4',
    title: 'Clear the Screen Clutter',
    scenario: 'You have 12 overlapping windows covering your screen. Minimize everything instantly to reveal your desktop wallpaper and files.',
    targetShortcutId: 'win-d',
    hint: 'Desktop starts with D. Windows Key + D.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'All windows minimized: Desktop displayed.'
  },
  {
    id: 'm-4-3',
    chapterId: 'ch-4',
    title: 'The File Seeker',
    scenario: 'You downloaded a raw dataset and need to browse your C: drive folder structure. Open Windows File Explorer.',
    targetShortcutId: 'win-e',
    hint: 'Explorer starts with E. Windows Key + E.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'File Explorer launched at "Quick Access / Downloads".'
  },
  {
    id: 'm-4-4',
    chapterId: 'ch-4',
    title: 'Window Multitasking Maestro',
    scenario: 'Toggle back and forth between your active spreadsheet and presentation slides without clicking.',
    targetShortcutId: 'alt-tab',
    hint: 'Hold Alt and tap Tab.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'Switched active window focus: "Q3_Projections.xlsx".'
  },
  {
    id: 'm-4-5',
    chapterId: 'ch-4',
    title: 'Precision Region Snip',
    scenario: 'An obscure error code popped up on your screen. Trigger the Windows Snipping Tool overlay to crop just that error dialog.',
    targetShortcutId: 'win-shift-s',
    hint: 'Windows Key + Shift + S.',
    xpReward: 150,
    difficulty: 'hard',
    simulatedOutput: 'Snip captured (640x320 px) and copied directly to clipboard.'
  },
  {
    id: 'm-4-6',
    chapterId: 'ch-4',
    title: 'Kill the Frozen Monster',
    scenario: 'A memory leak caused an unoptimized application to freeze and lock up. Open Task Manager directly to terminate the unresponsive process.',
    targetShortcutId: 'ctrl-shift-esc',
    hint: 'Escape frozen programs with Control + Shift + Escape.',
    xpReward: 160,
    difficulty: 'hard',
    simulatedOutput: 'Task Manager opened: Process "HeavyApp.exe" ended.'
  },
  {
    id: 'm-4-7',
    chapterId: 'ch-4',
    title: 'The System Command Portal',
    scenario: 'You want to open the PowerShell terminal or run "regedit". Summon the Windows Run dialog prompt.',
    targetShortcutId: 'win-r',
    hint: 'Run starts with R. Windows Key + R.',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'Run command prompt opened: Ready for input.'
  },
  {
    id: 'm-4-8',
    chapterId: 'ch-4',
    title: 'Split-Screen Productivity',
    scenario: 'Snap your active notes window to the left half of the display so you can compare it with a reference PDF on the right.',
    targetShortcutId: 'win-arrow-left',
    hint: 'Hold Windows Key and press Left Arrow.',
    xpReward: 140,
    difficulty: 'medium',
    simulatedOutput: 'Window docked to 50% left screen boundary.'
  },

  // ==================== CHAPTER 5 ====================
  {
    id: 'm-5-1',
    chapterId: 'ch-5',
    title: 'Summon the Web Inspector',
    scenario: 'A web button is misaligned by 5 pixels. Open browser Developer Tools to inspect its CSS box model and margins.',
    targetShortcutId: 'f12',
    hint: 'The universal DevTools key is F12 (or Ctrl+Shift+I).',
    xpReward: 120,
    difficulty: 'easy',
    simulatedOutput: 'DevTools Console & Inspector docked at bottom of viewport.'
  },
  {
    id: 'm-5-2',
    chapterId: 'ch-5',
    title: 'Summon the Command Palette',
    scenario: 'You are in VS Code and want to change the file syntax coloring to TypeScript without clicking the status bar. Open the Command Palette.',
    targetShortcutId: 'ctrl-shift-p',
    hint: 'Palette starts with P. Control + Shift + P.',
    xpReward: 150,
    difficulty: 'hard',
    simulatedOutput: 'Command Palette active: "> Change Language Mode".'
  },
  {
    id: 'm-5-3',
    chapterId: 'ch-5',
    title: 'The Built-in Terminal Drawer',
    scenario: 'Your code is ready for testing! Toggle the VS Code integrated terminal drawer to run "npm test".',
    targetShortcutId: 'ctrl-grave',
    hint: 'Control + ` (Backquote / Tilde key).',
    xpReward: 150,
    difficulty: 'hard',
    simulatedOutput: 'Integrated terminal spawned: ~/projects/app $ npm test'
  },
  {
    id: 'm-5-4',
    chapterId: 'ch-5',
    title: 'Silent Debugger Comment',
    scenario: 'Temporarily comment out a buggy line of JavaScript code so the program compiles without error.',
    targetShortcutId: 'ctrl-slash',
    hint: 'Control + / (Slash).',
    xpReward: 130,
    difficulty: 'medium',
    simulatedOutput: 'Line commented out: // console.log(debugUserPayload);'
  },
  {
    id: 'm-5-5',
    chapterId: 'ch-5',
    title: 'Shift the Execution Order',
    scenario: 'You declared a variable after you tried to use it. Move this line of code UP above the invocation without cut-pasting.',
    targetShortcutId: 'alt-arrow-up',
    hint: 'Hold Alt and tap Up Arrow.',
    xpReward: 140,
    difficulty: 'medium',
    simulatedOutput: 'Line swapped upward 1 row.'
  },
  {
    id: 'm-5-6',
    chapterId: 'ch-5',
    title: 'Rapid Line Cloner',
    scenario: 'You are setting up 5 mock database records. Duplicate the current line of code straight downward in one keystroke.',
    targetShortcutId: 'shift-alt-arrow-down',
    hint: 'Shift + Alt + Down Arrow.',
    xpReward: 160,
    difficulty: 'hard',
    simulatedOutput: 'Line cloned directly below current line.'
  }
];

export function getMissionsByChapter(chapterId) {
  return MISSIONS_DATA.filter(m => m.chapterId === chapterId);
}

export function getMissionById(id) {
  return MISSIONS_DATA.find(m => m.id === id);
}
