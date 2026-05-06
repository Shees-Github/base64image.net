const fr = {
  nav: {
    encoders: 'Encodeurs', decoders: 'Décodeurs', convert: 'Convertir', tools: 'Outils', learn: 'Apprendre',
  },
  common: {
    useTool: "Utiliser l'outil",
    toolNote: "L'outil interactif fonctionne en anglais — compatible avec toutes les langues.",
    privacyNote: 'Tout est traité dans votre navigateur. Rien n\'est envoyé à un serveur.',
  },
  pages: {
    '': {
      title: 'Encodeur et Décodeur Base64 — Outils Gratuits | base64image.net',
      description: 'Outils Base64 gratuits et privés. Encodez des images, décodez des chaînes, convertissez des formats. Tout fonctionne dans votre navigateur.',
      h1: 'Outils Base64 pour les développeurs',
      lede: 'Encodez, décodez et convertissez Base64 dans votre navigateur. Rien ne quitte votre machine — sans upload, sans tracking.',
      bodyHtml: `<section class="content-section"><h2>Pourquoi utiliser base64image.net ?</h2><p>base64image.net propose plus de 40 outils Base64 gratuits qui s'exécutent entièrement dans votre navigateur. Aucun compte requis, pas de publicités intrusives, et vos données ne quittent jamais votre appareil.</p><h2>Outils disponibles</h2><ul><li><a href="/base64-image-encoder/">Encodeur d'images Base64</a> — Convertit PNG, JPEG, SVG en Base64</li><li><a href="/base64-image-decoder/">Décodeur d'images Base64</a> — Convertit Base64 en image</li><li><a href="/base64-text-encoder/">Encodeur de texte Base64</a> — Convertit du texte en Base64</li><li><a href="/base64-text-decoder/">Décodeur de texte Base64</a> — Convertit Base64 en texte</li><li><a href="/base64-validator/">Validateur Base64</a> — Vérifie les chaînes Base64</li><li><a href="/what-is-base64/">Qu'est-ce que Base64 ?</a> — Guide complet</li></ul></section>`,
    },
    'what-is-base64': {
      title: "Qu'est-ce que Base64 ? Guide Complet de l'Encodage | base64image.net",
      description: "Guide complet sur Base64 : définition, fonctionnement de l'algorithme, cas d'usage et exemples pratiques.",
      h1: "Qu'est-ce que l'Encodage Base64 ?",
      lede: "Un guide complet sur le format d'encodage Base64, son algorithme et ses applications pratiques.",
      bodyHtml: `<article class="content-section"><h2>Qu'est-ce que Base64 ?</h2><p>Base64 est un schéma d'encodage binaire-vers-texte défini dans le RFC 4648. Il représente des données binaires en utilisant 64 caractères ASCII imprimables. L'algorithme convertit chaque 3 octets (24 bits) en 4 caractères, produisant une augmentation de taille de 33%.</p><p>Base64 existe parce que de nombreux protocoles ne supportent que du texte : SMTP, JSON, XML et les URLs nécessitent des représentations textuelles sûres pour le contenu binaire.</p><h2>Comment ça fonctionne ?</h2><p>L'algorithme traite 3 octets à la fois, les divise en 4 groupes de 6 bits, et mappe chaque groupe vers un caractère de l'alphabet Base64. Quand la longueur n'est pas un multiple de 3, des caractères de rembourrage (=) sont ajoutés.</p><h2>Quand utiliser Base64 ?</h2><ul><li>Intégrer des images dans HTML/CSS comme data URIs</li><li>Transmettre du binaire via des canaux texte uniquement</li><li>Identifiants d'authentification HTTP Basic</li><li>Stocker des configurations avec des caractères problématiques</li></ul><h2>Base64 n'est pas du chiffrement</h2><p>Base64 est un encodage, pas du chiffrement. Il est réversible sans clé. Pour sécuriser des données, utilisez TLS/HTTPS ou un chiffrement réel comme AES.</p><h2>FAQ</h2><div class="faq-item"><h3>Base64 est-il du chiffrement ?</h3><p>Non. Base64 convertit seulement le format — tout le monde peut le décoder sans clé.</p></div><div class="faq-item"><h3>Combien la taille augmente-t-elle ?</h3><p>Les données Base64 sont environ 33% plus grandes que les données binaires originales.</p></div></article>`,
    },
    'base64-image-encoder': {
      title: "Encodeur d'Images Base64 — PNG, JPEG, SVG en Base64 | base64image.net",
      description: 'Convertissez des images PNG, JPEG, SVG, WebP en Base64 gratuitement dans votre navigateur. Sans upload, totalement privé.',
      h1: "Encodeur d'Images Base64",
      lede: 'Convertissez des images PNG, JPEG, SVG et WebP en chaînes Base64. Sans upload, totalement privé.',
      bodyHtml: `<article class="content-section"><h2>Comment convertir une image en Base64 ?</h2><p>Utilisez l'<a href="/base64-image-encoder/">encodeur d'images Base64</a> : glissez votre image ou cliquez pour la sélectionner. La chaîne Base64 est générée instantanément dans votre navigateur, sans envoyer de données à un serveur.</p><h2>À quoi ça sert ?</h2><p>Les images Base64 permettent d'intégrer des images directement dans HTML/CSS (éliminant les requêtes HTTP), d'inclure des images dans les emails HTML, et d'envoyer des images dans des APIs JSON.</p><h2>Formats supportés</h2><p>PNG, JPEG, GIF, WebP, SVG, AVIF, BMP, ICO et tout format supporté par votre navigateur.</p><h2>FAQ</h2><div class="faq-item"><h3>Comment intégrer l'image en HTML ?</h3><p><code>&lt;img src="data:image/png;base64,VOTRE_CHAINE"&gt;</code></p></div><div class="faq-item"><h3>Mes images sont-elles privées ?</h3><p>Oui. Tout se passe localement dans votre navigateur, rien n'est envoyé à un serveur.</p></div></article>`,
    },
    'base64-image-decoder': {
      title: "Décodeur d'Images Base64 — Base64 en PNG, JPEG | base64image.net",
      description: 'Convertissez des chaînes Base64 en images PNG, JPEG, SVG gratuitement. Prévisualisez et téléchargez.',
      h1: "Décodeur d'Images Base64",
      lede: 'Convertissez des chaînes Base64 en images. Prévisualisation et téléchargement instantanés.',
      bodyHtml: `<article class="content-section"><h2>Comment décoder Base64 en image ?</h2><p>Collez votre chaîne Base64 dans le <a href="/base64-image-decoder/">décodeur d'images</a>. L'outil détecte le type d'image et affiche un aperçu. Cliquez sur "Télécharger" pour sauvegarder le fichier.</p><h2>Quand en avez-vous besoin ?</h2><p>Décodez des images Base64 quand : vous recevez des données d'image dans des réponses JSON ; vous extrayez des images de fichiers HTML/CSS ; vous déboguez des applications utilisant des data URIs.</p><h2>FAQ</h2><div class="faq-item"><h3>Puis-je coller le data URI complet ?</h3><p>Oui, accepte la chaîne Base64 seule ou le data URI complet avec préfixe.</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Encodeur de Texte Base64 — Convertir Texte en Base64 | base64image.net',
      description: 'Convertissez n\'importe quel texte en Base64 gratuitement. Compatible Unicode, UTF-8 et caractères spéciaux.',
      h1: 'Encodeur de Texte Base64',
      lede: 'Convertissez n\'importe quel texte en Base64 instantanément. Supporte Unicode, UTF-8 et tous les caractères spéciaux.',
      bodyHtml: `<article class="content-section"><h2>Comment encoder du texte en Base64 ?</h2><p>Saisissez ou collez votre texte dans l'<a href="/base64-text-encoder/">encodeur de texte</a> et obtenez la chaîne Base64 instantanément. Supporte UTF-8 pour les caractères Unicode et les emojis.</p><h2>Usages pratiques</h2><ul><li>Authentification HTTP Basic (utilisateur:motdepasse → Base64)</li><li>Tokens API et en-têtes d'autorisation</li><li>Données JSON avec caractères spéciaux</li><li>Emails avec caractères non-ASCII</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Base64 chiffre-t-il mon texte ?</h3><p>Non. Base64 change seulement le format — n'importe qui peut le décoder.</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Décodeur de Texte Base64 — Convertir Base64 en Texte | base64image.net',
      description: 'Décodez des chaînes Base64 en texte lisible gratuitement. Supporte UTF-8, Unicode et caractères spéciaux.',
      h1: 'Décodeur de Texte Base64',
      lede: 'Convertissez des chaînes Base64 en texte lisible. Supporte UTF-8, Unicode et tous les caractères spéciaux.',
      bodyHtml: `<article class="content-section"><h2>Comment décoder Base64 en texte ?</h2><p>Collez votre chaîne Base64 dans le <a href="/base64-text-decoder/">décodeur de texte</a>. L'outil gère automatiquement le décodage UTF-8 pour les caractères Unicode.</p><h2>Quand en avez-vous besoin ?</h2><ul><li>Déboguer des tokens JWT (le payload est en Base64)</li><li>Inspecter les en-têtes d'authentification HTTP Basic</li><li>Lire des configurations encodées en Base64</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Comment décoder un JWT ?</h3><p>Le payload (partie centrale) d'un JWT est en Base64URL — collez-le dans le décodeur pour voir son contenu.</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64 en PNG — Convertisseur Gratuit en Ligne | base64image.net',
      description: 'Convertissez des chaînes Base64 en fichiers PNG dans votre navigateur. Prévisualisation et téléchargement instantanés.',
      h1: 'Convertisseur Base64 en PNG',
      lede: 'Convertissez Base64 en PNG. Prévisualisation instantanée et téléchargement direct depuis votre navigateur.',
      bodyHtml: `<article class="content-section"><h2>Comment convertir Base64 en PNG ?</h2><p>Collez votre chaîne Base64 dans le <a href="/base64-to-png/">convertisseur Base64 en PNG</a>. L'outil affiche l'image PNG et propose le téléchargement.</p><h2>FAQ</h2><div class="faq-item"><h3>La qualité est-elle perdue lors de la conversion ?</h3><p>Non. La conversion Base64 est sans perte — c'est juste un changement de représentation du format.</p></div><div class="faq-item"><h3>Puis-je convertir vers d'autres formats ?</h3><p>Oui : <a href="/base64-to-jpeg/">Base64 en JPEG</a>, <a href="/base64-to-svg/">Base64 en SVG</a>, <a href="/base64-to-webp/">Base64 en WebP</a>.</p></div></article>`,
    },
    'base64-validator': {
      title: 'Validateur Base64 — Vérifiez les Chaînes Base64 en Ligne | base64image.net',
      description: 'Vérifiez si une chaîne est du Base64 valide. Détectez les erreurs de format, les caractères invalides et les problèmes de rembourrage.',
      h1: 'Validateur Base64',
      lede: 'Vérifiez si une chaîne est du Base64 valide. Détectez les erreurs de format et les caractères invalides.',
      bodyHtml: `<article class="content-section"><h2>Comment valider une chaîne Base64 ?</h2><p>Collez votre chaîne dans le <a href="/base64-validator/">validateur Base64</a>. Il vérifie : les caractères de l'alphabet Base64 ; la longueur (multiple de 4) ; le rembourrage = correct.</p><h2>Erreurs courantes</h2><ul><li>Espaces ou sauts de ligne dans la chaîne</li><li>Caractères non-Base64</li><li>Longueur incorrecte ou rembourrage manquant</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Pourquoi la validation échoue-t-elle ?</h3><p>Causes courantes : espaces superflus, caractères non-Base64, ou longueur incorrecte.</p></div></article>`,
    },
    'base64-javascript': {
      title: 'Base64 en JavaScript — btoa, atob et Buffer | base64image.net',
      description: 'Comment utiliser Base64 en JavaScript : btoa() et atob() pour le navigateur, Buffer pour Node.js, gestion Unicode.',
      h1: 'Base64 en JavaScript',
      lede: 'Guide complet pour encoder et décoder Base64 en JavaScript : btoa/atob dans le navigateur et Buffer dans Node.js.',
      bodyHtml: `<article class="content-section"><h2>Base64 dans le navigateur</h2><pre><code>// Encoder
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// Décoder
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Base64 dans Node.js</h2><pre><code>// Encoder
const encoded = Buffer.from('Hello World').toString('base64');

// Décoder
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>FAQ</h2><div class="faq-item"><h3>Pourquoi btoa() échoue avec des caractères spéciaux ?</h3><p>btoa() n'accepte que Latin-1. Pour Unicode, utilisez TextEncoder ou encodeURIComponent.</p></div></article>`,
    },
    'base64-python': {
      title: 'Base64 en Python — Module base64 avec Exemples | base64image.net',
      description: 'Comment encoder et décoder Base64 en Python avec le module base64. Exemples pour strings, fichiers et cas réels.',
      h1: 'Base64 en Python',
      lede: 'Guide complet pour Base64 en Python avec le module base64 — exemples pour strings, fichiers et usage réel.',
      bodyHtml: `<article class="content-section"><h2>Encoder et décoder des strings</h2><pre><code>import base64

# Encoder
encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

# Décoder
decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>Encoder des fichiers</h2><pre><code>import base64

with open('image.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

with open('sortie.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>FAQ</h2><div class="faq-item"><h3>Pourquoi .encode() et .decode() en Python 3 ?</h3><p>base64 travaille avec des bytes. .encode() convertit string en bytes, .decode() convertit bytes en string.</p></div></article>`,
    },
    'base64-linux': {
      title: 'Base64 sur Linux — Commandes bash avec Exemples | base64image.net',
      description: 'Comment utiliser Base64 sur Linux avec la commande base64 en bash. Exemples pour strings, fichiers et scripts.',
      h1: 'Base64 sur Linux (Guide bash)',
      lede: 'Comment utiliser la commande base64 de Linux pour encoder et décoder des strings, fichiers et données binaires.',
      bodyHtml: `<article class="content-section"><h2>Encoder sur Linux</h2><pre><code># Encoder un string (sans saut de ligne)
echo -n 'Hello World' | base64
# SGVsbG8gV29ybGQ=

# Encoder un fichier sans retours à la ligne
base64 -w 0 image.png > image.b64</code></pre><h2>Décoder sur Linux</h2><pre><code># Décoder un string
echo 'SGVsbG8gV29ybGQ=' | base64 -d

# Décoder un fichier
base64 -d image.b64 > image.png</code></pre><h2>Linux vs macOS</h2><p>Linux : <code>-d</code> pour décoder, <code>-w 0</code> sans retours. macOS : <code>-D</code> et <code>-b 0</code> respectivement.</p><h2>FAQ</h2><div class="faq-item"><h3>Pourquoi utiliser echo -n ?</h3><p>Sans -n, echo ajoute un saut de ligne qui est inclus dans l'encodage, produisant un résultat incorrect.</p></div></article>`,
    },
  },
  homeExtra: {
    eyebrowSub: 'Confidentialité · Local · Sans compte',
    meta1: 'Zéro requête serveur', meta2: '40+ outils', meta3: 'Open source',
    toolsH2: 'Tout ce dont vous avez besoin pour Base64',
    toolsP: 'Encodeurs, décodeurs, convertisseurs, validateurs — chaque flux de travail couvert.',
    howH2: 'Zéro contact serveur. Par conception.',
    howP: 'Chaque opération utilise les API natives du navigateur. Vos données ne quittent jamais l\'onglet.',
    step1H: 'Vous fournissez l\'entrée', step1P: 'Déposez un fichier, collez une chaîne ou téléchargez une image. Elle reste locale.',
    step2H: 'Le navigateur encode', step2P: 'FileReader, atob/btoa et Canvas gèrent l\'encodage — intégrés dans chaque navigateur.',
    step3H: 'La sortie vous appartient', step3P: 'Copiez la chaîne, téléchargez le fichier. Zéro requête réseau effectuée.',
    faqH2: 'Questions fréquentes',
    faqs: [
      { q: 'Mes données sont-elles vraiment privées ?', a: 'Oui. Ouvrez DevTools → Réseau pendant l\'utilisation de n\'importe quel outil — vous verrez zéro requête POST. Toutes les opérations utilisent FileReader, atob()/btoa() et Canvas — des API navigateur qui n\'accèdent jamais au réseau.' },
      { q: 'Qu\'est-ce que l\'encodage Base64 ?', a: 'Base64 convertit des données binaires en texte ASCII en utilisant 64 caractères imprimables. Il est utilisé pour intégrer des images dans HTML/CSS, transmettre des fichiers dans des API JSON. L\'encodage ajoute ~33% de taille. <a href="/fr/what-is-base64/">Guide complet</a>' },
      { q: 'Comment intégrer une image en CSS ?', a: 'Encodez votre image avec l\'<a href="/base64-image-encoder/">Encodeur d\'Images</a>, puis utilisez : <code>background-image: url(\'data:image/png;base64,…\')</code>.' },
      { q: 'Base64 standard vs URL-safe ?', a: 'Le Base64 standard utilise <code>+</code> et <code>/</code> qui cassent dans les URLs. L\'URL-safe (RFC 4648 §5) les remplace par <code>-</code> et <code>_</code>, idéal pour les JWT et query strings.' },
    ],
  },
} as const;

export default fr;
