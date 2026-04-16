// ── Theme toggle ──────────────────────────────────────
const html = document.documentElement;
const btn  = document.getElementById('themeToggle');
const icon = document.getElementById('toggle-icon');
const saved = localStorage.getItem('theme');
if (saved) { html.setAttribute('data-theme', saved); icon.textContent = saved === 'dark' ? '🌙' : '☀️'; }
btn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  icon.textContent = next === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', next);
  // Utterances 테마 동기화
  const utterancesFrame = document.querySelector('.utterances-frame');
  if (utterancesFrame) {
    utterancesFrame.contentWindow.postMessage(
      { type: 'set-theme', theme: next === 'dark' ? 'github-dark' : 'github-light' },
      'https://utteranc.es'
    );
  }
});

// ── Fade-up on scroll ─────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.07 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Comments (포스트 페이지에서만) ────────────────────────
if (window.location.pathname.includes('/posts/')) {
  const footer = document.querySelector('footer');
  if (footer) {
    const currentTheme = html.getAttribute('data-theme') === 'dark' ? 'github-dark' : 'github-light';
    const section = document.createElement('div');
    section.className = 'comments-section';
    const container = document.createElement('div');
    container.className = 'container';
    const title = document.createElement('p');
    title.className = 'comments-title';
    title.textContent = '댓글';
    const utterancesWrap = document.createElement('div');
    container.appendChild(title);
    container.appendChild(utterancesWrap);
    section.appendChild(container);
    footer.before(section);

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'kdohyeon/kdohyeon.github.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', currentTheme);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    utterancesWrap.appendChild(script);
  }
}

// ── Active nav links (main page only) ─────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
if (sections.length && navLinks.length) {
  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => navObs.observe(s));
}
