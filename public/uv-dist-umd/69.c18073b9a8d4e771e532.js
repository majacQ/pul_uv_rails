(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[69],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return l}));var o=function(e){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},r=function(e){return!!e.shadowRoot&&!!e.attachShadow},i=function(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},l=function(e,t,n,o,i){if(e||r(t)){var l=t.querySelector("input.aux-input");l||((l=t.ownerDocument.createElement("input")).type="hidden",l.classList.add("aux-input"),t.appendChild(l)),l.disabled=i,l.name=n,l.value=o||""}},a=function(e,t,n){return Math.max(e,Math.min(t,n))},c=function(e,t){if(!e){var n="ASSERT: "+t;throw console.error(n),new Error(n)}},s=function(e){return e.timeStamp||Date.now()},u=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},d=function(e){var t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}},p=function(e,t){var n=e._original||e;return{_original:e,emit:b(n.emit.bind(n),t)}},b=function(e,t){var n;return void 0===t&&(t=0),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[e,t].concat(o))}}},158:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_header",(function(){return b}));var o=n(10),r=n(12),i=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function l(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(l,a)}c((o=o.apply(e,t||[])).next())}))},l=function(e,t){var n,o,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,o=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=l.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},a=function(e){var t=document.querySelector(e+".ion-cloned-element");if(null!==t)return t;var n=document.createElement(e);return n.classList.add("ion-cloned-element"),n.style.setProperty("display","none"),document.body.appendChild(n),n},c=function(e){if(e){var t=e.querySelectorAll("ion-toolbar");return{el:e,toolbars:Array.from(t).map((function(e){var t=e.querySelector("ion-title");return{el:e,background:e.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:t,innerTitleEl:t?t.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(e.querySelectorAll("ion-buttons"))||[]}}))||[[]]}}},s=function(e,t){void 0===t?e.background.style.removeProperty("--opacity"):e.background.style.setProperty("--opacity",t.toString())},u=function(e,t,n){Object(o.p)((function(){!function(e,t){if(e[0].isIntersecting){var n=100*(1-e[0].intersectionRatio)/75;s(t.toolbars[0],1===n?void 0:n)}}(e,t);var o=e[0],r=o.intersectionRect,i=r.width*r.height,l=o.rootBounds.width*o.rootBounds.height,a=0===i&&0===l,c=Math.abs(r.left-o.boundingClientRect.left),u=Math.abs(r.right-o.boundingClientRect.right);a||i>0&&(c>=5||u>=5)||(o.isIntersecting?(d(t,!1),d(n)):(0===r.x&&0===r.y||0!==r.width&&0!==r.height)&&(d(t),d(n,!1),s(t.toolbars[0],1)))}))},d=function(e,t){void 0===t&&(t=!0),Object(o.p)((function(){t?e.el.classList.remove("header-collapse-condense-inactive"):e.el.classList.add("header-collapse-condense-inactive")}))},p=function(e,t,n){void 0===e&&(e=[]),void 0===t&&(t=1),void 0===n&&(n=!1),e.forEach((function(e){var o=e.ionTitleEl,r=e.innerTitleEl;o&&"large"===o.size&&(r.style.transformOrigin="left center",r.style.transition=n?"all 0.2s ease-in-out":"",r.style.transform="scale3d("+t+", "+t+", 1)")}))},b=function(){function e(e){Object(o.o)(this,e),this.collapsibleHeaderInitialized=!1,this.translucent=!1}return e.prototype.componentDidLoad=function(){return i(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentDidUpdate=function(){return i(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentDidUnload=function(){this.destroyCollapsibleHeader()},e.prototype.checkCollapsibleHeader=function(){return i(this,void 0,void 0,(function(){var e,t,n,r;return l(this,(function(i){switch(i.label){case 0:return e="condense"===this.collapse,(t=!(!e||"ios"!==Object(o.g)(this))&&e)||!this.collapsibleHeaderInitialized?[3,1]:(this.destroyCollapsibleHeader(),[3,3]);case 1:return!t||this.collapsibleHeaderInitialized?[3,3]:(n=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),r=n?n.querySelector("ion-content"):null,[4,this.setupCollapsibleHeader(r,n)]);case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},e.prototype.destroyCollapsibleHeader=function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)},e.prototype.setupCollapsibleHeader=function(e,t){return i(this,void 0,void 0,(function(){var n,i=this;return l(this,(function(l){switch(l.label){case 0:return e&&t?(n=this,[4,e.getScrollElement()]):(console.error("ion-header requires a content to collapse, make sure there is an ion-content."),[2]);case 1:return n.scrollEl=l.sent(),Object(o.n)((function(){var e=t.querySelectorAll("ion-header"),n=Array.from(e).find((function(e){return"condense"!==e.collapse}));if(n&&i.scrollEl){var l=c(n),a=c(i.el);l&&a&&(d(l,!1),Object(o.n)((function(){var e=l.el.clientHeight;i.intersectionObserver=new IntersectionObserver((function(e){u(e,l,a)}),{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-"+e+"px 0px 0px 0px"}),i.intersectionObserver.observe(a.toolbars[0].el)})),i.contentScrollCallback=function(){!function(e,t){Object(o.n)((function(){var n=e.scrollTop,i=Object(r.c)(1,1+-n/500,1.1);Object(o.p)((function(){p(t.toolbars,i)}))}))}(i.scrollEl,a)},i.scrollEl.addEventListener("scroll",i.contentScrollCallback))}})),Object(o.p)((function(){a("ion-title"),a("ion-back-button")})),this.collapsibleHeaderInitialized=!0,[2]}}))}))},e.prototype.render=function(){var e,t=Object(o.g)(this),n=this.collapse||"none";return Object(o.i)(o.a,{role:"banner",class:(e={},e[t]=!0,e["header-"+t]=!0,e["header-translucent"]=this.translucent,e["header-collapse-"+n]=!0,e["header-translucent-"+t]=this.translucent,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"},enumerable:!0,configurable:!0}),e}()}}]);