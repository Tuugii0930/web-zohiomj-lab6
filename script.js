// ===== Dark mode товч =====
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  const dark = theme === 'dark';
  themeBtn.setAttribute('aria-pressed', String(dark));
  themeBtn.textContent = dark ? 'Цайвар горим' : 'Харанхуй горим';
}

let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved || (systemDark ? 'dark' : 'light'));

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ===== Flip товч =====
document.querySelectorAll('.flip-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.flip');
    const flipped = card.classList.toggle('is-flipped');
    btn.setAttribute('aria-pressed', String(flipped));
  });
});
