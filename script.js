const menuButton = document.querySelector('.menu-btn');
const siteNav = document.querySelector('#site-nav');
const yearNode = document.querySelector('#year');
const revealNodes = document.querySelectorAll('.reveal');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealNodes.forEach((node) => revealObserver.observe(node));
