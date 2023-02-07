(function(d,o){typeof exports=="object"&&typeof module!="undefined"?module.exports=o():typeof define=="function"&&define.amd?define(o):(d=typeof globalThis!="undefined"?globalThis:d||self,d.JASSUB=o())})(this,function(){"use strict";var v=Object.defineProperty;var f=(d,o,c)=>o in d?v(d,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):d[o]=c;var u=(d,o,c)=>(f(d,typeof o!="symbol"?o+"":o,c),c);!("requestVideoFrameCallback"in HTMLVideoElement.prototype)&&"getVideoPlaybackQuality"in HTMLVideoElement.prototype&&(HTMLVideoElement.prototype._rvfcpolyfillmap={},HTMLVideoElement.prototype.requestVideoFrameCallback=function(c){const e=this.getVideoPlaybackQuality(),t=this.mozPresentedFrames||this.mozPaintedFrames||e.totalVideoFrames-e.droppedVideoFrames,s=(n,i)=>{const h=this.getVideoPlaybackQuality(),m=this.mozPresentedFrames||this.mozPaintedFrames||h.totalVideoFrames-h.droppedVideoFrames;if(m>t){const l=this.mozFrameDelay||h.totalFrameDelay-e.totalFrameDelay||0,_=i-n;c(i,{presentationTime:i+l*1e3,expectedDisplayTime:i+_,width:this.videoWidth,height:this.videoHeight,mediaTime:Math.max(0,this.currentTime||0)+_/1e3,presentedFrames:m,processingDuration:l}),delete this._rvfcpolyfillmap[a]}else this._rvfcpolyfillmap[a]=requestAnimationFrame(l=>s(i,l))},a=Date.now(),r=performance.now();return this._rvfcpolyfillmap[a]=requestAnimationFrame(n=>s(r,n)),a},HTMLVideoElement.prototype.cancelVideoFrameCallback=function(c){cancelAnimationFrame(this._rvfcpolyfillmap[c]),delete this._rvfcpolyfillmap[c]});const o=class extends EventTarget{constructor(e={}){var r,n,i,h,m;super(),globalThis.Worker||this.destroy("Worker not supported"),o._test();const t=e.blendMode||"js",s=typeof createImageBitmap!="undefined"&&((r=e.asyncRender)!=null?r:!0),a=typeof OffscreenCanvas!="undefined"&&((n=e.offscreenRender)!=null?n:!0);this._onDemandRender="requestVideoFrameCallback"in HTMLVideoElement.prototype&&((i=e.onDemandRender)!=null?i:!0),this.timeOffset=e.timeOffset||0,this._video=e.video,this._videoHeight=0,this._videoWidth=0,this._canvas=e.canvas,this._video&&!this._canvas?(this._canvasParent=document.createElement("div"),this._canvasParent.className="JASSUB",this._canvasParent.style.position="relative",this._canvas=document.createElement("canvas"),this._canvas.style.display="block",this._canvas.style.position="absolute",this._canvas.style.pointerEvents="none",this._canvasParent.appendChild(this._canvas),this._video.nextSibling?this._video.parentNode.insertBefore(this._canvasParent,this._video.nextSibling):this._video.parentNode.appendChild(this._canvasParent)):this._canvas||this.destroy("Don't know where to render: you should give video or canvas in options."),this._bufferCanvas=document.createElement("canvas"),this._bufferCtx=this._bufferCanvas.getContext("2d",{desynchronized:!0,willReadFrequently:!0}),this._canvasctrl=a?this._canvas.transferControlToOffscreen():this._canvas,this._ctx=!a&&this._canvasctrl.getContext("2d",{desynchronized:!0}),this._lastRenderTime=0,this.debug=!!e.debug,this.prescaleFactor=e.prescaleFactor||1,this.prescaleHeightLimit=e.prescaleHeightLimit||1080,this.maxRenderHeight=e.maxRenderHeight||0,this._worker=new Worker(o._supportsWebAssembly?e.workerUrl||"jassub-worker.js":e.legacyWorkerUrl||"jassub-worker-legacy.js"),this._worker.onmessage=l=>this._onmessage(l),this._worker.onerror=l=>this._error(l),this._worker.postMessage({target:"init",asyncRender:s,onDemandRender:this._onDemandRender,width:this._canvasctrl.width,height:this._canvasctrl.height,preMain:!0,blendMode:t,subUrl:e.subUrl,subContent:e.subContent||null,fonts:e.fonts||[],availableFonts:e.availableFonts||{"liberation sans":"./default.woff2"},fallbackFont:e.fallbackFont||"liberation sans",debug:this.debug,targetFps:e.targetFps||24,dropAllAnimations:e.dropAllAnimations,libassMemoryLimit:e.libassMemoryLimit||0,libassGlyphLimit:e.libassGlyphLimit||0,hasAlphaBug:o._hasAlphaBug,useLocalFonts:"queryLocalFonts"in self&&((h=e.useLocalFonts)!=null?h:!0)}),a===!0&&this.sendMessage("offscreenCanvas",null,[this._canvasctrl]),this._boundResize=this.resize.bind(this),this._boundTimeUpdate=this._timeupdate.bind(this),this._boundSetRate=this.setRate.bind(this),this._video&&this.setVideo(e.video),this._onDemandRender&&(this.busy=!1,this._lastDemandTime=null,(m=this._video)==null||m.requestVideoFrameCallback(this._handleRVFC.bind(this)))}static _test(){if(o._supportsWebAssembly!==null)return null;const e=document.createElement("canvas"),t=e.getContext("2d",{willReadFrequently:!0});if(typeof ImageData.prototype.constructor=="function")try{new ImageData(new Uint8ClampedArray([0,0,0,0]),1,1)}catch{console.log("detected that ImageData is not constructable despite browser saying so"),self.ImageData=function(h,m,l){const _=t.createImageData(m,l);return h&&_.data.set(h),_}}try{if(typeof WebAssembly=="object"&&typeof WebAssembly.instantiate=="function"){const i=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));i instanceof WebAssembly.Module&&(o._supportsWebAssembly=new WebAssembly.Instance(i)instanceof WebAssembly.Instance)}}catch{o._supportsWebAssembly=!1}const s=document.createElement("canvas"),a=s.getContext("2d",{willReadFrequently:!0});e.width=s.width=1,e.height=s.height=1,t.clearRect(0,0,1,1),a.clearRect(0,0,1,1);const r=a.getImageData(0,0,1,1).data;t.putImageData(new ImageData(new Uint8ClampedArray([0,255,0,0]),1,1),0,0),a.drawImage(e,0,0);const n=a.getImageData(0,0,1,1).data;o._hasAlphaBug=r[1]!==n[1],o._hasAlphaBug&&console.log("Detected a browser having issue with transparent pixels, applying workaround"),e.remove(),s.remove()}resize(e=0,t=0,s=0,a=0,r=(n=>(n=this._video)==null?void 0:n.paused)()){if((!e||!t)&&this._video){const i=this._getVideoPosition();let h=null;if(this._videoWidth){const m=this._video.videoWidth/this._videoWidth,l=this._video.videoHeight/this._videoHeight;h=this._computeCanvasSize((i.width||0)/m,(i.height||0)/l)}else h=this._computeCanvasSize(i.width||0,i.height||0);e=h.width,t=h.height,this._canvasParent&&(s=i.y-(this._canvasParent.getBoundingClientRect().top-this._video.getBoundingClientRect().top),a=i.x),this._canvas.style.width=i.width+"px",this._canvas.style.height=i.height+"px"}this._canvas.style.top=s+"px",this._canvas.style.left=a+"px",this.sendMessage("canvas",{width:e,height:t,force:r&&this.busy===!1})}_getVideoPosition(e=this._video.videoWidth,t=this._video.videoHeight){const s=e/t,{offsetWidth:a,offsetHeight:r}=this._video,n=a/r;e=a,t=r,n>s?e=Math.floor(r*s):t=Math.floor(a/s);const i=(a-e)/2,h=(r-t)/2;return{width:e,height:t,x:i,y:h}}_computeCanvasSize(e=0,t=0){const s=this.prescaleFactor<=0?1:this.prescaleFactor,a=self.devicePixelRatio||1;if(t<=0||e<=0)e=0,t=0;else{const r=s<1?-1:1;let n=t*a;r*n*s<=r*this.prescaleHeightLimit?n*=s:r*n<r*this.prescaleHeightLimit&&(n=this.prescaleHeightLimit),this.maxRenderHeight>0&&n>this.maxRenderHeight&&(n=this.maxRenderHeight),e*=a*n/t,t=n}return{width:e,height:t}}_timeupdate({type:e}){const s={seeking:!0,waiting:!0,playing:!1}[e];s!=null&&(this._playstate=s),this.setCurrentTime(this._video.paused||this._playstate,this._video.currentTime+this.timeOffset)}setVideo(e){e instanceof HTMLVideoElement?(this._removeListeners(),this._video=e,this._onDemandRender?this._video.requestVideoFrameCallback(this._handleRVFC.bind(this)):(this._playstate=e.paused,e.addEventListener("timeupdate",this._boundTimeUpdate,!1),e.addEventListener("progress",this._boundTimeUpdate,!1),e.addEventListener("waiting",this._boundTimeUpdate,!1),e.addEventListener("seeking",this._boundTimeUpdate,!1),e.addEventListener("playing",this._boundTimeUpdate,!1),e.addEventListener("ratechange",this._boundSetRate,!1),e.addEventListener("resize",this._boundResize)),e.videoWidth>0&&this.resize(),typeof ResizeObserver!="undefined"&&(this._ro||(this._ro=new ResizeObserver(()=>this.resize())),this._ro.observe(e))):this._error("Video element invalid!")}runBenchmark(){this.sendMessage("runBenchmark")}setTrackByUrl(e){this.sendMessage("setTrackByUrl",{url:e})}setTrack(e){this.sendMessage("setTrack",{content:e})}freeTrack(){this.sendMessage("freeTrack")}setIsPaused(e){this.sendMessage("video",{isPaused:e})}setRate(e){this.sendMessage("video",{rate:e})}setCurrentTime(e,t,s){this.sendMessage("video",{isPaused:e,currentTime:t,rate:s})}createEvent(e){this.sendMessage("createEvent",{event:e})}setEvent(e,t){this.sendMessage("setEvent",{event:e,index:t})}removeEvent(e){this.sendMessage("removeEvent",{index:e})}getEvents(e){this._fetchFromWorker({target:"getEvents"},(t,{events:s})=>{e(t,s)})}createStyle(e){this.sendMessage("createStyle",{style:e})}setStyle(e,t){this.sendMessage("setStyle",{event:e,index:t})}removeStyle(e){this.sendMessage("removeStyle",{index:e})}getStyles(e){this._fetchFromWorker({target:"getStyles"},(t,{styles:s})=>{e(t,s)})}addFont(e){this.sendMessage("addFont",{font:e})}_sendLocalFont(e){try{queryLocalFonts().then(t=>{const s=t==null?void 0:t.find(a=>a.fullName.toLowerCase()===e);s&&s.blob().then(a=>{a.arrayBuffer().then(r=>{this.addFont(new Uint8Array(r))})})})}catch(t){console.warn("Local fonts API:",t)}}_getLocalFont({font:e}){var t;try{(t=navigator==null?void 0:navigator.permissions)!=null&&t.query?navigator.permissions.query({name:"local-fonts"}).then(s=>{s.state==="granted"&&this._sendLocalFont(e)}):this._sendLocalFont(e)}catch(s){console.warn("Local fonts API:",s)}}_unbusy(){this._lastDemandTime?this._demandRender(this._lastDemandTime):this.busy=!1}_handleRVFC(e,{mediaTime:t,width:s,height:a}){if(this._destroyed)return null;this.busy?this._lastDemandTime={mediaTime:t,width:s,height:a}:(this.busy=!0,this._demandRender({mediaTime:t,width:s,height:a})),this._video.requestVideoFrameCallback(this._handleRVFC.bind(this))}_demandRender({mediaTime:e,width:t,height:s}){this._lastDemandTime=null,(t!==this._videoWidth||s!==this._videoHeight)&&(this._videoWidth=t,this._videoHeight=s,this.resize()),this.sendMessage("demand",{time:e+this.timeOffset})}_render({images:e,async:t,times:s,width:a,height:r}){this._unbusy();const n=Date.now();this._canvasctrl.width!==a||this._canvasctrl.height!==r?(this._canvasctrl.width=a,this._canvasctrl.height=r):this._ctx.clearRect(0,0,this._canvasctrl.width,this._canvasctrl.height);for(const i of e)i.image&&(t?(this._ctx.drawImage(i.image,i.x,i.y),i.image.close()):(this._bufferCanvas.width=i.w,this._bufferCanvas.height=i.h,this._bufferCtx.putImageData(new ImageData(this._fixAlpha(new Uint8ClampedArray(i.image)),i.w,i.h),0,0),this._ctx.drawImage(this._bufferCanvas,i.x,i.y)));if(this.debug){s.drawTime=Date.now()-n;let i=0;for(const h in s)i+=s[h];console.log("Bitmaps: "+e.length+" Total: "+Math.round(i)+"ms",s)}}_fixAlpha(e){if(o._hasAlphaBug)for(let t=3;t<e.length;t+=4)e[t]=e[t]>1?e[t]:1;return e}_ready(){this.dispatchEvent(new CustomEvent("ready"))}sendMessage(e,t={},s){s?this._worker.postMessage({target:e,transferable:s,...t},[...s]):this._worker.postMessage({target:e,...t})}_fetchFromWorker(e,t){try{const s=e.target,a=setTimeout(()=>{n(new Error("Error: Timeout while try to fetch "+s))},5e3),r=({data:i})=>{i.target===s&&(t(null,i),this._worker.removeEventListener("message",r),this._worker.removeEventListener("error",n),clearTimeout(a))},n=i=>{t(i),this._worker.removeEventListener("message",r),this._worker.removeEventListener("error",n),clearTimeout(a)};this._worker.addEventListener("message",r),this._worker.addEventListener("error",n),this._worker.postMessage(e)}catch(s){this._error(s)}}_console({content:e,command:t}){console[t].apply(console,JSON.parse(e))}_onmessage({data:e}){this["_"+e.target]&&this["_"+e.target](e)}_error(e){this.dispatchEvent(e instanceof ErrorEvent?e:new ErrorEvent("error",{cause:e instanceof Error?e.cause:e})),e instanceof Error||(e instanceof ErrorEvent?e=e.error:e=new Error("error",{cause:e})),console.error(e)}_removeListeners(){this._video&&(this._ro&&this._ro.unobserve(this._video),this._video.removeEventListener("timeupdate",this._boundTimeUpdate),this._video.removeEventListener("progress",this._boundTimeUpdate),this._video.removeEventListener("waiting",this._boundTimeUpdate),this._video.removeEventListener("seeking",this._boundTimeUpdate),this._video.removeEventListener("playing",this._boundTimeUpdate),this._video.removeEventListener("ratechange",this._boundSetRate),this._video.removeEventListener("resize",this._boundResize))}destroy(e){e&&this._error(e),this._video&&this._canvasParent&&this._video.parentNode.removeChild(this._canvasParent),this._destroyed=!0,this._removeListeners(),this.sendMessage("destroy"),this._worker.terminate()}};let d=o;return u(d,"_supportsWebAssembly",null),u(d,"_hasAlphaBug",null),d});
