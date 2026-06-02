// =============================================
//  I KNOW PENNY — Shared JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile nav toggle ----
  const burger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    // close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---- Active nav link ----
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ---- Scroll fade-in ----
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // ---- Stagger delay for children ----
  document.querySelectorAll('.stagger > *').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    el.classList.add('fade-in');
    obs.observe(el);
  });

});
