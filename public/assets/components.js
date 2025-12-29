// Global Header and Footer Components
// This file provides reusable header and footer HTML that can be included on all pages

const HeaderComponent = `
    <header class="site-header">
        <div class="header-container">
            <a href="/" class="logo"><i class="fas fa-image"></i> BASE64IMAGE</a>
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
    }

    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = FooterComponent;
    }
}

// Run on DOM content loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}
