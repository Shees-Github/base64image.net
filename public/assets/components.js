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
                        <a href="/encoder/" class="dropdown-toggle">Encoder</a>
                        <ul class="dropdown-menu">
                            <li><a href="/encoder/text/">Text to Base64</a></li>
                            <li><a href="/encoder/file/">File to Base64</a></li>
                            <li><a href="/encoder/image/">Image to Base64</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="/decoder/" class="dropdown-toggle">Decoder</a>
                        <ul class="dropdown-menu">
                            <li><a href="/decoder/text/">Base64 to Text</a></li>
                            <li><a href="/decoder/file/">Base64 to File</a></li>
                            <li><a href="/decoder/image/">Base64 to Image</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="/file-tools/" class="dropdown-toggle">File Tools</a>
                        <ul class="dropdown-menu">
                            <li><a href="/file-tools/pdf/">PDF Encoder/Decoder</a></li>
                            <li><a href="/file-tools/document/">Word/Excel/PowerPoint</a></li>
                            <li><a href="/file-tools/bulk/">Bulk File Conversion</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="/image-tools/" class="dropdown-toggle">Image Tools</a>
                        <ul class="dropdown-menu">
                            <li><a href="/image-tools/convert/">Convert Image to Base64</a></li>
                            <li><a href="/image-tools/download/">Base64 to Image Download</a></li>
                            <li><a href="/image-tools/resize/">Resize/Compress Images</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="/pdf-doc-tools/" class="dropdown-toggle">PDF/Doc Tools</a>
                        <ul class="dropdown-menu">
                            <li><a href="/pdf-doc-tools/encoder-decoder/">PDF Encoder/Decoder</a></li>
                            <li><a href="/pdf-doc-tools/preview/">Preview PDF from Base64</a></li>
                            <li><a href="/pdf-doc-tools/download/">Base64 to Document Download</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="/utilities/" class="dropdown-toggle">Utilities</a>
                        <ul class="dropdown-menu">
                            <li><a href="/utilities/url/">URL Encoder/Decoder</a></li>
                            <li><a href="/utilities/validator/">Base64 Validator</a></li>
                            <li><a href="/utilities/encrypt/">Encrypt/Decrypt</a></li>
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
                    <h3>Encoder Tools</h3>
                    <ul>
                        <li><a href="/encoder/text/">Text to Base64</a></li>
                        <li><a href="/encoder/file/">File to Base64</a></li>
                        <li><a href="/encoder/image/">Image to Base64</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Decoder Tools</h3>
                    <ul>
                        <li><a href="/decoder/text/">Base64 to Text</a></li>
                        <li><a href="/decoder/file/">Base64 to File</a></li>
                        <li><a href="/decoder/image/">Base64 to Image</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>File & Image Tools</h3>
                    <ul>
                        <li><a href="/file-tools/pdf/">PDF Tools</a></li>
                        <li><a href="/file-tools/document/">Document Tools</a></li>
                        <li><a href="/image-tools/convert/">Image Converter</a></li>
                        <li><a href="/utilities/validator/">Base64 Validator</a></li>
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
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

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
            dropdowns.forEach(dd => dd.classList.remove('active'));
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    }

    // Handle dropdown toggles on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.closest('.dropdown');

                // Close other dropdowns
                dropdowns.forEach(dd => {
                    if (dd !== dropdown) {
                        dd.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking nav links (not dropdown toggles)
    const navLinks = document.querySelectorAll('.main-nav a:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                menuOverlay.classList.remove('active');
                dropdowns.forEach(dd => dd.classList.remove('active'));
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
        const dropdowns = document.querySelectorAll('.dropdown');
        const menuToggle = document.querySelector('.mobile-menu-toggle');

        if (mainNav) mainNav.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        dropdowns.forEach(dd => dd.classList.remove('active'));

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
