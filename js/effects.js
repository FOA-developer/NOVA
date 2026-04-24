const initializePages = () => {
  const pages = document.querySelectorAll('.pages');

  const removeClass = () => {
    pages.forEach((page) => {
      page.classList.remove('active');
    })
  }

  const setActivePage = (target) => {
    removeClass();

    // Find the matching link based on the target element
    pages.forEach((page) => {
      const href = page.getAttribute('href');
      
      if (target && target.id) {
        // Match the home link to the home section (without hash)
        if (target.id === 'home' && href === '/pages/index.html') {
          page.classList.add('active');
        }
        // Match other hash links by id (links with #)
        else if (target.id !== 'home' && href.includes('#' + target.id)) {
          page.classList.add('active');
        }
      } else {
        // For regular page links, match by filename
        const currentPath = window.location.pathname;
        const pageFile = href.split('/').pop().split('#')[0];
        const currentFile = currentPath.split('/').pop();
        
        if (pageFile === currentFile || (currentPath === '/' && pageFile.includes('index.html'))) {
          page.classList.add('active');
        }
      }
    })
  }

  // Use Intersection Observer to detect which section is in view
  const sections = document.querySelectorAll('section[id]');
  let currentVisibleSection = null;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -90% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    // Find sections that are actually intersecting
    const visibleEntries = entries.filter(entry => entry.isIntersecting);
    
    if (visibleEntries.length > 0) {
      // Get the first visible section (topmost)
      const mostVisibleSection = visibleEntries[0].target;

      // Only update if the visible section changed
      if (mostVisibleSection !== currentVisibleSection) {
        currentVisibleSection = mostVisibleSection;
        setActivePage(mostVisibleSection);
      }
    }
  }, observerOptions);

  // Observe all sections with ids
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Set initial active page - highlight Home/first page by default
  const currentPath = window.location.pathname;
  if (currentPath.includes('index.html') || currentPath === '/') {
    const homeLink = Array.from(pages).find(page => 
      page.getAttribute('href').split('#')[0].includes('index.html') ||
      page.getAttribute('href') === '/pages/index.html'
    );
    if (homeLink) {
      removeClass();
      homeLink.classList.add('active');
    }
  } else {
    setActivePage();
  }

  pages.forEach((page) => {
    page.addEventListener('click', (e) => {
      const href = page.getAttribute('href');
      
      // Check if it's a hash link (anchor)
      if (href.includes('#')) {
        // Let browser handle hash navigation
        return;
      }

      // For regular page links, prevent default and navigate
      e.preventDefault();
      removeClass();
      page.classList.add('active');

      setTimeout(() => {
        window.location.href = href;
      }, 100);
    })
  })
}

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
    initializePages();
    initializeMobileMenu();
  });
} else {
  initializePages();
  initializeMobileMenu();
}


