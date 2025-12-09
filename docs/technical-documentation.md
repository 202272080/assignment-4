# Technical Documentation

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [HTML Documentation](#html-documentation)
4. [CSS Documentation](#css-documentation)
5. [JavaScript Documentation](#javascript-documentation)
6. [Performance Optimization](#performance-optimization)
7. [Browser Compatibility](#browser-compatibility)
8. [Accessibility Features](#accessibility-features)
9. [Security Considerations](#security-considerations)
10. [Testing Guide](#testing-guide)
11. [Maintenance Guide](#maintenance-guide)

---

## Architecture Overview

### Design Philosophy
This portfolio follows a **mobile-first, progressive enhancement** approach:
- Start with mobile layout as the baseline
- Add complexity for larger screens
- Enhance with JavaScript features
- Graceful degradation for older browsers

### Technology Stack

#### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Vanilla JS for all interactivity

#### External Dependencies
- **Font Awesome 6.4.0**: Icon library via CDN
- No other external dependencies (framework-free)

### Application Flow
```
User lands on page
    ↓
HTML loads → CSS applies → JavaScript enhances
    ↓
Theme preference loaded from localStorage
    ↓
Scroll animations initialized
    ↓
Interactive features enabled
```

---

## File Structure

```
assignment-4/
│
├── index.html                     # Main HTML document (500 lines)
│   ├── Navigation                 # Fixed header with mobile menu
│   ├── Hero Section              # Landing section with typing effect
│   ├── About Section             # Personal info and stats
│   ├── Skills Section            # Animated skill bars
│   ├── Projects Section          # Filterable project cards
│   ├── Contact Section           # Contact form with validation
│   └── Footer                    # Site footer
│
├── css/
│   └── styles.css                # All styles (1,100+ lines)
│       ├── CSS Reset & Variables
│       ├── Typography
│       ├── Utility Classes
│       ├── Component Styles
│       ├── Responsive Breakpoints
│       └── Animations
│
├── js/
│   └── script.js                 # All functionality (850+ lines)
│       ├── Theme Toggle
│       ├── Navigation
│       ├── Typing Effect
│       ├── Scroll Animations
│       ├── Form Validation
│       ├── Project Filtering
│       └── Utility Functions
│
├── assets/
│   ├── images/                   # Image assets
│   └── resume.pdf                # Downloadable resume
│
├── docs/
│   ├── ai-usage-report.md        # AI usage documentation
│   └── technical-documentation.md # This file
│
├── presentation/
│   ├── slides.pdf                # Presentation slides
│   └── demo-video.mp4            # Demo video
│
├── README.md                     # Project overview
└── .gitignore                    # Git ignore rules
```

---

## HTML Documentation

### Document Structure

#### Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Professional portfolio website">
<meta name="author" content="Your Name">
```

**Purpose**:
- Proper character encoding
- Responsive viewport configuration
- SEO optimization
- Author attribution

#### Semantic HTML5 Structure
```
<body>
  <nav>           # Navigation header
  <main>
    <section id="home">     # Hero
    <section id="about">    # About
    <section id="skills">   # Skills
    <section id="projects"> # Projects
    <section id="contact">  # Contact
  </main>
  <footer>        # Footer
</body>
```

**Benefits**:
- Better SEO
- Improved accessibility
- Clear document outline
- Screen reader compatibility

### Component Breakdown

#### 1. Navigation Bar (`<nav class="navbar">`)

**Structure**:
```html
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="nav-brand">...</div>
    <button class="nav-toggle">...</button>
    <ul class="nav-menu">
      <li><a href="#section" class="nav-link">...</a></li>
    </ul>
  </div>
</nav>
```

**Features**:
- Fixed positioning
- Responsive hamburger menu
- Smooth scroll navigation
- Theme toggle button
- Active section highlighting

**Accessibility**:
- `aria-label` on toggle button
- Semantic `<nav>` element
- Keyboard navigable
- Focus indicators

#### 2. Hero Section (`<section id="home" class="hero">`)

**Components**:
- Greeting text
- Name (main heading)
- Animated subtitle (typing effect)
- Description
- Call-to-action buttons
- Social media links
- Profile image placeholder
- Scroll indicator

**Data Attributes**: None required

#### 3. About Section (`<section id="about" class="about">`)

**Features**:
- Two-column layout (image + text)
- Animated statistics counters
- Resume download button

**Data Attributes**:
```html
<span class="stat-number" data-target="15">0</span>
```
- `data-target`: Final value for counter animation

#### 4. Skills Section (`<section id="skills" class="skills">`)

**Structure**:
```html
<div class="skill-item">
  <div class="skill-header">
    <span class="skill-name">HTML5</span>
    <span class="skill-percent">95%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" data-progress="95"></div>
  </div>
</div>
```

**Data Attributes**:
- `data-progress`: Skill level percentage (0-100)

**Animation**: Progress bars animate on scroll into view

#### 5. Projects Section (`<section id="projects" class="projects">`)

**Filter Buttons**:
```html
<button class="filter-btn active" data-filter="all">All</button>
<button class="filter-btn" data-filter="web">Web Apps</button>
```

**Project Cards**:
```html
<article class="project-card" data-category="web frontend">
  <div class="project-image">
    <!-- Image/placeholder -->
    <div class="project-overlay">
      <!-- Links to demo and code -->
    </div>
  </div>
  <div class="project-content">
    <!-- Title, description, tags -->
  </div>
</article>
```

**Data Attributes**:
- `data-filter`: Filter category for buttons
- `data-category`: Space-separated categories for cards

#### 6. Contact Section (`<section id="contact" class="contact">`)

**Form Structure**:
```html
<form class="contact-form" id="contactForm">
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" required>
    <span class="error-message"></span>
  </div>
  <!-- More fields -->
  <button type="submit" class="btn btn-primary">
    <span class="btn-text">Send Message</span>
    <i class="fas fa-paper-plane"></i>
  </button>
  <div class="form-status"></div>
</form>
```

**Validation**:
- HTML5 `required` attribute
- JavaScript real-time validation
- Email regex validation
- Error message display

---

## CSS Documentation

### CSS Architecture

#### 1. CSS Custom Properties (Variables)

**Location**: `:root` selector at top of `styles.css`

**Categories**:

**Colors**:
```css
:root {
  /* Primary palette */
  --primary-color: #2563eb;      /* Blue */
  --secondary-color: #7c3aed;    /* Purple */
  --accent-color: #06b6d4;       /* Cyan */
  
  /* Text colors */
  --text-primary: #1f2937;       /* Dark gray */
  --text-secondary: #6b7280;     /* Medium gray */
  
  /* Background colors */
  --bg-primary: #ffffff;         /* White */
  --bg-secondary: #f9fafb;       /* Light gray */
  --bg-tertiary: #f3f4f6;        /* Lighter gray */
  
  /* UI colors */
  --border-color: #e5e7eb;
  --success-color: #10b981;
  --error-color: #ef4444;
}
```

**Dark Theme** (`[data-theme="dark"]`):
```css
[data-theme="dark"] {
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-tertiary: #374151;
  --border-color: #374151;
}
```

**Spacing**:
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
```

**Typography**:
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
--font-mono: 'Courier New', monospace;
```

**Benefits**:
- Easy theme switching
- Consistent design system
- Simple maintenance
- No preprocessor needed

#### 2. Layout Techniques

**CSS Grid** (Projects, Skills, About):
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}
```

**Advantages**:
- Automatic responsiveness
- No media queries needed for column count
- Equal height cards
- Flexible and maintainable

**Flexbox** (Navigation, Buttons, Inline Elements):
```css
.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}
```

**Use Cases**:
- One-dimensional layouts
- Space distribution
- Alignment control
- Wrapping behavior

#### 3. Responsive Design

**Breakpoints**:
```css
/* Mobile First Base Styles: < 640px */

@media (max-width: 968px) {
  /* Tablet and below */
}

@media (max-width: 640px) {
  /* Mobile only */
}
```

**Strategy**:
1. Design for mobile first
2. Use relative units (rem, em, %)
3. Fluid typography with `clamp()`
4. Flexible images (max-width: 100%)
5. CSS Grid for automatic responsiveness

**Fluid Typography**:
```css
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
```
- Minimum: 2rem (32px)
- Preferred: 5% of viewport width
- Maximum: 3.5rem (56px)

#### 4. Animations & Transitions

**Keyframe Animations**:

**Fade In**:
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

**Float** (Hero image):
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

**Cursor Blink**:
```css
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

**Transitions**:
```css
:root {
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
}
```

**Best Practices**:
- Use `transform` and `opacity` for performance
- Avoid animating layout properties (width, height)
- Provide reduced motion alternatives
- Keep duration under 500ms for UI feedback

#### 5. Shadows & Depth

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

**Usage**:
- `sm`: Subtle elevation (form inputs)
- `md`: Cards and containers
- `lg`: Hover states
- `xl`: Modals and important elements

---

## JavaScript Documentation

### Code Organization

#### Utility Functions
```javascript
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
```

**Purpose**: Shorthand for DOM selection, cleaner code

### Feature Documentation

#### 1. Theme Toggle System

**Files**: `script.js` (lines 10-35)

**Implementation**:
```javascript
const themeToggle = $('#themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Toggle function
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});
```

**How It Works**:
1. Check localStorage for saved preference
2. Apply theme via data attribute on `<html>`
3. CSS variables change based on `[data-theme]` selector
4. Save preference on toggle
5. Update icon to match current theme

**Storage Key**: `'theme'`  
**Possible Values**: `'light'` | `'dark'`

**Keyboard Shortcut**: Press 'T' to toggle theme

#### 2. Mobile Navigation

**Files**: `script.js` (lines 40-65)

**Implementation**:
```javascript
const navToggle = $('#navToggle');
const navMenu = $('#navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});
```

**Features**:
- Hamburger animation (3 lines → X)
- Slide-in menu from left
- Close on link click
- Close on outside click
- Close on Escape key

**CSS Classes**:
- `.nav-menu.active`: Shows menu
- `.nav-toggle.active`: Transforms hamburger to X

#### 3. Typing Effect

**Files**: `script.js` (lines 75-120)

**Configuration**:
```javascript
const textArray = ['Web Developer', 'Frontend Designer', 'Problem Solver', 'Creative Thinker'];
const typingDelay = 100;      // ms per character
const erasingDelay = 50;       // ms per character when erasing
const newTextDelay = 2000;     // ms pause before erasing
```

**Algorithm**:
1. Type one character at a time
2. Wait `newTextDelay` ms
3. Erase one character at a time
4. Move to next text in array
5. Loop infinitely

**Functions**:
- `type()`: Types characters
- `erase()`: Removes characters
- Both use recursive `setTimeout()` for animation

#### 4. Intersection Observer (Scroll Animations)

**Files**: `script.js` (lines 125-160)

**Purpose**: Trigger animations when elements enter viewport

**Configuration**:
```javascript
const observerOptions = {
  threshold: 0.1,               // Trigger when 10% visible
  rootMargin: '0px 0px -100px 0px'  // Offset from bottom
};
```

**Observed Elements**:
- `.section`: Fade in animation
- `.skill-item`: Trigger skill bar animation
- `.stat-item`: Trigger counter animation
- `.project-card`: Fade in animation

**How It Works**:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      
      // Special handling for different element types
      if (entry.target.classList.contains('skill-item')) {
        // Animate skill bar
      }
    }
  });
}, observerOptions);
```

**Performance**: Unobserve elements after animating to prevent re-triggering

#### 5. Counter Animation

**Files**: `script.js` (lines 165-180)

**Function**:
```javascript
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value + (end > 50 ? '+' : '');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
```

**Parameters**:
- `element`: DOM element to update
- `start`: Starting value (usually 0)
- `end`: Target value (from `data-target`)
- `duration`: Animation duration in ms

**How It Works**:
1. Uses `requestAnimationFrame` for smooth animation
2. Calculates progress based on time elapsed
3. Updates text content each frame
4. Adds '+' suffix for large numbers

#### 6. Project Filtering

**Files**: `script.js` (lines 185-215)

**Implementation**:
```javascript
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    // Filter projects
    projectCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(' ');
      
      if (filterValue === 'all' || categories.includes(filterValue)) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});
```

**Logic**:
1. Get filter value from button's `data-filter`
2. Check each card's `data-category`
3. Show if category matches or filter is 'all'
4. Hide with smooth fade-out if no match

**CSS Integration**:
```css
.project-card.hide {
  opacity: 0;
  transform: scale(0.8);
  /* Animated hide */
}
```

#### 7. Form Validation

**Files**: `script.js` (lines 220-300)

**Validation Rules**:

**Required Fields**:
```javascript
if (field.hasAttribute('required') && !field.value.trim()) {
  isValid = false;
  errorMessage = 'This field is required';
}
```

**Email Validation**:
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (field.type === 'email' && !emailRegex.test(field.value)) {
  isValid = false;
  errorMessage = 'Please enter a valid email address';
}
```

**Real-Time Validation**:
- Validates on `blur` (field loses focus)
- Re-validates on `input` if field has error
- Shows error messages inline

**Form Submission**:
```javascript
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Validate all fields
  // Show loading state
  // Simulate API call
  // Show success/error message
  // Reset form on success
});
```

**Note**: Currently simulates submission. Replace `simulateFormSubmission()` with actual API call.

#### 8. Smooth Scrolling

**Files**: `script.js` (lines 340-360)

**Implementation**:
```javascript
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
```

**Features**:
- Works for all internal anchor links
- Offsets for fixed navbar height
- Smooth scroll behavior
- Prevents default jump

#### 9. Active Navigation Highlighting

**Files**: `script.js` (lines 365-385)

**Logic**:
```javascript
window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
```

**How It Works**:
1. Listen for scroll events
2. Determine which section is currently in view
3. Add 'active' class to corresponding nav link
4. Remove from others

#### 10. Scroll to Top Button

**Files**: `script.js` (lines 320-340)

**Show/Hide Logic**:
```javascript
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
```

**Click Handler**:
```javascript
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
```

**Threshold**: Appears after scrolling 300px down

---

## Performance Optimization

### 1. CSS Optimizations

**Efficient Selectors**:
- Avoid deep nesting
- Use classes over IDs
- Minimize universal selectors

**Hardware Acceleration**:
```css
.animated-element {
  transform: translateZ(0);  /* Force GPU rendering */
  will-change: transform;     /* Hint to browser */
}
```

**Critical CSS**:
- Above-the-fold styles loaded first
- Non-critical styles can be deferred

### 2. JavaScript Optimizations

**Debouncing**:
```javascript
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Handle resize
  }, 250);
});
```

**Event Delegation**: Not needed in current implementation but can be used for dynamic content

**Intersection Observer**: Replaces scroll event listeners for better performance

### 3. Asset Optimization

**Images**:
- Use appropriate formats (WebP with fallbacks)
- Compress images (TinyPNG, ImageOptim)
- Use responsive images (`srcset`)
- Lazy loading for off-screen images

**Fonts**:
- Use system fonts (already implemented)
- If custom fonts: `font-display: swap`

### 4. Loading Performance

**Current Stats**:
- HTML: ~30KB
- CSS: ~40KB
- JavaScript: ~25KB
- **Total**: ~95KB (uncompressed)

**Optimization Opportunities**:
- Minification: ~30% size reduction
- Gzip compression: Additional 70% reduction
- Critical CSS inlining
- Defer non-critical JavaScript

### 5. Runtime Performance

**Lighthouse Scores** (Target):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Key Metrics**:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

---

## Browser Compatibility

### Supported Browsers

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | Full support |
| Edge | 90+ | Full support |
| Opera | 76+ | Full support |

### Feature Support

**CSS Features**:
- CSS Grid: ✅ All modern browsers
- CSS Variables: ✅ All modern browsers
- Flexbox: ✅ All modern browsers
- `clamp()`: ✅ Chrome 79+, Firefox 75+, Safari 13.1+

**JavaScript Features**:
- Arrow Functions: ✅ ES6 supported browsers
- `const`/`let`: ✅ ES6 supported browsers
- Template Literals: ✅ ES6 supported browsers
- Intersection Observer: ✅ Chrome 51+, Firefox 55+, Safari 12.1+
- LocalStorage: ✅ All modern browsers

### Fallbacks

**Intersection Observer**:
```javascript
if ('IntersectionObserver' in window) {
  // Use Intersection Observer
} else {
  // Fallback: Show all animations immediately
  document.querySelectorAll('.section').forEach(el => {
    el.classList.add('fade-in');
  });
}
```

**LocalStorage**:
```javascript
try {
  localStorage.setItem('theme', newTheme);
} catch (e) {
  console.warn('LocalStorage not available');
  // Fallback: Theme only persists for session
}
```

---

## Accessibility Features

### WCAG 2.1 Level AA Compliance

#### 1. Keyboard Navigation
- All interactive elements accessible via Tab
- Skip to main content link
- Focus indicators on all focusable elements
- Logical tab order

**Testing**: Navigate entire site using only keyboard

#### 2. ARIA Labels
```html
<button aria-label="Toggle theme">
  <i class="fas fa-moon"></i>
</button>

<button aria-label="Toggle navigation">
  <span></span>
  <span></span>
  <span></span>
</button>
```

#### 3. Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- `<label>` associated with form inputs
- `alt` attributes on images

#### 4. Color Contrast

**Minimum Ratios**:
- Normal text: 4.5:1
- Large text: 3:1
- UI components: 3:1

**Tools for Testing**:
- Chrome DevTools Lighthouse
- WebAIM Contrast Checker
- axe DevTools

#### 5. Screen Reader Support
- Descriptive link text (no "click here")
- Form labels and error messages
- Status messages announced
- Hidden content properly marked

#### 6. Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Security Considerations

### 1. Input Validation

**Client-Side**:
- HTML5 validation attributes
- JavaScript regex validation
- XSS prevention (sanitize before using `innerHTML`)

**Server-Side** (when implemented):
- Never trust client input
- Validate all data server-side
- Use parameterized queries
- Implement rate limiting

### 2. Content Security Policy

**Recommended Headers**:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
               style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;">
```

### 3. External Resources

**Current CDN Usage**:
- Font Awesome 6.4.0 from cdnjs.cloudflare.com
- Subresource Integrity (SRI) hashes recommended

**Best Practice**:
```html
<link rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-..."
      crossorigin="anonymous">
```

### 4. HTTPS

**Requirements**:
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use HSTS header

---

## Testing Guide

### Manual Testing Checklist

#### Functionality
- [ ] Navigation links work correctly
- [ ] Mobile menu opens and closes
- [ ] Theme toggle changes theme and persists
- [ ] Typing effect animates correctly
- [ ] Skill bars animate on scroll
- [ ] Statistics counters animate
- [ ] Project filters work correctly
- [ ] Form validation shows errors
- [ ] Form submits successfully
- [ ] Scroll to top button appears and works

#### Responsive Design
- [ ] Test on mobile (< 640px)
- [ ] Test on tablet (640px - 968px)
- [ ] Test on desktop (> 968px)
- [ ] Test on very large screens (1920px+)
- [ ] Test in portrait and landscape

#### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

#### Accessibility
- [ ] Navigate entire site with keyboard only
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Check color contrast
- [ ] Verify heading hierarchy
- [ ] Test with zoom at 200%

#### Performance
- [ ] Run Lighthouse audit
- [ ] Test on slow 3G connection
- [ ] Check for console errors
- [ ] Verify no layout shift

### Automated Testing

**Tools**:
- **Lighthouse**: Performance, accessibility, SEO
- **axe DevTools**: Accessibility testing
- **WebPageTest**: Performance analysis
- **W3C Validators**: HTML/CSS validation

**Commands**:
```bash
# HTML Validation
# Upload to https://validator.w3.org/

# CSS Validation
# Upload to https://jigsaw.w3.org/css-validator/

# Lighthouse (Chrome DevTools)
# Open DevTools → Lighthouse tab → Generate report
```

---

## Maintenance Guide

### Regular Updates

#### Content Updates
1. **Update projects**: Add new projects to `index.html`
2. **Update skills**: Modify skill percentages as you learn
3. **Update resume**: Replace `assets/resume.pdf`
4. **Update social links**: Change URLs in navigation and footer

#### Code Updates
1. Keep dependencies updated (Font Awesome)
2. Test after browser updates
3. Review and optimize performance quarterly
4. Update documentation as features change

### Common Modifications

#### Add New Section
1. Create HTML structure in `index.html`
2. Add navigation link
3. Style in `styles.css`
4. Add JavaScript if needed
5. Test responsiveness

#### Change Color Scheme
1. Edit CSS variables in `:root`
2. Update dark theme variables
3. Test contrast ratios
4. Verify all components

#### Add New Project
```html
<article class="project-card" data-category="your-categories">
  <div class="project-image">
    <!-- Add image here -->
  </div>
  <div class="project-content">
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Description here</p>
    <div class="project-tags">
      <span class="tag">Tech1</span>
      <span class="tag">Tech2</span>
    </div>
  </div>
</article>
```

### Backup Strategy
1. Regular Git commits
2. Push to GitHub
3. Keep local backups
4. Tag stable releases

### Version Control
```bash
# Commit workflow
git add .
git commit -m "descriptive message"
git push origin main

# Branching for features
git checkout -b feature/new-feature
# Make changes
git commit -m "Add new feature"
git checkout main
git merge feature/new-feature
```

---

## Troubleshooting

### Common Issues

#### Theme Not Persisting
**Cause**: LocalStorage blocked or disabled  
**Solution**: Check browser settings, use cookies as fallback

#### Animations Not Working
**Cause**: JavaScript errors or Intersection Observer not supported  
**Solution**: Check console, implement fallbacks

#### Mobile Menu Stuck Open
**Cause**: JavaScript error or CSS issue  
**Solution**: Check console, verify CSS classes

#### Form Not Submitting
**Cause**: Validation errors or JavaScript issue  
**Solution**: Check console, verify all required fields

### Debug Mode

Add to `script.js` for debugging:
```javascript
const DEBUG = true;

if (DEBUG) {
  console.log('Debug mode enabled');
  // Add debug logging
}
```

---

## Glossary

**Progressive Enhancement**: Building for basic functionality first, then enhancing  
**Mobile-First**: Designing for mobile devices before desktop  
**Semantic HTML**: Using HTML elements for their intended purpose  
**Intersection Observer**: API for detecting element visibility  
**LocalStorage**: Browser storage for persistent data  
**Debouncing**: Limiting function execution frequency  
**SPA**: Single Page Application  
**CDN**: Content Delivery Network  
**ARIA**: Accessible Rich Internet Applications  
**WCAG**: Web Content Accessibility Guidelines  
**SRI**: Subresource Integrity

---

## Changelog

### Version 1.0.0 (December 2025)
- Initial release
- All core features implemented
- Documentation completed
- Ready for deployment

---

## Support & Contact

For technical questions or issues:
- **Email**: your.email@example.com
- **GitHub Issues**: https://github.com/yourusername/assignment-4/issues
- **Documentation**: This file and README.md

---

**Last Updated**: December 9, 2025  
**Version**: 1.0.0  
**Maintained By**: [Your Name]
