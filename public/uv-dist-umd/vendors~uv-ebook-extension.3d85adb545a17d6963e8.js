(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[26],{77:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return $e})),t.d(n,"c",(function(){return fe})),t.d(n,"d",(function(){return de})),t.d(n,"e",(function(){return H})),t.d(n,"f",(function(){return v}));var r,o=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),i=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}u((r=r.apply(e,n||[])).next())}))},a=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},l=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r},u=0,s=!1,c=window,$=document,f={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,t,r){return e.addEventListener(n,t,r)},rel:function(e,n,t,r){return e.removeEventListener(n,t,r)}},d=function(){var e=!1;try{$.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(e){}return e}(),h=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),p=new WeakMap,m=function(e){return p.get(e)},v=function(e,n){return p.set(n.$lazyInstance$=e,n)},g=function(e,n){return n in e},y=function(e){return console.error(e)},b=new Map,w=new Map,S=[],E=[],L=[],R=function(e,n){return function(t){e.push(t),s||(s=!0,n&&4&f.$flags$?P(k):f.raf(k))}},j=function(e,n){for(var t=0,r=0;t<e.length&&(r=performance.now())<n;)try{e[t++](r)}catch(e){y(e)}t===e.length?e.length=0:0!==t&&e.splice(0,t)},k=function(){u++,function(e){for(var n=0;n<e.length;n++)try{e[n](performance.now())}catch(e){y(e)}e.length=0}(S);var e=2==(6&f.$flags$)?performance.now()+10*Math.ceil(u*(1/22)):1/0;j(E,e),j(L,e),E.length>0&&(L.push.apply(L,E),E.length=0),(s=S.length+E.length+L.length>0)?f.raf(k):u=0},P=function(e){return Promise.resolve().then(e)},x=R(E,!0),N={},C=function(e){return"object"===(e=typeof e)||"function"===e},O=function(){return c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():t.e(164).then(t.t.bind(null,238,7)).then((function(){if(f.$cssShim$=c.__stencil_cssshim,f.$cssShim$)return f.$cssShim$.initShim()}))},_=function(e,n){return void 0===n&&(n=""),function(){}},M=new WeakMap,T=function(e,n,t){var r=_(0,n.$tagName$);!function(e,n,t,r){var o=I(n.$tagName$),i=w.get(o);if(e=11===e.nodeType?e:$,i)if("string"==typeof i){e=e.head||e;var a=M.get(e),u=void 0;if(a||M.set(e,a=new Set),!a.has(o)){if(f.$cssShim$){var s=(u=f.$cssShim$.createHostStyle(r,o,i,!!(10&n.$flags$)))["s-sc"];s&&(o=s,a=null)}else(u=$.createElement("style")).innerHTML=i;e.insertBefore(u,e.querySelector("link")),a&&a.add(o)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=l(e.adoptedStyleSheets,[i]))}(e.getRootNode(),n,0,e);r()},I=function(e,n){return"sc-"+e},H=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var o=null,i=!1,a=!1,l=[],u=function(n){for(var t=0;t<n.length;t++)o=n[t],Array.isArray(o)?u(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof e&&!C(o))&&(o=String(o)),i&&a?l[l.length-1].$text$+=o:l.push(i?A(null,o):o),a=i)};if(u(t),n){var s=n.className||n.class;s&&(n.class="object"!=typeof s?s:Object.keys(s).filter((function(e){return s[e]})).join(" "))}var c=A(e,null);return c.$attrs$=n,l.length>0&&(c.$children$=l),c},A=function(e,n){var t={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null,$attrs$:null};return t},U={},q=function(e,n,t,r,o,i){if(t!==r){var a=g(e,n),l=n.toLowerCase();if("class"===n){var u=e.classList,s=B(t),$=B(r);u.remove.apply(u,s.filter((function(e){return e&&!$.includes(e)}))),u.add.apply(u,$.filter((function(e){return e&&!s.includes(e)})))}else if("ref"===n)r&&r(e);else if(a||"o"!==n[0]||"n"!==n[1]){var d=C(r);if((a||d&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[n]=r;else{var h=null==r?"":r;"list"===n?a=!1:null!=t&&e[n]==h||(e[n]=h)}}catch(e){}null==r||!1===r?e.removeAttribute(n):(!a||4&i||o)&&!d&&(r=!0===r?"":r,e.setAttribute(n,r))}else n="-"===n[2]?n.slice(3):g(c,l)?l.slice(2):l[2]+n.slice(3),t&&f.rel(e,n,t,!1),r&&f.ael(e,n,r,!1)}},z=/\s/,B=function(e){return e?e.split(z):[]},W=function(e,n,t,r){var o=11===n.$elm$.nodeType&&n.$elm$.host?n.$elm$.host:n.$elm$,i=e&&e.$attrs$||N,a=n.$attrs$||N;for(r in i)r in a||q(o,r,i[r],void 0,t,n.$flags$);for(r in a)q(o,r,i[r],a[r],t,n.$flags$)},V=function(e,n,t,r){var o,i,a=n.$children$[t],l=0;if(null!==a.$text$)o=a.$elm$=$.createTextNode(a.$text$);else if(o=a.$elm$=$.createElement(a.$tag$),W(null,a,!1),a.$children$)for(l=0;l<a.$children$.length;++l)(i=V(e,a,l))&&o.appendChild(i);return o},D=function(e,n,t,r,o,i){for(var a,l=e;o<=i;++o)r[o]&&(a=V(null,t,o))&&(r[o].$elm$=a,l.insertBefore(a,n))},F=function(e,n,t,r,o){for(;n<=t;++n)(r=e[n])&&(o=r.$elm$,K(r),o.remove())},J=function(e,n){return e.$tag$===n.$tag$},G=function(e,n){var t=n.$elm$=e.$elm$,r=e.$children$,o=n.$children$;null===n.$text$?(W(e,n,!1),null!==r&&null!==o?function(e,n,t,r){for(var o,i=0,a=0,l=n.length-1,u=n[0],s=n[l],c=r.length-1,$=r[0],f=r[c];i<=l&&a<=c;)null==u?u=n[++i]:null==s?s=n[--l]:null==$?$=r[++a]:null==f?f=r[--c]:J(u,$)?(G(u,$),u=n[++i],$=r[++a]):J(s,f)?(G(s,f),s=n[--l],f=r[--c]):J(u,f)?(G(u,f),e.insertBefore(u.$elm$,s.$elm$.nextSibling),u=n[++i],f=r[--c]):J(s,$)?(G(s,$),e.insertBefore(s.$elm$,u.$elm$),s=n[--l],$=r[++a]):(o=V(n&&n[a],t,a),$=r[++a],o&&u.$elm$.parentNode.insertBefore(o,u.$elm$));i>l?D(e,null==r[c+1]?null:r[c+1].$elm$,t,r,a,c):a>c&&F(n,i,l)}(t,r,n,o):null!==o?(null!==e.$text$&&(t.textContent=""),D(t,null,n,o,0,o.length-1)):null!==r&&F(r,0,r.length-1)):e.$text$!==n.$text$&&(t.data=n.$text$)},K=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.forEach(K)},Q=function(e,n,t,r){var o,i=n.$vnode$||A(null,null),a=(o=r)&&o.$tag$===U?r:H(null,null,r);a.$tag$=null,a.$flags$|=4,n.$vnode$=a,a.$elm$=i.$elm$=e,G(i,a)},X=function(e,n){n&&!e.$onRenderResolve$&&n["s-p"].push(new Promise((function(n){return e.$onRenderResolve$=n})))},Y=function(e,n,t,r){if(n.$flags$|=16,!(4&n.$flags$)){var o=_(0,t.$tagName$),i=n.$ancestorComponent$,a=n.$lazyInstance$,l=function(){return Z(e,n,t,a,r)};return X(n,i),r&&(n.$flags$|=256,n.$queuedListeners$&&(n.$queuedListeners$.forEach((function(e){var n=e[0],t=e[1];return te(a,n,t)})),n.$queuedListeners$=null)),o(),re(void 0,(function(){return x(l)}))}n.$flags$|=512},Z=function(e,n,t,r,o){var i=_(0,t.$tagName$),a=e["s-rc"];o&&T(e,t,n.$modeName$);var l=_(0,t.$tagName$);try{Q(e,n,0,r.render())}catch(e){y(e)}f.$cssShim$&&f.$cssShim$.updateHost(e),n.$flags$&=-17,n.$flags$|=2,a&&(a.forEach((function(e){return e()})),e["s-rc"]=void 0),l(),i();var u=e["s-p"],s=function(){return ee(e,n,t)};0===u.length?s():(Promise.all(u).then(s),n.$flags$|=4,u.length=0)},ee=function(e,n,t){var r=_(0,t.$tagName$),o=n.$lazyInstance$,i=n.$ancestorComponent$;64&n.$flags$?(te(o,"componentDidUpdate"),r()):(n.$flags$|=64,e.classList.add("hydrated"),r(),n.$onReadyResolve$(e),i||ne()),n.$onInstanceResolve$(e),n.$onRenderResolve$&&(n.$onRenderResolve$(),n.$onRenderResolve$=void 0),512&n.$flags$&&P((function(){return Y(e,n,t,!1)})),n.$flags$&=-517},ne=function(e){$.documentElement.classList.add("hydrated"),f.$flags$|=2},te=function(e,n,t){if(e&&e[n])try{return e[n](t)}catch(e){y(e)}},re=function(e,n){return e&&e.then?e.then(n):n()},oe=function(e,n,t,r){var o,i,a=m(e),l=a.$hostElement$,u=a.$instanceValues$.get(n),s=a.$flags$,c=a.$lazyInstance$;o=t,i=r.$members$[n][0],(t=null==o||C(o)?o:4&i?"false"!==o&&(""===o||!!o):2&i?parseFloat(o):1&i?String(o):o)===u||8&s&&void 0!==u||(a.$instanceValues$.set(n,t),c&&2==(18&s)&&Y(l,a,r,!1))},ie=function(e,n,t){if(n.$members$){var r=Object.entries(n.$members$),o=e.prototype;if(r.forEach((function(e){var r=e[0],i=e[1][0];31&i||2&t&&32&i?Object.defineProperty(o,r,{get:function(){return e=r,m(this).$instanceValues$.get(e);var e},set:function(e){oe(this,r,e,n)},configurable:!0,enumerable:!0}):1&t&&64&i&&Object.defineProperty(o,r,{value:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=m(this);return t.$onInstancePromise$.then((function(){var n;return(n=t.$lazyInstance$)[r].apply(n,e)}))}})})),1&t){var i=new Map;o.attributeChangedCallback=function(e,n,t){var r=this;f.jmp((function(){var n=i.get(e);r[n]=(null!==t||"boolean"!=typeof r[n])&&t}))},e.observedAttributes=r.filter((function(e){e[0];return 15&e[1][0]})).map((function(e){var n=e[0],t=e[1][1]||n;return i.set(t,n),t}))}}return e},ae=function(e,n){return function(t){256&e.$flags$?e.$lazyInstance$[n](t):e.$queuedListeners$.push([n,t])}},le=function(e,n){return 8&n?c:e},ue=function(e){return d?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e)},se=function(e,n,r,o,l){return i(void 0,void 0,void 0,(function(){var o,i,u,s,c,$,f;return a(this,(function(a){switch(a.label){case 0:return 0!=(32&n.$flags$)?[3,3]:(n.$flags$|=32,(l=function(e,n,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleIds$,a=b.get(i);return a?a[o]:t(106)("./"+i+".entry.js").then((function(e){return b.set(i,e),e[o]}),y)}(r)).then?(o=function(){},[4,l]):[3,2]);case 1:l=a.sent(),o(),a.label=2;case 2:l.isProxied||(ie(l,r,2),l.isProxied=!0),i=_(0,r.$tagName$),n.$flags$|=8;try{new l(n)}catch(e){y(e)}n.$flags$&=-9,i(),u=I(r.$tagName$),!w.has(u)&&l.style&&(s=_(0,r.$tagName$),c=l.style,function(e,n,t){var r=w.get(e);h&&t?(r=r||new CSSStyleSheet).replace(n):r=n,w.set(e,r)}(u,c,!!(1&r.$flags$)),s()),a.label=3;case 3:return $=n.$ancestorComponent$,f=function(){return Y(e,n,r,!0)},$&&$["s-rc"]?$["s-rc"].push(f):f(),[2]}}))}))},ce=function(e,n){if(0==(1&f.$flags$)){var t=_(0,n.$tagName$),r=m(e);if(n.$listeners$&&(r.$rmListeners$=function(e,n,t){n.$queuedListeners$=n.$queuedListeners$||[];var r=t.map((function(t){var r=t[0],o=t[1],i=t[2],a=le(e,r),l=ae(n,i),u=ue(r);return f.ael(a,o,l,u),function(){return f.rel(a,o,l,u)}}));return function(){return r.forEach((function(e){return e()}))}}(e,r,n.$listeners$)),!(1&r.$flags$)){r.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){X(r,r.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).forEach((function(n){var t=n[0];if(31&n[1][0]&&e.hasOwnProperty(t)){var r=e[t];delete e[t],e[t]=r}})),P((function(){return se(e,r,n)}))}t()}},$e=function(e,n){void 0===n&&(n={});var t,r=_(),i=[],a=n.exclude||[],l=$.head,u=c.customElements,s=l.querySelector("meta[charset]"),d=$.createElement("style"),h=[],v=!0;Object.assign(f,n),f.$resourcesUrl$=new URL(n.resourcesUrl||"./",$.baseURI).href,n.syncQueue&&(f.$flags$|=4),e.forEach((function(e){return e[1].forEach((function(n){var r={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};r.$members$=n[2],r.$listeners$=n[3];var l=r.$tagName$,s=function(e){function n(n){var t,r,o=e.call(this,n)||this;return(r={$flags$:0,$hostElement$:t=n=o,$instanceValues$:new Map}).$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e})),r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e})),t["s-p"]=[],t["s-rc"]=[],p.set(t,r),o}return o(n,e),n.prototype.connectedCallback=function(){var e=this;t&&(clearTimeout(t),t=null),v?h.push(this):f.jmp((function(){return ce(e,r)}))},n.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return function(e){if(0==(1&f.$flags$)){var n=m(e);n.$rmListeners$&&(n.$rmListeners$(),n.$rmListeners$=void 0),f.$cssShim$&&f.$cssShim$.removeHost(e)}}(e)}))},n.prototype["s-hmr"]=function(e){},n.prototype.forceUpdate=function(){!function(e,n){var t=m(e);2==(18&t.$flags$)&&Y(e,t,n,!1)}(this,r)},n.prototype.componentOnReady=function(){return m(this).$onReadyPromise$},n}(HTMLElement);r.$lazyBundleIds$=e[0],a.includes(l)||u.get(l)||(i.push(l),u.define(l,ie(s,r,1)))}))})),d.innerHTML=i+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),l.insertBefore(d,s?s.nextSibling:l.firstChild),v=!1,h.length>0?h.forEach((function(e){return e.connectedCallback()})):f.jmp((function(){return t=setTimeout(ne,30,"timeout")})),r()},fe=function(e,n,t){var r=de(e);return{emit:function(e){return r.dispatchEvent(new CustomEvent(n,{bubbles:!!(4&t),composed:!!(2&t),cancelable:!!(1&t),detail:e}))}}},de=function(e){return m(e).$hostElement$}},97:function(e,n,t){"use strict";function r(){var e=window,n=[];return e.customElements&&(!e.Element||e.Element.prototype.closest&&e.Element.prototype.matches&&e.Element.prototype.remove)||n.push(t.e(166).then(t.t.bind(null,284,7))),"function"==typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&(!e.NodeList||e.NodeList.prototype.forEach)&&e.fetch&&function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(e){return!1}}()&&"undefined"!=typeof WeakMap||n.push(t.e(123).then(t.t.bind(null,285,7))),Promise.all(n)}var o=t(77),i=function(e,n){return Object(o.a)().then((function(){Object(o.b)([["uv-ebook-reader_2",[[0,"uv-ebook-reader",{width:[1],height:[1],mobileWidth:[2,"mobile-width"],minSpreadWidth:[2,"min-spread-width"],_bookPath:[32],_bookReady:[32],_prevEnabled:[32],_mobile:[32],_nextEnabled:[32],_showDivider:[32],load:[64],resize:[64],display:[64],getBook:[64]},[[8,"keydown","handleKeyDown"]]],[0,"uv-ebook-toc",{toc:[16],selected:[1025],disabled:[4]}]]]],n)}))};t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),function(){if(void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}()}}]);