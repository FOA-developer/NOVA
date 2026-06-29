// Mobile menu toggle functionality
const initializeMobileMenu = () => {
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (mobileNavMenu) {
    // Toggle menu on hamburger click
    mobileNavMenu.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('active');
        navList.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileNavMenu.contains(e.target) && !navList.contains(e.target)) {
        mobileNavMenu.classList.remove('active');
        navList.classList.remove('active');
      }
    });
  }
};

// Initialize mobile menu
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
  });
} else {
  initializeMobileMenu();
}


