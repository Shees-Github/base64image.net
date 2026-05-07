const ar = {
  nav: {
    encoders: 'المُشفِّرات', decoders: 'أدوات الفك', convert: 'تحويل', tools: 'أدوات', learn: 'تعلّم',
  },
  common: {
    useTool: 'استخدام الأداة',
    toolNote: 'الأداة التفاعلية تعمل باللغة الإنجليزية — متوافقة مع جميع اللغات.',
    privacyNote: 'تتم جميع العمليات في متصفحك. لا يُرسل أي شيء إلى أي خادم.',
  },
  pages: {
    '': {
      title: 'مُشفِّر ومُفكِّك Base64 — أدوات مجانية | base64image.net',
      description: 'أدوات Base64 مجانية وخاصة. شفِّر الصور، وافكِّ الترميز، وحوِّل الصيغ. كل شيء يعمل في متصفحك — لا يُرفع شيء إلى الخوادم.',
      h1: 'أدوات Base64 للمطوِّرين',
      lede: 'شفِّر وافكِّ وحوِّل Base64 في متصفحك. لا يغادر أي شيء جهازك — بلا رفع، بلا تتبع.',
      bodyHtml: `<section class="content-section"><h2>لماذا تستخدم base64image.net؟</h2><p>يوفر base64image.net أكثر من 40 أداة مجانية لـ Base64 تعمل بالكامل في متصفحك. لا حساب مطلوب، لا إعلانات مزعجة، وبياناتك لا تغادر جهازك أبدًا.</p><h2>الأدوات المتاحة</h2><ul><li><a href="/base64-image-encoder/">مُشفِّر صور Base64</a> — تحويل PNG وJPEG وSVG إلى Base64</li><li><a href="/base64-image-decoder/">مُفكِّك صور Base64</a> — تحويل Base64 إلى صورة</li><li><a href="/base64-text-encoder/">مُشفِّر نصوص Base64</a> — تحويل النص إلى Base64</li><li><a href="/base64-text-decoder/">مُفكِّك نصوص Base64</a> — تحويل Base64 إلى نص</li><li><a href="/base64-validator/">مُدقِّق Base64</a> — التحقق من صحة سلاسل Base64</li><li><a href="/what-is-base64/">ما هو Base64؟</a> — الدليل الكامل</li></ul></section>`,
    },
    'what-is-base64': {
      title: 'ما هو Base64؟ الدليل الكامل للترميز | base64image.net',
      description: 'دليل كامل حول Base64: التعريف، كيفية عمل الخوارزمية، متى تستخدمه وأمثلة عملية.',
      h1: 'ما هو ترميز Base64؟',
      lede: 'دليل كامل حول صيغة ترميز Base64 وخوارزميتها وتطبيقاتها العملية في تطوير الويب.',
      bodyHtml: `<article class="content-section"><h2>ما هو Base64؟</h2><p>Base64 هو نظام ترميز من ثنائي إلى نص معرَّف في RFC 4648، يُمثِّل البيانات الثنائية باستخدام 64 حرفًا ASCII قابلًا للطباعة. تُحوِّل الخوارزمية كل 3 بايت (24 بت) إلى 4 أحرف في المخرجات، مما ينتج عنه زيادة في الحجم بنسبة 33%.</p><p>وُجد Base64 لأن كثيرًا من البروتوكولات تدعم النص فقط: يحتاج البريد الإلكتروني (SMTP) وJSON وXML وعناوين URL إلى تمثيلات نصية آمنة للمحتوى الثنائي.</p><h2>كيف يعمل؟</h2><p>تعالج الخوارزمية 3 بايت في كل مرة، تقسمها إلى 4 مجموعات من 6 بتات، وتُعيِّن كل مجموعة إلى حرف من أبجدية Base64. عندما لا يكون الطول مضاعفًا للعدد 3، تُضاف أحرف حشو (=).</p><h2>متى تستخدم Base64؟</h2><ul><li>تضمين الصور في HTML/CSS كـ data URIs</li><li>نقل البيانات الثنائية عبر قنوات النص فقط</li><li>بيانات اعتماد مصادقة HTTP Basic</li><li>تخزين الإعدادات التي تحتوي على أحرف إشكالية</li></ul><h2>Base64 ليس تشفيرًا</h2><p>Base64 ترميز وليس تشفيرًا. يمكن عكسه بدون مفتاح. لحماية البيانات استخدم TLS/HTTPS أو التشفير الحقيقي مثل AES.</p><h2>أسئلة شائعة</h2><div class="faq-item"><h3>هل Base64 تشفير؟</h3><p>لا. Base64 يغيِّر الصيغة فقط — يمكن لأي شخص فك ترميزه بدون مفتاح.</p></div><div class="faq-item"><h3>بكم يزداد الحجم؟</h3><p>بيانات Base64 أكبر بنسبة 33% تقريبًا من البيانات الثنائية الأصلية.</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'مُشفِّر صور Base64 — PNG وJPEG وSVG إلى Base64 | base64image.net',
      description: 'حوِّل صور PNG وJPEG وSVG وWebP إلى Base64 مجانًا في متصفحك. بلا رفع، خصوصية كاملة.',
      h1: 'مُشفِّر صور Base64',
      lede: 'حوِّل صور PNG وJPEG وSVG وWebP إلى سلاسل Base64. بلا رفع، خصوصية كاملة.',
      bodyHtml: `<article class="content-section"><h2>كيف تحوِّل صورة إلى Base64؟</h2><p>استخدم <a href="/base64-image-encoder/">مُشفِّر صور Base64</a>: اسحب صورتك أو انقر لتحديدها. تُولَّد سلسلة Base64 فورًا في متصفحك دون إرسال أي بيانات إلى خادم.</p><h2>ما الفائدة منه؟</h2><p>تتيح صور Base64: تضمين الصور مباشرةً في HTML/CSS (تقليل طلبات HTTP)؛ تضمين الصور في رسائل HTML الإلكترونية؛ إرسال بيانات الصور في JSON APIs.</p><h2>الصيغ المدعومة</h2><p>PNG وJPEG وGIF وWebP وSVG وAVIF وBMP وICO وجميع الصيغ التي يدعمها متصفحك.</p><h2>أسئلة شائعة</h2><div class="faq-item"><h3>كيف أضمِّن الصورة في HTML؟</h3><p><code>&lt;img src="data:image/png;base64,سلسلتك"&gt;</code></p></div><div class="faq-item"><h3>هل صوري آمنة؟</h3><p>نعم. تتم جميع العمليات محليًا في متصفحك ولا يُرسل أي شيء إلى الخوادم.</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'مُفكِّك صور Base64 — Base64 إلى PNG وJPEG | base64image.net',
      description: 'حوِّل سلاسل Base64 إلى صور PNG وJPEG وSVG مجانًا في متصفحك. معاينة وتنزيل مباشر.',
      h1: 'مُفكِّك صور Base64',
      lede: 'حوِّل سلاسل Base64 إلى صور. معاينة فورية وتنزيل مباشر.',
      bodyHtml: `<article class="content-section"><h2>كيف تفكِّك Base64 إلى صورة؟</h2><p>الصق سلسلة Base64 في <a href="/base64-image-decoder/">مُفكِّك الصور</a>. تكتشف الأداة نوع الصورة وتعرض معاينة. انقر "تنزيل" لحفظ الملف.</p><h2>أسئلة شائعة</h2><div class="faq-item"><h3>هل يمكنني لصق data URI كاملًا؟</h3><p>نعم، تقبل الأداة سلسلة Base64 منفردة أو data URI كاملًا مع البادئة.</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'مُشفِّر نصوص Base64 — تحويل النص إلى Base64 | base64image.net',
      description: 'حوِّل أي نص إلى Base64 مجانًا في متصفحك. يدعم Unicode وUTF-8 والأحرف الخاصة.',
      h1: 'مُشفِّر نصوص Base64',
      lede: 'حوِّل أي نص إلى Base64 فورًا. يدعم Unicode وUTF-8 وجميع الأحرف الخاصة.',
      bodyHtml: `<article class="content-section"><h2>كيف تُشفِّر النص بـ Base64؟</h2><p>أدخل نصك أو الصقه في <a href="/base64-text-encoder/">مُشفِّر النصوص</a> واحصل على سلسلة Base64 فورًا. يدعم UTF-8 لمعالجة أحرف Unicode والرموز التعبيرية.</p><h2>الاستخدامات العملية</h2><ul><li>مصادقة HTTP Basic (اسم المستخدم:كلمة المرور ← Base64)</li><li>رموز API ورؤوس التفويض</li><li>بيانات JSON تحتوي على أحرف خاصة</li></ul><h2>أسئلة شائعة</h2><div class="faq-item"><h3>هل يُشفِّر Base64 نصي؟</h3><p>لا. Base64 يغيِّر الصيغة فقط — يمكن لأي شخص فك ترميزه.</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'مُفكِّك نصوص Base64 — تحويل Base64 إلى نص | base64image.net',
      description: 'فكِّك سلاسل Base64 إلى نص مقروء مجانًا. يدعم UTF-8 وUnicode والأحرف الخاصة.',
      h1: 'مُفكِّك نصوص Base64',
      lede: 'حوِّل سلاسل Base64 إلى نص مقروء. يدعم UTF-8 وUnicode وجميع الأحرف الخاصة.',
      bodyHtml: `<article class="content-section"><h2>كيف تفكِّك Base64 إلى نص؟</h2><p>الصق سلسلة Base64 في <a href="/base64-text-decoder/">مُفكِّك النصوص</a>. تتولى الأداة تلقائيًا فك ترميز UTF-8 لأحرف Unicode.</p><h2>أسئلة شائعة</h2><div class="faq-item"><h3>كيف أفكِّك رمز JWT؟</h3><p>الحمولة (الجزء الأوسط) من JWT هي Base64URL — الصقها في المُفكِّك لرؤية محتواها.</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64 إلى PNG — محوِّل مجاني عبر الإنترنت | base64image.net',
      description: 'حوِّل سلاسل Base64 إلى ملفات PNG في متصفحك. معاينة فورية وتنزيل مباشر.',
      h1: 'محوِّل Base64 إلى PNG',
      lede: 'حوِّل Base64 إلى PNG. معاينة فورية وتنزيل مباشر من متصفحك.',
      bodyHtml: `<article class="content-section"><h2>كيف تحوِّل Base64 إلى PNG؟</h2><p>الصق سلسلة Base64 في <a href="/base64-to-png/">محوِّل Base64 إلى PNG</a>. تعرض الأداة صورة PNG وتوفر التنزيل.</p><h2>أسئلة شائعة</h2><div class="faq-item"><h3>هل تُفقد الجودة عند التحويل؟</h3><p>لا. تحويل Base64 بلا فقدان — هو مجرد تغيير في تمثيل الصيغة.</p></div></article>`,
    },
    'base64-javascript': {
      title: 'Base64 في JavaScript — btoa وatob وBuffer | base64image.net',
      description: 'كيفية استخدام Base64 في JavaScript: btoa() وatob() في المتصفح، Buffer في Node.js، معالجة Unicode.',
      h1: 'Base64 في JavaScript',
      lede: 'دليل كامل لترميز وفك ترميز Base64 في JavaScript: btoa/atob في المتصفح وBuffer في Node.js.',
      bodyHtml: `<article class="content-section"><h2>Base64 في المتصفح</h2><pre><code>// ترميز
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// فك الترميز
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Base64 في Node.js</h2><pre><code>const encoded = Buffer.from('Hello World').toString('base64');
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>أسئلة شائعة</h2><div class="faq-item"><h3>لماذا يفشل btoa() مع الأحرف الخاصة؟</h3><p>يقبل btoa() حروف Latin-1 فقط. لـ Unicode استخدم TextEncoder أو encodeURIComponent.</p></div></article>`,
    },
    'base64-python': {
      title: 'Base64 في Python — وحدة base64 مع أمثلة | base64image.net',
      description: 'كيفية ترميز وفك ترميز Base64 في Python باستخدام وحدة base64. أمثلة للنصوص والملفات.',
      h1: 'Base64 في Python',
      lede: 'دليل كامل لـ Base64 في Python مع وحدة base64 — أمثلة للنصوص والملفات والاستخدام الفعلي.',
      bodyHtml: `<article class="content-section"><h2>ترميز وفك ترميز النصوص</h2><pre><code>import base64

encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>ترميز الملفات</h2><pre><code>with open('image.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

with open('output.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>أسئلة شائعة</h2><div class="faq-item"><h3>لماذا نحتاج .encode() و.decode() في Python 3؟</h3><p>تعمل وحدة base64 مع البايت. .encode() تحوِّل النص إلى بايت، و.decode() تحوِّل البايت إلى نص.</p></div></article>`,
    },
    'base64-to-svg': {
      title: 'Base64 إلى SVG — محوِّل مجاني عبر الإنترنت | base64image.net',
      description: 'حوِّل سلاسل Base64 إلى رسومات SVG في متصفحك. معاينة فورية وتنزيل مباشر.',
      h1: 'محوِّل Base64 إلى SVG',
      lede: 'حوِّل Base64 إلى رسومات SVG متجهية قابلة للتوسع. معاينة فورية وتنزيل من متصفحك.',
    },
    'base64-to-webp': {
      title: 'Base64 إلى WebP — محوِّل مجاني عبر الإنترنت | base64image.net',
      description: 'حوِّل سلاسل Base64 إلى صور WebP في متصفحك. جودة قابلة للضبط، معاينة وتنزيل.',
      h1: 'محوِّل Base64 إلى WebP',
      lede: 'حوِّل Base64 إلى WebP بجودة قابلة للضبط. معاينة وتنزيل من متصفحك.',
    },
    'base64-to-jpeg': {
      title: 'Base64 إلى JPEG — محوِّل مجاني عبر الإنترنت | base64image.net',
      description: 'حوِّل سلاسل Base64 إلى صور JPEG في متصفحك. معاينة فورية وتنزيل مباشر.',
      h1: 'محوِّل Base64 إلى JPEG',
      lede: 'حوِّل Base64 إلى JPEG. معاينة فورية وتنزيل مباشر من متصفحك.',
    },
    'base64-validator': {
      title: 'مُدقِّق Base64 — تحقق من سلاسل Base64 عبر الإنترنت | base64image.net',
      description: 'تحقق من صحة سلاسل Base64 في متصفحك. اكتشف أخطاء التنسيق والأحرف غير الصالحة.',
      h1: 'مُدقِّق Base64',
      lede: 'تحقق من صحة سلاسل Base64. اكتشف أخطاء التنسيق والأحرف غير الصالحة.',
    },
  },
  homeExtra: {
    eyebrowSub: 'خصوصية تامة · محلي · بلا حساب',
    meta1: 'صفر طلبات للخادم', meta2: '40+ أداة', meta3: 'مفتوح المصدر',
    toolsH2: 'كل ما تحتاجه لـ Base64',
    toolsP: 'مُشفِّرات، مُفكِّكات، محوِّلات، مُدقِّقات — يغطي كل سير عمل.',
    howH2: 'صفر تواصل مع الخوادم. بالتصميم.',
    howP: 'كل عملية تعمل على APIs المتصفح الأصلية. بياناتك لا تغادر التبويب أبدًا.',
    step1H: 'توفِّر المدخلات', step1P: 'اسحب ملفًا، أو الصق نصًا، أو ارفع صورة. يبقى كل شيء محليًا.',
    step2H: 'المتصفح يُشفِّر', step2P: 'FileReader وatob/btoa وCanvas تتولى التشفير — مدمجة في كل متصفح.',
    step3H: 'المخرج ملكك', step3P: 'انسخ النص، أو نزِّل الملف. صفر طلبات شبكة.',
    faqH2: 'أسئلة شائعة',
    faqs: [
      { q: 'هل بياناتي خاصة حقًا؟', a: 'نعم. افتح DevTools ← الشبكة أثناء استخدام أي أداة — ستجد صفر طلبات POST. جميع العمليات تستخدم FileReader وatob()/btoa() وCanvas — واجهات برمجة متصفح لا تصل للشبكة أبدًا.' },
      { q: 'ما هو ترميز Base64؟', a: 'يحوِّل Base64 البيانات الثنائية إلى نص ASCII باستخدام 64 حرفًا قابلًا للطباعة. يُستخدم لتضمين الصور في HTML/CSS وإرسال الملفات في JSON APIs. يضيف الترميز ~33% من الحجم. <a href="/ar/what-is-base64/">الدليل الكامل</a>' },
      { q: 'كيف أضمِّن صورة في CSS؟', a: 'شفِّر صورتك باستخدام <a href="/base64-image-encoder/">مُشفِّر الصور</a>، ثم استخدم: <code>background-image: url(\'data:image/png;base64,…\')</code>.' },
      { q: 'Base64 القياسي مقابل URL-safe؟', a: 'يستخدم Base64 القياسي <code>+</code> و<code>/</code> التي تُسبِّب مشاكل في URLs. النسخة URL-safe (RFC 4648 §5) تستبدلهما بـ <code>-</code> و<code>_</code>.' },
    ],
  },
} as const;

export default ar;
