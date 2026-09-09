// header-loader.js - Complete working version
async function loadHeader() {
  try {
    console.log('🔄 Loading header...');
    
    // Fetch the header.html file
    const response = await fetch('header.html');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const html = await response.text();
    console.log('✅ Header fetched successfully!');
    
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', html);
    
    // Initialize all header functionality
    setupMobileMenu();
    updateActiveNavLink();
    fixImagePaths();
    
    console.log('✅ Header loaded and initialized!');
    
  } catch (error) {
    console.error('❌ Error loading header:', error);
    // Show a fallback header
    showFallbackHeader();
  }
}

function setupMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.menu');
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  
  if (toggle && menu) {
    // Remove any existing listeners to avoid duplicates
    toggle.removeEventListener('change', handleToggle);
    toggle.addEventListener('change', handleToggle);
    
    function handleToggle() {
      if (this.checked) {
        menu.style.display = 'block';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
      } else {
        menu.style.display = 'none';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
      }
    }
    
    // Close menu when clicking a link (for mobile)
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        toggle.checked = false;
        menu.style.display = 'none';
      });
    });
  }
}

function updateActiveNavLink() {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.menu a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    // Match current page
    if (href === currentPage) {
      link.style.fontWeight = '700';
      link.style.color = '#f97316'; // Orange highlight
      link.style.borderBottom = '2px solid #f97316';
    }
  });
}

function fixImagePaths() {
  // Fix image paths in header (since header.html might be in different folder)
  const headerImages = document.querySelectorAll('.brand-mark img');
  headerImages.forEach(img => {
    const src = img.getAttribute('src');
    // If image path doesn't start with / or http, it might need fixing
    if (src && !src.startsWith('/') && !src.startsWith('http')) {
      // Keep as is - images are in same folder as HTML files
      console.log('🖼️ Header image:', src);
    }
  });
}

function showFallbackHeader() {
  const fallbackHTML = `
    <header style="background: #1a1a2e; padding: 15px 20px; color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <nav style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
        <a href="index.html" style="color: white; font-size: 1.5rem; font-weight: bold; text-decoration: none;">
          The CodeCraft Technology
        </a>
        <div style="display: flex; gap: 20px;">
          <a href="index.html" style="color: white; text-decoration: none;">Home</a>
          <a href="products.html" style="color: white; text-decoration: none;">Products</a>
          <a href="#contact" style="color: white; text-decoration: none;">Contact</a>
        </div>
      </nav>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', fallbackHTML);
  console.warn('⚠️ Using fallback header');
}

// Load header when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHeader);
} else {
  loadHeader();
}

// Re-run on page load if header is needed
window.addEventListener('load', function() {
  // Check if header exists, if not try loading again
  if (!document.querySelector('.site-header')) {
    console.warn('Header not found, retrying...');
    loadHeader();
  }
});