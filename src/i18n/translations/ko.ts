const ko = {
  nav: {
    encoders: '인코더', decoders: '디코더', convert: '변환', tools: '도구', learn: '학습',
  },
  common: {
    useTool: '도구 사용하기',
    toolNote: '대화형 도구는 영어로 작동합니다 — 모든 언어에서 사용 가능합니다.',
    privacyNote: '모든 처리는 브라우저에서 이루어집니다. 서버로 전송되는 데이터가 없습니다.',
  },
  pages: {
    '': {
      title: 'Base64 인코더 및 디코더 — 무료 도구 | base64image.net',
      description: '무료 프라이버시 중심 Base64 도구. 이미지 인코딩, 문자열 디코딩, 형식 변환. 모두 브라우저에서 실행 — 서버에 업로드 없음.',
      h1: '개발자를 위한 Base64 도구',
      lede: '브라우저에서 Base64를 인코딩, 디코딩, 변환하세요. 데이터가 컴퓨터를 벗어나지 않습니다.',
      bodyHtml: `<section class="content-section"><h2>base64image.net을 사용하는 이유</h2><p>base64image.net은 브라우저에서 완전히 실행되는 40개 이상의 무료 Base64 도구를 제공합니다. 계정 불필요, 성가신 광고 없음, 데이터가 기기를 절대 벗어나지 않습니다.</p><h2>사용 가능한 도구</h2><ul><li><a href="/base64-image-encoder/">Base64 이미지 인코더</a> — PNG, JPEG, SVG를 Base64로 변환</li><li><a href="/base64-image-decoder/">Base64 이미지 디코더</a> — Base64를 이미지로 변환</li><li><a href="/base64-text-encoder/">Base64 텍스트 인코더</a> — 텍스트를 Base64로 변환</li><li><a href="/base64-text-decoder/">Base64 텍스트 디코더</a> — Base64를 텍스트로 변환</li><li><a href="/base64-validator/">Base64 유효성 검사기</a> — Base64 문자열 검증</li><li><a href="/what-is-base64/">Base64란?</a> — 완전한 가이드</li></ul></section>`,
    },
    'what-is-base64': {
      title: 'Base64란? 인코딩 완전 가이드 | base64image.net',
      description: 'Base64 완전 가이드: 정의, 알고리즘 작동 방식, 사용 시기, 실용적인 예시.',
      h1: 'Base64 인코딩이란?',
      lede: 'Base64 인코딩 형식, 알고리즘, 웹 개발에서의 실용적 응용에 대한 완전한 가이드.',
      bodyHtml: `<article class="content-section"><h2>Base64란 무엇인가?</h2><p>Base64는 RFC 4648에 정의된 이진-텍스트 인코딩 방식으로, 64개의 인쇄 가능한 ASCII 문자를 사용하여 이진 데이터를 표현합니다. 알고리즘은 입력 3바이트(24비트)마다 4개의 출력 문자로 변환하여 약 33%의 크기 증가가 발생합니다.</p><p>Base64는 많은 프로토콜이 텍스트만 지원하기 때문에 존재합니다: SMTP, JSON, XML, URL은 모두 이진 콘텐츠의 텍스트 안전 표현이 필요합니다.</p><h2>작동 방식</h2><p>알고리즘은 3바이트씩 처리하여 4개의 6비트 그룹으로 나누고 각 그룹을 Base64 알파벳의 문자에 매핑합니다. 길이가 3의 배수가 아니면 패딩 문자(=)가 추가됩니다.</p><h2>Base64 사용 시기</h2><ul><li>HTML/CSS에 데이터 URI로 이미지 삽입</li><li>텍스트 전용 채널로 이진 데이터 전송</li><li>HTTP Basic 인증 자격증명</li><li>문제가 있는 문자가 포함된 설정 저장</li></ul><h2>Base64는 암호화가 아님</h2><p>Base64는 인코딩이지 암호화가 아닙니다. 키 없이 되돌릴 수 있습니다. 데이터 보호를 위해 TLS/HTTPS나 AES 같은 실제 암호화를 사용하세요.</p><h2>자주 묻는 질문</h2><div class="faq-item"><h3>Base64는 암호화인가요?</h3><p>아니요. Base64는 형식만 변경합니다 — 누구나 키 없이 디코딩할 수 있습니다.</p></div><div class="faq-item"><h3>크기가 얼마나 증가하나요?</h3><p>Base64 데이터는 원본 이진 데이터보다 약 33% 더 큽니다.</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'Base64 이미지 인코더 — PNG, JPEG, SVG를 Base64로 | base64image.net',
      description: '브라우저에서 PNG, JPEG, SVG, WebP 이미지를 무료로 Base64로 변환. 업로드 없음, 완전한 개인정보 보호.',
      h1: 'Base64 이미지 인코더',
      lede: 'PNG, JPEG, SVG, WebP 이미지를 Base64 문자열로 변환. 업로드 없음, 완전한 개인정보 보호.',
      bodyHtml: `<article class="content-section"><h2>이미지를 Base64로 변환하는 방법</h2><p><a href="/base64-image-encoder/">Base64 이미지 인코더</a>를 사용하세요: 이미지를 드래그하거나 클릭하여 선택합니다. Base64 문자열은 서버로 데이터를 전송하지 않고 브라우저에서 즉시 생성됩니다.</p><h2>용도</h2><p>Base64 이미지는: HTML/CSS에 이미지 직접 삽입(HTTP 요청 절감); HTML 이메일에 이미지 포함; JSON API로 이미지 데이터 전송에 사용됩니다.</p><h2>지원 형식</h2><p>PNG, JPEG, GIF, WebP, SVG, AVIF, BMP, ICO 및 브라우저가 지원하는 모든 형식.</p><h2>자주 묻는 질문</h2><div class="faq-item"><h3>HTML에 이미지를 삽입하는 방법은?</h3><p><code>&lt;img src="data:image/png;base64,귀하의_문자열"&gt;</code></p></div><div class="faq-item"><h3>내 이미지는 안전한가요?</h3><p>네. 모든 처리는 브라우저에서 로컬로 이루어지며 서버로 전송되지 않습니다.</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'Base64 이미지 디코더 — Base64를 PNG, JPEG로 | base64image.net',
      description: '브라우저에서 Base64 문자열을 PNG, JPEG, SVG 이미지로 무료 변환. 미리보기 및 다운로드.',
      h1: 'Base64 이미지 디코더',
      lede: 'Base64 문자열을 이미지로 변환. 즉시 미리보기 및 직접 다운로드.',
      bodyHtml: `<article class="content-section"><h2>Base64를 이미지로 디코딩하는 방법</h2><p>Base64 문자열을 <a href="/base64-image-decoder/">이미지 디코더</a>에 붙여넣습니다. 도구가 이미지 유형을 감지하고 미리보기를 표시합니다. "다운로드"를 클릭하여 파일을 저장합니다.</p><h2>자주 묻는 질문</h2><div class="faq-item"><h3>전체 data URI를 붙여넣을 수 있나요?</h3><p>네, Base64 문자열만 또는 접두사가 있는 전체 data URI 모두 허용됩니다.</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Base64 텍스트 인코더 — 텍스트를 Base64로 변환 | base64image.net',
      description: '브라우저에서 모든 텍스트를 무료로 Base64로 변환. Unicode, UTF-8, 특수문자 지원.',
      h1: 'Base64 텍스트 인코더',
      lede: '모든 텍스트를 즉시 Base64로 변환. Unicode, UTF-8, 모든 특수문자 지원.',
      bodyHtml: `<article class="content-section"><h2>텍스트를 Base64로 인코딩하는 방법</h2><p><a href="/base64-text-encoder/">텍스트 인코더</a>에 텍스트를 입력하거나 붙여넣으면 Base64 문자열이 즉시 생성됩니다. Unicode 문자와 이모지를 위한 UTF-8 처리를 지원합니다.</p><h2>실용적인 사용 사례</h2><ul><li>HTTP Basic 인증 (사용자명:비밀번호 → Base64)</li><li>API 토큰 및 인증 헤더</li><li>특수문자가 포함된 JSON 데이터</li></ul><h2>자주 묻는 질문</h2><div class="faq-item"><h3>Base64가 텍스트를 암호화하나요?</h3><p>아니요. Base64는 형식만 변경합니다 — 누구나 디코딩할 수 있습니다.</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Base64 텍스트 디코더 — Base64를 텍스트로 변환 | base64image.net',
      description: 'Base64 문자열을 읽기 쉬운 텍스트로 무료 디코딩. UTF-8, Unicode, 특수문자 지원.',
      h1: 'Base64 텍스트 디코더',
      lede: 'Base64 문자열을 읽기 쉬운 텍스트로 변환. UTF-8, Unicode, 모든 특수문자 지원.',
      bodyHtml: `<article class="content-section"><h2>Base64를 텍스트로 디코딩하는 방법</h2><p>Base64 문자열을 <a href="/base64-text-decoder/">텍스트 디코더</a>에 붙여넣습니다. Unicode 문자에 대한 UTF-8 디코딩이 자동으로 처리됩니다.</p><h2>자주 묻는 질문</h2><div class="faq-item"><h3>JWT를 어떻게 디코딩하나요?</h3><p>JWT의 페이로드(중간 부분)는 Base64URL입니다 — 디코더에 붙여넣어 내용을 확인하세요.</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64를 PNG로 — 무료 온라인 변환기 | base64image.net',
      description: '브라우저에서 Base64 문자열을 PNG 파일로 변환. 즉시 미리보기 및 직접 다운로드.',
      h1: 'Base64에서 PNG로 변환기',
      lede: 'Base64를 PNG로 변환. 브라우저에서 즉시 미리보기 및 직접 다운로드.',
      bodyHtml: `<article class="content-section"><h2>Base64를 PNG로 변환하는 방법</h2><p>Base64 문자열을 <a href="/base64-to-png/">Base64에서 PNG로 변환기</a>에 붙여넣습니다. 도구가 PNG 이미지를 표시하고 다운로드를 제공합니다.</p><h2>자주 묻는 질문</h2><div class="faq-item"><h3>변환 시 품질이 손실되나요?</h3><p>아니요. Base64 변환은 무손실입니다 — 형식 표현만 변경됩니다.</p></div></article>`,
    },
    'base64-javascript': {
      title: 'JavaScript에서 Base64 — btoa, atob, Buffer | base64image.net',
      description: 'JavaScript에서 Base64 사용하기: 브라우저에서 btoa()와 atob(), Node.js에서 Buffer, Unicode 처리.',
      h1: 'JavaScript에서 Base64',
      lede: 'JavaScript에서 Base64를 인코딩/디코딩하는 완전한 가이드.',
      bodyHtml: `<article class="content-section"><h2>브라우저에서 Base64</h2><pre><code>// 인코딩
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// 디코딩
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Node.js에서 Base64</h2><pre><code>const encoded = Buffer.from('Hello World').toString('base64');
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>자주 묻는 질문</h2><div class="faq-item"><h3>특수문자에서 btoa()가 실패하는 이유는?</h3><p>btoa()는 Latin-1만 허용합니다. Unicode에는 TextEncoder나 encodeURIComponent를 사용하세요.</p></div></article>`,
    },
    'base64-python': {
      title: 'Python에서 Base64 — base64 모듈 예제 | base64image.net',
      description: 'Python base64 모듈로 Base64 인코딩/디코딩하는 방법. 문자열, 파일, 실제 사용 예제.',
      h1: 'Python에서 Base64',
      lede: 'base64 모듈을 사용한 Python Base64 완전 가이드 — 문자열, 파일, 실제 사용 예제.',
      bodyHtml: `<article class="content-section"><h2>문자열 인코딩/디코딩</h2><pre><code>import base64

encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>파일 인코딩</h2><pre><code>with open('image.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

with open('output.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>자주 묻는 질문</h2><div class="faq-item"><h3>Python 3에서 .encode()와 .decode()가 필요한 이유는?</h3><p>base64는 바이트를 처리합니다. .encode()로 문자열을 바이트로 변환하고, .decode()로 바이트를 문자열로 변환합니다.</p></div></article>`,
    },
    'base64-to-svg': {
      title: 'Base64를 SVG로 — 무료 온라인 변환기 | base64image.net',
      description: '브라우저에서 Base64 문자열을 SVG 그래픽으로 변환. 즉시 미리보기 및 직접 다운로드.',
      h1: 'Base64에서 SVG로 변환기',
      lede: 'Base64를 확장 가능한 SVG 벡터 그래픽으로 변환. 브라우저에서 즉시 미리보기 및 다운로드.',
    },
    'base64-to-webp': {
      title: 'Base64를 WebP로 — 무료 온라인 변환기 | base64image.net',
      description: '브라우저에서 Base64 문자열을 WebP 이미지로 변환. 품질 조절 가능, 미리보기 및 다운로드.',
      h1: 'Base64에서 WebP로 변환기',
      lede: '품질 조절 가능한 Base64에서 WebP로 변환. 브라우저에서 즉시 미리보기 및 다운로드.',
    },
    'base64-to-jpeg': {
      title: 'Base64를 JPEG로 — 무료 온라인 변환기 | base64image.net',
      description: '브라우저에서 Base64 문자열을 JPEG 이미지로 변환. 즉시 미리보기 및 직접 다운로드.',
      h1: 'Base64에서 JPEG로 변환기',
      lede: 'Base64를 JPEG로 변환. 브라우저에서 즉시 미리보기 및 직접 다운로드.',
    },
    'base64-validator': {
      title: 'Base64 유효성 검사기 — Base64 문자열 온라인 검증 | base64image.net',
      description: '브라우저에서 문자열이 유효한 Base64인지 확인. 형식 오류와 유효하지 않은 문자를 감지.',
      h1: 'Base64 유효성 검사기',
      lede: '문자열이 유효한 Base64인지 확인. 형식 오류와 유효하지 않은 문자를 감지.',
    },
  },
  homeExtra: {
    eyebrowSub: '개인정보 보호 · 로컬 처리 · 계정 불필요',
    meta1: '서버 요청 없음', meta2: '40개 이상의 도구', meta3: '오픈 소스',
    toolsH2: 'Base64에 필요한 모든 것',
    toolsP: '인코더, 디코더, 변환기, 유효성 검사기 — 모든 워크플로우 지원.',
    howH2: '서버 접촉 없음. 설계상.',
    howP: '모든 작업이 브라우저 네이티브 API에서 실행됩니다. 데이터가 탭을 벗어나지 않습니다.',
    step1H: '입력을 제공합니다', step1P: '파일을 드래그하거나 문자열을 붙여넣거나 이미지를 업로드합니다. 로컬에 유지됩니다.',
    step2H: '브라우저 API가 인코딩', step2P: 'FileReader, atob/btoa, Canvas가 인코딩을 처리합니다 — 모든 브라우저에 내장되어 있습니다.',
    step3H: '출력은 당신의 것', step3P: '문자열을 복사하거나 파일을 다운로드합니다. 네트워크 요청 없음.',
    faqH2: '자주 묻는 질문',
    faqs: [
      { q: '데이터가 정말 비공개인가요?', a: '네. 도구를 사용하는 동안 DevTools → 네트워크를 열어보세요 — POST 요청이 없음을 확인할 수 있습니다. 모든 작업은 FileReader, atob()/btoa(), Canvas를 사용하며 네트워크에 접근하지 않습니다.' },
      { q: 'Base64 인코딩이란?', a: 'Base64는 64개의 인쇄 가능한 ASCII 문자를 사용하여 이진 데이터를 텍스트로 변환합니다. HTML/CSS에 이미지 삽입, JSON API에서 파일 전송에 사용됩니다. 인코딩은 약 33%의 크기를 추가합니다. <a href="/ko/what-is-base64/">완전한 가이드</a>' },
      { q: 'CSS에 이미지를 삽입하는 방법은?', a: '<a href="/base64-image-encoder/">이미지 인코더</a>로 이미지를 인코딩하고: <code>background-image: url(\'data:image/png;base64,…\')</code>를 사용하세요.' },
      { q: '표준 Base64 vs URL-safe?', a: '표준 Base64는 URL에서 문제가 되는 <code>+</code>와 <code>/</code>를 사용합니다. URL-safe 버전(RFC 4648 §5)은 이를 <code>-</code>와 <code>_</code>로 대체합니다.' },
    ],
  },
} as const;

export default ko;
