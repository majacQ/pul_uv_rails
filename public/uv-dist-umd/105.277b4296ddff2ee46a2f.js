(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[105],{185:function(n,o,e){"use strict";e.r(o),e.d(o,"ion_nav_push",(function(){return i}));var t=e(10),r=e(41),i=function(){function n(n){var o=this;Object(t.o)(this,n),this.push=function(){return Object(r.a)(o.el,"forward",o.component,o.componentProps)}}return n.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')},n.prototype.render=function(){return Object(t.i)(t.a,{onClick:this.push})},Object.defineProperty(n.prototype,"el",{get:function(){return Object(t.e)(this)},enumerable:!0,configurable:!0}),n}()},41:function(n,o,e){"use strict";e.d(o,"a",(function(){return t}));var t=function(n,o,e,t){var r=n.closest("ion-nav");if(r)if("forward"===o){if(void 0!==e)return r.push(e,t,{skipIfBusy:!0})}else if("root"===o){if(void 0!==e)return r.setRoot(e,t,{skipIfBusy:!0})}else if("back"===o)return r.pop({skipIfBusy:!0});return Promise.resolve(!1)}}}]);