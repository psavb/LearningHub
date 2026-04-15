/**
 * PS AVB Learning Hub - Application JavaScript
 * Handles: Form validation, WhatsApp integration, animations,
 *          dark mode, smooth scroll, expandable cards, honeypot
 */

'use strict';

/* ─────────────────────────────────────────────
   1. UTILITY: WhatsApp message encoder
───────────────────────────────────────────── */
const WA_NUMBER = '918125095061';

function buildWhatsAppURL(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildEnrollMessage(data) {
  const termsURL = window.location.origin + window.location.pathname.replace('index.html', '') + 'html/terms.html';
  return (
    `Hello! I'm interested in PS AVB Learning Hub 🙏\n\n` +
    `Parent / Guardian Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Child Age: ${data.age}\n` +
    `Course Interest: ${data.course}\n` +
    `Preferred Time: ${data.time}\n` +
    `Message: ${data.message || 'N/A'}\n\n` +
    `Please guide me further. Thank you!\n\n` +
    `─────────────────────────\n` +
    `✅ I have read and agree to the Terms & Conditions of PS AVB Learning Hub.\n` +
    `📋 Terms & Conditions: ${termsURL}`
  );
}

/* ─────────────────────────────────────────────
   2. FORM VALIDATION
───────────────────────────────────────────── */
const PHONE_REGEX = /^[6-9]\d{9}$/; // Indian 10-digit mobile

function validateName(value) {
  return value.trim().length >= 2;
}

function validatePhone(value) {
  return PHONE_REGEX.test(value.replace(/\s+/g, ''));
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  if (field) field.classList.add('border-red-500');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  }
}

function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  if (field) field.classList.remove('border-red-500');
  if (errorEl) errorEl.classList.add('hidden');
}

function clearAllErrors() {
  ['name', 'phone', 'age', 'course', 'batchTime', 'terms'].forEach(clearFieldError);
}

/* ─────────────────────────────────────────────
   3. AGE-BASED COURSE RECOMMENDATION
───────────────────────────────────────────── */
function getRecommendation(age) {
  const n = parseInt(age, 10);
  if (isNaN(n)) return null;
  if (n >= 5 && n <= 8)  return { text: 'We recommend Abacus!',      icon: '🔢', color: 'bg-blue-50 border-blue-300 text-blue-800' };
  if (n >= 9 && n <= 13) return { text: 'We recommend Vedic Math!',  icon: '🧮', color: 'bg-green-50 border-green-300 text-green-800' };
  if (n >= 14)           return { text: 'We recommend Brain Gym!',   icon: '🧠', color: 'bg-orange-50 border-orange-300 text-orange-800' };
  return null;
}

function updateRecommendation() {
  const ageSelect = document.getElementById('age');
  const recBox    = document.getElementById('recommendation-box');
  const recText   = document.getElementById('recommendation-text');
  if (!ageSelect || !recBox || !recText) return;

  const rec = getRecommendation(ageSelect.value);
  if (rec) {
    recBox.className = `mt-2 p-3 rounded-lg border text-sm font-medium transition-all duration-300 ${rec.color}`;
    recText.textContent = `${rec.icon}  ${rec.text}`;
    recBox.classList.remove('hidden');
  } else {
    recBox.classList.add('hidden');
  }
}

/* ─────────────────────────────────────────────
   4. HONEYPOT CHECK
───────────────────────────────────────────── */
function isHoneypotFilled() {
  const pot = document.getElementById('website');
  return pot && pot.value.trim() !== '';
}

/* ─────────────────────────────────────────────
   5. ENROLL FORM SUBMIT HANDLER
───────────────────────────────────────────── */
function handleEnrollSubmit(e) {
  e.preventDefault();
  clearAllErrors();

  // Honeypot
  if (isHoneypotFilled()) {
    console.warn('Honeypot triggered — likely spam.');
    return;
  }

  const name      = document.getElementById('name')?.value.trim()      || '';
  const phone     = document.getElementById('phone')?.value.trim()     || '';
  const age       = document.getElementById('age')?.value              || '';
  const course    = document.getElementById('course')?.value           || '';
  const batchTime = document.getElementById('batchTime')?.value        || '';
  const message   = document.getElementById('message')?.value.trim()  || '';
  const terms     = document.getElementById('terms')?.checked          || false;

  let valid = true;

  if (!validateName(name)) {
    showFieldError('name', 'Please enter a valid name (at least 2 characters).');
    valid = false;
  }
  if (!validatePhone(phone)) {
    showFieldError('phone', 'Please enter a valid 10-digit Indian mobile number.');
    valid = false;
  }
  if (!age) {
    showFieldError('age', 'Please select the child\'s age.');
    valid = false;
  }
  if (!course) {
    showFieldError('course', 'Please select a course.');
    valid = false;
  }
  if (!batchTime) {
    showFieldError('batchTime', 'Please select a preferred batch time.');
    valid = false;
  }
  if (!terms) {
    showFieldError('terms', 'You must accept the Terms & Conditions.');
    valid = false;
  }

  if (!valid) return;

  const waMessage = buildEnrollMessage({ name, phone, age, course, time: batchTime, message });
  window.open(buildWhatsAppURL(waMessage), '_blank');
}

/* ─────────────────────────────────────────────
   6. STATS COUNTER ANIMATION
───────────────────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const suffix   = el.getAttribute('data-suffix') || '';
  const duration = 2000; // ms
  const steps    = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    current = Math.min(Math.round(increment * step), target);
    el.textContent = current.toLocaleString() + suffix;
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
}

function initStatsObserver() {
  const statsSection = document.getElementById('stats-section');
  if (!statsSection) return;

  const counters = statsSection.querySelectorAll('[data-target]');
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach(animateCounter);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsSection);
}

/* ─────────────────────────────────────────────
   7. EXPANDABLE MODULE CARDS
───────────────────────────────────────────── */
function initExpandableCards() {
  document.querySelectorAll('[data-expand-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cardId  = btn.getAttribute('data-expand-btn');
      const content = document.getElementById(`expand-${cardId}`);
      const icon    = btn.querySelector('[data-expand-icon]');
      if (!content) return;

      const isOpen = !content.classList.contains('hidden');
      if (isOpen) {
        content.classList.add('hidden');
        btn.textContent = 'Show More';
        if (icon) { icon.style.transform = 'rotate(0deg)'; }
        btn.innerHTML = `<span>Show More</span><svg data-expand-icon class="w-4 h-4 ml-1 inline transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;
      } else {
        content.classList.remove('hidden');
        btn.innerHTML = `<span>Show Less</span><svg data-expand-icon class="w-4 h-4 ml-1 inline transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;
      }
    });
  });
}

/* ─────────────────────────────────────────────
   8. DARK MODE TOGGLE
───────────────────────────────────────────── */
function initDarkMode() {
  const toggleBtn  = document.getElementById('dark-mode-toggle');
  const toggleBtn2 = document.getElementById('dark-mode-toggle-mobile');
  const root       = document.documentElement;

  const saved = localStorage.getItem('psavb-theme');
  if (saved === 'dark') {
    root.classList.add('dark');
    updateDarkIcon(true);
  }

  function toggle() {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('psavb-theme', isDark ? 'dark' : 'light');
    updateDarkIcon(isDark);
  }

  if (toggleBtn)  toggleBtn.addEventListener('click', toggle);
  if (toggleBtn2) toggleBtn2.addEventListener('click', toggle);
}

function updateDarkIcon(isDark) {
  document.querySelectorAll('.dark-icon').forEach((el) => {
    el.innerHTML = isDark
      ? `<i class="fas fa-sun"></i>`
      : `<i class="fas fa-moon"></i>`;
  });
}

/* ─────────────────────────────────────────────
   9. SMOOTH SCROLL
───────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
      }
    });
  });
}

/* ─────────────────────────────────────────────
   10. STICKY NAV + HAMBURGER MENU
───────────────────────────────────────────── */
function initNav() {
  const hamburger  = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar     = document.getElementById('navbar');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Scroll-based nav shadow
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-lg');
      } else {
        navbar.classList.remove('shadow-lg');
      }
    });
  }
}

/* ─────────────────────────────────────────────
   11. QUICK WHATSAPP BUTTONS
───────────────────────────────────────────── */
function initQuickWAButtons() {
  const messages = {
    'wa-demo':    `Hello! I'd like to book a FREE demo class at PS AVB Learning Hub. 📅\nPlease let me know the available slots. Thank you!`,
    'wa-fees':    `Hello! I'd like to know the fee structure for your courses at PS AVB Learning Hub. 💰\nKindly share the details. Thank you!`,
    'wa-courses': `Hello! I'd like to know more about the courses offered at PS AVB Learning Hub. 📚\nPlease share the course details. Thank you!`,
  };

  Object.entries(messages).forEach(([id, msg]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        window.open(buildWhatsAppURL(msg), '_blank');
      });
    }
  });
}

/* ─────────────────────────────────────────────
   12. SCROLL REVEAL ANIMATIONS
───────────────────────────────────────────── */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ─────────────────────────────────────────────
   13. REAL-TIME PHONE FORMAT HINT
───────────────────────────────────────────── */
function initPhoneValidation() {
  const phoneInput = document.getElementById('phone');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', () => {
    const val = phoneInput.value.replace(/\D/g, '');
    phoneInput.value = val.slice(0, 10);
    if (val.length === 10) {
      if (validatePhone(val)) {
        clearFieldError('phone');
        phoneInput.classList.add('border-green-500');
      } else {
        phoneInput.classList.remove('border-green-500');
      }
    } else {
      phoneInput.classList.remove('border-green-500');
    }
  });
}

/* ─────────────────────────────────────────────
   14. BOOTSTRAP APP
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  initNav();

  // Dark mode
  initDarkMode();

  // Smooth scroll
  initSmoothScroll();

  // Expandable cards
  initExpandableCards();

  // Stats animation
  initStatsObserver();

  // Scroll reveal
  initScrollReveal();

  // Phone validation
  initPhoneValidation();

  // Age recommendation
  const ageSelect = document.getElementById('age');
  if (ageSelect) {
    ageSelect.addEventListener('change', updateRecommendation);
  }

  // Enroll form
  const enrollForm = document.getElementById('enroll-form');
  if (enrollForm) {
    enrollForm.addEventListener('submit', handleEnrollSubmit);
  }

  // Quick WA buttons
  initQuickWAButtons();

  console.log('PS AVB Learning Hub — app.js loaded ✓');
});
