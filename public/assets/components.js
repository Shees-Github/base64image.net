// Global Header and Footer Components
// This file provides reusable header and footer HTML that can be included on all pages

const HeaderComponent = `
    <header class="site-header">
        <div class="header-container">
            <a href="/" class="logo"><i class="fas fa-image"></i> BASE64IMAGE</a>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li>
                        <button id="tools-button" class="nav-link" aria-haspopup="true" aria-controls="tools-panel" aria-expanded="false">
                            Tools
                        </button>
                    </li>
                    <li>
                        <button id="resources-button" class="nav-link" aria-haspopup="true" aria-controls="resources-panel" aria-expanded="false">
                            Resources
                        </button>
                    </li>
                    <li><a class="nav-link" href="/about/">About</a></li>
                    <li><a class="nav-link" href="/contact/">Contact</a></li>
                </ul>
            </nav>

            <!-- Floating Mega Menu Panels -->
            <div class="mega-menu-container">
                <!-- Tools Panel -->
                <div class="mega-panel" id="tools-panel" aria-labelledby="tools-button" role="menu" hidden>
                    <div class="mega-panel-content">
                        <div class="tool-links">
                            <div class="tool-link-item">
                                <a href="/base64-image-decoder/" class="tool-link">
                                    <div class="tool-icon"><i class="fas fa-unlock"></i></div>
                                    <div class="tool-info">
                                        <div class="tool-title">Base64 Image Decoder</div>
                                        <div class="tool-subtitle">Decode Base64 to images</div>
                                    </div>
                                </a>
                            </div>
                            <div class="tool-link-item">
                                <a href="/base64-image-encoder/" class="tool-link">
                                    <div class="tool-icon"><i class="fas fa-lock"></i></div>
                                    <div class="tool-info">
                                        <div class="tool-title">Base64 Image Encoder</div>
                                        <div class="tool-subtitle">Convert images to Base64</div>
                                    </div>
                                </a>
                            </div>
                            <div class="tool-link-item">
                                <a href="/base64-to-png/" class="tool-link">
                                    <div class="tool-icon"><i class="fas fa-file-image"></i></div>
                                    <div class="tool-info">
                                        <div class="tool-title">Base64 to PNG</div>
                                        <div class="tool-subtitle">Convert to PNG format</div>
                                    </div>
                                </a>
                            </div>
                            <div class="tool-link-item">
                                <a href="/base64-validator/" class="tool-link">
                                    <div class="tool-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="tool-info">
                                        <div class="tool-title">Base64 Validator</div>
                                        <div class="tool-subtitle">Validate Base64 strings</div>
                                    </div>
                                </a>
                            </div>
                            <div class="tool-link-item">
                                <a href="/base64-to-pdf/" class="tool-link">
                                    <div class="tool-icon"><i class="fas fa-file-pdf"></i></div>
                                    <div class="tool-info">
                                        <div class="tool-title">Base64 to PDF</div>
                                        <div class="tool-subtitle">Convert PDFs to/from Base64</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Resources Panel -->
                <div class="mega-panel" id="resources-panel" aria-labelledby="resources-button" role="menu" hidden>
                    <div class="mega-panel-content">
                        <div class="resource-links">
                            <a href="/privacy-policy/" class="resource-link">
                                <div class="resource-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <div class="resource-info">
                                    <div class="resource-title">Privacy Policy</div>
                                    <div class="resource-subtitle">How we protect your data</div>
                                </div>
                            </a>
                            <a href="/terms-of-service/" class="resource-link">
                                <div class="resource-icon">
                                    <i class="fas fa-file-contract"></i>
                                </div>
                                <div class="resource-info">
                                    <div class="resource-title">Terms of Service</div>
                                    <div class="resource-subtitle">Our terms and conditions</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
        initMegaMenu();
    }

    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = FooterComponent;
    }
}

// Initialize mega menu functionality
function initMegaMenu() {
    const toolsButton = document.getElementById('tools-button');
    const resourcesButton = document.getElementById('resources-button');
    const toolsPanel = document.getElementById('tools-panel');
    const resourcesPanel = document.getElementById('resources-panel');

    let activePanel = null;
    let hoverTimeout = null;

    function showPanel(button, panel) {
        clearTimeout(hoverTimeout);

        // Hide other panels
        if (activePanel && activePanel !== panel) {
            activePanel.setAttribute('hidden', '');
            activePanel.setAttribute('aria-hidden', 'true');
            const activeButton = document.querySelector('[aria-expanded="true"]');
            if (activeButton) {
                activeButton.setAttribute('aria-expanded', 'false');
            }
        }

        // Show this panel
        panel.removeAttribute('hidden');
        panel.setAttribute('aria-hidden', 'false');
        button.setAttribute('aria-expanded', 'true');
        activePanel = panel;
    }

    function hidePanel(button, panel) {
        hoverTimeout = setTimeout(() => {
            panel.setAttribute('hidden', '');
            panel.setAttribute('aria-hidden', 'true');
            button.setAttribute('aria-expanded', 'false');
            if (activePanel === panel) {
                activePanel = null;
            }
        }, 150);
    }

    function setupButton(button, panel) {
        if (!button || !panel) return;

        // Mouse events
        button.addEventListener('mouseenter', () => showPanel(button, panel));
        button.addEventListener('mouseleave', () => hidePanel(button, panel));
        panel.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
        panel.addEventListener('mouseleave', () => hidePanel(button, panel));

        // Click/touch events for mobile
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (button.getAttribute('aria-expanded') === 'true') {
                hidePanel(button, panel);
            } else {
                showPanel(button, panel);
            }
        });

        // Keyboard support
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (button.getAttribute('aria-expanded') === 'true') {
                    hidePanel(button, panel);
                } else {
                    showPanel(button, panel);
                }
            } else if (e.key === 'Escape') {
                hidePanel(button, panel);
            }
        });
    }

    setupButton(toolsButton, toolsPanel);
    setupButton(resourcesButton, resourcesPanel);

    // Close panels when clicking outside
    document.addEventListener('click', (e) => {
        if (activePanel && !e.target.closest('.main-nav') && !e.target.closest('.mega-panel')) {
            const activeButton = document.querySelector('[aria-expanded="true"]');
            if (activeButton) {
                hidePanel(activeButton, activePanel);
            }
        }
    });
}

// Run on DOM content loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}
