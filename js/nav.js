document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const panel = document.getElementById('mobile-nav');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    const isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close the menu when a link inside it is clicked
  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });

  // Close on resize back to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 980 && panel.classList.contains('open')) {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// "I just have a question" inline panel (homepage only — no-op elsewhere)
document.addEventListener('DOMContentLoaded', function () {
  const qToggle = document.getElementById('question-toggle');
  const qPanel = document.getElementById('question-panel');
  const qForm = document.getElementById('question-form');
  if (!qToggle || !qPanel || !qForm) return;

  qToggle.addEventListener('click', function () {
    qPanel.hidden = !qPanel.hidden;
    if (!qPanel.hidden) {
      qPanel.querySelector('input, textarea').focus();
    }
  });

  qForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const submitBtn = qForm.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('question-success');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const data = new FormData(qForm);
      const res = await fetch(qForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        qForm.reset();
        qForm.style.display = 'none';
        if (successMsg) successMsg.style.display = 'inline';
      } else {
        throw new Error('Submit failed');
      }
    } catch (err) {
      qForm.submit();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Question →';
    }
  });
});
