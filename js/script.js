// ===========================
// Utility Functions
// ===========================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ===========================
// Theme Toggle
// ===========================

const themeToggle = $('#themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===========================
// Mobile Navigation
// ===========================

const navToggle = $('#navToggle');
const navMenu = $('#navMenu');
const navLinks = $$('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===========================
// Navbar Scroll Effect
// ===========================

const navbar = $('#navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
    }
    
    if (currentScroll > lastScroll && currentScroll > 80) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Typing Effect
// ===========================

const typedTextSpan = $('.typed-text');
const cursorSpan = $('.cursor');

const textArray = ['Web Developer', 'Frontend Designer', 'Problem Solver', 'Creative Thinker'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

// Start typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});

// ===========================
// Scroll Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-item')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
            }
            
            // Animate stats
            if (entry.target.classList.contains('stat-item')) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = parseInt(statNumber.getAttribute('data-target'));
                animateValue(statNumber, 0, target, 2000);
            }
        }
    });
}, observerOptions);

// Observe all sections, skill items, and stat items
$$('.section, .skill-item, .stat-item, .project-card').forEach(el => {
    observer.observe(el);
});

// ===========================
// Animate Counter
// ===========================

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

// ===========================
// Project Filtering
// ===========================

const filterButtons = $$('.filter-btn');
const projectCards = $$('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.classList.remove('hide');
                setTimeout(() => {
                    card.style.display = 'block';
                }, 10);
            } else {
                card.classList.add('hide');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===========================
// Form Validation and Submission
// ===========================

const contactForm = $('#contactForm');
const formInputs = $$('.form-group input, .form-group textarea');

// Real-time validation
formInputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(field) {
    const errorSpan = field.parentElement.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Update UI
    if (!isValid) {
        field.classList.add('error');
        errorSpan.textContent = errorMessage;
    } else {
        field.classList.remove('error');
        errorSpan.textContent = '';
    }
    
    return isValid;
}

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isFormValid = true;
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showFormStatus('Please fix the errors above', 'error');
        return;
    }
    
    // Get form data
    const formData = {
        name: $('#name').value,
        email: $('#email').value,
        subject: $('#subject').value,
        message: $('#message').value
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    btnText.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call (replace with actual API endpoint)
        await simulateFormSubmission(formData);
        
        // Success
        showFormStatus('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();
        
        // Log to console (for demonstration)
        console.log('Form submitted:', formData);
    } catch (error) {
        // Error
        showFormStatus('Oops! Something went wrong. Please try again later.', 'error');
        console.error('Form submission error:', error);
    } finally {
        // Reset button
        btnText.textContent = originalText;
        submitBtn.disabled = false;
    }
});

function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 95% success rate
            if (Math.random() > 0.05) {
                resolve();
            } else {
                reject(new Error('Simulated error'));
            }
        }, 1500);
    });
}

function showFormStatus(message, type) {
    const formStatus = $('.form-status');
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 300);
    }, 5000);
}

// ===========================
// Scroll to Top Button
// ===========================

const scrollTopBtn = $('#scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Smooth Scrolling for Anchor Links
// ===========================

$$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        const target = $(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Nav Link on Scroll
// ===========================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = $$('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
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

// ===========================
// Prevent Form Resubmission
// ===========================

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===========================
// Performance: Lazy Loading Images
// ===========================

// If you add actual images later, uncomment this code
/*
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    $$('img.lazy').forEach(img => imageObserver.observe(img));
}
*/

// ===========================
// Console Easter Egg
// ===========================

console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #6b7280;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #6b7280;');

// ===========================
// Keyboard Navigation
// ===========================

document.addEventListener('keydown', (e) => {
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            themeToggle.click();
        }
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===========================
// Page Load Animation
// ===========================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger skill bar animations for visible items
    $$('.skill-progress').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
});

// ===========================
// Service Worker Registration (Optional)
// ===========================

// Uncomment to enable offline functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/

// ===========================
// Analytics (Optional)
// ===========================

// Add your analytics code here
// Example: Google Analytics, Plausible, etc.

// ===========================
// Error Handling
// ===========================

window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // You could send this to an error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an error tracking service
});

// ===========================
// Accessibility Enhancements
// ===========================

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ===========================
// Print Optimization
// ===========================

window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections for printing
    console.log('Preparing page for printing...');
});

window.addEventListener('afterprint', () => {
    console.log('Print completed or cancelled');
});

// ===========================
// Development Helpers
// ===========================

// Log viewport size changes (useful for responsive testing)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            console.log(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
        }, 250);
    });
}
