const it = {
  nav: {
    encoders: 'Codificatori', decoders: 'Decodificatori', convert: 'Converti', tools: 'Strumenti', learn: 'Impara',
  },
  common: {
    useTool: 'Usa lo strumento',
    toolNote: 'Lo strumento interattivo funziona in inglese — compatibile con qualsiasi lingua.',
    privacyNote: 'Tutto viene elaborato nel tuo browser. Nulla viene inviato a nessun server.',
  },
  pages: {
    '': {
      title: 'Codificatore e Decodificatore Base64 — Strumenti Gratuiti | base64image.net',
      description: 'Strumenti Base64 gratuiti e rispettosi della privacy. Codifica immagini, decodifica stringhe, converti formati. Tutto nel browser — nulla caricato sui server.',
      h1: 'Strumenti Base64 per sviluppatori',
      lede: 'Codifica, decodifica e converti Base64 nel tuo browser. Nulla lascia il tuo computer — senza upload, senza tracciamento.',
      bodyHtml: `<section class="content-section"><h2>Perché usare base64image.net?</h2><p>base64image.net offre oltre 40 strumenti Base64 gratuiti che girano completamente nel browser. Nessun account richiesto, nessuna pubblicità invasiva, i tuoi dati non lasciano mai il tuo dispositivo.</p><h2>Strumenti disponibili</h2><ul><li><a href="/base64-image-encoder/">Codificatore immagini Base64</a> — Converti PNG, JPEG, SVG in Base64</li><li><a href="/base64-image-decoder/">Decodificatore immagini Base64</a> — Converti Base64 in immagine</li><li><a href="/base64-text-encoder/">Codificatore testo Base64</a> — Converti testo in Base64</li><li><a href="/base64-text-decoder/">Decodificatore testo Base64</a> — Converti Base64 in testo</li><li><a href="/base64-validator/">Validatore Base64</a> — Verifica stringhe Base64</li><li><a href="/what-is-base64/">Cos'è Base64?</a> — Guida completa</li></ul></section>`,
    },
    'what-is-base64': {
      title: "Cos'è Base64? Guida Completa alla Codifica | base64image.net",
      description: "Guida completa su Base64: definizione, come funziona l'algoritmo, quando usarlo ed esempi pratici.",
      h1: "Cos'è la Codifica Base64?",
      lede: "Una guida completa sul formato di codifica Base64, il suo algoritmo e le applicazioni pratiche.",
      bodyHtml: `<article class="content-section"><h2>Cos'è Base64?</h2><p>Base64 è uno schema di codifica da binario a testo definito nell'RFC 4648. Rappresenta dati binari usando 64 caratteri ASCII stampabili. L'algoritmo converte ogni 3 byte (24 bit) in 4 caratteri di output, producendo un aumento di dimensione del 33%.</p><p>Base64 esiste perché molti protocolli supportano solo testo: SMTP, JSON, XML e URL richiedono rappresentazioni testuali sicure del contenuto binario.</p><h2>Come funziona?</h2><p>L'algoritmo elabora 3 byte alla volta, li divide in 4 gruppi da 6 bit e mappa ogni gruppo su un carattere dell'alfabeto Base64. Quando la lunghezza non è un multiplo di 3, vengono aggiunti caratteri di padding (=).</p><h2>Quando usare Base64?</h2><ul><li>Incorporare immagini in HTML/CSS come data URI</li><li>Trasmettere dati binari su canali solo testo</li><li>Credenziali di autenticazione HTTP Basic</li><li>Memorizzare configurazioni con caratteri problematici</li></ul><h2>Base64 non è crittografia</h2><p>Base64 è codifica, non crittografia. È reversibile senza chiave. Per proteggere i dati usa TLS/HTTPS o vera crittografia come AES.</p><h2>FAQ</h2><div class="faq-item"><h3>Base64 è crittografia?</h3><p>No. Base64 cambia solo il formato — chiunque può decodificarlo senza chiave.</p></div><div class="faq-item"><h3>Quanto aumenta la dimensione?</h3><p>I dati Base64 sono circa il 33% più grandi dei dati binari originali.</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'Codificatore Immagini Base64 — PNG, JPEG, SVG in Base64 | base64image.net',
      description: 'Converti PNG, JPEG, SVG, WebP in Base64 gratuitamente nel browser. Senza upload, totalmente privato.',
      h1: 'Codificatore Immagini Base64',
      lede: 'Converti immagini PNG, JPEG, SVG e WebP in stringhe Base64. Senza upload, totalmente privato.',
      bodyHtml: `<article class="content-section"><h2>Come convertire un'immagine in Base64?</h2><p>Usa il <a href="/base64-image-encoder/">codificatore immagini Base64</a>: trascina la tua immagine o clicca per selezionarla. La stringa Base64 viene generata istantaneamente nel browser senza inviare dati a nessun server.</p><h2>A cosa serve?</h2><p>Le immagini Base64 permettono di: incorporare immagini direttamente in HTML/CSS; includere immagini nelle email HTML; inviare dati immagine nelle API JSON.</p><h2>Formati supportati</h2><p>PNG, JPEG, GIF, WebP, SVG, AVIF, BMP, ICO e qualsiasi formato supportato dal browser.</p><h2>FAQ</h2><div class="faq-item"><h3>Come incorporo l'immagine in HTML?</h3><p><code>&lt;img src="data:image/png;base64,TUA_STRINGA"&gt;</code></p></div><div class="faq-item"><h3>Le mie immagini sono private?</h3><p>Sì. Tutto avviene localmente nel browser, nulla viene inviato ai server.</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'Decodificatore Immagini Base64 — Base64 in PNG, JPEG | base64image.net',
      description: 'Converti stringhe Base64 in immagini PNG, JPEG, SVG gratuitamente. Anteprima e download diretto.',
      h1: 'Decodificatore Immagini Base64',
      lede: 'Converti stringhe Base64 in immagini. Anteprima istantanea e download diretto.',
      bodyHtml: `<article class="content-section"><h2>Come decodificare Base64 in immagine?</h2><p>Incolla la tua stringa Base64 nel <a href="/base64-image-decoder/">decodificatore immagini</a>. Lo strumento rileva il tipo di immagine e mostra un'anteprima. Clicca "Scarica" per salvare il file.</p><h2>FAQ</h2><div class="faq-item"><h3>Posso incollare il data URI completo?</h3><p>Sì, accetta sia la stringa Base64 da sola che il data URI completo con prefisso.</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Codificatore Testo Base64 — Convertire Testo in Base64 | base64image.net',
      description: 'Converti qualsiasi testo in Base64 gratuitamente nel browser. Compatibile con Unicode, UTF-8 e caratteri speciali.',
      h1: 'Codificatore Testo Base64',
      lede: 'Converti qualsiasi testo in Base64 istantaneamente. Supporta Unicode, UTF-8 e tutti i caratteri speciali.',
      bodyHtml: `<article class="content-section"><h2>Come codificare testo in Base64?</h2><p>Digita o incolla il tuo testo nel <a href="/base64-text-encoder/">codificatore testo</a> e ottieni istantaneamente la stringa Base64. Supporta UTF-8 per caratteri Unicode ed emoji.</p><h2>Usi pratici</h2><ul><li>Autenticazione HTTP Basic (utente:password → Base64)</li><li>Token API e header di autorizzazione</li><li>Dati JSON con caratteri speciali</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Base64 crittografa il mio testo?</h3><p>No. Base64 cambia solo il formato — chiunque può decodificarlo.</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Decodificatore Testo Base64 — Convertire Base64 in Testo | base64image.net',
      description: 'Decodifica stringhe Base64 in testo leggibile gratuitamente. Supporta UTF-8, Unicode e caratteri speciali.',
      h1: 'Decodificatore Testo Base64',
      lede: 'Converti stringhe Base64 in testo leggibile. Supporta UTF-8, Unicode e tutti i caratteri speciali.',
      bodyHtml: `<article class="content-section"><h2>Come decodificare Base64 in testo?</h2><p>Incolla la tua stringa Base64 nel <a href="/base64-text-decoder/">decodificatore testo</a>. Lo strumento gestisce automaticamente la decodifica UTF-8 per i caratteri Unicode.</p><h2>FAQ</h2><div class="faq-item"><h3>Come decodifico un token JWT?</h3><p>Il payload (parte centrale) di un JWT è Base64URL — incollalo nel decodificatore per vedere il contenuto.</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64 in PNG — Convertitore Gratuito Online | base64image.net',
      description: 'Converti stringhe Base64 in file PNG nel browser. Anteprima istantanea e download diretto.',
      h1: 'Convertitore Base64 in PNG',
      lede: 'Converti Base64 in PNG. Anteprima istantanea e download diretto dal browser.',
      bodyHtml: `<article class="content-section"><h2>Come convertire Base64 in PNG?</h2><p>Incolla la tua stringa Base64 nel <a href="/base64-to-png/">convertitore Base64 in PNG</a>. Lo strumento mostra l'immagine PNG e offre il download.</p><h2>FAQ</h2><div class="faq-item"><h3>Si perde qualità nella conversione?</h3><p>No. La conversione Base64 è senza perdite — è solo un cambio di rappresentazione del formato.</p></div></article>`,
    },
    'base64-javascript': {
      title: 'Base64 in JavaScript — btoa, atob e Buffer | base64image.net',
      description: 'Come usare Base64 in JavaScript: btoa() e atob() nel browser, Buffer in Node.js, gestione Unicode.',
      h1: 'Base64 in JavaScript',
      lede: 'Guida completa per codificare e decodificare Base64 in JavaScript.',
      bodyHtml: `<article class="content-section"><h2>Base64 nel Browser</h2><pre><code>// Codifica
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// Decodifica
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Base64 in Node.js</h2><pre><code>const encoded = Buffer.from('Hello World').toString('base64');
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>FAQ</h2><div class="faq-item"><h3>Perché btoa() fallisce con caratteri speciali?</h3><p>btoa() accetta solo Latin-1. Per Unicode usa TextEncoder o encodeURIComponent.</p></div></article>`,
    },
    'base64-python': {
      title: 'Base64 in Python — Modulo base64 con Esempi | base64image.net',
      description: 'Come codificare e decodificare Base64 in Python con il modulo base64. Esempi per stringhe, file e casi reali.',
      h1: 'Base64 in Python',
      lede: 'Guida completa per Base64 in Python con il modulo base64 — esempi per stringhe, file e uso reale.',
      bodyHtml: `<article class="content-section"><h2>Codificare e decodificare stringhe</h2><pre><code>import base64

encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>Codificare file</h2><pre><code>with open('immagine.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

with open('output.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>FAQ</h2><div class="faq-item"><h3>Perché servono .encode() e .decode() in Python 3?</h3><p>base64 lavora con bytes. .encode() converte string in bytes, .decode() converte bytes in string.</p></div></article>`,
    },
  },
} as const;

export default it;
