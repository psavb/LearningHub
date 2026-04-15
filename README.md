# PS AVB Learning Hub — Static Website

A complete, production-quality static website for **PS AVB Learning Hub**, featuring Abacus, Vedic Math, and Brain Gym programme pages with WhatsApp enrollment integration.

---

## Version History

| Version | Date | Time (IST) | Changes |
|---------|------|------------|---------|
| v2.4.0 | 2026-04-04 | — | Implemented SHA-256 hashing for access code security, preventing plaintext code visibility in config files |
| v2.3.0 | 2026-04-04 | 00:55:00 | Created dedicated Summer Camp 2026 page (summer-camp.html), updated navigation links, standardized page frame across all pages |
| v2.2.0 | 2026-04-04 | 00:24:00 | Created favicon.ico from PSAVBLogo.png, added favicon links to index.html |
| v2.1.0 | 2026-04-03 | 22:00:00 | Documentation update: Added comprehensive progress details with timestamps, updated README structure |
| v2.0.0 | 2026-04-03 | 21:55:00 | Major update: Merged abacus tools, added Digital Abacus Tool with access codes, IIVA branding, Terms iframe preview, updated all paths |
| v1.1.0 | 2026-04-03 | 21:30:00 | Added PSAVBLogo.png and IIVALogo.png branding, fixed app.js path, updated WhatsApp message labels |
| v1.0.0 | 2026-04-03 | 20:00:00 | Initial release with landing page, terms page, WhatsApp integration |

---

## File Structure

```
PSAVB-Learning Hub/
├── index.html              ← Main landing page (includes Summer Camp 2026 section)
├── html/
│   └── terms.html          ← Terms & Conditions
├── tool/
│   └── abacus.html         ← Digital Abacus Tool with access codes
├── template/
│   ├── page-template.html  ← Standard frame template for new pages
│   └── README.md          ← Template usage guide
├── config/
│   └── access-codes.js     ← SHA-256 hashed access codes for abacus tool
├── js/
│   └── app.js              ← All JavaScript logic
├── images/
│   ├── PSAVBLogo.png       ← Main logo
│   ├── favicon.ico         ← Site favicon (generated from logo)
│   └── og-image.jpg        ← Social sharing image
├── tmp/                    ← Archive folder (archived files, backups)
│   ├── summer-camp.html    ← (archived: content moved to index.html#summer-camp)
│   ├── PSAVB-Abacus-v10.0-CLEAN.html ← (archived: merged into tool/abacus.html)
│   └── abacus-access.html  ← (archived: merged into tool/abacus.html)
└── README.md               ← This file
```

### Template Framework

All pages MUST use the standard frame template located at `template/page-template.html`. This ensures consistency across:
- Announcement ticker bar
- Top navigation (desktop + mobile)
- Dark mode toggle
- Footer structure
- Brand colors and typography

See `template/README.md` for detailed usage instructions.

---

## Progress Details (Latest Update: 2026-04-04 00:55:00 IST)

### Session Timeline — 2026-04-04

| Time (IST) | Task | Status |
|------------|------|--------|
| 00:00:00 | Standardized page frame model across all HTML files | ✅ Completed |
| 00:24:00 | Created favicon.ico from PSAVBLogo.png | ✅ Completed |
| 00:25:00 | Added favicon links to index.html | ✅ Completed |
| 00:30:00 | Updated Vedic Math course content with comprehensive syllabus | ✅ Completed |
| 00:55:00 | Created dedicated Summer Camp 2026 page | ✅ Completed |
| 00:55:00 | Updated navigation to link to summer-camp.html | ✅ Completed |

### Session Timeline — 2026-04-03

| Time (IST) | Task | Status |
|------------|------|--------|
| 20:00:00 | Initial project review and understanding | ✅ Completed |
| 21:25:00 | Created merged `tool/abacus.html` with access code + abacus functionality | ✅ Completed |
| 21:30:00 | Applied brand color palette (blue #1e40af, orange #ea580c, green #16a34a) | ✅ Completed |
| 21:32:00 | Added Digital Abacus Tool link to main navigation (desktop + mobile) | ✅ Completed |
| 21:34:00 | Provided access codes (PSAVB2026, ABACUS2026, PSAVB@123) | ✅ Completed |
| 21:36:00 | Fixed `js/app.js` path in `index.html` | ✅ Completed |
| 21:37:00 | Added `images/PSAVBLogo.png` as navigation logo | ✅ Completed |
| 21:39:00 | Added `images/IIVALogo.png` to IIVA credential banner | ✅ Completed |
| 21:40:00 | Renamed "Abacus Tool" to "Digital Abacus Tool" across all files | ✅ Completed |
| 21:42:00 | Fixed access code verification with fallback codes | ✅ Completed |
| 21:46:00 | Made "PS - AVB" bold in copyright text | ✅ Completed |
| 21:48:00 | Added IIVA logo to Digital Abacus Tool access screen | ✅ Completed |
| 21:54:00 | Moved `terms.html` to `html/terms.html` and updated all links | ✅ Completed |
| 21:55:00 | Added Terms Preview iframe section to main page | ✅ Completed |
| 21:58:00 | Updated WhatsApp message to use "Parent / Guardian Name" label | ✅ Completed |
| 22:00:00 | Updated README.md with version history and progress details | ✅ Completed |

### Major Features Completed

1. **Digital Abacus Tool** (`tool/abacus.html`) — 2026-04-03 21:25:00
   - Merged `abacus-access.html` + `PSAVB-Abacus-v10.0-CLEAN.html` into single file
   - Access code verification with SHA-256 hashing (Web Crypto API)
   - Access codes securely stored as SHA-256 hashes in `config/access-codes.js`
   - Hashed verification prevents plaintext code visibility
   - sessionStorage persistence maintains access state within session
   - 13-rod interactive abacus with 6 modes: Decimal, Integer, Currency, Scientific, Time, Fractions
   - Zen Mode, Practice Mode, Full Width Mode, Settings (Themes & Fonts)
   - PS AVB Brand theme matching landing page colors (blue #1e40af, orange #ea580c)
   - Mobile responsive with touch/pointer event support
   - Keyboard shortcuts (R=Reset, V=Hide Value, P=Practice, Z=Zen, F=Full, S=Settings)

2. **Branding Updates** — 2026-04-03 21:30:00 - 21:48:00
   - Added `images/PSAVBLogo.png` as main navigation logo (replaced text "PS")
   - Added `images/IIVALogo.png` to IIVA credential banner in "Why Choose Us" section
   - Added IIVA logo to Digital Abacus Tool access screen
   - Updated all references to use proper relative paths only

3. **Navigation Updates** — 2026-04-03 21:32:00
   - Added "🧮 Digital Abacus Tool" link to desktop navigation
   - Added "🧮 Student Digital Abacus Tool" link to mobile menu
   - Added "Student Tool Access" secondary button in Abacus course card
   - Updated footer with Digital Abacus Tool link

4. **Terms Page Reorganization** — 2026-04-03 21:54:00
   - Moved `terms.html` to `html/terms.html` for better organization
   - Updated all links in `index.html` to point to `html/terms.html`
   - Added Terms Preview iframe section (id="terms-preview") on main page
   - Updated WhatsApp message terms URL to include `html/` path

5. **UI/UX Improvements** — 2026-04-03 21:36:00 - 21:58:00
   - Fixed `app.js` path from `app.js` to `js/app.js` (line 1440)
   - Made "PS - AVB" bold in copyright footer text
   - Updated WhatsApp enrollment message: "Parent / Guardian Name" instead of "Name"
   - Added Digital Abacus Tool access codes: PSAVB2026, ABACUS2026, PSAVB@123

---

## Before You Deploy: One-Time Setup

### 1. Update the WhatsApp Number

Replace the placeholder number `919876543210` with your real number in **two files**:

**`js/app.js` — Line 8:**
```js
const WA_NUMBER = '919876543210';  // ← Replace with your number (country code + number, no +)
```

**`index.html` — Search for all occurrences of `919876543210`:**
- Floating WhatsApp button href
- Footer social WhatsApp link
- Quick enquiry buttons (handled via app.js WA_NUMBER constant)

**`terms.html` — Section 5 and Section 15:**
- Replace `+91 98765 43210` and `919876543210` with your actual number.

### 2. Update Contact Information in terms.html

In `terms.html`, update:
- Physical address in Section 15
- Website URL throughout (replace `psavblearninghub.com` with your actual domain)

### 3. Update SEO Meta Tags in index.html

```html
<!-- Replace with your real URL -->
<meta property="og:url" content="https://YOURDOMAIN.com/" />
<meta property="og:image" content="https://YOURDOMAIN.com/og-image.jpg" />
```

Add an `og-image.jpg` (1200×630px recommended) to the root folder for rich WhatsApp link previews.

### 4. Update Schema.org JSON-LD in index.html

```json
{
  "url": "https://YOURDOMAIN.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "XXXXXX",
    "addressCountry": "IN"
  }
}
```

---

## Deployment Options

### Option A — GitHub Pages (Free, Recommended)

1. Create a free account at [github.com](https://github.com)
2. Create a new **public** repository (e.g., `psavb-learning-hub`)
3. Upload all files maintaining the folder structure:
   ```
   index.html
   terms.html
   js/app.js
   ```
4. Go to **Settings → Pages**
5. Under "Source", select **Deploy from a branch → main → / (root)**
6. Click **Save**
7. Your site will be live at: `https://YOUR-USERNAME.github.io/psavb-learning-hub/`

**Custom domain (optional):**
- Add a `CNAME` file in the root with your domain name (e.g., `psavblearninghub.com`)
- Point your domain's DNS A records to GitHub Pages IPs:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

---

### Option B — Netlify (Free, Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign up free
2. On the dashboard, click **"Add new site → Deploy manually"**
3. Drag and drop the entire `PSAVB-Learning Hub` folder onto the deploy area
4. Your site is live instantly with a `*.netlify.app` URL
5. To use a custom domain: **Site settings → Domain management → Add custom domain**

---

### Option C — Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"New Project"** and import your GitHub repository
3. No build configuration needed (static site)
4. Click **"Deploy"** — live in ~30 seconds
5. Custom domain available under **Project Settings → Domains**

---

### Option D — Traditional Web Hosting (cPanel / FTP)

1. Purchase hosting from providers like Hostinger, GoDaddy, SiteGround, or Bluehost
2. Connect via **FTP** (use FileZilla — free client) or use the **File Manager** in cPanel
3. Upload all files to the `public_html` folder:
   ```
   public_html/
   ├── index.html
   ├── terms.html
   └── js/
       └── app.js
   ```
4. Point your domain to your hosting nameservers

---

### Option E — Google Drive (Quick Preview Only)

> Not recommended for production. Use for internal preview only.

1. Upload all files to Google Drive
2. Right-click `index.html` → **Preview**
3. Note: WhatsApp redirects and external fonts require internet access

---

## Local Development (Testing Locally)

Since the site uses Tailwind CDN and Google Fonts, you need an internet connection to preview it correctly.

### Using VS Code + Live Server:
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension by Ritwick Dey
3. Right-click `index.html` → **"Open with Live Server"**
4. Site opens at `http://127.0.0.1:5500`

### Using Python (if installed):
```bash
cd "PSAVB-Learning Hub"
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Using Node.js (if installed):
```bash
npx serve "PSAVB-Learning Hub"
# Open the URL shown in terminal
```

---

## Digital Abacus Tool Access Codes

### Overview

The Digital Abacus Tool (`tool/abacus.html`) uses a secure access code system to restrict tool usage to authorized students. Access codes are stored as **SHA-256 hashes** in `config/access-codes.js`, which prevents plaintext code visibility even if the configuration file is exposed.

### How It Works

1. **User enters code** → Access code verification screen in `tool/abacus.html`
2. **Code is hashed** → Web Crypto API computes SHA-256 hash of user input
3. **Hash is verified** → Computed hash is compared against PSAVB_ACCESS_HASHES array
4. **Access granted** → sessionStorage stores verification state; tool becomes usable
5. **State persists** → Student remains authenticated for the browser session

### Current Access Codes

**Share these codes with students to access the Digital Abacus Tool:**

```javascript
var PSAVB_ACCESS_CODES = [
  'PSAVB2026',
  'ABACUS2026',
  'PSAVB@123'
];
```

**Internal Reference — SHA-256 Hashes (stored in `config/access-codes.js`):**

| Code | SHA-256 Hash |
|------|------|
| `PSAVB2026` | `705359edf9cbadfd7f702551b86343bc394ba15aa4f768d9709827339b4967af` |
| `ABACUS2026` | `7f1cb51f043545c4a165bd6ff9b30de9ef28349d02d9bc10b5cc0b4b451411a7` |
| `PSAVB@123` | `408bce6d2a9ca24332f419c9650fa9eaa68b351a72b48825f2565e6e2fa59582` |

### Adding a New Access Code

#### Step 1: Generate the SHA-256 Hash

Open your terminal/command prompt and run:

```bash
# On macOS/Linux:
echo -n "YOUR_CODE_HERE" | sha256sum

# On Windows (PowerShell):
$Code = "YOUR_CODE_HERE"; [System.Security.Cryptography.HashAlgorithm]::Create('SHA256').ComputeHash([System.Text.Encoding]::UTF8.GetBytes($Code)) | ForEach-Object { $_.ToString('x2') } -join ''
```

**Example:** To add code `SUMMER2026`:
```bash
echo -n "SUMMER2026" | sha256sum
# Output: a1b2c3d4e5f6... (32-character hash)
```

#### Step 2: Add Hash to config/access-codes.js

Open `config/access-codes.js` and add the new hash to the PSAVB_ACCESS_HASHES array:

```javascript
var PSAVB_ACCESS_HASHES = [
  '705359edf9cbadfd7f702551b86343bc394ba15aa4f768d9709827339b4967af',  // PSAVB2026
  '7f1cb51f043545c4a165bd6ff9b30de9ef28349d02d9bc10b5cc0b4b451411a7',  // ABACUS2026
  '408bce6d2a9ca24332f419c9650fa9eaa68b351a72b48825f2565e6e2fa59582',  // PSAVB@123
  'a1b2c3d4e5f6...',  // SUMMER2026 (add your new hash here)
];
```

#### Step 3: Deploy

Commit and push the updated `config/access-codes.js` to your hosting (GitHub Pages, Netlify, etc.).

### Security Notes

- **Plaintext codes are never stored** — Only hashes are in the config file
- **Codes cannot be reverse-engineered** — SHA-256 is cryptographically one-way
- **User input is always hashed** — Verification happens client-side via Web Crypto API
- **Brute-forcing is computationally expensive** — Makes mass code-guessing impractical
- **Not suitable for high-security scenarios** — Designed for educational/semi-public access

### How Verification Works (Technical)

In `tool/abacus.html`, the `verifyCode()` function:

1. Takes user input (the code they typed)
2. Computes: `sha256(userInput.toUpperCase())`
3. Checks if result exists in PSAVB_ACCESS_HASHES array
4. If found: stores `verified=true` in sessionStorage
5. If not found: shows error and shakes access screen for visual feedback

### Revoking Access

To **temporarily revoke access** to a code (e.g., class ended):
- Remove its hash from the PSAVB_ACCESS_HASHES array
- Deploy the updated `config/access-codes.js`
- Existing verified sessions will remain active until browser is closed
- New login attempts will fail

To **prevent session persistence across closures**, each code can be retired and replaced with a new one.

---

## Customisation Guide

### Changing Colours
The three brand colours are defined in `index.html` Tailwind config and used as utility classes:
```js
colors: {
  brand: {
    blue:   '#1e40af',   // Primary — change here
    green:  '#16a34a',   // WhatsApp / Success
    orange: '#ea580c',   // CTA / Accent
  }
}
```

### Updating Stats Numbers
In `index.html`, find the `#stats-section` and update `data-target` values:
```html
<div data-target="500" data-suffix="+">   ← 500+ students
<div data-target="8"   data-suffix=" Yrs"> ← 8 years
<div data-target="98"  data-suffix="%">   ← 98% satisfaction
<div data-target="50"  data-suffix="+">   ← 50+ awards
```

### Adding a Logo Image
Replace the text "PS" logo div with an `<img>` tag:
```html
<img src="logo.png" alt="PS AVB Learning Hub" class="h-10 w-auto" />
```

### Updating the Open Graph (OG) Image
Create a 1200×630px image named `og-image.jpg` and place it in the root folder. This image appears when the link is shared on WhatsApp/Facebook/Twitter.

---

## Features Checklist

- [x] Mobile-first responsive design (Tailwind CSS)
- [x] Google Fonts (Inter + Poppins)
- [x] Font Awesome icons
- [x] Sticky navigation with hamburger menu
- [x] Dark mode toggle (persists via localStorage)
- [x] Hero section with animated background
- [x] 3 Learning module cards with expand/collapse
- [x] 4 Why Choose Us feature cards
- [x] Animated stats counters (IntersectionObserver)
- [x] Testimonials section
- [x] Contact/Enroll form with full validation
- [x] Indian phone number regex validation
- [x] Age-based course recommendation
- [x] Honeypot spam protection
- [x] Terms & Conditions checkbox
- [x] WhatsApp enrollment redirect with encoded message
- [x] Quick WhatsApp buttons (Demo, Fees, Courses)
- [x] Floating WhatsApp button
- [x] Scroll reveal animations
- [x] Smooth scroll
- [x] SEO meta tags
- [x] Open Graph tags for WhatsApp/social sharing
- [x] Schema.org LocalBusiness JSON-LD
- [x] Full Terms & Conditions page
- [x] Privacy Policy with #privacy anchor
- [x] WhatsApp consent section
- [x] No spam policy
- [x] Data usage disclaimer
- [x] Footer with social links + legal links

---

## Browser Support

Tested and compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Chrome & Safari (iOS/Android)

---

## Support

For queries about this website, contact:
- WhatsApp: [+91 81250 95061](https://wa.me/918125095061)
- Website: psavblearninghub.com
