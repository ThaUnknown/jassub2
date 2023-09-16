"use strict";var Module=function(p={}){var p=p,v;p.ready=new Promise((t,r)=>{v=t});var $=t=>console.log(t),m=t=>console.error(t);function S(){v(p)}function A(t,r){if(!t)throw r}let C=null;$=t=>{t==="JASSUB: No usable fontconfig configuration file found, using fallback."?console.debug(t):console.log(t)},m=t=>{t==="Fontconfig error: Cannot load default config file: No such file: (null)"?console.debug(t):console.error(t)},Y=(t=>()=>{t(),self.wasmMemory=B,self.HEAPU8C=new Uint8ClampedArray(B.buffer),self.HEAPU8=new Uint8Array(B.buffer)})(Y),String.prototype.startsWith||(String.prototype.startsWith=function(t,r){return r===void 0&&(r=0),this.substring(r,t.length)===t}),String.prototype.includes||(String.prototype.includes=function(t,r){return this.indexOf(t,r)!==-1});function F(t){throw t}var j,E,k,O,G,R,fe,le,B,ue;function Y(){var t=B.buffer;j=new Int8Array(t),E=new Int16Array(t),k=new Int32Array(t),O=new Uint8Array(t),G=new Uint16Array(t),R=new Uint32Array(t),fe=new Float32Array(t),le=new Float64Array(t)}B=new WebAssembly.Memory({initial:256,maximum:32768}),Y();var ce=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function de(t,r,n){for(var s=r+n,i=r;t[i]&&!(i>=s);)++i;if(i-r>16&&t.buffer&&ce)return ce.decode(t.subarray(r,i));for(var l="";r<i;){var u=t[r++];if(!(u&128)){l+=String.fromCharCode(u);continue}var f=t[r++]&63;if((u&224)==192){l+=String.fromCharCode((u&31)<<6|f);continue}var h=t[r++]&63;if((u&240)==224?u=(u&15)<<12|f<<6|h:u=(u&7)<<18|f<<12|h<<6|t[r++]&63,u<65536)l+=String.fromCharCode(u);else{var g=u-65536;l+=String.fromCharCode(55296|g>>10,56320|g&1023)}}return l}function X(t,r){return t?de(O,t,r):""}function _e(t,r,n,s){F(`Assertion failed: ${X(t)}, at: `+[r?X(r):"unknown filename",n,s?X(s):"unknown function"])}function $e(t,r,n){return 0}function Te(t,r){}function Pe(t,r,n,s){if(!(s>0))return 0;for(var i=n,l=n+s-1,u=0;u<t.length;++u){var f=t.charCodeAt(u);if(f>=55296&&f<=57343){var h=t.charCodeAt(++u);f=65536+((f&1023)<<10)|h&1023}if(f<=127){if(n>=l)break;r[n++]=f}else if(f<=2047){if(n+1>=l)break;r[n++]=192|f>>6,r[n++]=128|f&63}else if(f<=65535){if(n+2>=l)break;r[n++]=224|f>>12,r[n++]=128|f>>6&63,r[n++]=128|f&63}else{if(n+3>=l)break;r[n++]=240|f>>18,r[n++]=128|f>>12&63,r[n++]=128|f>>6&63,r[n++]=128|f&63}}return r[n]=0,n-i}function Fe(t,r,n){return Pe(t,O,r,n)}function st(t,r,n){}function it(t,r,n){return 0}function ot(t,r,n,s){}function ft(t,r,n,s){}function lt(t,r){}function ut(t,r,n,s,i){}function Ae(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function ct(){for(var t=new Array(256),r=0;r<256;++r)t[r]=String.fromCharCode(r);Ie=t}var Ie=void 0;function I(t){for(var r="",n=t;O[n];)r+=Ie[O[n++]];return r}var Q={},Z={},pe={},dt=48,pt=57;function Se(t){if(t===void 0)return"_unknown";t=t.replace(/[^a-zA-Z0-9_]/g,"$");var r=t.charCodeAt(0);return r>=dt&&r<=pt?"_"+t:t}function je(t,r){return t=Se(t),{[t]:function(){return r.apply(this,arguments)}}[t]}function Oe(t,r){var n=je(r,function(s){this.name=r,this.message=s;var i=new Error(s).stack;i!==void 0&&(this.stack=this.toString()+`
`+i.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},n}var N=void 0;function w(t){throw new N(t)}var Le=void 0;function ge(t){throw new Le(t)}function K(t,r,n){t.forEach(function(f){pe[f]=r});function s(f){var h=n(f);h.length!==t.length&&ge("Mismatched type converter count");for(var g=0;g<t.length;++g)x(t[g],h[g])}var i=new Array(r.length),l=[],u=0;r.forEach((f,h)=>{Z.hasOwnProperty(f)?i[h]=Z[f]:(l.push(f),Q.hasOwnProperty(f)||(Q[f]=[]),Q[f].push(()=>{i[h]=Z[f],++u,u===l.length&&s(i)}))}),l.length===0&&s(i)}function x(t,r,n={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var s=r.name;if(t||w(`type "${s}" must have a positive integer typeid pointer`),Z.hasOwnProperty(t)){if(n.ignoreDuplicateRegistrations)return;w(`Cannot register type '${s}' twice`)}if(Z[t]=r,delete pe[t],Q.hasOwnProperty(t)){var i=Q[t];delete Q[t],i.forEach(l=>l())}}function gt(t,r,n,s,i){var l=Ae(n);r=I(r),x(t,{name:r,fromWireType:function(u){return!!u},toWireType:function(u,f){return f?s:i},argPackAdvance:8,readValueFromPointer:function(u){var f;if(n===1)f=j;else if(n===2)f=E;else if(n===4)f=k;else throw new TypeError("Unknown boolean type size: "+r);return this.fromWireType(f[u>>l])},destructorFunction:null})}function ht(t){if(!(this instanceof z)||!(t instanceof z))return!1;for(var r=this.$$.ptrType.registeredClass,n=this.$$.ptr,s=t.$$.ptrType.registeredClass,i=t.$$.ptr;r.baseClass;)n=r.upcast(n),r=r.baseClass;for(;s.baseClass;)i=s.upcast(i),s=s.baseClass;return r===s&&n===i}function vt(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function Ee(t){function r(n){return n.$$.ptrType.registeredClass.name}w(r(t)+" instance already deleted")}var ke=!1;function He(t){}function yt(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}function Be(t){t.count.value-=1;var r=t.count.value===0;r&&yt(t)}function xe(t,r,n){if(r===n)return t;if(n.baseClass===void 0)return null;var s=xe(t,r,n.baseClass);return s===null?null:n.downcast(s)}var Ve={};function bt(){return Object.keys(re).length}function mt(){var t=[];for(var r in re)re.hasOwnProperty(r)&&t.push(re[r]);return t}var ee=[];function Re(){for(;ee.length;){var t=ee.pop();t.$$.deleteScheduled=!1,t.delete()}}var te=void 0;function Ct(t){te=t,ee.length&&te&&te(Re)}function wt(){p.getInheritedInstanceCount=bt,p.getLiveInheritedInstances=mt,p.flushPendingDeletes=Re,p.setDelayFunction=Ct}var re={};function _t(t,r){for(r===void 0&&w("ptr should not be undefined");t.baseClass;)r=t.upcast(r),t=t.baseClass;return r}function $t(t,r){return r=_t(t,r),re[r]}function he(t,r){(!r.ptrType||!r.ptr)&&ge("makeClassHandle requires ptr and ptrType");var n=!!r.smartPtrType,s=!!r.smartPtr;return n!==s&&ge("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ne(Object.create(t,{$$:{value:r}}))}function Tt(t){var r=this.getPointee(t);if(!r)return this.destructor(t),null;var n=$t(this.registeredClass,r);if(n!==void 0){if(n.$$.count.value===0)return n.$$.ptr=r,n.$$.smartPtr=t,n.clone();var s=n.clone();return this.destructor(t),s}function i(){return this.isSmartPointer?he(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:t}):he(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var l=this.registeredClass.getActualType(r),u=Ve[l];if(!u)return i.call(this);var f;this.isConst?f=u.constPointerType:f=u.pointerType;var h=xe(r,this.registeredClass,f.registeredClass);return h===null?i.call(this):this.isSmartPointer?he(f.registeredClass.instancePrototype,{ptrType:f,ptr:h,smartPtrType:this,smartPtr:t}):he(f.registeredClass.instancePrototype,{ptrType:f,ptr:h})}function ne(t){return typeof FinalizationRegistry>"u"?(ne=r=>r,t):(ke=new FinalizationRegistry(r=>{Be(r.$$)}),ne=r=>{var n=r.$$,s=!!n.smartPtr;if(s){var i={$$:n};ke.register(r,i,r)}return r},He=r=>ke.unregister(r),ne(t))}function Pt(){if(this.$$.ptr||Ee(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=ne(Object.create(Object.getPrototypeOf(this),{$$:{value:vt(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function Ft(){this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&w("Object already scheduled for deletion"),He(this),Be(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function At(){return!this.$$.ptr}function St(){return this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&w("Object already scheduled for deletion"),ee.push(this),ee.length===1&&te&&te(Re),this.$$.deleteScheduled=!0,this}function jt(){z.prototype.isAliasOf=ht,z.prototype.clone=Pt,z.prototype.delete=Ft,z.prototype.isDeleted=At,z.prototype.deleteLater=St}function z(){}function Je(t,r,n){if(t[r].overloadTable===void 0){var s=t[r];t[r]=function(){return t[r].overloadTable.hasOwnProperty(arguments.length)||w(`Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${t[r].overloadTable})!`),t[r].overloadTable[arguments.length].apply(this,arguments)},t[r].overloadTable=[],t[r].overloadTable[s.argCount]=s}}function Ot(t,r,n){p.hasOwnProperty(t)?((n===void 0||p[t].overloadTable!==void 0&&p[t].overloadTable[n]!==void 0)&&w(`Cannot register public name '${t}' twice`),Je(p,t,t),p.hasOwnProperty(n)&&w(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`),p[t].overloadTable[n]=r):(p[t]=r,n!==void 0&&(p[t].numArguments=n))}function Et(t,r,n,s,i,l,u,f){this.name=t,this.constructor=r,this.instancePrototype=n,this.rawDestructor=s,this.baseClass=i,this.getActualType=l,this.upcast=u,this.downcast=f,this.pureVirtualFunctions=[]}function ve(t,r,n){for(;r!==n;)r.upcast||w(`Expected null or instance of ${n.name}, got an instance of ${r.name}`),t=r.upcast(t),r=r.baseClass;return t}function kt(t,r){if(r===null)return this.isReference&&w("null is not a valid "+this.name),0;r.$$||w(`Cannot pass "${De(r)}" as a ${this.name}`),r.$$.ptr||w("Cannot pass deleted object as a pointer of type "+this.name);var n=r.$$.ptrType.registeredClass,s=ve(r.$$.ptr,n,this.registeredClass);return s}function Rt(t,r){var n;if(r===null)return this.isReference&&w("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),t!==null&&t.push(this.rawDestructor,n),n):0;r.$$||w(`Cannot pass "${De(r)}" as a ${this.name}`),r.$$.ptr||w(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&r.$$.ptrType.isConst&&w(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);var s=r.$$.ptrType.registeredClass;if(n=ve(r.$$.ptr,s,this.registeredClass),this.isSmartPointer)switch(r.$$.smartPtr===void 0&&w("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?n=r.$$.smartPtr:w(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:n=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)n=r.$$.smartPtr;else{var i=r.clone();n=this.rawShare(n,Me.toHandle(function(){i.delete()})),t!==null&&t.push(this.rawDestructor,n)}break;default:w("Unsupporting sharing policy")}return n}function Mt(t,r){if(r===null)return this.isReference&&w("null is not a valid "+this.name),0;r.$$||w(`Cannot pass "${De(r)}" as a ${this.name}`),r.$$.ptr||w(`Cannot pass deleted object as a pointer of type ${this.name}`),r.$$.ptrType.isConst&&w(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);var n=r.$$.ptrType.registeredClass,s=ve(r.$$.ptr,n,this.registeredClass);return s}function ye(t){return this.fromWireType(k[t>>2])}function Dt(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function Ut(t){this.rawDestructor&&this.rawDestructor(t)}function Wt(t){t!==null&&t.delete()}function It(){V.prototype.getPointee=Dt,V.prototype.destructor=Ut,V.prototype.argPackAdvance=8,V.prototype.readValueFromPointer=ye,V.prototype.deleteObject=Wt,V.prototype.fromWireType=Tt}function V(t,r,n,s,i,l,u,f,h,g,y){this.name=t,this.registeredClass=r,this.isReference=n,this.isConst=s,this.isSmartPointer=i,this.pointeeType=l,this.sharingPolicy=u,this.rawGetPointee=f,this.rawConstructor=h,this.rawShare=g,this.rawDestructor=y,!i&&r.baseClass===void 0?s?(this.toWireType=kt,this.destructorFunction=null):(this.toWireType=Mt,this.destructorFunction=null):this.toWireType=Rt}function Lt(t,r,n){p.hasOwnProperty(t)||ge("Replacing nonexistant public symbol"),p[t].overloadTable!==void 0&&n!==void 0?p[t].overloadTable[n]=r:(p[t]=r,p[t].argCount=n)}function Ht(t,r,n){var s=dynCalls[t];return n&&n.length?s.apply(null,[r].concat(n)):s.call(null,r)}var be=[];function ae(t){var r=be[t];return r||(t>=be.length&&(be.length=t+1),be[t]=r=ue.get(t)),r}function Bt(t,r,n){if(t.includes("j"))return Ht(t,r,n);var s=ae(r).apply(null,n);return s}function xt(t,r){var n=[];return function(){return n.length=0,Object.assign(n,arguments),Bt(t,r,n)}}function q(t,r){t=I(t);function n(){return t.includes("j")?xt(t,r):ae(r)}var s=n();return typeof s!="function"&&w(`unknown function pointer with signature ${t}: ${r}`),s}var Ge=void 0;function Vt(t){var r=Ne(t),n=I(r);return J(r),n}function se(t,r){var n=[],s={};function i(l){if(!s[l]&&!Z[l]){if(pe[l]){pe[l].forEach(i);return}n.push(l),s[l]=!0}}throw r.forEach(i),new Ge(t+": "+n.map(Vt).join([", "]))}function Jt(t,r,n,s,i,l,u,f,h,g,y,_,T){y=I(y),l=q(i,l),f&&(f=q(u,f)),g&&(g=q(h,g)),T=q(_,T);var P=Se(y);Ot(P,function(){se(`Cannot construct ${y} due to unbound types`,[s])}),K([t,r,n],s?[s]:[],function(M){M=M[0];var U,D;s?(U=M.registeredClass,D=U.instancePrototype):D=z.prototype;var L=je(P,function(){if(Object.getPrototypeOf(this)!==oe)throw new N("Use 'new' to construct "+y);if(W.constructor_body===void 0)throw new N(y+" has no accessible constructor");var at=W.constructor_body[arguments.length];if(at===void 0)throw new N(`Tried to invoke ctor of ${y} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(W.constructor_body).toString()}) parameters instead!`);return at.apply(this,arguments)}),oe=Object.create(D,{constructor:{value:L}});L.prototype=oe;var W=new Et(y,L,oe,T,U,l,f,g);W.baseClass&&(W.baseClass.__derivedClasses===void 0&&(W.baseClass.__derivedClasses=[]),W.baseClass.__derivedClasses.push(W));var Lr=new V(y,W,!0,!1,!1),rt=new V(y+"*",W,!1,!1,!1),nt=new V(y+" const*",W,!1,!0,!1);return Ve[t]={pointerType:rt,constPointerType:nt},Lt(P,L),[Lr,rt,nt]})}function ze(t,r){for(var n=[],s=0;s<t;s++)n.push(R[r+s*4>>2]);return n}function qe(t){for(;t.length;){var r=t.pop(),n=t.pop();n(r)}}function Gt(t,r){if(!(t instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=je(t.name||"unknownFunctionName",function(){});n.prototype=t.prototype;var s=new n,i=t.apply(s,r);return i instanceof Object?i:s}function Ke(t,r,n,s,i,l){var u=r.length;u<2&&w("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var f=r[1]!==null&&n!==null,h=!1,g=1;g<r.length;++g)if(r[g]!==null&&r[g].destructorFunction===void 0){h=!0;break}for(var y=r[0].name!=="void",_="",T="",g=0;g<u-2;++g)_+=(g!==0?", ":"")+"arg"+g,T+=(g!==0?", ":"")+"arg"+g+"Wired";var P="return function "+Se(t)+"("+_+`) {
if (arguments.length !== `+(u-2)+`) {
throwBindingError('function `+t+" called with ' + arguments.length + ' arguments, expected "+(u-2)+` args!');
}
`;h&&(P+=`var destructors = [];
`);var M=h?"destructors":"null",U=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],D=[w,s,i,qe,r[0],r[1]];f&&(P+="var thisWired = classParam.toWireType("+M+`, this);
`);for(var g=0;g<u-2;++g)P+="var arg"+g+"Wired = argType"+g+".toWireType("+M+", arg"+g+"); // "+r[g+2].name+`
`,U.push("argType"+g),D.push(r[g+2]);if(f&&(T="thisWired"+(T.length>0?", ":"")+T),P+=(y||l?"var rv = ":"")+"invoker(fn"+(T.length>0?", ":"")+T+`);
`,h)P+=`runDestructors(destructors);
`;else for(var g=f?1:2;g<r.length;++g){var L=g===1?"thisWired":"arg"+(g-2)+"Wired";r[g].destructorFunction!==null&&(P+=L+"_dtor("+L+"); // "+r[g].name+`
`,U.push(L+"_dtor"),D.push(r[g].destructorFunction))}return y&&(P+=`var ret = retType.fromWireType(rv);
return ret;
`),P+=`}
`,U.push(P),Gt(Function,U).apply(null,D)}function zt(t,r,n,s,i,l){A(r>0);var u=ze(r,n);i=q(s,i),K([],[t],function(f){f=f[0];var h="constructor "+f.name;if(f.registeredClass.constructor_body===void 0&&(f.registeredClass.constructor_body=[]),f.registeredClass.constructor_body[r-1]!==void 0)throw new N(`Cannot register multiple constructors with identical number of parameters (${r-1}) for class '${f.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return f.registeredClass.constructor_body[r-1]=()=>{se(`Cannot construct ${f.name} due to unbound types`,u)},K([],u,function(g){return g.splice(1,0,null),f.registeredClass.constructor_body[r-1]=Ke(h,g,null,i,l),[]}),[]})}function qt(t,r,n,s,i,l,u,f,h){var g=ze(n,s);r=I(r),l=q(i,l),K([],[t],function(y){y=y[0];var _=y.name+"."+r;r.startsWith("@@")&&(r=Symbol[r.substring(2)]),f&&y.registeredClass.pureVirtualFunctions.push(r);function T(){se(`Cannot call ${_} due to unbound types`,g)}var P=y.registeredClass.instancePrototype,M=P[r];return M===void 0||M.overloadTable===void 0&&M.className!==y.name&&M.argCount===n-2?(T.argCount=n-2,T.className=y.name,P[r]=T):(Je(P,r,_),P[r].overloadTable[n-2]=T),K([],g,function(U){var D=Ke(_,U,y,l,u,h);return P[r].overloadTable===void 0?(D.argCount=n-2,P[r]=D):P[r].overloadTable[n-2]=D,[]}),[]})}function Ye(t,r,n){return t instanceof Object||w(n+' with invalid "this": '+t),t instanceof r.registeredClass.constructor||w(n+' incompatible with "this" of type '+t.constructor.name),t.$$.ptr||w(`cannot call emscripten binding method ${n} on deleted object`),ve(t.$$.ptr,t.$$.ptrType.registeredClass,r.registeredClass)}function Kt(t,r,n,s,i,l,u,f,h,g){r=I(r),i=q(s,i),K([],[t],function(y){y=y[0];var _=y.name+"."+r,T={get:function(){se(`Cannot access ${_} due to unbound types`,[n,u])},enumerable:!0,configurable:!0};return h?T.set=()=>{se(`Cannot access ${_} due to unbound types`,[n,u])}:T.set=P=>{w(_+" is a read-only property")},Object.defineProperty(y.registeredClass.instancePrototype,r,T),K([],h?[n,u]:[n],function(P){var M=P[0],U={get:function(){var L=Ye(this,y,_+" getter");return M.fromWireType(i(l,L))},enumerable:!0};if(h){h=q(f,h);var D=P[1];U.set=function(L){var oe=Ye(this,y,_+" setter"),W=[];h(g,oe,D.toWireType(W,L)),qe(W)}}return Object.defineProperty(y.registeredClass.instancePrototype,r,U),[]}),[]})}function Yt(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.allocate=function(t){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=t,r},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}}var H=new Yt;function Xt(t){t>=H.reserved&&--H.get(t).refcount===0&&H.free(t)}function Qt(){for(var t=0,r=H.reserved;r<H.allocated.length;++r)H.allocated[r]!==void 0&&++t;return t}function Zt(){H.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),H.reserved=H.allocated.length,p.count_emval_handles=Qt}var Me={toValue:t=>(t||w("Cannot use deleted val. handle = "+t),H.get(t).value),toHandle:t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return H.allocate({refcount:1,value:t})}}};function Nt(t,r){r=I(r),x(t,{name:r,fromWireType:function(n){var s=Me.toValue(n);return Xt(n),s},toWireType:function(n,s){return Me.toHandle(s)},argPackAdvance:8,readValueFromPointer:ye,destructorFunction:null})}function De(t){if(t===null)return"null";var r=typeof t;return r==="object"||r==="array"||r==="function"?t.toString():""+t}function er(t,r){switch(r){case 2:return function(n){return this.fromWireType(fe[n>>2])};case 3:return function(n){return this.fromWireType(le[n>>3])};default:throw new TypeError("Unknown float type: "+t)}}function tr(t,r,n){var s=Ae(n);r=I(r),x(t,{name:r,fromWireType:function(i){return i},toWireType:function(i,l){return l},argPackAdvance:8,readValueFromPointer:er(r,s),destructorFunction:null})}function rr(t,r,n){switch(r){case 0:return n?function(i){return j[i]}:function(i){return O[i]};case 1:return n?function(i){return E[i>>1]}:function(i){return G[i>>1]};case 2:return n?function(i){return k[i>>2]}:function(i){return R[i>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function nr(t,r,n,s,i){r=I(r);var l=Ae(n),u=_=>_;if(s===0){var f=32-8*n;u=_=>_<<f>>>f}var h=r.includes("unsigned"),g=(_,T)=>{},y;h?y=function(_,T){return g(T,this.name),T>>>0}:y=function(_,T){return g(T,this.name),T},x(t,{name:r,fromWireType:u,toWireType:y,argPackAdvance:8,readValueFromPointer:rr(r,l,s!==0),destructorFunction:null})}function ar(t,r,n){var s=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],i=s[r];function l(u){u=u>>2;var f=R,h=f[u],g=f[u+1];return new i(f.buffer,g,h)}n=I(n),x(t,{name:n,fromWireType:l,argPackAdvance:8,readValueFromPointer:l},{ignoreDuplicateRegistrations:!0})}function sr(t){for(var r=0,n=0;n<t.length;++n){var s=t.charCodeAt(n);s<=127?r++:s<=2047?r+=2:s>=55296&&s<=57343?(r+=4,++n):r+=3}return r}function ir(t,r){r=I(r);var n=r==="std::string";x(t,{name:r,fromWireType:function(s){var i=R[s>>2],l=s+4,u;if(n)for(var f=l,h=0;h<=i;++h){var g=l+h;if(h==i||O[g]==0){var y=g-f,_=X(f,y);u===void 0?u=_:(u+=String.fromCharCode(0),u+=_),f=g+1}}else{for(var T=new Array(i),h=0;h<i;++h)T[h]=String.fromCharCode(O[l+h]);u=T.join("")}return J(s),u},toWireType:function(s,i){i instanceof ArrayBuffer&&(i=new Uint8Array(i));var l,u=typeof i=="string";u||i instanceof Uint8Array||i instanceof Uint8ClampedArray||i instanceof Int8Array||w("Cannot pass non-string to std::string"),n&&u?l=sr(i):l=i.length;var f=We(4+l+1),h=f+4;if(R[f>>2]=l,n&&u)Fe(i,h,l+1);else if(u)for(var g=0;g<l;++g){var y=i.charCodeAt(g);y>255&&(J(h),w("String has UTF-16 code units that do not fit in 8 bits")),O[h+g]=y}else for(var g=0;g<l;++g)O[h+g]=i[g];return s!==null&&s.push(J,f),f},argPackAdvance:8,readValueFromPointer:ye,destructorFunction:function(s){J(s)}})}var Xe=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function or(t,r){for(var n=t,s=n>>1,i=s+r/2;!(s>=i)&&G[s];)++s;if(n=s<<1,n-t>32&&Xe)return Xe.decode(O.subarray(t,n));for(var l="",u=0;!(u>=r/2);++u){var f=E[t+u*2>>1];if(f==0)break;l+=String.fromCharCode(f)}return l}function fr(t,r,n){if(n===void 0&&(n=2147483647),n<2)return 0;n-=2;for(var s=r,i=n<t.length*2?n/2:t.length,l=0;l<i;++l){var u=t.charCodeAt(l);E[r>>1]=u,r+=2}return E[r>>1]=0,r-s}function lr(t){return t.length*2}function ur(t,r){for(var n=0,s="";!(n>=r/4);){var i=k[t+n*4>>2];if(i==0)break;if(++n,i>=65536){var l=i-65536;s+=String.fromCharCode(55296|l>>10,56320|l&1023)}else s+=String.fromCharCode(i)}return s}function cr(t,r,n){if(n===void 0&&(n=2147483647),n<4)return 0;for(var s=r,i=s+n-4,l=0;l<t.length;++l){var u=t.charCodeAt(l);if(u>=55296&&u<=57343){var f=t.charCodeAt(++l);u=65536+((u&1023)<<10)|f&1023}if(k[r>>2]=u,r+=4,r+4>i)break}return k[r>>2]=0,r-s}function dr(t){for(var r=0,n=0;n<t.length;++n){var s=t.charCodeAt(n);s>=55296&&s<=57343&&++n,r+=4}return r}function pr(t,r,n){n=I(n);var s,i,l,u,f;r===2?(s=or,i=fr,u=lr,l=()=>G,f=1):r===4&&(s=ur,i=cr,u=dr,l=()=>R,f=2),x(t,{name:n,fromWireType:function(h){for(var g=R[h>>2],y=l(),_,T=h+4,P=0;P<=g;++P){var M=h+4+P*r;if(P==g||y[M>>f]==0){var U=M-T,D=s(T,U);_===void 0?_=D:(_+=String.fromCharCode(0),_+=D),T=M+r}}return J(h),_},toWireType:function(h,g){typeof g!="string"&&w("Cannot pass non-string to C++ string type "+n);var y=u(g),_=We(4+y+r);return R[_>>2]=y>>f,i(g,_+4,y+r),h!==null&&h.push(J,_),_},argPackAdvance:8,readValueFromPointer:ye,destructorFunction:function(h){J(h)}})}function gr(t,r){r=I(r),x(t,{isVoid:!0,name:r,argPackAdvance:0,fromWireType:function(){},toWireType:function(n,s){}})}function hr(){throw 1/0}function vr(t,r,n,s,i,l,u){return-52}function yr(t,r,n,s,i,l){}function br(){F("")}var Qe;Qe=()=>performance.now();function mr(){return 2147483648}function Cr(t){var r=B.buffer;try{return B.grow(t-r.byteLength+65535>>>16),Y(),1}catch{}}function wr(t){var r=O.length;t=t>>>0;var n=mr();if(t>n)return!1;for(var s=(h,g)=>h+(g-h%g)%g,i=1;i<=4;i*=2){var l=r*(1+.2/i);l=Math.min(l,t+100663296);var u=Math.min(n,s(Math.max(t,l),65536)),f=Cr(u);if(f)return!0}return!1}var Ue={};function _r(){return"./this.program"}function ie(){if(!ie.strings){var t=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:t,_:_r()};for(var n in Ue)Ue[n]===void 0?delete r[n]:r[n]=Ue[n];var s=[];for(var n in r)s.push(n+"="+r[n]);ie.strings=s}return ie.strings}function $r(t,r){for(var n=0;n<t.length;++n)j[r++>>0]=t.charCodeAt(n);j[r>>0]=0}function Tr(t,r){var n=0;return ie().forEach(function(s,i){var l=r+n;R[t+i*4>>2]=l,$r(s,l),n+=s.length+1}),0}function Pr(t,r){var n=ie();R[t>>2]=n.length;var s=0;return n.forEach(function(i){s+=i.length+1}),R[r>>2]=s,0}function Fr(t){throw"exit("+t+")"}var Ar=Fr;function Sr(t){return 52}function jr(t,r,n,s){return 52}function Or(t,r,n,s,i){return 70}var Er=[null,[],[]];function kr(t,r){var n=Er[t];r===0||r===10?((t===1?$:m)(de(n,0)),n.length=0):n.push(r)}function Rr(t,r,n,s){for(var i=0,l=0;l<n;l++){var u=R[r>>2],f=R[r+4>>2];r+=8;for(var h=0;h<f;h++)kr(t,O[u+h]);i+=f}return R[s>>2]=i,0}ct(),N=p.BindingError=Oe(Error,"BindingError"),Le=p.InternalError=Oe(Error,"InternalError"),jt(),wt(),It(),Ge=p.UnboundTypeError=Oe(Error,"UnboundTypeError"),Zt();var Mr={b:_e,k:$e,I:Te,B:st,K:it,G:ot,n:ft,H:lt,u:ut,r:gt,j:Jt,A:zt,d:qt,c:Kt,L:Nt,p:tr,g:nr,e:ar,q:ir,l:pr,s:gr,y:hr,C:vr,D:yr,f:br,m:Qe,z:wr,E:Tr,F:Pr,h:Ar,i:Sr,o:jr,t:Or,J:Rr,x:Dr,v:Wr,w:Ur,a:B};function Dr(t,r,n){var s=Ce();try{return ae(t)(r,n)}catch(i){if(we(s),i!==i+0)throw i;me(1,0)}}function Ur(t,r,n,s,i){var l=Ce();try{return ae(t)(r,n,s,i)}catch(u){if(we(l),u!==u+0)throw u;me(1,0)}}function Wr(t,r,n,s){var i=Ce();try{return ae(t)(r,n,s)}catch(l){if(we(i),l!==l+0)throw l;me(1,0)}}p.getTempRet0=tt,p.setTempRet0=et;function Ir(t){t.M()}var Ze={a:Mr},We,J,Ne,me,et,tt,Ce,we;return(WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(fetch("jassub-worker-modern.wasm"),Ze):WebAssembly.instantiate(p.wasm,Ze)).then(function(t){C=(t.instance||t).exports,p._malloc=We=C.N,J=C.O,Ne=C.P,p.__embind_initialize_bindings=C.Q,me=C.S,et=C.T,tt=C.U,Ce=C.V,we=C.W,C.X,C.Y,C.Z,C._,ue=C.R,Ir(C),S()}),p.ready};const read_=(o,p)=>{const v=new XMLHttpRequest;return v.open("GET",o,!1),v.responseType=p?"arraybuffer":"text",v.send(null),v.response},readAsync=(o,p,v)=>{const $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{if(($.status===200||$.status===0)&&$.response)return p($.response)},$.onerror=v,$.send(null)};Date.now||(Date.now=()=>new Date().getTime());"performance"in self||(self.performance={now:()=>Date.now()});if(typeof console>"u"){const o=(p,v)=>{postMessage({target:"console",command:p,content:JSON.stringify(Array.prototype.slice.call(v))})};console={log:function(){o("log",arguments)},debug:function(){o("debug",arguments)},info:function(){o("info",arguments)},warn:function(){o("warn",arguments)},error:function(){o("error",arguments)}},console.log("Detected lack of console, overridden console")}let lastCurrentTime=0;const rate=1;let rafId=null,nextIsRaf=!1,lastCurrentTimeReceivedAt=Date.now(),targetFps=24,useLocalFonts=!1,blendMode="js",availableFonts={};const fontMap_={};let fontId=0,debug;self.width=0;self.height=0;let asyncRender=!1;self.addFont=({font:o})=>asyncWrite(o);const findAvailableFonts=o=>{o=o.trim().toLowerCase(),o.startsWith("@")&&(o=o.substring(1)),!fontMap_[o]&&(fontMap_[o]=!0,availableFonts[o]?asyncWrite(availableFonts[o]):useLocalFonts&&postMessage({target:"getLocalFont",font:o}))},asyncWrite=o=>{typeof o=="string"?readAsync(o,p=>{allocFont(new Uint8Array(p))},console.error):allocFont(o)},allocFont=o=>{const p=_malloc(o.byteLength);self.HEAPU8.set(o,p),jassubObj.addFont("font-"+fontId++,p,o.byteLength),jassubObj.reloadFonts()},processAvailableFonts=o=>{if(!availableFonts)return;const p=parseAss(o);for(let m=0;m<p.length;m++)for(let S=0;S<p[m].body.length;S++)p[m].body[S].key==="Style"&&findAvailableFonts(p[m].body[S].value.Fontname);const v=/\\fn([^\\}]*?)[\\}]/g;let $;for(;($=v.exec(o))!==null;)findAvailableFonts($[1])};self.setTrack=({content:o})=>{processAvailableFonts(o),dropAllBlur&&(o=dropBlur(o)),jassubObj.createTrackMem(o),subtitleColorSpace=libassYCbCrMap[jassubObj.trackColorSpace],postMessage({target:"verifyColorSpace",subtitleColorSpace})};self.getColorSpace=()=>postMessage({target:"verifyColorSpace",subtitleColorSpace});self.freeTrack=()=>{jassubObj.removeTrack()};self.setTrackByUrl=({url:o})=>{self.setTrack({content:read_(o)})};const getCurrentTime=()=>{const o=(Date.now()-lastCurrentTimeReceivedAt)/1e3;return _isPaused?lastCurrentTime:(o>5&&(console.error("Didn't received currentTime > 5 seconds. Assuming video was paused."),setIsPaused(!0)),lastCurrentTime+o*rate)},setCurrentTime=o=>{lastCurrentTime=o,lastCurrentTimeReceivedAt=Date.now(),rafId||(nextIsRaf?rafId=requestAnimationFrame(renderLoop):(renderLoop(),setTimeout(()=>{nextIsRaf=!1},20)))};let _isPaused=!0;const setIsPaused=o=>{o!==_isPaused&&(_isPaused=o,o?rafId&&(clearTimeout(rafId),rafId=null):(lastCurrentTimeReceivedAt=Date.now(),rafId=requestAnimationFrame(renderLoop)))},a="BT601",b="BT709",c="SMPTE240M",d="FCC",libassYCbCrMap=[null,a,null,a,a,b,b,c,c,d,d],render=(o,p)=>{const v={},$=performance.now(),m=blendMode==="wasm"?jassubObj.renderBlend(o,p||0):jassubObj.renderImage(o,p||0);if(debug){const S=performance.now(),A=jassubObj.time;v.WASMRenderTime=A-$,v.WASMBitmapDecodeTime=S-A,v.JSRenderTime=Date.now()}if(jassubObj.changed!==0||p){const S=[],A=[];if(!m)return paintImages({images:S,buffers:A,times:v});if(asyncRender){const C=[];for(let F=m,j=0;j<jassubObj.count;F=F.next,++j){const E={w:F.w,h:F.h,x:F.x,y:F.y},k=F.image,O=hasBitmapBug?self.HEAPU8C.slice(k,k+E.w*E.h*4):self.HEAPU8C.subarray(k,k+E.w*E.h*4);C.push(createImageBitmap(new ImageData(O,E.w,E.h))),S.push(E)}Promise.all(C).then(F=>{for(let j=0;j<S.length;j++)S[j].image=F[j];debug&&(v.JSBitmapGenerationTime=Date.now()-v.JSRenderTime),paintImages({images:S,buffers:F,times:v})})}else{for(let C=m,F=0;F<jassubObj.count;C=C.next,++F){const j={w:C.w,h:C.h,x:C.x,y:C.y,image:C.image};if(!offCanvasCtx){const E=self.wasmMemory.buffer.slice(C.image,C.image+C.w*C.h*4);A.push(E),j.image=E}S.push(j)}paintImages({images:S,buffers:A,times:v})}}else postMessage({target:"unbusy"})};self.demand=({time:o})=>{lastCurrentTime=o,render(o)};const renderLoop=o=>{rafId=0,render(getCurrentTime(),o),_isPaused||(rafId=requestAnimationFrame(renderLoop))},paintImages=({times:o,images:p,buffers:v})=>{const $={target:"render",asyncRender,images:p,times:o,width:self.width,height:self.height,colorSpace:subtitleColorSpace};if(offscreenRender){(offCanvas.height!==self.height||offCanvas.width!==self.width)&&(offCanvas.width=self.width,offCanvas.height=self.height),offCanvasCtx.clearRect(0,0,self.width,self.height);for(const m of p)m.image&&(asyncRender?(offCanvasCtx.drawImage(m.image,m.x,m.y),m.image.close()):(bufferCanvas.width=m.w,bufferCanvas.height=m.h,bufferCtx.putImageData(new ImageData(self.HEAPU8C.subarray(m.image,m.image+m.w*m.h*4),m.w,m.h),0,0),offCanvasCtx.drawImage(bufferCanvas,m.x,m.y)));if(offscreenRender==="hybrid"){if(!p.length)return postMessage($);debug&&(o.bitmaps=p.length);try{const m=offCanvas.transferToImageBitmap();$.images=[{image:m,x:0,y:0}],$.asyncRender=!0,postMessage($,[m])}catch{postMessage({target:"unbusy"})}}else{if(debug){o.JSRenderTime=Date.now()-o.JSRenderTime-(o.JSBitmapGenerationTime||0);let m=0;for(const S in o)m+=o[S];console.log("Bitmaps: "+p.length+" Total: "+(m|0)+"ms",o)}postMessage({target:"unbusy"})}}else postMessage($,v)},parseAss=o=>{let p,v,$,m,S,A,C,F,j,E;const k=[],O=o.split(/[\r\n]+/g);for(F=0;F<O.length;F++)if(p=O[F].match(/^\[(.*)\]$/),p)v=null,k.push({name:p[1],body:[]});else{if(/^\s*$/.test(O[F])||k.length===0)continue;if(E=k[k.length-1].body,O[F][0]===";")E.push({type:"comment",value:O[F].substring(1)});else{if(m=O[F].split(":"),S=m[0],A=m.slice(1).join(":").trim(),(v||S==="Format")&&(A=A.split(","),v&&A.length>v.length&&($=A.slice(v.length-1).join(","),A=A.slice(0,v.length-1),A.push($)),A=A.map(G=>G.trim()),v)){for(C={},j=0;j<A.length;j++)C[v[j]]=A[j];A=C}S==="Format"&&(v=A),E.push({key:S,value:A})}}return k},blurRegex=/\\blur(?:[0-9]+\.)?[0-9]+/gm,dropBlur=o=>o.replace(blurRegex,""),requestAnimationFrame=(()=>{let o=0;return p=>{const v=Date.now();if(o===0)o=v+1e3/targetFps;else for(;v+2>=o;)o+=1e3/targetFps;const $=Math.max(o-v,0);return setTimeout(p,$)}})(),_applyKeys=(o,p)=>{for(const v of Object.keys(o))p[v]=o[v]};let offCanvas,offCanvasCtx,offscreenRender,bufferCanvas,bufferCtx,jassubObj,subtitleColorSpace,dropAllBlur,_malloc,hasBitmapBug;self.init=data=>{hasBitmapBug=data.hasBitmapBug;try{const o=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(!(o instanceof WebAssembly.Module)||!(new WebAssembly.Instance(o)instanceof WebAssembly.Instance))throw new Error("WASM not supported")}catch(e){console.warn(e),eval(read_(data.legacyWasmUrl))}const _fetch=fetch,wasm=!WebAssembly.instantiateStreaming&&read_(data.wasmUrl,!0);WebAssembly.instantiateStreaming&&(self.fetch=o=>_fetch(data.wasmUrl)),Module({wasm}).then(o=>{_malloc=o._malloc,self.width=data.width,self.height=data.height,blendMode=data.blendMode,asyncRender=data.asyncRender,asyncRender&&typeof createImageBitmap>"u"&&(asyncRender=!1,console.error("'createImageBitmap' needed for 'asyncRender' unsupported!")),availableFonts=data.availableFonts,debug=data.debug,targetFps=data.targetFps||targetFps,useLocalFonts=data.useLocalFonts,dropAllBlur=data.dropAllBlur;const p=data.fallbackFont.toLowerCase();jassubObj=new o.JASSUB(self.width,self.height,p||null,debug),p&&findAvailableFonts(p);let v=data.subContent;v||(v=read_(data.subUrl)),processAvailableFonts(v),dropAllBlur&&(v=dropBlur(v));for(const $ of data.fonts||[])asyncWrite($);jassubObj.createTrackMem(v),subtitleColorSpace=libassYCbCrMap[jassubObj.trackColorSpace],jassubObj.setDropAnimations(data.dropAllAnimations||0),(data.libassMemoryLimit>0||data.libassGlyphLimit>0)&&jassubObj.setMemoryLimits(data.libassGlyphLimit||0,data.libassMemoryLimit||0),postMessage({target:"ready"}),postMessage({target:"verifyColorSpace",subtitleColorSpace})})};self.offscreenCanvas=({transferable:o})=>{offCanvas=o[0],offCanvasCtx=offCanvas.getContext("2d"),asyncRender||(bufferCanvas=new OffscreenCanvas(self.height,self.width),bufferCtx=bufferCanvas.getContext("2d",{desynchronized:!0})),offscreenRender=!0};self.detachOffscreen=()=>{offCanvas=new OffscreenCanvas(self.height,self.width),offCanvasCtx=offCanvas.getContext("2d",{desynchronized:!0}),offscreenRender="hybrid"};self.canvas=({width:o,height:p,force:v})=>{if(o==null)throw new Error("Invalid canvas size specified");self.width=o,self.height=p,jassubObj&&jassubObj.resizeCanvas(o,p),v&&render(lastCurrentTime,!0)};self.video=({currentTime:o,isPaused:p,rate:v})=>{o!=null&&setCurrentTime(o),p!=null&&setIsPaused(p),v=v||v};self.destroy=()=>{jassubObj.quitLibrary()};self.createEvent=({event:o})=>{_applyKeys(o,jassubObj.getEvent(jassubObj.allocEvent()))};self.getEvents=()=>{const o=[];for(let p=0;p<jassubObj.getEventCount();p++){const{Start:v,Duration:$,ReadOrder:m,Layer:S,Style:A,MarginL:C,MarginR:F,MarginV:j,Name:E,Text:k,Effect:O}=jassubObj.getEvent(p);o.push({Start:v,Duration:$,ReadOrder:m,Layer:S,Style:A,MarginL:C,MarginR:F,MarginV:j,Name:E,Text:k,Effect:O})}postMessage({target:"getEvents",events:o})};self.setEvent=({event:o,index:p})=>{_applyKeys(o,jassubObj.getEvent(p))};self.removeEvent=({index:o})=>{jassubObj.removeEvent(o)};self.createStyle=({style:o})=>{_applyKeys(o,jassubObj.getStyle(jassubObj.allocStyle()))};self.getStyles=()=>{const o=[];for(let p=0;p<jassubObj.getStyleCount();p++){const{Name:v,FontName:$,FontSize:m,PrimaryColour:S,SecondaryColour:A,OutlineColour:C,BackColour:F,Bold:j,Italic:E,Underline:k,StrikeOut:O,ScaleX:G,ScaleY:R,Spacing:fe,Angle:le,BorderStyle:B,Outline:ue,Shadow:Y,Alignment:ce,MarginL:de,MarginR:X,MarginV:_e,Encoding:$e,treat_fontname_as_pattern:Te,Blur:Pe,Justify:Fe}=jassubObj.getStyle(p);o.push({Name:v,FontName:$,FontSize:m,PrimaryColour:S,SecondaryColour:A,OutlineColour:C,BackColour:F,Bold:j,Italic:E,Underline:k,StrikeOut:O,ScaleX:G,ScaleY:R,Spacing:fe,Angle:le,BorderStyle:B,Outline:ue,Shadow:Y,Alignment:ce,MarginL:de,MarginR:X,MarginV:_e,Encoding:$e,treat_fontname_as_pattern:Te,Blur:Pe,Justify:Fe})}postMessage({target:"getStyles",time:Date.now(),styles:o})};self.setStyle=({style:o,index:p})=>{_applyKeys(o,jassubObj.getStyle(p))};self.removeStyle=({index:o})=>{jassubObj.removeStyle(o)};onmessage=({data:o})=>{if(self[o.target])self[o.target](o);else throw new Error("Unknown event target "+o.target)};
