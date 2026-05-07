const zh = {
  nav: {
    encoders: '编码器', decoders: '解码器', convert: '转换', tools: '工具', learn: '学习',
  },
  common: {
    useTool: '使用工具',
    toolNote: '交互工具以英文运行——适用于任何语言。',
    privacyNote: '所有处理在您的浏览器中完成，不会向任何服务器发送数据。',
  },
  pages: {
    '': {
      title: 'Base64编码器和解码器——免费工具 | base64image.net',
      description: '免费、注重隐私的Base64工具。编码图片、解码字符串、转换格式。完全在浏览器中运行，无需上传。',
      h1: '面向开发者的Base64工具',
      lede: '在浏览器中编码、解码和转换Base64。数据不离开您的设备——无上传、无追踪。',
      bodyHtml: `<section class="content-section"><h2>为什么使用base64image.net？</h2><p>base64image.net提供40多个完全在浏览器中运行的免费Base64工具。无需账户，无干扰广告，您的数据永远不会离开您的设备。</p><h2>可用工具</h2><ul><li><a href="/base64-image-encoder/">Base64图片编码器</a> — 将PNG、JPEG、SVG转换为Base64</li><li><a href="/base64-image-decoder/">Base64图片解码器</a> — 将Base64转换为图片</li><li><a href="/base64-text-encoder/">Base64文本编码器</a> — 将文本转换为Base64</li><li><a href="/base64-text-decoder/">Base64文本解码器</a> — 将Base64转换为文本</li><li><a href="/base64-validator/">Base64验证器</a> — 验证Base64字符串</li><li><a href="/what-is-base64/">什么是Base64？</a> — 完整指南</li></ul></section>`,
    },
    'what-is-base64': {
      title: '什么是Base64？编码完整指南 | base64image.net',
      description: 'Base64完整指南：定义、算法原理、使用场景及HTML、CSS、JavaScript实践示例。',
      h1: '什么是Base64编码？',
      lede: 'Base64编码格式、算法及其在Web开发中实践应用的完整指南。',
      bodyHtml: `<article class="content-section"><h2>什么是Base64？</h2><p>Base64是RFC 4648中定义的二进制到文本编码方案，使用64个可打印的ASCII字符表示二进制数据。算法将每3个字节（24位）转换为4个字符输出，产生约33%的大小开销。</p><p>Base64存在是因为许多协议只支持文本：SMTP、JSON、XML和URL都需要对二进制内容进行文本安全表示。</p><h2>工作原理</h2><p>算法每次处理3个字节，将其分成4组6位，并将每组映射到Base64字母表中的一个字符。当长度不是3的倍数时，添加填充字符（=）。</p><h2>何时使用Base64？</h2><ul><li>将图片作为数据URI嵌入HTML/CSS</li><li>通过纯文本通道传输二进制数据</li><li>HTTP Basic认证凭据</li><li>存储含有特殊字符的配置</li></ul><h2>Base64不是加密</h2><p>Base64是编码，不是加密。无需密钥即可逆转。要保护数据，请使用TLS/HTTPS或真正的加密方式（如AES）。</p><h2>常见问题</h2><div class="faq-item"><h3>Base64是加密吗？</h3><p>不是。Base64只是改变格式——任何人无需密钥即可解码。</p></div><div class="faq-item"><h3>大小会增加多少？</h3><p>Base64数据比原始二进制数据大约大33%。</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'Base64图片编码器——PNG、JPEG、SVG转Base64 | base64image.net',
      description: '在浏览器中免费将PNG、JPEG、SVG、WebP图片转换为Base64。无上传，完全私密。',
      h1: 'Base64图片编码器',
      lede: '将PNG、JPEG、SVG和WebP图片转换为Base64字符串。无上传，完全私密。',
      bodyHtml: `<article class="content-section"><h2>如何将图片转换为Base64？</h2><p>使用<a href="/base64-image-encoder/">Base64图片编码器</a>：拖放图片或点击选择。Base64字符串会在浏览器中即时生成，无需向服务器发送数据。</p><h2>用途</h2><p>Base64图片可以：直接嵌入HTML/CSS（减少HTTP请求）；包含在HTML邮件中；通过JSON API发送图片数据。</p><h2>支持的格式</h2><p>PNG、JPEG、GIF、WebP、SVG、AVIF、BMP、ICO及浏览器支持的所有格式。</p><h2>常见问题</h2><div class="faq-item"><h3>如何在HTML中嵌入图片？</h3><p><code>&lt;img src="data:image/png;base64,您的字符串"&gt;</code></p></div><div class="faq-item"><h3>我的图片安全吗？</h3><p>是的。所有处理在浏览器本地进行，不会发送到服务器。</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'Base64图片解码器——Base64转PNG、JPEG | base64image.net',
      description: '在浏览器中免费将Base64字符串转换为PNG、JPEG、SVG图片。预览并下载。',
      h1: 'Base64图片解码器',
      lede: '将Base64字符串转换回图片。即时预览和直接下载。',
      bodyHtml: `<article class="content-section"><h2>如何将Base64解码为图片？</h2><p>将Base64字符串粘贴到<a href="/base64-image-decoder/">图片解码器</a>中。工具会自动检测图片类型并显示预览。点击"下载"保存文件。</p><h2>常见问题</h2><div class="faq-item"><h3>可以粘贴完整的data URI吗？</h3><p>可以，接受单独的Base64字符串和带前缀的完整data URI。</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Base64文本编码器——将文本转换为Base64 | base64image.net',
      description: '在浏览器中免费将任意文本转换为Base64。支持Unicode、UTF-8和特殊字符。',
      h1: 'Base64文本编码器',
      lede: '即时将任意文本转换为Base64。支持Unicode、UTF-8和所有特殊字符。',
      bodyHtml: `<article class="content-section"><h2>如何将文本编码为Base64？</h2><p>在<a href="/base64-text-encoder/">文本编码器</a>中输入或粘贴文本，即时获取Base64字符串。支持UTF-8处理Unicode字符和表情符号。</p><h2>实用场景</h2><ul><li>HTTP Basic认证（用户名:密码→Base64）</li><li>API令牌和授权头</li><li>含特殊字符的JSON数据</li></ul><h2>常见问题</h2><div class="faq-item"><h3>Base64会加密我的文本吗？</h3><p>不会。Base64只改变格式——任何人都可以解码。</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Base64文本解码器——将Base64转换为文本 | base64image.net',
      description: '免费将Base64字符串解码为可读文本。支持UTF-8、Unicode和特殊字符。',
      h1: 'Base64文本解码器',
      lede: '将Base64字符串转换为可读文本。支持UTF-8、Unicode和所有特殊字符。',
      bodyHtml: `<article class="content-section"><h2>如何将Base64解码为文本？</h2><p>将Base64字符串粘贴到<a href="/base64-text-decoder/">文本解码器</a>中。工具自动处理Unicode字符的UTF-8解码。</p><h2>常见问题</h2><div class="faq-item"><h3>如何解码JWT令牌？</h3><p>JWT的有效载荷（中间部分）是Base64URL——粘贴到解码器中即可查看其内容。</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64转PNG——免费在线转换器 | base64image.net',
      description: '在浏览器中将Base64字符串转换为PNG文件。即时预览和直接下载。',
      h1: 'Base64转PNG转换器',
      lede: '将Base64转换为PNG。在浏览器中即时预览和直接下载。',
      bodyHtml: `<article class="content-section"><h2>如何将Base64转换为PNG？</h2><p>将Base64字符串粘贴到<a href="/base64-to-png/">Base64转PNG转换器</a>中。工具显示PNG图片并提供下载。</p><h2>常见问题</h2><div class="faq-item"><h3>转换会损失质量吗？</h3><p>不会。Base64转换是无损的——只是格式表示的变化。</p></div></article>`,
    },
    'base64-javascript': {
      title: 'JavaScript中的Base64——btoa、atob和Buffer | base64image.net',
      description: '如何在JavaScript中使用Base64：浏览器中的btoa()和atob()，Node.js中的Buffer，Unicode处理。',
      h1: 'JavaScript中的Base64',
      lede: 'JavaScript中Base64编解码完整指南：浏览器中使用btoa/atob，Node.js中使用Buffer。',
      bodyHtml: `<article class="content-section"><h2>浏览器中的Base64</h2><pre><code>// 编码
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// 解码
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Node.js中的Base64</h2><pre><code>const encoded = Buffer.from('Hello World').toString('base64');
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>常见问题</h2><div class="faq-item"><h3>为什么btoa()对特殊字符失败？</h3><p>btoa()只接受Latin-1字符。对于Unicode，请使用TextEncoder或encodeURIComponent。</p></div></article>`,
    },
    'base64-python': {
      title: 'Python中的Base64——base64模块使用示例 | base64image.net',
      description: '如何在Python中使用base64模块编解码Base64。字符串、文件和实际案例示例。',
      h1: 'Python中的Base64',
      lede: '使用base64模块的Python Base64完整指南——字符串、文件和实际用法示例。',
      bodyHtml: `<article class="content-section"><h2>编解码字符串</h2><pre><code>import base64

encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>编码文件</h2><pre><code>with open('image.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

with open('output.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>常见问题</h2><div class="faq-item"><h3>为什么Python 3需要.encode()和.decode()？</h3><p>base64处理字节。.encode()将字符串转为字节，.decode()将字节转为字符串。</p></div></article>`,
    },
    'base64-to-svg': {
      title: 'Base64转SVG — 免费在线转换器 | base64image.net',
      description: '在浏览器中将Base64字符串转换为SVG图形。即时预览和直接下载。',
      h1: 'Base64转SVG转换器',
      lede: '将Base64转换为可缩放的SVG矢量图形。在浏览器中即时预览和下载。',
    },
    'base64-to-webp': {
      title: 'Base64转WebP — 免费在线转换器 | base64image.net',
      description: '在浏览器中将Base64字符串转换为WebP图片。可调质量、预览和下载。',
      h1: 'Base64转WebP转换器',
      lede: '将Base64转换为可调质量的WebP图片。在浏览器中即时预览和下载。',
    },
    'base64-to-jpeg': {
      title: 'Base64转JPEG — 免费在线转换器 | base64image.net',
      description: '在浏览器中将Base64字符串转换为JPEG图片。即时预览和直接下载。',
      h1: 'Base64转JPEG转换器',
      lede: '将Base64转换为JPEG。在浏览器中即时预览和直接下载。',
    },
    'base64-validator': {
      title: 'Base64验证器 — 在线验证Base64字符串 | base64image.net',
      description: '验证字符串是否为有效的Base64。检测格式错误和无效字符。',
      h1: 'Base64验证器',
      lede: '验证字符串是否为有效的Base64。检测格式错误和无效字符。',
    },
  },
  homeExtra: {
    eyebrowSub: '隐私优先 · 本地处理 · 无需账户',
    meta1: '零服务器请求', meta2: '40+工具', meta3: '开源',
    toolsH2: 'Base64所需的一切',
    toolsP: '编码器、解码器、转换器、验证器 — 覆盖所有工作流程。',
    howH2: '零服务器接触。设计如此。',
    howP: '每项操作都在浏览器原生API上运行。您的数据永不离开标签页。',
    step1H: '您提供输入', step1P: '拖放文件、粘贴字符串或上传图片。数据保持本地。',
    step2H: '浏览器API编码', step2P: 'FileReader、atob/btoa和Canvas处理编码 — 内置于每个浏览器。',
    step3H: '输出属于您', step3P: '复制字符串，下载文件。零网络请求。',
    faqH2: '常见问题',
    faqs: [
      { q: '我的数据真的私密吗？', a: '是的。使用任何工具时打开DevTools → 网络 — 您将看到零POST请求。所有操作使用FileReader、atob()/btoa()和Canvas — 从不访问网络的浏览器API。' },
      { q: '什么是Base64编码？', a: 'Base64使用64个可打印ASCII字符将二进制数据转换为文本。用于在HTML/CSS中嵌入图片，在JSON API中传输文件。编码增加约33%的大小。<a href="/zh/what-is-base64/">完整指南</a>' },
      { q: '如何在CSS中嵌入图片？', a: '使用<a href="/base64-image-encoder/">图片编码器</a>编码您的图片，然后使用：<code>background-image: url(\'data:image/png;base64,…\')</code>。' },
      { q: '标准Base64 vs URL安全Base64？', a: '标准Base64使用<code>+</code>和<code>/</code>，在URL中会出问题。URL安全版本（RFC 4648 §5）将它们替换为<code>-</code>和<code>_</code>。' },
    ],
  },
} as const;

export default zh;
