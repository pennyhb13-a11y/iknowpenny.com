document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('apply-form');
  const steps = Array.from(document.querySelectorAll('.form-step'));
  let current = 0;

  function showStep(index) {
    steps.forEach((step, i) => { step.hidden = i !== index; });
    current = index;
    window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
  }

  function validateStep(index) {
    const step = steps[index];
    const required = step.querySelectorAll('[required]');
    for (const field of required) {
      if (!field.value.trim()) {
        field.focus();
        return false;
      }
    }
    return true;
  }

  document.querySelectorAll('.next-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(current)) {
        showStep(Math.min(current + 1, steps.length - 1));
      }
    });
  });

  document.querySelectorAll('.prev-step').forEach(btn => {
    btn.addEventListener('click', () => {
      showStep(Math.max(current - 1, 0));
    });
  });

  // Radio pill visual state
  document.querySelectorAll('.radio-pill').forEach(pill => {
    const input = pill.querySelector('input');
    const sync = () => {
      const group = document.querySelectorAll(`input[name="${input.name}"]`);
      group.forEach(i => i.closest('.radio-pill').classList.toggle('checked', i.checked));
    };
    input.addEventListener('change', sync);
    sync();
  });

  // Submit via fetch so we can show the success state without leaving the page
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (!validateStep(current)) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting…';
    submitBtn.disabled = true;

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        document.getElementById('success-state').style.display = 'block';
      } else {
        throw new Error('Submit failed');
      }
    } catch (err) {
      // Fallback: let the browser submit normally if fetch fails
      form.submit();
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});
