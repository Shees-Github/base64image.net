/**
 * Interactive tool HTML + component scripts for each tool slug.
 * Used by the i18n catch-all to embed the real working tool on translated pages
 * without duplicating Alpine.js logic in each translation file.
 */

export interface ToolSection {
  /** Whether Alpine.js CDN script must be included */
  needsAlpine: boolean;
  /** The interactive HTML block (tool UI only, no article content) */
  html: string;
  /** Inline script: Alpine component function or vanilla JS IIFE */
  script: string;
}

export const TOOL_SECTIONS: Partial<Record<string, ToolSection>> = {

  /* ── Base64 Image Decoder ──────────────────────────────────────── */
  'base64-image-decoder': {
    needsAlpine: false,
    html: `<div class="tool-section">
  <div class="input-group">
    <label for="base64Input">Paste your Base64 string</label>
    <textarea id="base64Input" placeholder="Paste your Base64 string here (with or without data:image/png;base64, prefix)..." rows="6"></textarea>
    <div class="error" id="decodeError" style="display:none"></div>
  </div>
  <div class="actions">
    <button id="decodeBtn" class="btn-primary">Decode Image</button>
    <button id="clearBtn" class="btn-secondary">Clear</button>
  </div>
  <div class="preview-container" id="previewContainer" style="display:none">
    <h2>Preview</h2>
    <div class="image-wrapper"><img id="previewImg" alt="Decoded image preview"></div>
    <div class="image-info">
      <p><strong>Format:</strong> <span id="imageFormat"></span></p>
      <p><strong>Size:</strong> <span id="imageSize"></span></p>
    </div>
    <button id="downloadBtn" class="btn-primary">Download Image</button>
  </div>
</div>`,
    script: `(function(){
  var _blob=null,_ext='png',_b64='',_mime='image/png';
  var textarea=document.getElementById('base64Input'),errorDiv=document.getElementById('decodeError'),
      container=document.getElementById('previewContainer'),img=document.getElementById('previewImg'),
      fmtSpan=document.getElementById('imageFormat'),sizeSpan=document.getElementById('imageSize'),
      dlBtn=document.getElementById('downloadBtn'),decodeBtn=document.getElementById('decodeBtn'),
      clrBtn=document.getElementById('clearBtn');
  function reset(){container.style.display='none';errorDiv.style.display='none';errorDiv.textContent='';
    if(img.src&&img.src.startsWith('blob:'))URL.revokeObjectURL(img.src);
    img.src='';_blob=null;_b64='';_mime='image/png';}
  function decode(){
    reset();var input=textarea.value.trim();if(!input)return;
    try{
      var base64=input,format='unknown';
      var m=input.match(/^data:image\\/([a-zA-Z0-9+\\-]+);base64,(.+)$/s);
      if(m){format=m[1];base64=m[2].trim();}
      base64=base64.replace(/\\s/g,'');
      if(!/^[A-Za-z0-9+/]*={0,2}$/.test(base64))throw new Error('Invalid Base64 characters detected.');
      var bin=atob(base64),bytes=new Uint8Array(bin.length);
      for(var i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
      if(format==='unknown')format=detect(bytes);
      _mime=mime(format);_b64=base64;
      _ext=format==='jpeg'?'jpg':format==='svg+xml'?'svg':format;
      _blob=new Blob([bytes],{type:_mime});
      img.src=URL.createObjectURL(_blob);
      fmtSpan.textContent=format.toUpperCase();
      sizeSpan.textContent=fmt(_blob.size);
      container.style.display='';
    }catch(e){errorDiv.textContent=e.message||'Failed to decode.';errorDiv.style.display='';}
  }
  function detect(b){
    if(b[0]===0xFF&&b[1]===0xD8)return'jpeg';
    if(b[0]===0x89&&b[1]===0x50&&b[2]===0x4E&&b[3]===0x47)return'png';
    if(b[0]===0x47&&b[1]===0x49&&b[2]===0x46)return'gif';
    if(b[0]===0x52&&b[1]===0x49&&b[2]===0x46&&b[3]===0x46)return'webp';
    if(b[0]===0x42&&b[1]===0x4D)return'bmp';
    if(b[0]===0x3C)return'svg+xml';return'png';
  }
  function mime(f){return{png:'image/png',jpeg:'image/jpeg',gif:'image/gif',webp:'image/webp',bmp:'image/bmp','svg+xml':'image/svg+xml'}[f]||'image/png';}
  function fmt(n){if(!n)return'0 B';var k=1024,s=['B','KB','MB'],i=Math.floor(Math.log(n)/Math.log(k));return Math.round((n/Math.pow(k,i))*100)/100+' '+s[i];}
  decodeBtn.addEventListener('click',decode);
  textarea.addEventListener('keydown',function(e){if(e.key==='Enter'&&(e.ctrlKey||e.metaKey))decode();});
  dlBtn.addEventListener('click',function(){
    if(!_b64)return;
    var a=document.createElement('a');a.href='data:'+_mime+';base64,'+_b64;
    a.download='decoded-image-'+Date.now()+'.'+_ext;a.style.display='none';
    document.body.appendChild(a);a.click();document.body.removeChild(a);
  });
  clrBtn.addEventListener('click',function(){textarea.value='';reset();});
})();`,
  },

  /* ── Base64 Image Encoder ──────────────────────────────────────── */
  'base64-image-encoder': {
    needsAlpine: true,
    html: `<div x-data="base64Encoder()" class="tool-section-wrap">
  <div x-show="isProcessing" x-cloak class="processing-overlay">
    <div class="processing-spinner"><div class="spinner"></div><p>Processing image...</p></div>
  </div>
  <section class="tool-section">
    <div class="input-group">
      <label for="fileInput">Select an image:</label>
      <input type="file" id="fileInput" @change="handleFileUpload" accept="image/*">
      <div class="error" x-show="error" x-text="error"></div>
      <div class="success" x-show="success" x-text="success"></div>
    </div>
    <div class="preview-container" x-show="imagePreview">
      <h2>Preview</h2>
      <div class="image-wrapper"><img :src="imagePreview" alt="Image preview" x-show="imagePreview"></div>
      <div class="image-info" x-show="fileInfo">
        <p><strong>Filename:</strong> <span x-text="fileInfo.name"></span></p>
        <p><strong>Format:</strong> <span x-text="fileInfo.type"></span></p>
        <p><strong>Size:</strong> <span x-text="fileInfo.size"></span></p>
      </div>
    </div>
    <div class="input-group" x-show="base64Output">
      <label for="base64Output">Base64 String:</label>
      <textarea id="base64Output" x-model="base64Output" readonly rows="8" @click="$el.select()"></textarea>
    </div>
    <div class="actions" x-show="base64Output">
      <button @click="copyToClipboard" class="btn-primary">Copy to Clipboard</button>
      <button @click="clearAll" class="btn-secondary">Clear</button>
    </div>
  </section>
</div>`,
    script: `function base64Encoder(){return{imagePreview:'',base64Output:'',error:'',success:'',fileInfo:null,isProcessing:false,
  handleFileUpload(e){this.isProcessing=true;this.error='';this.success='';this.base64Output='';this.imagePreview='';this.fileInfo=null;
    var f=e.target.files[0];if(!f){this.isProcessing=false;return;}
    if(!f.type.startsWith('image/')){this.error='Please select a valid image file.';this.isProcessing=false;return;}
    this.fileInfo={name:f.name,type:f.type,size:this.formatBytes(f.size)};
    var r=new FileReader();var self=this;
    r.onload=function(ev){self.imagePreview=ev.target.result;self.base64Output=ev.target.result;self.success='Image successfully encoded to Base64!';self.isProcessing=false;};
    r.onerror=function(){self.error='Failed to read the image file.';self.isProcessing=false;};
    r.readAsDataURL(f);},
  formatBytes(n){if(!n)return'0 Bytes';var k=1024,s=['Bytes','KB','MB'],i=Math.floor(Math.log(n)/Math.log(k));return Math.round((n/Math.pow(k,i))*100)/100+' '+s[i];},
  copyToClipboard(){var t=document.getElementById('base64Output');t.select();document.execCommand('copy');this.success='Base64 string copied to clipboard!';var self=this;setTimeout(function(){self.success='';},3000);},
  clearAll(){this.imagePreview='';this.base64Output='';this.error='';this.success='';this.fileInfo=null;var fi=document.getElementById('fileInput');if(fi)fi.value='';}
};}`,
  },

  /* ── Base64 Text Encoder ───────────────────────────────────────── */
  'base64-text-encoder': {
    needsAlpine: true,
    html: `<div class="tool-section" x-data="textEncoder()">
  <div class="input-group">
    <label for="textInput">Enter Text to Encode</label>
    <textarea id="textInput" x-model="textInput" rows="8" placeholder="Enter your text here..."></textarea>
  </div>
  <div class="actions">
    <button @click="encodeText" class="btn-primary" :disabled="!textInput.trim()">Encode to Base64</button>
    <button @click="clearAll" class="btn-secondary">Clear All</button>
  </div>
  <div x-show="error" class="error" x-text="error"></div>
  <div x-show="base64Output" class="preview-container">
    <h2>Base64 Output</h2>
    <div class="input-group">
      <label>Encoded Base64 String</label>
      <textarea x-model="base64Output" rows="8" readonly></textarea>
    </div>
    <div class="actions">
      <button @click="copyToClipboard" class="btn-primary">Copy to Clipboard</button>
      <button @click="downloadAsText" class="btn-secondary">Download as .txt</button>
    </div>
    <div x-show="copySuccess" class="success">✓ Copied to clipboard!</div>
    <div class="image-info">
      <p><strong>Original Length:</strong> <span x-text="textInput.length"></span> characters</p>
      <p><strong>Encoded Length:</strong> <span x-text="base64Output.length"></span> characters</p>
      <p><strong>Encoding:</strong> UTF-8</p>
    </div>
  </div>
</div>`,
    script: `function textEncoder(){return{textInput:'',base64Output:'',error:'',copySuccess:false,
  encodeText(){this.error='';this.copySuccess=false;if(!this.textInput.trim()){this.error='Please enter some text to encode.';return;}
    try{this.base64Output=btoa(unescape(encodeURIComponent(this.textInput)));}
    catch(e){this.error='Failed to encode text.';this.base64Output='';}},
  copyToClipboard(){var self=this;navigator.clipboard.writeText(this.base64Output).then(function(){self.copySuccess=true;setTimeout(function(){self.copySuccess=false;},3000);});},
  downloadAsText(){var b=new Blob([this.base64Output],{type:'text/plain'}),u=URL.createObjectURL(b),a=document.createElement('a');
    a.href=u;a.download='base64-encoded-'+Date.now()+'.txt';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);},
  clearAll(){this.textInput='';this.base64Output='';this.error='';this.copySuccess=false;}
};}`,
  },

  /* ── Base64 Text Decoder ───────────────────────────────────────── */
  'base64-text-decoder': {
    needsAlpine: true,
    html: `<div class="tool-section" x-data="textDecoder()">
  <div class="input-group">
    <label for="base64Input">Enter Base64 String to Decode</label>
    <textarea id="base64Input" x-model="base64Input" rows="8" placeholder="Paste your Base64 encoded text here..."></textarea>
  </div>
  <div class="actions">
    <button @click="decodeText" class="btn-primary" :disabled="!base64Input.trim()">Decode to Text</button>
    <button @click="clearAll" class="btn-secondary">Clear All</button>
  </div>
  <div x-show="error" class="error" x-text="error"></div>
  <div x-show="textOutput" class="preview-container">
    <h2>Decoded Text</h2>
    <div class="input-group">
      <label>Plain Text Output</label>
      <textarea x-model="textOutput" rows="8" readonly></textarea>
    </div>
    <div class="actions">
      <button @click="copyToClipboard" class="btn-primary">Copy to Clipboard</button>
      <button @click="downloadAsText" class="btn-secondary">Download as .txt</button>
    </div>
    <div x-show="copySuccess" class="success">✓ Copied to clipboard!</div>
    <div class="image-info">
      <p><strong>Base64 Length:</strong> <span x-text="base64Input.length"></span> characters</p>
      <p><strong>Decoded Length:</strong> <span x-text="textOutput.length"></span> characters</p>
      <p><strong>Encoding:</strong> UTF-8</p>
    </div>
  </div>
</div>`,
    script: `function textDecoder(){return{base64Input:'',textOutput:'',error:'',copySuccess:false,
  decodeText(){this.error='';this.copySuccess=false;if(!this.base64Input.trim()){this.error='Please enter a Base64 string to decode.';return;}
    try{var c=this.base64Input.replace(/\\s/g,'');
      if(!/^[A-Za-z0-9+/]*={0,2}$/.test(c))throw new Error('Invalid Base64 string.');
      this.textOutput=decodeURIComponent(escape(atob(c)));}
    catch(e){this.error=e.message||'Failed to decode Base64 string.';this.textOutput='';}},
  copyToClipboard(){var self=this;navigator.clipboard.writeText(this.textOutput).then(function(){self.copySuccess=true;setTimeout(function(){self.copySuccess=false;},3000);});},
  downloadAsText(){var b=new Blob([this.textOutput],{type:'text/plain'}),u=URL.createObjectURL(b),a=document.createElement('a');
    a.href=u;a.download='decoded-text-'+Date.now()+'.txt';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);},
  clearAll(){this.base64Input='';this.textOutput='';this.error='';this.copySuccess=false;}
};}`,
  },

  /* ── Base64 → PNG ─────────────────────────────────────────────── */
  'base64-to-png': {
    needsAlpine: true,
    html: `<div x-data="base64ToPng()">
  <section class="tool-section">
    <div class="input-group">
      <label for="base64Input">Paste your Base64 string:</label>
      <textarea id="base64Input" x-model="base64Input" placeholder="Paste your Base64 string here..." rows="6"></textarea>
      <div class="error" x-show="error" x-text="error"></div>
    </div>
    <div class="actions">
      <button @click="decodeImage" class="btn-primary">Convert to PNG</button>
      <button @click="clearAll" class="btn-secondary">Clear</button>
    </div>
    <div class="preview-container" x-show="imageUrl">
      <h2>Preview</h2>
      <div class="image-wrapper"><img :src="imageUrl" alt="Converted PNG preview" x-show="imageUrl"></div>
      <div class="image-info" x-show="imageInfo">
        <p><strong>Original Format:</strong> <span x-text="imageInfo.originalFormat"></span></p>
        <p><strong>Output Format:</strong> PNG</p>
        <p><strong>Size:</strong> <span x-text="imageInfo.size"></span></p>
      </div>
      <button @click="downloadPng" class="btn-primary">Download PNG</button>
    </div>
  </section>
</div>`,
    script: `function base64ToPng(){return{base64Input:'',imageUrl:'',error:'',imageInfo:null,canvas:null,
  decodeImage(){this.error='';this.imageUrl='';this.imageInfo=null;if(!this.base64Input.trim())return;
    try{var s=this.base64Input.trim(),fmt='unknown';
      var m=s.match(/^data:image\\/([a-zA-Z0-9+\\-]+);base64,(.+)$/);if(m){fmt=m[1];s=m[2];}
      if(!/^[A-Za-z0-9+/]*={0,2}$/.test(s))throw new Error('Invalid Base64 string.');
      var img=new Image(),self=this;
      img.onload=function(){self.canvas=document.createElement('canvas');self.canvas.width=img.width;self.canvas.height=img.height;
        self.canvas.getContext('2d').drawImage(img,0,0);self.imageUrl=self.canvas.toDataURL('image/png');
        var sz=Math.round((self.imageUrl.length-'data:image/png;base64,'.length)*3/4);
        self.imageInfo={originalFormat:fmt.toUpperCase(),size:self.formatBytes(sz)};};
      img.onerror=function(){self.error='Failed to load image. Please check your Base64 string.';};
      img.src='data:image/png;base64,'+s;
    }catch(e){this.error=e.message||'Failed to decode.';this.imageUrl='';this.imageInfo=null;}},
  formatBytes(n){if(!n)return'0 Bytes';var k=1024,s=['Bytes','KB','MB'],i=Math.floor(Math.log(n)/Math.log(k));return Math.round((n/Math.pow(k,i))*100)/100+' '+s[i];},
  downloadPng(){if(!this.imageUrl)return;var a=document.createElement('a');a.href=this.imageUrl;a.download='converted-image-'+Date.now()+'.png';document.body.appendChild(a);a.click();document.body.removeChild(a);},
  clearAll(){this.base64Input='';this.imageUrl='';this.error='';this.imageInfo=null;this.canvas=null;}
};}`,
  },

  /* ── Base64 → JPEG ────────────────────────────────────────────── */
  'base64-to-jpeg': {
    needsAlpine: true,
    html: `<div x-data="base64ToJpeg()">
  <section class="tool-section">
    <div class="input-group">
      <label for="base64Input">Paste your Base64 string:</label>
      <textarea id="base64Input" x-model="base64Input" placeholder="Paste your Base64 string here..." rows="6"></textarea>
      <div class="error" x-show="error" x-text="error"></div>
    </div>
    <div class="input-group">
      <label for="qualitySlider">JPEG Quality: <strong x-text="quality"></strong></label>
      <input type="range" id="qualitySlider" x-model="quality" @input="decodeImage" min="0.1" max="1.0" step="0.01" style="width:100%">
      <small>0.1 = smallest &nbsp;|&nbsp; 0.92 = recommended &nbsp;|&nbsp; 1.0 = max quality</small>
    </div>
    <div class="actions">
      <button @click="decodeImage" class="btn-primary">Convert to JPEG</button>
      <button @click="clearAll" class="btn-secondary">Clear</button>
    </div>
    <div class="preview-container" x-show="imageUrl">
      <h2>Preview</h2>
      <div class="image-wrapper"><img :src="imageUrl" alt="Converted JPEG preview" x-show="imageUrl"></div>
      <div class="image-info" x-show="imageInfo">
        <p><strong>Original Format:</strong> <span x-text="imageInfo.originalFormat"></span></p>
        <p><strong>Output Format:</strong> JPEG</p>
        <p><strong>Quality:</strong> <span x-text="imageInfo.quality"></span></p>
        <p><strong>Size:</strong> <span x-text="imageInfo.size"></span></p>
      </div>
      <button @click="downloadJpeg" class="btn-primary">Download JPEG</button>
    </div>
  </section>
</div>`,
    script: `function base64ToJpeg(){return{base64Input:'',imageUrl:'',error:'',imageInfo:null,canvas:null,quality:0.92,
  decodeImage(){this.error='';this.imageUrl='';this.imageInfo=null;if(!this.base64Input.trim())return;
    try{var s=this.base64Input.trim(),fmt='unknown';
      var m=s.match(/^data:image\\/([a-zA-Z0-9+\\-]+);base64,(.+)$/);if(m){fmt=m[1];s=m[2];}
      if(!/^[A-Za-z0-9+/]*={0,2}$/.test(s))throw new Error('Invalid Base64 string.');
      var q=parseFloat(this.quality),img=new Image(),self=this;
      img.onload=function(){self.canvas=document.createElement('canvas');self.canvas.width=img.width;self.canvas.height=img.height;
        var ctx=self.canvas.getContext('2d');ctx.fillStyle='#FFFFFF';ctx.fillRect(0,0,self.canvas.width,self.canvas.height);ctx.drawImage(img,0,0);
        self.imageUrl=self.canvas.toDataURL('image/jpeg',q);
        var sz=Math.round((self.imageUrl.length-'data:image/jpeg;base64,'.length)*3/4);
        self.imageInfo={originalFormat:fmt.toUpperCase(),quality:q,size:self.formatBytes(sz)};};
      img.onerror=function(){self.error='Failed to load image.';};
      img.src=(fmt!=='unknown'?'data:image/'+fmt+';base64,':'data:image/png;base64,')+s;
    }catch(e){this.error=e.message||'Failed to decode.';this.imageUrl='';this.imageInfo=null;}},
  formatBytes(n){if(!n)return'0 Bytes';var k=1024,s=['Bytes','KB','MB'],i=Math.floor(Math.log(n)/Math.log(k));return Math.round((n/Math.pow(k,i))*100)/100+' '+s[i];},
  downloadJpeg(){if(!this.imageUrl)return;var a=document.createElement('a');a.href=this.imageUrl;a.download='converted-image-'+Date.now()+'.jpg';document.body.appendChild(a);a.click();document.body.removeChild(a);},
  clearAll(){this.base64Input='';this.imageUrl='';this.error='';this.imageInfo=null;this.canvas=null;this.quality=0.92;}
};}`,
  },

  /* ── Base64 → WebP ────────────────────────────────────────────── */
  'base64-to-webp': {
    needsAlpine: true,
    html: `<div x-data="base64ToWebp()">
  <section class="tool-section">
    <div class="input-group">
      <label for="base64Input">Paste your Base64 string:</label>
      <textarea id="base64Input" x-model="base64Input" placeholder="Paste your Base64 string here..." rows="6"></textarea>
      <div class="error" x-show="error" x-text="error"></div>
      <div class="error" x-show="warning" x-text="warning" style="color:#f59e0b"></div>
    </div>
    <div class="input-group">
      <label for="qualitySlider">WebP Quality: <strong x-text="quality"></strong></label>
      <input type="range" id="qualitySlider" x-model="quality" @input="decodeImage" min="0.1" max="1.0" step="0.01" style="width:100%">
      <small>0.1 = smallest &nbsp;|&nbsp; 0.90 = recommended &nbsp;|&nbsp; 1.0 = lossless</small>
    </div>
    <div class="actions">
      <button @click="decodeImage" class="btn-primary">Convert to WebP</button>
      <button @click="clearAll" class="btn-secondary">Clear</button>
    </div>
    <div class="preview-container" x-show="imageUrl">
      <h2>Preview</h2>
      <div class="image-wrapper"><img :src="imageUrl" alt="Converted WebP preview" x-show="imageUrl"></div>
      <div class="image-info" x-show="imageInfo">
        <p><strong>Original Format:</strong> <span x-text="imageInfo.originalFormat"></span></p>
        <p><strong>Output Format:</strong> WebP</p>
        <p><strong>Quality:</strong> <span x-text="imageInfo.quality"></span></p>
        <p><strong>Size:</strong> <span x-text="imageInfo.size"></span></p>
      </div>
      <button @click="downloadWebp" class="btn-primary">Download WebP</button>
    </div>
  </section>
</div>`,
    script: `function base64ToWebp(){return{base64Input:'',imageUrl:'',error:'',warning:'',imageInfo:null,canvas:null,quality:0.90,
  decodeImage(){this.error='';this.warning='';this.imageUrl='';this.imageInfo=null;if(!this.base64Input.trim())return;
    try{var s=this.base64Input.trim(),fmt='unknown';
      var m=s.match(/^data:image\\/([a-zA-Z0-9+\\-]+);base64,(.+)$/);if(m){fmt=m[1];s=m[2];}
      if(!/^[A-Za-z0-9+/]*={0,2}$/.test(s))throw new Error('Invalid Base64 string.');
      var q=parseFloat(this.quality),img=new Image(),self=this;
      img.onload=function(){self.canvas=document.createElement('canvas');self.canvas.width=img.width;self.canvas.height=img.height;
        self.canvas.getContext('2d').drawImage(img,0,0);var u=self.canvas.toDataURL('image/webp',q);
        if(u.startsWith('data:image/png'))self.warning='Your browser does not support WebP encoding — output is PNG.';
        self.imageUrl=u;var pfx=u.substring(0,u.indexOf(',')+1),sz=Math.round((u.length-pfx.length)*3/4);
        self.imageInfo={originalFormat:fmt.toUpperCase(),quality:q,size:self.formatBytes(sz)};};
      img.onerror=function(){self.error='Failed to load image.';};
      img.src=(fmt!=='unknown'?'data:image/'+fmt+';base64,':'data:image/png;base64,')+s;
    }catch(e){this.error=e.message||'Failed to decode.';this.imageUrl='';this.imageInfo=null;}},
  formatBytes(n){if(!n)return'0 Bytes';var k=1024,s=['Bytes','KB','MB'],i=Math.floor(Math.log(n)/Math.log(k));return Math.round((n/Math.pow(k,i))*100)/100+' '+s[i];},
  downloadWebp(){if(!this.imageUrl)return;var a=document.createElement('a');a.href=this.imageUrl;a.download='converted-image-'+Date.now()+'.webp';document.body.appendChild(a);a.click();document.body.removeChild(a);},
  clearAll(){this.base64Input='';this.imageUrl='';this.error='';this.warning='';this.imageInfo=null;this.canvas=null;this.quality=0.90;}
};}`,
  },

  /* ── Base64 Validator ─────────────────────────────────────────── */
  'base64-validator': {
    needsAlpine: true,
    html: `<div class="tool-section" x-data="base64Validator()">
  <div class="input-group">
    <label for="base64Input">Paste your Base64 string:</label>
    <textarea id="base64Input" x-model="base64Input" placeholder="Paste your Base64 string here..." rows="6"></textarea>
  </div>
  <div class="preview-container" x-show="validationResult">
    <h2>Validation Result</h2>
    <div x-show="validationResult && validationResult.isValid" class="success" style="margin-bottom:20px">✓ Valid Base64 string</div>
    <div x-show="validationResult && !validationResult.isValid" class="error" style="margin-bottom:20px">✗ Invalid Base64 string</div>
    <div class="image-info" x-show="validationResult">
      <p><strong>Status:</strong> <span x-text="validationResult.isValid ? 'Valid' : 'Invalid'"></span></p>
      <p x-show="validationResult.hasDataUri"><strong>Data URI:</strong> Yes</p>
      <p x-show="validationResult.format"><strong>Detected Format:</strong> <span x-text="validationResult.format"></span></p>
      <p><strong>Length:</strong> <span x-text="validationResult.length"></span> characters</p>
      <p x-show="validationResult.estimatedSize"><strong>Estimated Size:</strong> <span x-text="validationResult.estimatedSize"></span></p>
      <p x-show="validationResult.error" style="color:#dc3545"><strong>Error:</strong> <span x-text="validationResult.error"></span></p>
    </div>
    <div class="image-wrapper" x-show="validationResult && validationResult.isValid && validationResult.isImage">
      <img :src="imagePreview" alt="Preview" x-show="imagePreview">
    </div>
  </div>
  <div class="actions">
    <button @click="validateBase64" class="btn-primary">Validate</button>
    <button @click="clearAll" class="btn-secondary">Clear</button>
  </div>
</div>`,
    script: `function base64Validator(){return{base64Input:'',validationResult:null,imagePreview:'',
  validateBase64(){this.validationResult=null;this.imagePreview='';if(!this.base64Input.trim())return;
    var r={isValid:false,hasDataUri:false,format:'',length:0,estimatedSize:'',error:'',isImage:false};
    try{var s=this.base64Input.trim(),orig=s.length;
      var m=s.match(/^data:image\\/([a-zA-Z0-9+\\-]+);base64,(.+)$/);
      if(m){r.hasDataUri=true;r.format=m[1].toUpperCase();s=m[2];}
      r.length=orig;
      if(!/^[A-Za-z0-9+/]*={0,2}$/.test(s)){r.error='Contains invalid characters.';this.validationResult=r;return;}
      var pad=s.match(/=+$/);if(pad&&pad[0].length>2){r.error='Invalid padding.';this.validationResult=r;return;}
      try{var d=atob(s);r.isValid=true;r.estimatedSize=this.formatBytes(d.length);
        var bytes=new Uint8Array(d.length);for(var i=0;i<d.length;i++)bytes[i]=d.charCodeAt(i);
        if(!r.format)r.format=this.detectFmt(bytes);
        if(r.format){r.isImage=true;this.imagePreview='data:image/'+r.format.toLowerCase()+';base64,'+s;}
      }catch(e){r.error='Failed to decode. Data may be corrupted.';}
    }catch(e){r.error=e.message||'Validation error.';}
    this.validationResult=r;},
  detectFmt(b){if(b[0]===0xFF&&b[1]===0xD8)return'JPEG';if(b[0]===0x89&&b[1]===0x50&&b[2]===0x4E&&b[3]===0x47)return'PNG';if(b[0]===0x47&&b[1]===0x49&&b[2]===0x46)return'GIF';if(b[0]===0x52&&b[1]===0x49&&b[2]===0x46&&b[3]===0x46)return'WEBP';if(b[0]===0x42&&b[1]===0x4D)return'BMP';if(b[0]===0x3C&&b[1]===0x73&&b[2]===0x76&&b[3]===0x67)return'SVG';return'';},
  formatBytes(n){if(!n)return'0 Bytes';var k=1024,s=['Bytes','KB','MB'],i=Math.floor(Math.log(n)/Math.log(k));return Math.round((n/Math.pow(k,i))*100)/100+' '+s[i];},
  clearAll(){this.base64Input='';this.validationResult=null;this.imagePreview='';}
};}`,
  },

  /* ── Base64 → SVG ─────────────────────────────────────────────── */
  'base64-to-svg': {
    needsAlpine: true,
    html: `<div x-data="base64ToSvg()">
  <section class="tool-section">
    <div class="input-group">
      <label for="base64Input">Paste your Base64 string:</label>
      <textarea id="base64Input" x-model="base64Input" placeholder="Paste your Base64-encoded SVG string here..." rows="6"></textarea>
      <div class="error" x-show="error" x-text="error"></div>
    </div>
    <div class="actions">
      <button @click="decodeSvg" class="btn-primary">Convert to SVG</button>
      <button @click="clearAll" class="btn-secondary">Clear</button>
    </div>
    <div class="preview-container" x-show="svgContent">
      <h2>Preview</h2>
      <div class="image-wrapper" x-html="sanitizedSvg" style="max-width:100%;overflow:auto"></div>
      <div class="image-info" x-show="svgInfo">
        <p><strong>Format:</strong> SVG</p>
        <p><strong>Size:</strong> <span x-text="svgInfo.size"></span></p>
        <p><strong>Elements:</strong> <span x-text="svgInfo.elementCount"></span></p>
      </div>
      <button @click="downloadSvg" class="btn-primary">Download SVG</button>
    </div>
  </section>
</div>`,
    script: `function base64ToSvg(){return{base64Input:'',svgContent:'',sanitizedSvg:'',error:'',svgInfo:null,
  decodeSvg(){this.error='';this.svgContent='';this.sanitizedSvg='';this.svgInfo=null;
    if(!this.base64Input.trim())return;
    try{var s=this.base64Input.trim();
      var m=s.match(/^data:image\\/svg\\+xml;base64,(.+)$/);if(m)s=m[1];
      else{var g=s.match(/^data:[^;]+;base64,(.+)$/);if(g)s=g[1];}
      if(!/^[A-Za-z0-9+/]*={0,2}$/.test(s))throw new Error('Invalid Base64 string.');
      var d;try{d=atob(s);}catch(e){throw new Error('Failed to decode Base64 string.');}
      try{d=decodeURIComponent(escape(d));}catch(e){}
      if(!d.trim().match(/^(<\\?xml|<svg)/i))throw new Error('Decoded content is not valid SVG.');
      this.svgContent=d;this.sanitizedSvg=this.sanitizeSvg(d);
      var parser=new DOMParser(),doc=parser.parseFromString(d,'image/svg+xml');
      var sz=new Blob([d]).size;
      this.svgInfo={size:this.formatBytes(sz),elementCount:doc.querySelectorAll('*').length+' elements'};
    }catch(e){this.error=e.message||'Failed to decode.';this.svgContent='';this.sanitizedSvg='';this.svgInfo=null;}},
  sanitizeSvg(str){var p=new DOMParser(),doc=p.parseFromString(str,'image/svg+xml');
    doc.querySelectorAll('script').forEach(function(s){s.remove();});
    doc.querySelectorAll('*').forEach(function(el){
      Array.from(el.attributes).forEach(function(a){if(a.name.startsWith('on'))el.removeAttribute(a.name);});
      if(el.hasAttribute('href')&&el.getAttribute('href').toLowerCase().trim().startsWith('javascript:'))el.removeAttribute('href');
    });
    var sv=doc.querySelector('svg');if(sv){sv.style.maxWidth='100%';sv.style.height='auto';}
    return new XMLSerializer().serializeToString(doc.documentElement);},
  formatBytes(n){if(!n)return'0 Bytes';var k=1024,s=['Bytes','KB','MB'],i=Math.floor(Math.log(n)/Math.log(k));return Math.round((n/Math.pow(k,i))*100)/100+' '+s[i];},
  downloadSvg(){if(!this.svgContent)return;var b=new Blob([this.svgContent],{type:'image/svg+xml'}),u=URL.createObjectURL(b),a=document.createElement('a');
    a.href=u;a.download='converted-image-'+Date.now()+'.svg';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);},
  clearAll(){this.base64Input='';this.svgContent='';this.sanitizedSvg='';this.error='';this.svgInfo=null;}
};}`,
  },

};
