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
                    <li><a href="/">Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Encoders <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="/base64-text-encoder/">Text to Base64</a></li>
                            <li><a href="/base64-file-encoder/">File to Base64</a></li>
                            <li><a href="/base64-image-encoder/">Image to Base64</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Decoders <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="/base64-text-decoder/">Base64 to Text</a></li>
                            <li><a href="/base64-file-decoder/">Base64 to File</a></li>
                            <li><a href="/base64-image-decoder/">Base64 to Image</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Converters <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="/base64-to-png/">Base64 to PNG</a></li>
                            <li><a href="/base64-to-pdf/">Base64 to PDF</a></li>
                            <li><a href="/base64-hex-converter/">Base64 ⇄ HEX</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Tools <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="/base64-validator/">Validator</a></li>
                            <li><a href="/base64-url-safe/">URL-Safe Encoder</a></li>
                            <li><a href="/base64-embed-generator/">Embed Generator</a></li>
                            <li><a href="/base64-bulk-converter/">Bulk Converter</a></li>
                        </ul>
                    </li>
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
                    <h3>Encoders</h3>
                    <ul>
                        <li><a href="/base64-text-encoder/">Text to Base64</a></li>
                        <li><a href="/base64-file-encoder/">File to Base64</a></li>
                        <li><a href="/base64-image-encoder/">Image to Base64</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Decoders</h3>
                    <ul>
                        <li><a href="/base64-text-decoder/">Base64 to Text</a></li>
                        <li><a href="/base64-file-decoder/">Base64 to File</a></li>
                        <li><a href="/base64-image-decoder/">Base64 to Image</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Converters</h3>
                    <ul>
                        <li><a href="/base64-to-png/">Base64 to PNG</a></li>
                        <li><a href="/base64-to-pdf/">Base64 to PDF</a></li>
                        <li><a href="/base64-hex-converter/">Base64 ⇄ HEX</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Tools & Utilities</h3>
                    <ul>
                        <li><a href="/base64-validator/">Validator</a></li>
                        <li><a href="/base64-url-safe/">URL-Safe Encoder</a></li>
                        <li><a href="/base64-embed-generator/">Embed Generator</a></li>
                        <li><a href="/base64-bulk-converter/">Bulk Converter</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="/about/">About Us</a></li>
                        <li><a href="/contact/">Contact</a></li>
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
        initDropdowns();
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

        // Close mobile menu when clicking nav links
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

// Dropdown menu functionality
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach((toggle, index) => {
        const dropdown = dropdowns[index];
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Desktop: hover behavior
        if (window.innerWidth > 768) {
            dropdown.addEventListener('mouseenter', function() {
                dropdown.classList.add('active');
            });

            dropdown.addEventListener('mouseleave', function() {
                dropdown.classList.remove('active');
            });
        }

        // Mobile: click behavior
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (window.innerWidth <= 768) {
                // Close other dropdowns
                dropdowns.forEach((dd, i) => {
                    if (i !== index) {
                        dd.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// Clean up on resize to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const mainNav = document.querySelector('.main-nav');
        const menuOverlay = document.querySelector('.mobile-menu-overlay');
        const menuToggle = document.querySelector('.mobile-menu-toggle');

        if (mainNav) mainNav.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');

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
