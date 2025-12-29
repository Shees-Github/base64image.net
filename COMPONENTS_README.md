# Component System

This project uses a centralized component system for the header and footer to ensure consistency across all pages and make updates easier.

## How It Works

All header and footer HTML is defined once in `public/assets/components.js` and dynamically injected into each page on load.

## File Structure

```
public/
├── assets/
│   ├── components.js    ← Header & Footer components (EDIT THIS)
│   └── style.css
└── [pages]/
    └── index.html       ← Contains placeholders only
```

## Usage in HTML Pages

### 1. Include the components script

Add this in the `<head>` section:

```html
<link rel="stylesheet" href="../assets/style.css">
<script src="../assets/components.js"></script>
```

### 2. Add placeholders in the body

Replace the full header and footer with simple placeholders:

```html
<body>
    <!-- Header -->
    <div id="header-placeholder"></div>

    <!-- Main Content -->
    <main>
        <!-- Your page content here -->
    </main>

    <!-- Footer -->
    <div id="footer-placeholder"></div>
</body>
```

## Updating Navigation or Footer

**To add a new tool or update the menu:**

1. Open `public/assets/components.js`
2. Edit the `HeaderComponent` or `FooterComponent` string
3. Save the file
4. Changes automatically apply to **all 10 pages**

### Example: Adding a New Tool

Edit `components.js`:

```javascript
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
                            <!-- ADD NEW TOOL HERE -->
                            <li><a href="/base64-to-jpg/">Base64 to JPG</a></li>
                        </ul>
                    </li>
                    ...
                </ul>
            </nav>
        </div>
    </header>
`;
```

## Benefits

- ✅ **Single source of truth** - Update once, apply everywhere
- ✅ **Consistency** - No divergence between pages
- ✅ **Maintainability** - Easier to manage navigation changes
- ✅ **DRY principle** - Don't Repeat Yourself
- ✅ **Fast updates** - Add new tools in seconds

## Pages Using This System

1. `/` (homepage)
2. `/about/`
3. `/contact/`
4. `/privacy-policy/`
5. `/terms-of-service/`
6. `/base64-image-decoder/`
7. `/base64-image-encoder/`
8. `/base64-to-png/`
9. `/base64-validator/`
10. `/base64-to-pdf/`

## Technical Details

- Components load via `DOMContentLoaded` event
- Placeholders replaced with `outerHTML`
- No dependencies (vanilla JavaScript)
- Works with Alpine.js and other frameworks
