/**
 * SHORTCUT MASTER - Authentication & Multi-User Profile Engine
 * Handles user registration, credentials, profile avatars, sessions, and individual progress storage.
 */

import { bus } from './bus.js';
import { ICONS } from './icons.js';

const USERS_STORAGE_KEY = 'shortcut_master_users_v1';
const SESSION_STORAGE_KEY = 'shortcut_master_session_v1';

export const USER_AVATARS = [
  { id: 'bolt', name: 'Lightning Bolt', icon: ICONS.bolt, color: '#00f08a' },
  { id: 'flame', name: 'Inferno Flame', icon: ICONS.flame, color: '#f59e0b' },
  { id: 'crown', name: 'Crown Master', icon: ICONS.crown, color: '#ec4899' },
  { id: 'shield', name: 'Guardian Shield', icon: ICONS.shield, color: '#38bdf8' },
  { id: 'terminal', name: 'Terminal Hero', icon: ICONS.terminal, color: '#a855f7' },
  { id: 'globe', name: 'Net Navigator', icon: ICONS.globe, color: '#10b981' }
];

class AuthManager {
  constructor() {
    this.currentUser = null;
    this._memoryStorage = {};
    this.loadSession();
  }

  _getItem(key) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
    return this._memoryStorage[key] || null;
  }

  _setItem(key, val) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, val);
    } else {
      this._memoryStorage[key] = val;
    }
  }

  _removeItem(key) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    } else {
      delete this._memoryStorage[key];
    }
  }

  // Hash password using native SubtleCrypto API (fallback to base64 if unavailable)
  async hashPassword(password) {
    try {
      const cryptoObj = typeof window !== 'undefined' ? window.crypto : (typeof globalThis !== 'undefined' ? globalThis.crypto : null);
      if (cryptoObj && cryptoObj.subtle) {
        const msgBuffer = new TextEncoder().encode(password + '_shortcut_master_salt_2026');
        const hashBuffer = await cryptoObj.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      }
    } catch (e) {
      // Fallback
    }

    if (typeof btoa !== 'undefined') {
      try {
        return btoa(encodeURIComponent(password + '_shortcut_master_salt_2026'));
      } catch (err) {
        return btoa(password + '_salt');
      }
    }

    if (typeof Buffer !== 'undefined') {
      return Buffer.from(password + '_salt').toString('base64');
    }

    let hash = 0;
    const str = password + '_shortcut_master_salt_2026';
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return 'h_' + Math.abs(hash).toString(16);
  }

  getAllUsers() {
    try {
      const raw = this._getItem(USERS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Failed to read users from storage', e);
      return {};
    }
  }

  saveAllUsers(users) {
    try {
      this._setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to write users to storage', e);
    }
  }

  loadSession() {
    try {
      const sessionUsername = this._getItem(SESSION_STORAGE_KEY);
      if (sessionUsername) {
        const users = this.getAllUsers();
        if (users[sessionUsername]) {
          this.currentUser = users[sessionUsername];
        } else {
          this.currentUser = null;
          this._removeItem(SESSION_STORAGE_KEY);
        }
      } else {
        this.currentUser = null;
      }
    } catch (e) {
      this.currentUser = null;
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getSavedProfiles() {
    const users = this.getAllUsers();
    return Object.values(users).map(u => ({
      username: u.username,
      avatar: u.avatar || 'bolt',
      level: u.state?.level || 1,
      xp: u.state?.xp || 0,
      lastLogin: u.lastLogin || u.createdAt
    }));
  }

  async signup(username, password, avatar = 'bolt') {
    const cleanUsername = (username || '').trim();
    if (!cleanUsername || cleanUsername.length < 2) {
      throw new Error('Username must be at least 2 characters long.');
    }
    if (cleanUsername.length > 20) {
      throw new Error('Username cannot exceed 20 characters.');
    }
    if (!password || password.length < 4) {
      throw new Error('Password must be at least 4 characters long.');
    }

    const users = this.getAllUsers();
    const key = cleanUsername.toLowerCase();

    if (users[key]) {
      throw new Error('Username is already taken. Please choose another or log in.');
    }

    const passwordHash = await this.hashPassword(password);
    const newUser = {
      username: cleanUsername,
      passwordHash,
      avatar,
      createdAt: Date.now(),
      lastLogin: Date.now(),
      state: null // Will be initialized by state manager
    };

    users[key] = newUser;
    this.saveAllUsers(users);

    this.currentUser = newUser;
    this._setItem(SESSION_STORAGE_KEY, key);

    bus.emit('auth:signup', this.currentUser);
    return { success: true, user: this.currentUser };
  }

  async login(username, password) {
    const cleanUsername = (username || '').trim();
    if (!cleanUsername || !password) {
      throw new Error('Please enter both username and password.');
    }

    const users = this.getAllUsers();
    const key = cleanUsername.toLowerCase();
    const user = users[key];

    if (!user) {
      throw new Error('Account not found. Check your username or sign up.');
    }

    const passwordHash = await this.hashPassword(password);
    if (user.passwordHash !== passwordHash) {
      throw new Error('Incorrect password. Please try again.');
    }

    user.lastLogin = Date.now();
    users[key] = user;
    this.saveAllUsers(users);

    this.currentUser = user;
    this._setItem(SESSION_STORAGE_KEY, key);

    bus.emit('auth:login', this.currentUser);
    return { success: true, user: this.currentUser };
  }

  guestLogin() {
    const guestUser = {
      username: 'Guest Player',
      isGuest: true,
      avatar: 'bolt',
      createdAt: Date.now(),
      lastLogin: Date.now(),
      state: null
    };
    this.currentUser = guestUser;
    this._removeItem(SESSION_STORAGE_KEY);
    bus.emit('auth:login', this.currentUser);
    return { success: true, user: this.currentUser };
  }

  logout() {
    this.currentUser = null;
    this._removeItem(SESSION_STORAGE_KEY);
    bus.emit('auth:logout');
  }

  saveCurrentUserData(stateData) {
    if (!this.currentUser || this.currentUser.isGuest) return;

    const key = this.currentUser.username.toLowerCase();
    const users = this.getAllUsers();
    if (users[key]) {
      users[key].state = stateData;
      users[key].lastLogin = Date.now();
      this.saveAllUsers(users);
    }
  }

  getUserAvatarSvg(avatarId) {
    const av = USER_AVATARS.find(a => a.id === avatarId) || USER_AVATARS[0];
    return av.icon;
  }
}

export const auth = new AuthManager();
