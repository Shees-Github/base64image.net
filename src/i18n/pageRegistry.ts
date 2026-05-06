export type PageType = 'home' | 'tool' | 'article' | 'info';

export interface PageMeta {
  type: PageType;
}

export const PAGE_REGISTRY: Record<string, PageMeta> = {
  // Home
  '':                       { type: 'home' },

  // Tool pages
  'base64-image-encoder':   { type: 'tool' },
  'base64-image-decoder':   { type: 'tool' },
  'base64-text-encoder':    { type: 'tool' },
  'base64-text-decoder':    { type: 'tool' },
  'base64-file-encoder':    { type: 'tool' },
  'base64-file-decoder':    { type: 'tool' },
  'base64-to-png':          { type: 'tool' },
  'base64-to-jpeg':         { type: 'tool' },
  'base64-to-svg':          { type: 'tool' },
  'base64-to-webp':         { type: 'tool' },
  'base64-to-gif':          { type: 'tool' },
  'base64-to-pdf':          { type: 'tool' },
  'base64-to-json':         { type: 'tool' },
  'base64-hex-converter':   { type: 'tool' },
  'base64-validator':       { type: 'tool' },
  'base64-url-safe':        { type: 'tool' },
  'base64-embed-generator': { type: 'tool' },
  'base64-bulk-converter':  { type: 'tool' },
  'base64-size-calculator': { type: 'tool' },
  'base32-encoder-decoder': { type: 'tool' },
  'ascii-to-base64':        { type: 'tool' },
  'png-to-base64':          { type: 'tool' },
  'jpeg-to-base64':         { type: 'tool' },
  'svg-to-base64':          { type: 'tool' },
  'base64-picture':         { type: 'tool' },
  'base64-decrypt':         { type: 'tool' },

  // Article pages
  'what-is-base64':         { type: 'article' },
  'base64-algorithm':       { type: 'article' },
  'base64-character-table': { type: 'article' },
  'data-uri-guide':         { type: 'article' },
  'base64-vs-binary':       { type: 'article' },
  'base64-mime-types':      { type: 'article' },
  'base64-email-images':    { type: 'article' },
  'base64-css':             { type: 'article' },
  'base64-api':             { type: 'article' },
  'base64-javascript':      { type: 'article' },
  'base64-python':          { type: 'article' },
  'base64-java':            { type: 'article' },
  'base64-php':             { type: 'article' },
  'base64-csharp':          { type: 'article' },
  'base64-go':              { type: 'article' },
  'base64-linux':           { type: 'article' },
  'base64-mac':             { type: 'article' },
  'base64-powershell':      { type: 'article' },
  'base64-rust':            { type: 'article' },

  // Info pages
  'about':           { type: 'info' },
  'contact':         { type: 'info' },
  'privacy-policy':  { type: 'info' },
  'terms-of-service':{ type: 'info' },
};
