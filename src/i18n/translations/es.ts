const es = {
  nav: {
    encoders: 'Codificadores', decoders: 'Decodificadores', convert: 'Convertir', tools: 'Herramientas', learn: 'Aprender',
  },
  common: {
    useTool: 'Usar la herramienta',
    toolNote: 'La herramienta interactiva funciona en inglés — compatible con cualquier idioma.',
    privacyNote: 'Todo se procesa en tu navegador. Nada se envía a ningún servidor.',
  },
  pages: {
    '': {
      title: 'Codificador y Decodificador Base64 — Herramientas Gratuitas | base64image.net',
      description: 'Herramientas Base64 gratuitas y privadas. Codifica imágenes, decodifica cadenas, convierte formatos. Todo funciona en tu navegador — nada se sube a ningún servidor.',
      h1: 'Herramientas Base64 para desarrolladores',
      lede: 'Codifica, decodifica y convierte Base64 en tu navegador. Nada sale de tu máquina — sin subidas, sin rastreo, sin fricción.',
      bodyHtml: `<section class="content-section"><h2>¿Por qué usar base64image.net?</h2><p>base64image.net ofrece más de 40 herramientas Base64 gratuitas que se ejecutan completamente en tu navegador. No se requiere cuenta, no hay anuncios intrusivos y tus datos nunca abandonan tu dispositivo.</p><h2>Herramientas disponibles</h2><ul><li><a href="/base64-image-encoder/">Codificador de imágenes Base64</a> — Convierte PNG, JPEG, SVG a Base64</li><li><a href="/base64-image-decoder/">Decodificador de imágenes Base64</a> — Convierte Base64 a imagen</li><li><a href="/base64-text-encoder/">Codificador de texto Base64</a> — Convierte texto a Base64</li><li><a href="/base64-text-decoder/">Decodificador de texto Base64</a> — Convierte Base64 a texto</li><li><a href="/base64-validator/">Validador Base64</a> — Verifica cadenas Base64</li><li><a href="/what-is-base64/">¿Qué es Base64?</a> — Guía completa</li></ul></section>`,
    },
    'what-is-base64': {
      title: '¿Qué es Base64? Guía Completa de Codificación | base64image.net',
      description: 'Guía completa sobre Base64: qué es, cómo funciona el algoritmo, cuándo usarlo y ejemplos prácticos en HTML, CSS, JavaScript y más.',
      h1: '¿Qué es la Codificación Base64?',
      lede: 'Una guía completa sobre el formato de codificación Base64, su algoritmo y aplicaciones prácticas en el desarrollo web.',
      bodyHtml: `<article class="content-section"><h2>¿Qué es Base64?</h2><p>Base64 es un esquema de codificación binario-a-texto definido en el RFC 4648 que representa datos binarios usando 64 caracteres ASCII imprimibles. El algoritmo convierte cada 3 bytes de entrada en 4 caracteres de salida, produciendo un incremento de tamaño del 33%.</p><p>El nombre "Base64" hace referencia al alfabeto de 64 caracteres usado. Cada carácter representa exactamente 6 bits de datos. Base64 existe porque muchos protocolos solo admiten texto: correo SMTP, JSON, XML y URLs requieren representaciones texto-seguras del contenido binario.</p><h2>¿Cómo Funciona?</h2><p>El algoritmo procesa 3 bytes a la vez (24 bits), los divide en 4 grupos de 6 bits, y mapea cada grupo a un carácter del alfabeto Base64. Cuando la longitud no es múltiplo de 3, se añaden caracteres de relleno (=).</p><h2>¿Cuándo Usar Base64?</h2><ul><li>Incrustar imágenes en HTML/CSS como URIs de datos</li><li>Transmitir binario por canales de solo texto (SMTP, JSON)</li><li>Credenciales de autenticación HTTP Basic</li><li>Almacenar configuraciones con caracteres problemáticos</li></ul><h2>Base64 No Es Cifrado</h2><p>Base64 es codificación, no cifrado. Es reversible sin clave y no ofrece ninguna seguridad. Para proteger datos usa TLS/HTTPS o cifrado real como AES.</p><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Base64 es lo mismo que cifrado?</h3><p>No. Base64 es solo codificación de formato — cualquiera puede decodificarlo sin clave. Para seguridad real usa cifrado (AES, RSA).</p></div><div class="faq-item"><h3>¿Cuánto aumenta el tamaño?</h3><p>Los datos Base64 son aproximadamente un 33% más grandes que los binarios originales.</p></div><div class="faq-item"><h3>¿Cómo decodifico Base64?</h3><p>Usa el <a href="/base64-text-decoder/">decodificador de texto</a> o el <a href="/base64-image-decoder/">decodificador de imágenes</a>.</p></div></article>`,
    },
    'base64-algorithm': {
      title: 'Algoritmo Base64 Explicado — Codificación Paso a Paso | base64image.net',
      description: 'Explicación detallada del algoritmo Base64: proceso de codificación, tabla de caracteres, relleno y ejemplos de código.',
      h1: 'Algoritmo Base64 Explicado',
      lede: 'Cómo funciona el algoritmo Base64 internamente, con ejemplos paso a paso y explicación de la tabla de caracteres.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Funciona el Algoritmo?</h2><p>Base64 convierte datos binarios en texto ASCII: lee 3 bytes (24 bits) a la vez, los divide en 4 grupos de 6 bits, y mapea cada grupo a un carácter del alfabeto Base64 estándar.</p><h2>El Alfabeto Base64</h2><p>El alfabeto (RFC 4648) usa 64 caracteres: A–Z (0–25), a–z (26–51), 0–9 (52–61), + (62) y / (63). El símbolo = es relleno, no parte del alfabeto.</p><h2>Ejemplo Paso a Paso</h2><p>Codificando "Man" (bytes: 77, 97, 110):</p><ol><li>Binario: 01001101 01100001 01101110</li><li>Grupos de 6 bits: 010011 010110 000101 101110</li><li>Valores: 19, 22, 5, 46 → caracteres: T, W, F, u</li><li>Resultado: "TWFu"</li></ol><h2>Relleno (Padding)</h2><p>Si quedan 1 bytes: 2 caracteres Base64 + "==". Si quedan 2 bytes: 3 caracteres + "=".</p><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Por qué 4 caracteres para cada 3 bytes?</h3><p>3 bytes = 24 bits ÷ 6 bits por carácter = 4 caracteres Base64.</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'Codificador de Imágenes Base64 — PNG, JPEG, SVG a Base64 | base64image.net',
      description: 'Convierte imágenes PNG, JPEG, SVG, WebP a Base64 gratis en tu navegador. Sin subidas, completamente privado.',
      h1: 'Codificador de Imágenes Base64',
      lede: 'Convierte imágenes PNG, JPEG, SVG y WebP a cadenas Base64. Sin subidas, completamente privado.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Convertir una Imagen a Base64?</h2><p>Usa el <a href="/base64-image-encoder/">codificador de imágenes Base64</a>: arrastra tu imagen o haz clic para seleccionarla. La cadena Base64 se genera al instante en tu navegador, sin enviar datos a ningún servidor.</p><h2>¿Para Qué Sirve?</h2><p>Las imágenes Base64 permiten: incrustar imágenes directamente en HTML/CSS eliminando peticiones HTTP; incluir imágenes en correos HTML; enviar imágenes en APIs JSON; crear páginas web autónomas.</p><h2>¿Qué Formatos Admite?</h2><p>PNG, JPEG, GIF, WebP, SVG, AVIF, BMP, ICO y cualquier formato que soporte tu navegador. El resultado incluye el tipo MIME correcto.</p><h2>¿Cuándo No Usar Base64?</h2><p>Para imágenes grandes (&gt;10KB), Base64 aumenta el tamaño un 33% y puede degradar el rendimiento. Para imágenes reutilizadas en varias páginas, es mejor usar archivos externos con caché.</p><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Cómo incluyo la imagen en HTML?</h3><p><code>&lt;img src="data:image/png;base64,TU_CADENA"&gt;</code></p></div><div class="faq-item"><h3>¿Mis imágenes son privadas?</h3><p>Sí. Todo ocurre localmente en tu navegador, nada se envía a ningún servidor.</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'Decodificador de Imágenes Base64 — Base64 a PNG, JPEG | base64image.net',
      description: 'Convierte cadenas Base64 a imágenes PNG, JPEG, SVG gratis en tu navegador. Previsualiza y descarga.',
      h1: 'Decodificador de Imágenes Base64',
      lede: 'Convierte cadenas Base64 de vuelta a imágenes. Previsualiza y descarga el resultado al instante.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Decodificar Base64 a Imagen?</h2><p>Pega tu cadena Base64 en el <a href="/base64-image-decoder/">decodificador de imágenes</a>. La herramienta detecta el tipo de imagen y muestra una vista previa. Haz clic en "Descargar" para guardar el archivo.</p><h2>Formatos Soportados</h2><p>Admite cualquier imagen codificada en Base64: PNG, JPEG, GIF, WebP, SVG, AVIF y más. Acepta data URIs completos (con prefijo data:image/...) y cadenas Base64 solas.</p><h2>¿Cuándo Necesito Esto?</h2><p>Decodifica imágenes Base64 cuando: recibes datos de imagen en respuestas JSON; extraes imágenes de HTML/CSS; depuras aplicaciones con URIs de datos.</p><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Puedo pegar el data URI completo?</h3><p>Sí, acepta tanto la cadena Base64 sola como el data URI completo con prefijo.</p></div><div class="faq-item"><h3>¿En qué formato se descarga?</h3><p>En el formato original codificado: PNG produce PNG, JPEG produce JPEG, etc.</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Codificador de Texto Base64 — Convierte Texto a Base64 | base64image.net',
      description: 'Convierte cualquier texto a Base64 gratis en tu navegador. Compatible con Unicode, UTF-8 y caracteres especiales.',
      h1: 'Codificador de Texto Base64',
      lede: 'Convierte cualquier texto a Base64 al instante. Soporta Unicode, UTF-8 y todos los caracteres especiales.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Codificar Texto en Base64?</h2><p>Escribe o pega tu texto en el <a href="/base64-text-encoder/">codificador de texto</a> y obtén la cadena Base64 al instante. Soporta UTF-8 para caracteres Unicode, acentos y emojis.</p><h2>Usos Prácticos</h2><ul><li>Autenticación HTTP Basic (usuario:contraseña → Base64)</li><li>Tokens de API y cabeceras de autorización</li><li>Datos JSON con caracteres especiales</li><li>Correos con caracteres no ASCII</li></ul><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Base64 cifra mi texto?</h3><p>No. Solo cambia el formato — cualquiera puede decodificarlo. Para seguridad usa cifrado real.</p></div><div class="faq-item"><h3>¿Soporta emojis?</h3><p>Sí. Los emojis se codifican correctamente usando UTF-8 antes de aplicar Base64.</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Decodificador de Texto Base64 — Convierte Base64 a Texto | base64image.net',
      description: 'Decodifica cadenas Base64 a texto legible gratis. Soporta UTF-8, Unicode y caracteres especiales.',
      h1: 'Decodificador de Texto Base64',
      lede: 'Convierte cadenas Base64 a texto legible. Soporta UTF-8, Unicode y todos los caracteres especiales.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Decodificar Base64 a Texto?</h2><p>Pega tu cadena Base64 en el <a href="/base64-text-decoder/">decodificador de texto</a>. La herramienta maneja automáticamente la decodificación UTF-8 para caracteres Unicode.</p><h2>¿Cuándo Necesito Esto?</h2><ul><li>Depurar tokens JWT (el payload es Base64)</li><li>Inspeccionar cabeceras de autenticación HTTP Basic</li><li>Leer datos de configuración codificados</li><li>Analizar correos con contenido MIME codificado</li></ul><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Cómo decodifico un JWT?</h3><p>El payload (parte central) de un JWT es Base64URL — pégalo en el decodificador para ver su contenido.</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64 a PNG — Convertidor Gratuito Online | base64image.net',
      description: 'Convierte cadenas Base64 a archivos PNG en tu navegador. Previsualización instantánea y descarga directa.',
      h1: 'Conversor de Base64 a PNG',
      lede: 'Convierte Base64 a PNG. Previsualización instantánea y descarga directa desde tu navegador.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Convertir Base64 a PNG?</h2><p>Pega tu cadena Base64 en el <a href="/base64-to-png/">convertidor Base64 a PNG</a>. La herramienta muestra la imagen PNG y ofrece descarga. Todo ocurre en tu navegador.</p><h2>Formatos de Data URI</h2><p>Acepta el data URI completo: <code>data:image/png;base64,...</code> o solo la cadena Base64.</p><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Se pierde calidad al convertir?</h3><p>No. La conversión Base64 es sin pérdidas — solo cambia la representación del formato.</p></div><div class="faq-item"><h3>¿Puedo convertir a otros formatos?</h3><p>Sí: <a href="/base64-to-jpeg/">Base64 a JPEG</a>, <a href="/base64-to-svg/">Base64 a SVG</a>, <a href="/base64-to-webp/">Base64 a WebP</a>.</p></div></article>`,
    },
    'base64-to-jpeg': {
      title: 'Base64 a JPEG — Convertidor Gratuito Online | base64image.net',
      description: 'Convierte cadenas Base64 a imágenes JPEG en tu navegador. Previsualización y descarga directa.',
      h1: 'Conversor de Base64 a JPEG',
      lede: 'Convierte Base64 a JPEG. Previsualización instantánea y descarga desde tu navegador.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Convertir Base64 a JPEG?</h2><p>Usa el <a href="/base64-to-jpeg/">convertidor Base64 a JPEG</a>: pega tu cadena Base64 y la imagen JPEG aparece inmediatamente. Descárgala con un clic.</p><h2>JPEG vs PNG en Base64</h2><p>JPEG usa compresión con pérdida (ideal para fotos). El data URI tiene prefijo <code>data:image/jpeg;base64,</code>.</p><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Cómo sé si mi Base64 es un JPEG?</h3><p>El data URI comienza con <code>data:image/jpeg;base64,</code>. La herramienta detecta el formato automáticamente.</p></div></article>`,
    },
    'base64-validator': {
      title: 'Validador Base64 — Verifica Cadenas Base64 Online | base64image.net',
      description: 'Verifica si una cadena es Base64 válido. Detecta errores de formato, caracteres inválidos y problemas de relleno.',
      h1: 'Validador Base64',
      lede: 'Verifica si una cadena es Base64 válido. Detecta errores de formato, caracteres inválidos y relleno incorrecto.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Validar una Cadena Base64?</h2><p>Pega tu cadena en el <a href="/base64-validator/">validador Base64</a>. Verifica: caracteres del alfabeto Base64 (A-Z, a-z, 0-9, +, /); longitud múltiplo de 4; relleno = correcto.</p><h2>Errores Comunes</h2><ul><li>Espacios o saltos de línea dentro de la cadena</li><li>Caracteres no Base64</li><li>Longitud incorrecta o relleno faltante</li><li>Mezcla de Base64 estándar y URL-safe</li></ul><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Por qué falla la validación?</h3><p>Causas comunes: espacios extra, caracteres no Base64, o longitud incorrecta.</p></div></article>`,
    },
    'data-uri-guide': {
      title: 'Guía de Data URIs — Uso en HTML y CSS | base64image.net',
      description: 'Guía completa de data URIs: formato, uso en HTML y CSS, ventajas, desventajas y mejores prácticas.',
      h1: 'Guía de URI de Datos (Data URIs)',
      lede: 'Todo sobre data URIs: formato, uso en HTML/CSS, cuándo usarlos y cuándo evitarlos.',
      bodyHtml: `<article class="content-section"><h2>¿Qué es un Data URI?</h2><p>Un data URI incluye datos directamente en una URL: <code>data:[tipo MIME][;base64],datos</code>. Ejemplo: <code>data:image/png;base64,iVBOR...</code></p><h2>Uso en HTML y CSS</h2><p>HTML: <code>&lt;img src="data:image/png;base64,..."&gt;</code><br>CSS: <code>background-image: url('data:image/svg+xml;base64,...')</code></p><h2>Ventajas</h2><ul><li>Eliminan solicitudes HTTP adicionales</li><li>Permiten páginas web autónomas</li><li>Ideales para iconos SVG pequeños (&lt;5KB)</li></ul><h2>Desventajas</h2><ul><li>Aumentan el tamaño HTML/CSS un 33%</li><li>No pueden cachearse de forma independiente</li><li>No adecuados para imágenes grandes (&gt;10KB)</li></ul><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Funcionan en todos los navegadores?</h3><p>Sí. Todos los navegadores modernos soportan data URIs.</p></div></article>`,
    },
    'base64-javascript': {
      title: 'Base64 en JavaScript — btoa, atob y Buffer | base64image.net',
      description: 'Cómo usar Base64 en JavaScript: btoa() y atob() para el navegador, Buffer para Node.js, manejo de Unicode.',
      h1: 'Base64 en JavaScript',
      lede: 'Guía completa para codificar y decodificar Base64 en JavaScript: btoa/atob en el navegador y Buffer en Node.js.',
      bodyHtml: `<article class="content-section"><h2>Base64 en el Navegador</h2><pre><code>// Codificar
const encoded = btoa('Hello World');
// Resultado: "SGVsbG8gV29ybGQ="

// Decodificar
const decoded = atob('SGVsbG8gV29ybGQ=');
// Resultado: "Hello World"</code></pre><h2>Manejo de Unicode con btoa()</h2><pre><code>// Codificar texto Unicode
function b64EncodeUnicode(str) {
  return btoa(new TextEncoder().encode(str).reduce(
    (data, byte) => data + String.fromCharCode(byte), ''
  ));
}</code></pre><h2>Base64 en Node.js</h2><pre><code>// Codificar
const encoded = Buffer.from('Hello World').toString('base64');

// Decodificar
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Por qué btoa() falla con caracteres especiales?</h3><p>btoa() solo admite Latin-1 (bytes 0-255). Para Unicode usa TextEncoder o el patrón encodeURIComponent.</p></div><div class="faq-item"><h3>¿Base64 URL-safe en JavaScript?</h3><p><code>btoa(str).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'')</code></p></div></article>`,
    },
    'base64-python': {
      title: 'Base64 en Python — Módulo base64 con Ejemplos | base64image.net',
      description: 'Cómo codificar y decodificar Base64 en Python usando el módulo base64. Ejemplos para strings, archivos y casos reales.',
      h1: 'Base64 en Python',
      lede: 'Guía completa para Base64 en Python con el módulo base64 — ejemplos para strings, archivos y uso real.',
      bodyHtml: `<article class="content-section"><h2>Codificar y Decodificar Strings</h2><pre><code>import base64

# Codificar
encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

# Decodificar
decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>Codificar Archivos</h2><pre><code>import base64

# Codificar archivo
with open('imagen.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

# Decodificar a archivo
with open('salida.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>Base64 URL-Safe</h2><pre><code># URL-safe (usa - y _ en lugar de + y /)
encoded = base64.urlsafe_b64encode(data).decode()
decoded = base64.urlsafe_b64decode(encoded + '==')</code></pre><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Por qué necesito .encode() y .decode()?</h3><p>En Python 3, base64 trabaja con bytes. .encode() convierte string a bytes, .decode() convierte bytes a string.</p></div></article>`,
    },
    'base64-linux': {
      title: 'Base64 en Linux — Comandos bash con Ejemplos | base64image.net',
      description: 'Cómo usar Base64 en Linux con el comando base64 de bash. Ejemplos para strings, archivos y scripts.',
      h1: 'Base64 en Linux (Guía bash)',
      lede: 'Cómo usar el comando base64 de Linux para codificar y decodificar strings, archivos y datos binarios en bash.',
      bodyHtml: `<article class="content-section"><h2>Codificar en Linux</h2><pre><code># Codificar string (sin salto de línea)
echo -n 'Hello World' | base64
# SGVsbG8gV29ybGQ=

# Codificar archivo
base64 imagen.png > imagen.b64

# Sin saltos de línea (necesario para JSON/HTML)
base64 -w 0 imagen.png > imagen.b64</code></pre><h2>Decodificar en Linux</h2><pre><code># Decodificar string
echo 'SGVsbG8gV29ybGQ=' | base64 -d

# Decodificar archivo
base64 -d imagen.b64 > imagen.png</code></pre><h2>Linux vs macOS</h2><p>Linux: <code>-d</code> para decodificar, <code>-w 0</code> sin saltos. macOS: <code>-D</code> y <code>-b 0</code> respectivamente.</p><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Por qué usar echo -n?</h3><p>Sin -n, echo agrega un salto de línea que se incluye en la codificación, produciendo un resultado incorrecto.</p></div></article>`,
    },
    'base64-file-encoder': {
      title: 'Codificador de Archivos Base64 — Cualquier Archivo a Base64 | base64image.net',
      description: 'Convierte cualquier archivo (PDF, ZIP, audio, documentos) a Base64 en tu navegador. Sin subidas, completamente privado.',
      h1: 'Codificador de Archivos Base64',
      lede: 'Convierte cualquier archivo a Base64 en tu navegador. Sin subidas, completamente privado.',
      bodyHtml: `<article class="content-section"><h2>¿Cómo Codificar un Archivo en Base64?</h2><p>Usa el <a href="/base64-file-encoder/">codificador de archivos</a>: arrastra tu archivo o haz clic para seleccionarlo. La cadena Base64 se genera al instante en tu navegador.</p><h2>Tipos de Archivo Soportados</h2><p>Cualquier tipo: PDFs, documentos Office, archivos ZIP, audio (MP3, WAV), video, fuentes, certificados PEM/CRT y cualquier formato binario.</p><h2>¿Cuándo Usar?</h2><ul><li>Adjuntar binarios en APIs JSON</li><li>Incrustar PDFs en páginas web</li><li>Almacenar certificados en variables de entorno</li><li>Transmitir archivos por canales de solo texto</li></ul><h2>Preguntas Frecuentes</h2><div class="faq-item"><h3>¿Hay límite de tamaño?</h3><p>Depende de la memoria del navegador. Hasta 50MB funciona bien en la mayoría de los casos.</p></div></article>`,
    },
  },
  homeExtra: {
    eyebrowSub: 'Privacidad total · Local · Sin cuenta',
    meta1: 'Sin peticiones al servidor', meta2: '40+ herramientas', meta3: 'Código abierto',
    toolsH2: 'Todo lo que necesitas para Base64',
    toolsP: 'Codificadores, decodificadores, conversores, validadores — todos los flujos cubiertos.',
    howH2: 'Cero contacto con servidores. Por diseño.',
    howP: 'Cada operación usa APIs nativas del navegador. Tus datos nunca salen de la pestaña.',
    step1H: 'Proporcionas la entrada', step1P: 'Suelta un archivo, pega una cadena o sube una imagen. Permanece en tu equipo.',
    step2H: 'El navegador codifica', step2P: 'FileReader, atob/btoa y Canvas gestionan la codificación — integrados en todos los navegadores.',
    step3H: 'La salida es tuya', step3P: 'Copia la cadena, descarga el archivo. Sin ninguna petición de red.',
    faqH2: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Son realmente privados mis datos?', a: 'Sí. Abre DevTools → Red mientras usas cualquier herramienta — verás cero peticiones POST. Todas las operaciones usan FileReader, atob()/btoa() y Canvas — APIs del navegador que nunca acceden a la red.' },
      { q: '¿Qué es la codificación Base64?', a: 'Base64 convierte datos binarios en texto ASCII usando 64 caracteres imprimibles. Se usa para incrustar imágenes en HTML/CSS, transmitir archivos en APIs JSON y codificar adjuntos de email. Añade ~33% de tamaño. <a href="/es/what-is-base64/">Guía completa</a>' },
      { q: '¿Cómo incrusto una imagen en CSS?', a: 'Codifica tu imagen con el <a href="/base64-image-encoder/">Codificador de Imágenes</a>, luego usa: <code>background-image: url(\'data:image/png;base64,…\')</code>.' },
      { q: '¿Base64 estándar vs URL-safe?', a: 'El Base64 estándar usa <code>+</code> y <code>/</code> que se rompen en URLs. El URL-safe (RFC 4648 §5) los reemplaza por <code>-</code> y <code>_</code>, ideal para JWT y query strings.' },
    ],
  },
} as const;

export default es;
