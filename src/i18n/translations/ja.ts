const ja = {
  nav: {
    encoders: 'エンコーダー', decoders: 'デコーダー', convert: '変換', tools: 'ツール', learn: '学ぶ',
  },
  common: {
    useTool: 'ツールを使用する',
    toolNote: 'インタラクティブツールは英語で動作します — どの言語でも使用できます。',
    privacyNote: 'すべてブラウザ内で処理されます。サーバーには何も送信されません。',
  },
  pages: {
    '': {
      title: 'Base64エンコーダー・デコーダー — 無料ツール | base64image.net',
      description: '無料でプライバシー重視のBase64ツール。画像のエンコード、文字列のデコード、フォーマット変換がブラウザ上で完結。サーバーへのアップロード不要。',
      h1: '開発者向けBase64ツール',
      lede: 'ブラウザでBase64のエンコード、デコード、変換を行います。データがマシンから出ることはありません。',
      bodyHtml: `<section class="content-section"><h2>base64image.netを使う理由</h2><p>base64image.netは40以上の無料Base64ツールをブラウザ上で提供しています。アカウント不要、煩わしい広告なし、データは端末から外に出ません。</p><h2>利用可能なツール</h2><ul><li><a href="/base64-image-encoder/">Base64画像エンコーダー</a> — PNG、JPEG、SVGをBase64に変換</li><li><a href="/base64-image-decoder/">Base64画像デコーダー</a> — Base64を画像に変換</li><li><a href="/base64-text-encoder/">Base64テキストエンコーダー</a> — テキストをBase64に変換</li><li><a href="/base64-text-decoder/">Base64テキストデコーダー</a> — Base64をテキストに変換</li><li><a href="/base64-validator/">Base64バリデーター</a> — Base64文字列を検証</li><li><a href="/what-is-base64/">Base64とは？</a> — 完全ガイド</li></ul></section>`,
    },
    'what-is-base64': {
      title: 'Base64とは？エンコーディングの完全ガイド | base64image.net',
      description: 'Base64の完全ガイド：定義、アルゴリズムの仕組み、使用場面、HTML・CSS・JavaScriptでの実践例。',
      h1: 'Base64エンコーディングとは？',
      lede: 'Base64エンコーディング形式、アルゴリズム、実践的な使用例についての完全ガイド。',
      bodyHtml: `<article class="content-section"><h2>Base64とは何か？</h2><p>Base64はRFC 4648で定義されたバイナリからテキストへの変換スキームです。64種類の印刷可能なASCII文字を使用してバイナリデータを表現します。アルゴリズムは入力の3バイト（24ビット）ごとに4文字の出力に変換し、元のバイナリデータより約33%サイズが増加します。</p><p>Base64はSMTP、JSON、XML、URLなど多くのプロトコルがテキストのみをサポートするために存在します。バイナリコンテンツをテキストセーフな形式に変換することでこの問題を解決します。</p><h2>仕組み</h2><p>アルゴリズムは3バイトずつ処理し、6ビットの4グループに分割して、各グループをBase64アルファベットの1文字にマッピングします。長さが3の倍数でない場合、パディング文字（=）が追加されます。</p><h2>Base64を使う場面</h2><ul><li>HTML/CSSにデータURIとして画像を埋め込む</li><li>テキストのみのチャンネルでバイナリを送信する</li><li>HTTP Basic認証の認証情報</li><li>問題のある文字を含む設定を保存する</li></ul><h2>Base64は暗号化ではない</h2><p>Base64はエンコーディングであり、暗号化ではありません。鍵なしで元に戻せます。データを保護するにはTLS/HTTPSや本物の暗号化（AES等）を使用してください。</p><h2>よくある質問</h2><div class="faq-item"><h3>Base64は暗号化ですか？</h3><p>いいえ。Base64は形式を変換するだけです — 誰でも鍵なしでデコードできます。</p></div><div class="faq-item"><h3>サイズはどれだけ増えますか？</h3><p>Base64データは元のバイナリデータより約33%大きくなります。</p></div></article>`,
    },
    'base64-image-encoder': {
      title: 'Base64画像エンコーダー — PNG、JPEG、SVGをBase64に | base64image.net',
      description: 'PNG、JPEG、SVG、WebP画像をブラウザで無料でBase64に変換。アップロード不要、完全プライベート。',
      h1: 'Base64画像エンコーダー',
      lede: 'PNG、JPEG、SVG、WebP画像をBase64文字列に変換。アップロード不要、完全プライベート。',
      bodyHtml: `<article class="content-section"><h2>画像をBase64に変換する方法</h2><p><a href="/base64-image-encoder/">Base64画像エンコーダー</a>を使用します：画像をドラッグするかクリックして選択してください。Base64文字列はブラウザ内で即座に生成され、サーバーにデータは送信されません。</p><h2>使用例</h2><p>Base64画像は：HTML/CSSに画像を直接埋め込む（追加HTTPリクエストを削減）；HTMLメールに画像を含める；JSON APIで画像データを送信する、などに使用されます。</p><h2>対応フォーマット</h2><p>PNG、JPEG、GIF、WebP、SVG、AVIF、BMP、ICOなどブラウザがサポートするすべての形式。</p><h2>よくある質問</h2><div class="faq-item"><h3>HTMLに画像を埋め込む方法は？</h3><p><code>&lt;img src="data:image/png;base64,あなたの文字列"&gt;</code></p></div><div class="faq-item"><h3>画像は安全ですか？</h3><p>はい。すべてブラウザ内でローカルに処理されます。サーバーには送信されません。</p></div></article>`,
    },
    'base64-image-decoder': {
      title: 'Base64画像デコーダー — Base64をPNG、JPEGに | base64image.net',
      description: 'Base64文字列をPNG、JPEG、SVG画像に無料で変換。プレビューと直接ダウンロード。',
      h1: 'Base64画像デコーダー',
      lede: 'Base64文字列を画像に変換。即時プレビューと直接ダウンロード。',
      bodyHtml: `<article class="content-section"><h2>Base64を画像にデコードする方法</h2><p>Base64文字列を<a href="/base64-image-decoder/">画像デコーダー</a>に貼り付けます。ツールが画像タイプを検出してプレビューを表示します。「ダウンロード」をクリックしてファイルを保存します。</p><h2>よくある質問</h2><div class="faq-item"><h3>完全なdata URIを貼り付けられますか？</h3><p>はい、Base64文字列のみとプレフィックス付きの完全なdata URIの両方を受け付けます。</p></div></article>`,
    },
    'base64-text-encoder': {
      title: 'Base64テキストエンコーダー — テキストをBase64に変換 | base64image.net',
      description: 'あらゆるテキストを無料でBase64に変換。Unicode、UTF-8、特殊文字に対応。',
      h1: 'Base64テキストエンコーダー',
      lede: 'あらゆるテキストを即座にBase64に変換。Unicode、UTF-8、すべての特殊文字に対応。',
      bodyHtml: `<article class="content-section"><h2>テキストをBase64にエンコードする方法</h2><p><a href="/base64-text-encoder/">テキストエンコーダー</a>にテキストを入力または貼り付けると、Base64文字列が即座に生成されます。Unicode文字や絵文字のUTF-8処理に対応しています。</p><h2>実用例</h2><ul><li>HTTP Basic認証（ユーザー名:パスワード → Base64）</li><li>APIトークンと認証ヘッダー</li><li>特殊文字を含むJSONデータ</li></ul><h2>よくある質問</h2><div class="faq-item"><h3>Base64はテキストを暗号化しますか？</h3><p>いいえ。Base64は形式を変換するだけで、誰でもデコードできます。</p></div></article>`,
    },
    'base64-text-decoder': {
      title: 'Base64テキストデコーダー — Base64をテキストに変換 | base64image.net',
      description: 'Base64文字列を読みやすいテキストに無料でデコード。UTF-8、Unicode、特殊文字に対応。',
      h1: 'Base64テキストデコーダー',
      lede: 'Base64文字列を読みやすいテキストに変換。UTF-8、Unicode、すべての特殊文字に対応。',
      bodyHtml: `<article class="content-section"><h2>Base64をテキストにデコードする方法</h2><p>Base64文字列を<a href="/base64-text-decoder/">テキストデコーダー</a>に貼り付けます。Unicode文字のUTF-8デコードが自動的に処理されます。</p><h2>よくある質問</h2><div class="faq-item"><h3>JWTをデコードする方法は？</h3><p>JWTのペイロード（中間部分）はBase64URLです — デコーダーに貼り付けてその内容を確認できます。</p></div></article>`,
    },
    'base64-to-png': {
      title: 'Base64をPNGに変換 — 無料オンラインコンバーター | base64image.net',
      description: 'Base64文字列をPNGファイルにブラウザで変換。即時プレビューと直接ダウンロード。',
      h1: 'Base64からPNGへのコンバーター',
      lede: 'Base64をPNGに変換。ブラウザで即時プレビューと直接ダウンロード。',
      bodyHtml: `<article class="content-section"><h2>Base64をPNGに変換する方法</h2><p>Base64文字列を<a href="/base64-to-png/">Base64からPNGへのコンバーター</a>に貼り付けます。ツールがPNG画像を表示し、ダウンロードを提供します。</p><h2>よくある質問</h2><div class="faq-item"><h3>変換で画質は失われますか？</h3><p>いいえ。Base64変換は可逆的です — 形式の表現を変えるだけです。</p></div></article>`,
    },
    'base64-javascript': {
      title: 'JavaScriptでBase64 — btoa、atob、Buffer | base64image.net',
      description: 'JavaScriptでBase64を使用する方法：ブラウザでbtoa()とatob()、Node.jsでBuffer、Unicode処理。',
      h1: 'JavaScriptでのBase64',
      lede: 'JavaScriptでBase64をエンコード・デコードする完全ガイド：ブラウザでbtoa/atob、Node.jsでBuffer。',
      bodyHtml: `<article class="content-section"><h2>ブラウザでBase64</h2><pre><code>// エンコード
const encoded = btoa('Hello World');
// "SGVsbG8gV29ybGQ="

// デコード
const decoded = atob('SGVsbG8gV29ybGQ=');
// "Hello World"</code></pre><h2>Node.jsでBase64</h2><pre><code>const encoded = Buffer.from('Hello World').toString('base64');
const decoded = Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('utf8');</code></pre><h2>よくある質問</h2><div class="faq-item"><h3>特殊文字でbtoa()が失敗するのはなぜ？</h3><p>btoa()はLatin-1のみ受け付けます。Unicodeにはtextencoder或いはencodeURIComponentを使用してください。</p></div></article>`,
    },
    'base64-python': {
      title: 'PythonでBase64 — base64モジュールの使い方 | base64image.net',
      description: 'Pythonのbase64モジュールを使ったBase64のエンコード・デコード。文字列、ファイル、実践的な使用例。',
      h1: 'PythonでのBase64',
      lede: 'Pythonのbase64モジュールを使った完全ガイド — 文字列、ファイル、実践的な使用例。',
      bodyHtml: `<article class="content-section"><h2>文字列のエンコード・デコード</h2><pre><code>import base64

encoded = base64.b64encode('Hello World'.encode()).decode()
# 'SGVsbG8gV29ybGQ='

decoded = base64.b64decode(encoded).decode()
# 'Hello World'</code></pre><h2>ファイルのエンコード</h2><pre><code>with open('image.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode()

with open('output.png', 'wb') as f:
    f.write(base64.b64decode(encoded))</code></pre><h2>よくある質問</h2><div class="faq-item"><h3>Python 3で.encode()と.decode()が必要な理由は？</h3><p>base64はバイト列を扱います。.encode()で文字列をバイト列に、.decode()でバイト列を文字列に変換します。</p></div></article>`,
    },
  },
  homeExtra: {
    eyebrowSub: 'プライバシー重視 · ローカル処理 · アカウント不要',
    meta1: 'サーバーへの通信なし', meta2: '40以上のツール', meta3: 'オープンソース',
    toolsH2: 'Base64に必要なすべて',
    toolsP: 'エンコーダー、デコーダー、コンバーター、バリデーター — すべてのワークフローに対応。',
    howH2: 'サーバーと接続しない。設計上。',
    howP: 'すべての処理がブラウザのネイティブAPIで実行されます。データがタブを出ることはありません。',
    step1H: '入力を提供する', step1P: 'ファイルをドロップ、文字列を貼り付け、または画像をアップロード。すべてローカルに保持されます。',
    step2H: 'ブラウザがエンコード', step2P: 'FileReader、atob/btoa、Canvasがエンコードを処理 — すべてのブラウザに組み込み済み。',
    step3H: '出力はあなたのもの', step3P: '文字列をコピー、ファイルをダウンロード。ネットワークリクエストはゼロ。',
    faqH2: 'よくある質問',
    faqs: [
      { q: '本当にデータは安全ですか？', a: 'はい。いずれかのツールを使用中にDevTools → ネットワークを開いてください — POSTリクエストがゼロであることが確認できます。すべての処理にFileReader、atob()/btoa()、Canvasを使用しており、ネットワークにアクセスしません。' },
      { q: 'Base64エンコーディングとは？', a: 'Base64は64種の印刷可能なASCII文字を使ってバイナリデータをテキストに変換します。HTML/CSSへの画像埋め込み、JSON APIでのファイル転送に使われます。エンコードにより約33%サイズが増加します。<a href="/ja/what-is-base64/">完全ガイド</a>' },
      { q: 'CSSに画像を埋め込む方法は？', a: '<a href="/base64-image-encoder/">画像エンコーダー</a>で画像をエンコードし、<code>background-image: url(\'data:image/png;base64,…\')</code>を使用してください。' },
      { q: '標準Base64 vs URL-safe Base64？', a: '標準Base64は<code>+</code>と<code>/</code>を使いますが、URLで問題が発生します。URL-safe版（RFC 4648 §5）はそれらを<code>-</code>と<code>_</code>に置き換えます。' },
    ],
  },
} as const;

export default ja;
