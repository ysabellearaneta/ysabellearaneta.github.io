// ============================================
// FADE-UP ANIMATION ON SCROLL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements that should animate
  const fadeElements = document.querySelectorAll(
    '.card, .trust-item, .portfolio-card, .services-grid .card, .two-col > div, .hero-workflow'
  );
  
  // Add fade-up class to each
  fadeElements.forEach(el => el.classList.add('fade-up'));

  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, { 
    threshold: 0.1, 
    rootMargin: "0px 0px -20px 0px" 
  });

  // Start observing
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

// ============================================
// SMOOTH SCROLL TO PORTFOLIO
// ============================================
const scrollToPortfolio = document.querySelector('.scroll-to-portfolio');
if (scrollToPortfolio) {
  scrollToPortfolio.addEventListener('click', function(e) {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ============================================
// NAVIGATION LINK SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================
// DEMO CTA BUTTON HANDLERS
// ============================================

// Helper function for demo alerts
function demoAlert(message) {
  alert(message + '\n\n📅 (Demo) — Real booking link would open calendar. Let\'s talk automation!');
}

// All "Book a Call" buttons
const bookCallButtons = document.querySelectorAll('.book-call-btn, #navBookBtn');
bookCallButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    demoAlert('✨ Ready to optimize HR workflows?');
  });
});

// Message button
const messageButton = document.getElementById('messageBtn');
if (messageButton) {
  messageButton.addEventListener('click', function(e) {
    e.preventDefault();
    demoAlert('💬 Send a message: taylor@hrautomatix.demo — typically reply within 4h.');
  });
}

// ============================================
// CONTACT NAV LINK
// ============================================
const contactLink = document.querySelector('a[href="#contact"]');
if (contactLink) {
  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ============================================
// CONSOLE WELCOME (for fun)
// ============================================
console.log('%c🚀 HR Automatix', 'font-size: 24px; font-weight: bold; color: #2463EB;');
console.log('%cAI-Powered HR Automation for Growing Teams', 'font-size: 14px; color: #4B5565;');
console.log('%c📅 Book a discovery call: taylor@hrautomatix.demo', 'font-size: 12px; color: #6C7A8E;');
