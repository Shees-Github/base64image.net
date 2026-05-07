const de = {
  nav: {
    encoders: 'Encoder', decoders: 'Decoder', convert: 'Konvertieren', tools: 'Werkzeuge', learn: 'Lernen',
  },
  common: {
    useTool: 'Werkzeug verwenden',
    toolNote: 'Das interaktive Werkzeug ist auf Englisch — funktioniert für alle Sprachen.',
    privacyNote: 'Alles wird in Ihrem Browser verarbeitet. Nichts wird an einen Server gesendet.',
  },
  pages: {
    '': {
      title: 'Base64 Encoder und Decoder — Kostenlose Tools | base64image.net',
      description: 'Kostenlose, private Base64-Tools. Bilder kodieren, Strings dekodieren, Formate konvertieren. Alles im Browser — nichts wird hochgeladen.',
      h1: 'Base64-Tools für Entwickler',
      lede: 'Base64 kodieren, dekodieren und konvertieren im Browser. Nichts verlässt Ihren Computer — kein Upload, kein Tracking.',
      bodyHtml: `<section class="content-section"><h2>Warum base64image.net?</h2><p>base64image.net bietet über 40 kostenlose Base64-Tools, die vollständig in Ihrem Browser laufen. Kein Konto erforderlich, keine aufdringlichen Werbeanzeigen, Ihre Daten verlassen nie Ihr Gerät.</p><h2>Verfügbare Tools</h2><ul><li><a href="/base64-image-encoder/">Base64 Bild-Encoder</a> — PNG, JPEG, SVG zu Base64</li><li><a href="/base64-image-decoder/">Base64 Bild-Decoder</a> — Base64 zu Bild</li><li><a href="/base64-text-encoder/">Base64 Text-Encoder</a> — Text zu Base64</li><li><a href="/base64-text-decoder/">Base64 Text-Decoder</a> — Base64 zu Text</li><li><a href="/base64-validator/">Base64 Validator</a> — Base64-Strings prüfen</li><li><a href="/what-is-base64/">Was ist Base64?</a> — Vollständiger Leitfaden</li></ul></section>`,
    },
    'what-is-base64': {
      title: 'Was ist Base64? Vollständiger Leitfaden zur Kodierung | base64image.net',
      description: 'Vollständiger Leitfaden zu Base64: Definition, Algorithmus, Anwendungsfälle und praktische Beispiele.',
      h1: 'Was ist Base64-Kodierung?',
      lede: 'Ein vollständiger Leitfaden zum Base64-Kodierungsformat, seinem Algorithmus und praktischen Anwendungen.',
      bodyHtml: `<article class="content-section"><h2>Was ist Base64?</h2><p>Base64 ist ein Binär-zu-Text-Kodierungsschema, das in RFC 4648 definiert ist. Es stellt Binärdaten mit 64 druckbaren ASCII-Zeichen dar. Der Algorithmus konvertiert jeweils 3 Bytes (24 Bit) in 4 Ausgabezeichen, was eine Größenzunahme von 33% verursacht.</p><p>Base64 existiert, weil viele Protokolle nur Text unterstützen: SMTP, JSON, XML und URLs benötigen textsichere Darstellungen für binäre Inhalte.</p><h2>Wie funktioniert es?</h2><p>Der Algorithmus verarbeitet 3 Bytes gleichzeitig, teilt sie in 4 Gruppen à 6 Bits auf und bildet jede Gruppe auf ein Zeichen des Base64-Alphabets ab. Wenn die Länge kein Vielfaches von 3 ist, werden Füllzeichen (=) hinzugefügt.</p><h2>Wann Base64 verwenden?</h2><ul><li>Bilder in HTML/CSS als Data-URIs einbetten</li><li>Binärdaten über textbasierte Kanäle übertragen</li><li>HTTP-Basic-Authentifizierungsdaten</li><li>Konfigurationen mit Sonderzeichen speichern</li></ul><h2>Base64 ist keine Verschlüsselung</h2><p>Base64 ist Kodierung, keine Verschlüsselung. Es ist ohne Schlüssel umkehrbar. Verwenden Sie für sichere Daten TLS/HTTPS oder echte Verschlüsselung wie AES.</p><h2>FAQ</h2><div class="faq-item"><h3>Ist Base64 eine Verschlüsselung?</h3><p>Nein. Base64 ändert nur das Format — jeder kann es ohne Schlüssel dekodieren.</p></div><div class="faq-item"><h3>Wie viel größer werden die Daten?</h3><p>Base64-Daten sind ca. 33% größer als die ursprünglichen Binärdaten.</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'Base64 Bild-Encoder — PNG, JPEG, SVG zu Base64 | base64image.net',
      description: 'PNG, JPEG, SVG, WebP kostenlos in Base64 konvertieren. Kein Upload, vollständig privat.',
      h1: 'Base64 Bild-Encoder',
      lede: 'Bilder in Base64-Strings konvertieren. Kein Upload, vollständig privat im Browser.',
      bodyHtml: `<article class="content-section"><h2>Wie konvertiert man ein Bild zu Base64?</h2><p>Verwenden Sie den <a href="/base64-image-encoder/">Base64 Bild-Encoder</a>: Ziehen Sie Ihr Bild oder klicken Sie zur Auswahl. Der Base64-String wird sofort in Ihrem Browser generiert, ohne Daten an einen Server zu senden.</p><h2>Wofür wird es verwendet?</h2><p>Base64-Bilder ermöglichen: Bilder direkt in HTML/CSS einbetten; Bilder in HTML-E-Mails einschließen; Bilder in JSON-APIs senden.</p><h2>Unterstützte Formate</h2><p>PNG, JPEG, GIF, WebP, SVG, AVIF, BMP, ICO und alle vom Browser unterstützten Formate.</p><h2>FAQ</h2><div class="faq-item"><h3>Wie bette ich das Bild in HTML ein?</h3><p><code>&lt;img src="data:image/png;base64,IHR_STRING"&gt;</code></p></div><div class="faq-item"><h3>Sind meine Bilder privat?</h3><p>Ja. Alles läuft lokal in Ihrem Browser, nichts wird an Server gesendet.</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'Base64 Bild-Decoder — Base64 zu PNG, JPEG | base64image.net',
      description: 'Base64-Strings kostenlos in PNG, JPEG, SVG-Bilder konvertieren. Vorschau und direkter Download.',
      h1: 'Base64 Bild-Decoder',
      lede: 'Base64-Strings zurück in Bilder konvertieren. Sofortige Vorschau und direkter Download.',
      bodyHtml: `<article class="content-section"><h2>Wie dekodiert man Base64 zu einem Bild?</h2><p>Fügen Sie Ihren Base64-String in den <a href="/base64-image-decoder/">Bild-Decoder</a> ein. Das Tool erkennt den Bildtyp und zeigt eine Vorschau. Klicken Sie auf "Herunterladen" zum Speichern.</p><h2>FAQ</h2><div class="faq-item"><h3>Kann ich den vollständigen Data-URI einfügen?</h3><p>Ja, akzeptiert sowohl den Base64-String allein als auch den vollständigen Data-URI mit Präfix.</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Base64 Text-Encoder — Text zu Base64 konvertieren | base64image.net',
      description: 'Beliebigen Text kostenlos in Base64 konvertieren. Unterstützt Unicode, UTF-8 und Sonderzeichen.',
      h1: 'Base64 Text-Encoder',
      lede: 'Jeden Text sofort in Base64 konvertieren. Unterstützt Unicode, UTF-8 und alle Sonderzeichen.',
      bodyHtml: `<article class="content-section"><h2>Wie kodiert man Text in Base64?</h2><p>Geben Sie Ihren Text in den <a href="/base64-text-encoder/">Text-Encoder</a> ein und erhalten Sie sofort den Base64-String. Unterstützt UTF-8 für Unicode-Zeichen und Emojis.</p><h2>Praktische Anwendungen</h2><ul><li>HTTP-Basic-Authentifizierung (Benutzer:Passwort → Base64)</li><li>API-Tokens und Autorisierungs-Header</li><li>JSON-Daten mit Sonderzeichen</li><li>E-Mails mit Nicht-ASCII-Zeichen</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Verschlüsselt Base64 meinen Text?</h3><p>Nein. Base64 ändert nur das Format — jeder kann es dekodieren.</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Base64 Text-Decoder — Base64 zu Text konvertieren | base64image.net',
      description: 'Base64-Strings kostenlos in lesbaren Text dekodieren. Unterstützt UTF-8, Unicode und Sonderzeichen.',
      h1: 'Base64 Text-Decoder',
      lede: 'Base64-Strings in lesbaren Text konvertieren. Unterstützt UTF-8, Unicode und alle Sonderzeichen.',
      bodyHtml: `<article class="content-section"><h2>Wie dekodiert man Base64 in Text?</h2><p>Fügen Sie Ihren Base64-String in den <a href="/base64-text-decoder/">Text-Decoder</a> ein. Das Tool verarbeitet automatisch die UTF-8-Dekodierung für Unicode-Zeichen.</p><h2>Wann braucht man das?</h2><ul><li>JWT-Tokens debuggen (Payload ist Base64)</li><li>HTTP-Basic-Auth-Header untersuchen</li><li>In Base64 kodierte Konfigurationen lesen</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Wie dekodiere ich ein JWT?</h3><p>Der Payload (mittlerer Teil) eines JWT ist Base64URL — fügen Sie ihn in den Decoder ein.</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64 zu PNG — Kostenloser Online-Konverter | base64image.net',
      description: 'Base64-Strings in PNG-Dateien im Browser konvertieren. Sofortige Vorschau und direkter Download.',
      h1: 'Base64 zu PNG Konverter',
      lede: 'Base64 in PNG konvertieren. Sofortige Vorschau und direkter Download.',
      bodyHtml: `<article class="content-section"><h2>Wie konvertiert man Base64 in PNG?</h2><p>Fügen Sie Ihren Base64-String in den <a href="/base64-to-png/">Base64-zu-PNG-Konverter</a> ein. Das Tool zeigt das PNG-Bild und bietet Download an.</p><h2>FAQ</h2><div class="faq-item"><h3>Geht bei der Konvertierung Qualität verloren?</h3><p>Nein. Base64-Konvertierung ist verlustfrei — es ist nur eine Formatumwandlung.</p></div></article>`,
    },
    'base64-validator': {
      title: 'Base64 Validator — Base64-Strings Online Prüfen | base64image.net',
      description: 'Überprüfen Sie, ob ein String gültiges Base64 ist. Fehler im Format, ungültige Zeichen und Padding-Probleme erkennen.',
      h1: 'Base64 Validator',
      lede: 'Prüfen Sie, ob ein String gültiges Base64 ist. Format-Fehler und ungültige Zeichen erkennen.',
      bodyHtml: `<article class="content-section"><h2>Wie validiert man einen Base64-String?</h2><p>Fügen Sie Ihren String in den <a href="/base64-validator/">Base64 Validator</a> ein. Er prüft: Base64-Alphabet-Zeichen; Länge (Vielfaches von 4); korrektes Padding (=).</p><h2>Häufige Fehler</h2><ul><li>Leerzeichen oder Zeilenumbrüche im String</li><li>Nicht-Base64-Zeichen</li><li>Falsche Länge oder fehlendes Padding</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Warum schlägt die Validierung fehl?</h3><p>Häufige Ursachen: zusätzliche Leerzeichen, Nicht-Base64-Zeichen oder falsche Länge.</p></div></article>`,
    },
    'base64-javascript': {
      title: 'Base64 in JavaScript — btoa, atob und Buffer | base64image.net',
      description: 'Base64 in JavaScript verwenden: btoa() und atob() für den Browser, Buffer für Node.js, Unicode-Behandlung.',
      h1: 'Base64 in JavaScript',
      lede: 'Vollständiger Leitfaden zum Kodieren und Dekodieren von Base64 in JavaScript.',
      bodyHtml: `<article class="content-section"><h2>Base64 im Browser</h2><pre><code>// Kodieren
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// Dekodieren
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Base64 in Node.js</h2><pre><code>const encoded = Buffer.from('Hello World').toString('base64');
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>FAQ</h2><div class="faq-item"><h3>Warum schlägt btoa() bei Sonderzeichen fehl?</h3><p>btoa() akzeptiert nur Latin-1. Für Unicode TextEncoder oder encodeURIComponent verwenden.</p></div></article>`,
    },
    'base64-to-svg': {
      title: 'Base64 zu SVG — Kostenloser Konverter | base64image.net',
      description: 'Konvertieren Sie Base64-Strings in SVG-Grafiken in Ihrem Browser. Vorschau und direkter Download.',
      h1: 'Base64 zu SVG Konverter',
      lede: 'Konvertieren Sie Base64 in skalierbare SVG-Vektorgrafiken. Vorschau und Download im Browser.',
    },
    'base64-to-webp': {
      title: 'Base64 zu WebP — Kostenloser Konverter | base64image.net',
      description: 'Konvertieren Sie Base64-Strings in WebP-Bilder im Browser. Einstellbare Qualität, Vorschau und Download.',
      h1: 'Base64 zu WebP Konverter',
      lede: 'Konvertieren Sie Base64 in WebP mit einstellbarer Qualität. Vorschau und Download im Browser.',
    },
    'base64-to-jpeg': {
      title: 'Base64 zu JPEG — Kostenloser Online-Konverter | base64image.net',
      description: 'Konvertieren Sie Base64-Strings in JPEG-Bilder im Browser. Sofortige Vorschau und direkter Download.',
      h1: 'Base64 zu JPEG Konverter',
      lede: 'Konvertieren Sie Base64 in JPEG. Sofortige Vorschau und Download im Browser.',
    },
    'base64-linux': {
      title: 'Base64 unter Linux — bash-Befehle mit Beispielen | base64image.net',
      description: 'Base64 unter Linux mit dem bash-Befehl base64. Beispiele für Strings, Dateien und Skripte.',
      h1: 'Base64 unter Linux (bash-Leitfaden)',
      lede: 'Den Linux-Befehl base64 in bash zum Kodieren und Dekodieren von Strings und Dateien verwenden.',
      bodyHtml: `<article class="content-section"><h2>Kodieren unter Linux</h2><pre><code># String kodieren (ohne Zeilenumbruch)
echo -n 'Hello World' | base64
# SGVsbG8gV29ybGQ=

# Datei ohne Zeilenumbrüche kodieren
base64 -w 0 bild.png > bild.b64</code></pre><h2>Dekodieren unter Linux</h2><pre><code>echo 'SGVsbG8gV29ybGQ=' | base64 -d
base64 -d bild.b64 > bild.png</code></pre><h2>Linux vs. macOS</h2><p>Linux: <code>-d</code> zum Dekodieren, <code>-w 0</code> ohne Zeilenumbrüche. macOS: <code>-D</code> und <code>-b 0</code>.</p><h2>FAQ</h2><div class="faq-item"><h3>Warum echo -n verwenden?</h3><p>Ohne -n fügt echo einen Zeilenumbruch hinzu, der in der Kodierung enthalten ist und ein falsches Ergebnis produziert.</p></div></article>`,
    },
  },
  homeExtra: {
    eyebrowSub: 'Datenschutz · Lokal · Kein Konto',
    meta1: 'Null Server-Anfragen', meta2: '40+ Tools', meta3: 'Open Source',
    toolsH2: 'Alles, was Sie für Base64 brauchen',
    toolsP: 'Encoder, Decoder, Konverter, Validatoren — jeder Workflow abgedeckt.',
    howH2: 'Null Serverkontakt. By Design.',
    howP: 'Jede Operation nutzt native Browser-APIs. Ihre Daten verlassen nie den Tab.',
    step1H: 'Sie liefern die Eingabe', step1P: 'Legen Sie eine Datei ab, fügen Sie einen String ein oder laden Sie ein Bild hoch. Es bleibt lokal.',
    step2H: 'Browser-API kodiert', step2P: 'FileReader, atob/btoa und Canvas übernehmen die Kodierung — in jedem Browser eingebaut.',
    step3H: 'Die Ausgabe gehört Ihnen', step3P: 'Kopieren Sie den String, laden Sie die Datei herunter. Null Netzwerkanfragen.',
    faqH2: 'Häufige Fragen',
    faqs: [
      { q: 'Sind meine Daten wirklich privat?', a: 'Ja. Öffnen Sie DevTools → Netzwerk während der Nutzung — Sie sehen null POST-Anfragen. Alle Operationen nutzen FileReader, atob()/btoa() und Canvas — Browser-APIs die nie das Netzwerk nutzen.' },
      { q: 'Was ist Base64-Kodierung?', a: 'Base64 konvertiert Binärdaten in ASCII-Text mit 64 druckbaren Zeichen. Wird verwendet, um Bilder in HTML/CSS einzubetten, Dateien in JSON-APIs zu übertragen. Kodierung fügt ~33% Größe hinzu. <a href="/de/what-is-base64/">Vollständiger Leitfaden</a>' },
      { q: 'Wie bette ich ein Bild in CSS ein?', a: 'Kodieren Sie Ihr Bild mit dem <a href="/base64-image-encoder/">Bild-Encoder</a>, dann: <code>background-image: url(\'data:image/png;base64,…\')</code>.' },
      { q: 'Standard vs. URL-sicheres Base64?', a: 'Standard-Base64 verwendet <code>+</code> und <code>/</code>, die in URLs brechen. URL-sicheres Base64 (RFC 4648 §5) ersetzt sie durch <code>-</code> und <code>_</code>.' },
    ],
  },
} as const;

export default de;
