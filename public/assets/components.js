// Global Header and Footer Components
// This file provides reusable header and footer HTML that can be included on all pages

const HeaderComponent = `
    <header class="site-header">
        <div class="header-container">
            <a href="/" class="logo"><i class="fas fa-image"></i> BASE64IMAGE</a>
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
                <i class="fas fa-bars"></i>
            </button>
            <nav class="main-nav">
                <ul>
                    <li class="dropdown">
                        <a href="/#tools" class="dropdown-toggle">Tools</a>
                        <ul class="dropdown-menu">
                            <li><a href="/base64-image-decoder/">Base64 Image Decoder</a></li>
                            <li><a href="/base64-image-encoder/">Base64 Image Encoder</a></li>
                            <li><a href="/base64-to-png/">Base64 to PNG</a></li>
                            <li><a href="/base64-validator/">Base64 Validator</a></li>
                            <li><a href="/base64-to-pdf/">Base64 to PDF</a></li>
                        </ul>
                    </li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/contact/">Contact</a></li>
                    <li><a href="/privacy-policy/">Privacy</a></li>
                </ul>
            </nav>
        </div>
        <div class="mobile-menu-overlay"></div>
    </header>
`;

const FooterComponent = `
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Tools</h3>
                    <ul>
                        <li><a href="/base64-image-decoder/">Base64 Image Decoder</a></li>
                        <li><a href="/base64-image-encoder/">Base64 Image Encoder</a></li>
                        <li><a href="/base64-to-png/">Base64 to PNG</a></li>
                        <li><a href="/base64-validator/">Base64 Validator</a></li>
                        <li><a href="/base64-to-pdf/">Base64 to PDF</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/about/">About Us</a></li>
                        <li><a href="/contact/">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="/terms-of-service/">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; 2025 BASE64IMAGE. All tools run locally in your browser.</p>
            </div>
        </div>
    </footer>
`;

// Function to inject header and footer into the page
function initComponents() {
    // Insert header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = HeaderComponent;
        initMobileMenu();
    }

    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = FooterComponent;
    }
}

// Mobile menu toggle functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    // Toggle mobile menu
    if (menuToggle && mainNav && menuOverlay) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            menuOverlay.classList.toggle('active');

            // Change icon
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking overlay
        menuOverlay.addEventListener('click', function() {
            mainNav.classList.remove('active');
            menuOverlay.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    }

    // Handle dropdown toggle on mobile
    if (dropdown && dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }

    // Close mobile menu and dropdown when clicking nav links
    const navLinks = document.querySelectorAll('.main-nav a:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                menuOverlay.classList.remove('active');
                dropdown.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Clean up on resize to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const mainNav = document.querySelector('.main-nav');
        const menuOverlay = document.querySelector('.mobile-menu-overlay');
        const dropdown = document.querySelector('.dropdown');
        const menuToggle = document.querySelector('.mobile-menu-toggle');

        if (mainNav) mainNav.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        if (dropdown) dropdown.classList.remove('active');

        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
});

// Run on DOM content loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}
