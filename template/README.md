# PS AVB Learning Hub - Page Template Guide

## Standard Frame Structure

All pages in the PS AVB Learning Hub website MUST follow this exact frame structure to maintain consistency.

### Required Components (in order)

1. **Announcement Ticker Bar** (`#announce-bar`)
   - Fixed at `top: 0`
   - Z-index: `z-[60]`
   - Height: `py-1` (4px padding)
   - Contains scrolling promotional message
   - Same content on ALL pages

2. **Top Navigation** (`#navbar`)
   - Fixed at `top-7` (28px from top, below ticker)
   - Z-index: `z-50`
   - Height: `h-16` (64px)
   - Contains:
     - Logo (PSAVBLogo.png)
     - Desktop nav links (Courses, Why Us, Outcomes, Books, Summer Camp, Abacus Tool, Contact)
     - Dark mode toggle button
     - "Enroll Now" CTA button
     - Mobile hamburger menu
   - Mobile menu (hidden by default, slides down when hamburger clicked)

3. **Main Content Area**
   - Padding top: `pt-24` (96px) to clear fixed header
   - Max-width: `max-w-7xl mx-auto`
   - Horizontal padding: `px-4 sm:px-6 lg:px-8`
   - Page-specific content goes here

4. **Footer**
   - Background: `bg-gray-900 dark:bg-gray-950`
   - 4-column grid on desktop, stacks on mobile
   - Contains:
     - Brand logo and tagline
     - Social media links (WhatsApp, Instagram, Facebook, YouTube)
     - Courses list
     - Quick links
     - Legal links (Terms, Privacy)
   - Copyright bar at bottom

### Path Variables by File Location

| File Location | `{{HOME_PATH}}` | `{{HTML_PATH}}` | `{{TOOL_PATH}}` | `{{LOGO_PATH}}` |
|--------------|------------------|------------------|-----------------|-----------------|
| `index.html` | `./` | `./html/` | `./tool/` | `./` |
| `html/*.html` | `./` | `./` | `../tool/` | `../` |
| `tool/*.html` | `../` | `../html/` | `./` | `../` |

### Standard Nav Links

All pages must include these exact navigation links:

```html
<!-- Desktop -->
<a href="{HOME_PATH}index.html#modules">Courses</a>
<a href="{HOME_PATH}index.html#why-us">Why Us</a>
<a href="{HOME_PATH}index.html#outcomes">Outcomes</a>
<a href="{HOME_PATH}index.html#books">📚 Books</a>
<a href="{HOME_PATH}index.html#summer-camp">☀️ Summer Camp</a>
<a href="{TOOL_PATH}tool/abacus.html">🧮 Digital Abacus Tool</a>
<a href="{HOME_PATH}index.html#contact">Contact</a>
```

### Required Scripts

Every page must include at the bottom of `<body>`:

```javascript
// Dark mode toggle
function initDarkMode() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
initDarkMode();
document.getElementById('dark-mode-toggle')?.addEventListener('click', toggleDarkMode);
document.getElementById('dark-mode-toggle-mobile')?.addEventListener('click', toggleDarkMode);

// Mobile menu toggle
document.getElementById('hamburger-btn')?.addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```

### Using the Template

1. Copy `template/page-template.html` to your new file location
2. Replace placeholder variables:
   - `{{PAGE_TITLE}}` - Page title
   - `{{PAGE_DESCRIPTION}}` - Meta description
   - `{{HOME_PATH}}` - Path to root (see table above)
   - `{{HTML_PATH}}` - Path to html folder
   - `{{TOOL_PATH}}` - Path to tool folder
   - `{{LOGO_PATH}}` - Path to images folder
3. Add your page-specific content in the `<main>` section
4. Update any page-specific styles in the `<style>` section

### CSS Requirements

All pages must include:

```css
/* Announcement ticker */
@keyframes ticker {
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.ticker-text { animation: ticker 45s linear infinite; white-space: nowrap; }
```

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1e40af` | Buttons, links, headers |
| Primary Green | `#16a34a` | Success, Vedic Math |
| Primary Orange | `#ea580c` | CTAs, Summer Camp, Brain Gym |
| Dark Background | `#111827` / `bg-gray-900` | Footer |

### Validation Checklist

Before publishing any new page, verify:
- [ ] Announcement ticker present at top
- [ ] Navigation fixed at `top-7`
- [ ] Logo links to `index.html`
- [ ] All 7 nav links present
- [ ] Dark mode toggle works
- [ ] Mobile menu toggle works
- [ ] Footer has all 4 columns
- [ ] Copyright shows "Abacus | Vedic Math | Brain Development"
- [ ] All paths use correct relative prefixes
- [ ] Page has unique `<title>` and meta description
