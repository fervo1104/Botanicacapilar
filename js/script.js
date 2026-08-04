document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('navMenu');
  const overlay = document.getElementById('overlay');

  function closeMenu(){
    nav.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    overlay.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});