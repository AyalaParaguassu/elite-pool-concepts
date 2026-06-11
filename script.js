// Shared site JS: sticky nav, mobile toggle, accordion
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('siteNav');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
  }

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));

  // Accordion
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const open = panel.classList.contains('open');
      document.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('open'));
      if (!open) panel.classList.add('open');
    });
  });
});
