/* Generates the "below-the-fold" HTML for translated home pages.
 * The hero widget (live encoder) is rendered by Astro template; this function
 * covers everything below it: trust strip, bento grid, how-it-works, FAQ.
 */

export interface HomeExtra {
  eyebrowSub: string;
  meta1: string; meta2: string; meta3: string;
  toolsH2: string; toolsP: string;
  howH2: string; howP: string;
  step1H: string; step1P: string;
  step2H: string; step2P: string;
  step3H: string; step3P: string;
  faqH2: string;
  faqs: Array<{ q: string; a: string }>;
}

const ARROW_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;
const FLOW_ARROW = `<div class="flow-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>`;
const PLUS_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

function tile(href: string, cat: string, iconPath: string, h3: string, p: string, tag: string, cls: string = 'span-3', glyph = '') {
  return `<a href="${href}" class="tile ${cls}" style="--c:var(${cat})">
    <div class="top"><div class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg></div><div class="arrow">${ARROW_SVG}</div></div>
    <h3>${h3}</h3><p>${p}</p>
    <div class="meta"><span class="tag"><span style="width:5px;height:5px;border-radius:50%;background:currentColor;display:inline-block"></span>${tag}</span></div>
    ${glyph ? `<div class="glyph">${glyph}</div>` : ''}
  </a>`;
}

function faqItem(q: string, a: string) {
  return `<details class="faq-item"><summary>${q}<span class="ic">${PLUS_SVG}</span></summary><div class="a">${a}</div></details>`;
}

export function renderHomeSections(ex: HomeExtra, lang: string = 'en', translatedSlugs: Set<string> = new Set()): string {
  // Link to /{lang}/slug/ only when that page actually exists; fall back to English.
  const p = (slug: string) => {
    if (lang === 'en') return `/${slug}/`;
    return translatedSlugs.has(slug) ? `/${lang}/${slug}/` : `/${slug}/`;
  };
  const trustStrip = `
<div class="trust-strip">
  <div class="trust-inner">
    <div class="trust-cell">
      <div class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <div><div class="lbl">100% Client-side</div><div class="sub">atob() · btoa() · FileReader</div></div>
    </div>
    <div class="trust-cell">
      <div class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
      <div><div class="lbl">${ex.meta1}</div><div class="sub">${ex.meta2}</div></div>
    </div>
    <div class="trust-cell">
      <div class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
      <div><div class="lbl">${ex.meta2}</div><div class="sub">Encode · decode · convert</div></div>
    </div>
    <div class="trust-cell">
      <div class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>
      <div><div class="lbl">${ex.meta3}</div><div class="sub">MIT · GitHub</div></div>
    </div>
  </div>
</div>`;

  const IMG_IC = `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`;
  const TXT_IC = `<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>`;
  const FILE_IC = `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`;
  const DL_IC = `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`;
  const CHK_IC = `<polyline points="20 6 9 17 4 12"/>`;
  const BAR_IC = `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`;
  const CODE_IC = `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`;
  const BOOK_IC = `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`;

  const bento = `
<section class="section">
  <div class="section-head">
    <div class="left">
      <div class="eyebrow"><span class="num">01</span><span class="bar"></span>ALL TOOLS</div>
      <h2>${ex.toolsH2}</h2>
      <p>${ex.toolsP}</p>
    </div>
  </div>
  <div class="bento">
    <a href="${p('base64-image-encoder')}" class="tile feat" style="--c:var(--cat-encode)">
      <div class="top"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${IMG_IC}</svg></div><div class="arrow">${ARROW_SVG}</div></div>
      <h3>Image → Base64</h3><p>Drag-and-drop any image. Get a data URI ready to paste into HTML, CSS, or JSON.</p>
      <div class="demo"><span style="color:var(--cat-encode)">data:</span>image/png;base64,<span style="color:var(--fg-soft)">iVBORw0KGgoAAAA…</span></div>
      <div class="meta"><span class="tag"><span style="width:5px;height:5px;border-radius:50%;background:currentColor;display:inline-block"></span>Encoder</span></div>
      <div class="glyph">B64</div>
    </a>
    <a href="${p('base64-image-decoder')}" class="tile feat" style="--c:var(--cat-decode)">
      <div class="top"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DL_IC}</svg></div><div class="arrow">${ARROW_SVG}</div></div>
      <h3>Base64 → Image</h3><p>Paste any Base64 string. Preview and download the decoded image instantly.</p>
      <div class="demo"><span style="color:var(--fg-soft)">iVBORw0KGgoAAAA…</span><span style="color:var(--cat-decode);margin:0 6px">→</span><span style="color:var(--cat-decode)">image.png</span></div>
      <div class="meta"><span class="tag"><span style="width:5px;height:5px;border-radius:50%;background:currentColor;display:inline-block"></span>Decoder</span></div>
      <div class="glyph">↓</div>
    </a>
    ${tile(p('base64-text-encoder'), '--cat-encode', TXT_IC, 'Text → Base64', 'Encode any UTF-8 text. Standard or URL-safe.', 'Encoder')}
    ${tile(p('base64-file-encoder'), '--cat-encode', FILE_IC, 'File → Base64', 'Any file type — PDF, ZIP, font, binary.', 'Encoder')}
    ${tile(p('base64-text-decoder'), '--cat-decode', TXT_IC, 'Base64 → Text', 'Decode JWT tokens, API headers, config values.', 'Decoder')}
    ${tile(p('base64-file-decoder'), '--cat-decode', FILE_IC, 'Base64 → File', 'Recover original files from Base64 strings.', 'Decoder')}
    ${tile(p('base64-to-png'), '--cat-convert', IMG_IC, 'Base64 → PNG', 'Decode and export as lossless PNG.', 'Converter', 'span-4')}
    ${tile(p('base64-to-jpeg'), '--cat-convert', IMG_IC, 'Base64 → JPEG', 'Convert with adjustable quality.', 'Converter', 'span-4')}
    ${tile(p('base64-to-webp'), '--cat-convert', IMG_IC, 'Base64 → WebP', 'Modern format, smaller file sizes.', 'Converter', 'span-4')}
    ${tile(p('base64-validator'), '--cat-tools', CHK_IC, 'Validator', 'Check if a string is valid Base64.', 'Utility')}
    ${tile(p('base64-size-calculator'), '--cat-tools', BAR_IC, 'Size Calculator', 'Calculate encoded output size before embedding.', 'Utility')}
    ${tile(p('base64-embed-generator'), '--cat-tools', CODE_IC, 'Embed Generator', 'Get HTML/CSS embed code in one click.', 'Utility')}
    ${tile(p('what-is-base64'), '--cat-learn', BOOK_IC, 'What is Base64?', 'Complete guide to Base64 encoding and RFC 4648.', 'Reference')}
  </div>
</section>`;

  const howItWorks = `
<section class="how">
  <div class="how-inner">
    <div class="section-head">
      <div class="left">
        <div class="eyebrow"><span class="num">02</span><span class="bar"></span>HOW IT WORKS</div>
        <h2>${ex.howH2}</h2>
        <p>${ex.howP}</p>
      </div>
    </div>
    <div class="flow">
      <div class="flow-step">
        <span class="num">01</span>
        <h4>${ex.step1H}</h4>
        <p>${ex.step1P}</p>
        <pre><code><span class="punct">const</span> file = input.files[0];</code></pre>
      </div>
      ${FLOW_ARROW}
      <div class="flow-step">
        <span class="num">02</span>
        <h4>${ex.step2H}</h4>
        <p>${ex.step2P}</p>
        <pre><code><span class="punct">const</span> b64 = btoa(binary);</code></pre>
      </div>
      ${FLOW_ARROW}
      <div class="flow-step">
        <span class="num">03</span>
        <h4>${ex.step3H}</h4>
        <p>${ex.step3P}</p>
        <pre><code><span class="key">// no uploads. ever.</span></code></pre>
      </div>
    </div>
  </div>
</section>`;

  const faq = `
<section class="section" style="padding-top:48px">
  <div class="section-head">
    <div class="left">
      <div class="eyebrow"><span class="num">03</span><span class="bar"></span>FAQ</div>
      <h2>${ex.faqH2}</h2>
    </div>
  </div>
  <div class="faq-grid">
    ${ex.faqs.map(f => faqItem(f.q, f.a)).join('\n    ')}
  </div>
</section>`;

  return trustStrip + bento + howItWorks + faq;
}
