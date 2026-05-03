/* ============================================
   viraj412.github.io — main.js
   Typewriter taglines + dark mode toggle
   ============================================ */

const TAGLINES = [
  "Intuition over intellect",
  "Seeking clarity before speed",
  "Taking it mildly seriously",
  "I want to build things",
  "Figuring it out in public",
  "Overthinking at 5 km/h",
  "Dots don't connect themselves",
  "Cautiously optimistic about everything"
];

/* ---- Typewriter ---- */
class Typewriter {
  constructor(el, words, opts = {}) {
    this.el        = el;
    this.words     = words;
    this.typeSpeed = opts.typeSpeed   || 65;
    this.delSpeed  = opts.delSpeed    || 35;
    this.pause     = opts.pause       || 2200;
    this.wordIdx   = 0;
    this.charIdx   = 0;
    this.deleting  = false;
    this._tick();
  }

  _tick() {
    const word = this.words[this.wordIdx % this.words.length];

    if (this.deleting) {
      this.charIdx--;
    } else {
      this.charIdx++;
    }

    this.el.textContent = word.substring(0, this.charIdx);

    let delay = this.deleting ? this.delSpeed : this.typeSpeed;

    // Slight human-feel variance
    delay += Math.random() * 25 - 10;

    if (!this.deleting && this.charIdx === word.length) {
      delay = this.pause;
      this.deleting = true;
    } else if (this.deleting && this.charIdx === 0) {
      this.deleting = false;
      this.wordIdx++;
      delay = 350;
    }

    setTimeout(() => this._tick(), Math.max(delay, 10));
  }
}

/* ---- Dark mode ---- */
const MOON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const SUN_ICON  = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vr-theme', theme);
  const btn = document.getElementById('dark-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  // Typewriter
  const tw = document.getElementById('typewriter');
  if (tw) new Typewriter(tw, TAGLINES);

  // Dark mode — restore saved preference or system preference
  const saved   = localStorage.getItem('vr-theme');
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved || prefers);

  // Toggle button
  const btn = document.getElementById('dark-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
});
