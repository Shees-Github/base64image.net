const pt = {
  nav: {
    encoders: 'Codificadores', decoders: 'Decodificadores', convert: 'Converter', tools: 'Ferramentas', learn: 'Aprender',
  },
  common: {
    useTool: 'Usar a ferramenta',
    toolNote: 'A ferramenta interativa funciona em inglês — compatível com qualquer idioma.',
    privacyNote: 'Tudo é processado no seu navegador. Nada é enviado a nenhum servidor.',
  },
  pages: {
    '': {
      title: 'Codificador e Decodificador Base64 — Ferramentas Gratuitas | base64image.net',
      description: 'Ferramentas Base64 gratuitas e privadas. Codifique imagens, decodifique strings, converta formatos. Tudo no navegador — nada é enviado a servidores.',
      h1: 'Ferramentas Base64 para desenvolvedores',
      lede: 'Codifique, decodifique e converta Base64 no seu navegador. Nada sai da sua máquina — sem uploads, sem rastreamento.',
      bodyHtml: `<section class="content-section"><h2>Por que usar base64image.net?</h2><p>base64image.net oferece mais de 40 ferramentas Base64 gratuitas que rodam completamente no seu navegador. Sem conta necessária, sem anúncios intrusivos e seus dados nunca saem do seu dispositivo.</p><h2>Ferramentas disponíveis</h2><ul><li><a href="/base64-image-encoder/">Codificador de imagens Base64</a> — Converte PNG, JPEG, SVG para Base64</li><li><a href="/base64-image-decoder/">Decodificador de imagens Base64</a> — Converte Base64 para imagem</li><li><a href="/base64-text-encoder/">Codificador de texto Base64</a> — Converte texto para Base64</li><li><a href="/base64-text-decoder/">Decodificador de texto Base64</a> — Converte Base64 para texto</li><li><a href="/base64-validator/">Validador Base64</a> — Verifica strings Base64</li><li><a href="/what-is-base64/">O que é Base64?</a> — Guia completo</li></ul></section>`,
    },
    'what-is-base64': {
      title: 'O que é Base64? Guia Completo de Codificação | base64image.net',
      description: 'Guia completo sobre Base64: o que é, como funciona o algoritmo, quando usar e exemplos práticos.',
      h1: 'O que é a Codificação Base64?',
      lede: 'Um guia completo sobre o formato de codificação Base64, seu algoritmo e aplicações práticas.',
      bodyHtml: `<article class="content-section"><h2>O que é Base64?</h2><p>Base64 é um esquema de codificação binário-para-texto definido no RFC 4648. Representa dados binários usando 64 caracteres ASCII imprimíveis. O algoritmo converte cada 3 bytes de entrada em 4 caracteres de saída, produzindo um aumento de tamanho de 33%.</p><p>Base64 existe porque muitos protocolos só suportam texto: SMTP, JSON, XML e URLs precisam de representações seguras em texto para conteúdo binário.</p><h2>Como funciona?</h2><p>O algoritmo processa 3 bytes de cada vez, os divide em 4 grupos de 6 bits e mapeia cada grupo para um caractere do alfabeto Base64. Quando o comprimento não é múltiplo de 3, caracteres de preenchimento (=) são adicionados.</p><h2>Quando usar Base64?</h2><ul><li>Incorporar imagens em HTML/CSS como data URIs</li><li>Transmitir binário por canais somente de texto</li><li>Credenciais de autenticação HTTP Basic</li><li>Armazenar configurações com caracteres problemáticos</li></ul><h2>Base64 não é criptografia</h2><p>Base64 é codificação, não criptografia. É reversível sem chave. Para dados seguros use TLS/HTTPS ou criptografia real como AES.</p><h2>FAQ</h2><div class="faq-item"><h3>Base64 é criptografia?</h3><p>Não. Base64 apenas muda o formato — qualquer pessoa pode decodificá-lo sem chave.</p></div><div class="faq-item"><h3>Quanto o tamanho aumenta?</h3><p>Dados Base64 são aproximadamente 33% maiores que os dados binários originais.</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'Codificador de Imagens Base64 — PNG, JPEG, SVG para Base64 | base64image.net',
      description: 'Converta imagens PNG, JPEG, SVG, WebP para Base64 gratuitamente no navegador. Sem uploads, totalmente privado.',
      h1: 'Codificador de Imagens Base64',
      lede: 'Converta imagens PNG, JPEG, SVG e WebP para strings Base64. Sem uploads, totalmente privado.',
      bodyHtml: `<article class="content-section"><h2>Como converter uma imagem para Base64?</h2><p>Use o <a href="/base64-image-encoder/">codificador de imagens Base64</a>: arraste sua imagem ou clique para selecioná-la. A string Base64 é gerada instantaneamente no seu navegador, sem enviar dados a nenhum servidor.</p><h2>Para que serve?</h2><p>Imagens Base64 permitem: incorporar imagens diretamente em HTML/CSS; incluir imagens em e-mails HTML; enviar imagens em APIs JSON.</p><h2>Formatos suportados</h2><p>PNG, JPEG, GIF, WebP, SVG, AVIF, BMP, ICO e qualquer formato suportado pelo seu navegador.</p><h2>FAQ</h2><div class="faq-item"><h3>Como incorporo a imagem em HTML?</h3><p><code>&lt;img src="data:image/png;base64,SUA_STRING"&gt;</code></p></div><div class="faq-item"><h3>Minhas imagens são privadas?</h3><p>Sim. Tudo acontece localmente no seu navegador, nada é enviado a servidores.</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'Decodificador de Imagens Base64 — Base64 para PNG, JPEG | base64image.net',
      description: 'Converta strings Base64 para imagens PNG, JPEG, SVG gratuitamente. Pré-visualize e baixe.',
      h1: 'Decodificador de Imagens Base64',
      lede: 'Converta strings Base64 de volta para imagens. Pré-visualização instantânea e download direto.',
      bodyHtml: `<article class="content-section"><h2>Como decodificar Base64 para imagem?</h2><p>Cole sua string Base64 no <a href="/base64-image-decoder/">decodificador de imagens</a>. A ferramenta detecta o tipo de imagem e exibe uma pré-visualização. Clique em "Baixar" para salvar o arquivo.</p><h2>FAQ</h2><div class="faq-item"><h3>Posso colar o data URI completo?</h3><p>Sim, aceita tanto a string Base64 sozinha quanto o data URI completo com prefixo.</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Codificador de Texto Base64 — Converter Texto para Base64 | base64image.net',
      description: 'Converta qualquer texto para Base64 gratuitamente. Compatível com Unicode, UTF-8 e caracteres especiais.',
      h1: 'Codificador de Texto Base64',
      lede: 'Converta qualquer texto para Base64 instantaneamente. Suporte a Unicode, UTF-8 e todos os caracteres especiais.',
      bodyHtml: `<article class="content-section"><h2>Como codificar texto em Base64?</h2><p>Digite ou cole seu texto no <a href="/base64-text-encoder/">codificador de texto</a> e obtenha a string Base64 instantaneamente. Suporte a UTF-8 para caracteres Unicode e emojis.</p><h2>Usos práticos</h2><ul><li>Autenticação HTTP Basic (usuário:senha → Base64)</li><li>Tokens de API e cabeçalhos de autorização</li><li>Dados JSON com caracteres especiais</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Base64 criptografa meu texto?</h3><p>Não. Base64 apenas muda o formato — qualquer pessoa pode decodificá-lo.</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Decodificador de Texto Base64 — Converter Base64 para Texto | base64image.net',
      description: 'Decodifique strings Base64 para texto legível gratuitamente. Suporte a UTF-8, Unicode e caracteres especiais.',
      h1: 'Decodificador de Texto Base64',
      lede: 'Converta strings Base64 para texto legível. Suporte a UTF-8, Unicode e todos os caracteres especiais.',
      bodyHtml: `<article class="content-section"><h2>Como decodificar Base64 para texto?</h2><p>Cole sua string Base64 no <a href="/base64-text-decoder/">decodificador de texto</a>. A ferramenta gerencia automaticamente a decodificação UTF-8 para caracteres Unicode.</p><h2>FAQ</h2><div class="faq-item"><h3>Como decodifico um JWT?</h3><p>O payload (parte central) de um JWT é Base64URL — cole-o no decodificador para ver seu conteúdo.</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64 para PNG — Conversor Gratuito Online | base64image.net',
      description: 'Converta strings Base64 para arquivos PNG no navegador. Pré-visualização instantânea e download direto.',
      h1: 'Conversor de Base64 para PNG',
      lede: 'Converta Base64 para PNG. Pré-visualização instantânea e download direto do navegador.',
      bodyHtml: `<article class="content-section"><h2>Como converter Base64 para PNG?</h2><p>Cole sua string Base64 no <a href="/base64-to-png/">conversor Base64 para PNG</a>. A ferramenta exibe a imagem PNG e oferece download.</p><h2>FAQ</h2><div class="faq-item"><h3>A qualidade é perdida na conversão?</h3><p>Não. A conversão Base64 é sem perdas — é apenas uma mudança de representação do formato.</p></div></article>`,
    },
    'base64-validator': {
      title: 'Validador Base64 — Verificar Strings Base64 Online | base64image.net',
      description: 'Verifique se uma string é Base64 válido. Detecte erros de formato, caracteres inválidos e problemas de preenchimento.',
      h1: 'Validador Base64',
      lede: 'Verifique se uma string é Base64 válido. Detecte erros de formato e caracteres inválidos.',
      bodyHtml: `<article class="content-section"><h2>Como validar uma string Base64?</h2><p>Cole sua string no <a href="/base64-validator/">validador Base64</a>. Ele verifica: caracteres do alfabeto Base64; comprimento (múltiplo de 4); preenchimento = correto.</p><h2>Erros comuns</h2><ul><li>Espaços ou quebras de linha na string</li><li>Caracteres não-Base64</li><li>Comprimento incorreto ou preenchimento faltando</li></ul><h2>FAQ</h2><div class="faq-item"><h3>Por que a validação falha?</h3><p>Causas comuns: espaços extras, caracteres não-Base64 ou comprimento incorreto.</p></div></article>`,
    },
    'base64-javascript': {
      title: 'Base64 em JavaScript — btoa, atob e Buffer | base64image.net',
      description: 'Como usar Base64 em JavaScript: btoa() e atob() para o navegador, Buffer para Node.js, tratamento de Unicode.',
      h1: 'Base64 em JavaScript',
      lede: 'Guia completo para codificar e decodificar Base64 em JavaScript: btoa/atob no navegador e Buffer no Node.js.',
      bodyHtml: `<article class="content-section"><h2>Base64 no Navegador</h2><pre><code>// Codificar
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// Decodificar
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Base64 no Node.js</h2><pre><code>const encoded = Buffer.from('Hello World').toString('base64');
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>FAQ</h2><div class="faq-item"><h3>Por que btoa() falha com caracteres especiais?</h3><p>btoa() só aceita Latin-1. Para Unicode use TextEncoder ou encodeURIComponent.</p></div></article>`,
    },
    'base64-python': {
      title: 'Base64 em Python — Módulo base64 com Exemplos | base64image.net',
      description: 'Como codificar e decodificar Base64 em Python com o módulo base64. Exemplos para strings, arquivos e casos reais.',
      h1: 'Base64 em Python',
      lede: 'Guia completo para Base64 em Python com o módulo base64 — exemplos para strings, arquivos e uso real.',
      bodyHtml: `<article class="content-section"><h2>Codificar e decodificar strings</h2><pre><code>import base64

encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>Codificar arquivos</h2><pre><code>with open('imagem.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

with open('saida.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>FAQ</h2><div class="faq-item"><h3>Por que .encode() e .decode() em Python 3?</h3><p>base64 trabalha com bytes. .encode() converte string para bytes, .decode() converte bytes para string.</p></div></article>`,
    },
    'base64-to-svg': {
      title: 'Base64 para SVG — Conversor Gratuito | base64image.net',
      description: 'Converta strings Base64 em gráficos SVG no navegador. Pré-visualização e download direto.',
      h1: 'Conversor de Base64 para SVG',
      lede: 'Converta Base64 em gráficos vetoriais SVG. Pré-visualização e download direto no navegador.',
    },
    'base64-to-webp': {
      title: 'Base64 para WebP — Conversor Gratuito | base64image.net',
      description: 'Converta strings Base64 em imagens WebP no navegador. Qualidade ajustável, pré-visualização e download.',
      h1: 'Conversor de Base64 para WebP',
      lede: 'Converta Base64 em WebP com qualidade ajustável. Pré-visualização e download do navegador.',
    },
    'base64-to-jpeg': {
      title: 'Base64 para JPEG — Conversor Gratuito Online | base64image.net',
      description: 'Converta strings Base64 em imagens JPEG no navegador. Pré-visualização instantânea e download direto.',
      h1: 'Conversor de Base64 para JPEG',
      lede: 'Converta Base64 em JPEG. Pré-visualização instantânea e download direto do navegador.',
    },
    'base64-validator': {
      title: 'Validador Base64 — Verificar Strings Base64 Online | base64image.net',
      description: 'Verifique se uma string é Base64 válido no navegador. Detecte erros de formato e caracteres inválidos.',
      h1: 'Validador Base64',
      lede: 'Verifique se uma string é Base64 válido. Detecte erros de formato e caracteres inválidos.',
    },
  },
  homeExtra: {
    eyebrowSub: 'Privacidade · Local · Sem conta',
    meta1: 'Zero requisições ao servidor', meta2: '40+ ferramentas', meta3: 'Código aberto',
    toolsH2: 'Tudo que você precisa para Base64',
    toolsP: 'Codificadores, decodificadores, conversores, validadores — todos os fluxos cobertos.',
    howH2: 'Zero contato com servidores. Por design.',
    howP: 'Cada operação usa APIs nativas do navegador. Seus dados nunca saem da aba.',
    step1H: 'Você fornece a entrada', step1P: 'Solte um arquivo, cole uma string ou faça upload de uma imagem. Fica local.',
    step2H: 'O navegador codifica', step2P: 'FileReader, atob/btoa e Canvas gerenciam a codificação — integrados em todo navegador.',
    step3H: 'A saída é sua', step3P: 'Copie a string, baixe o arquivo. Zero requisições de rede feitas.',
    faqH2: 'Perguntas frequentes',
    faqs: [
      { q: 'Meus dados são realmente privados?', a: 'Sim. Abra DevTools → Rede enquanto usa qualquer ferramenta — você verá zero requisições POST. Todas as operações usam FileReader, atob()/btoa() e Canvas — APIs do navegador que nunca acessam a rede.' },
      { q: 'O que é codificação Base64?', a: 'Base64 converte dados binários em texto ASCII usando 64 caracteres imprimíveis. Usado para incorporar imagens em HTML/CSS, transmitir arquivos em APIs JSON. A codificação adiciona ~33% de tamanho. <a href="/pt/what-is-base64/">Guia completo</a>' },
      { q: 'Como incorporo uma imagem em CSS?', a: 'Codifique sua imagem com o <a href="/base64-image-encoder/">Codificador de Imagens</a>, depois use: <code>background-image: url(\'data:image/png;base64,…\')</code>.' },
      { q: 'Base64 padrão vs URL-safe?', a: 'O Base64 padrão usa <code>+</code> e <code>/</code> que quebram em URLs. O URL-safe (RFC 4648 §5) os substitui por <code>-</code> e <code>_</code>.' },
    ],
  },
} as const;

export default pt;
