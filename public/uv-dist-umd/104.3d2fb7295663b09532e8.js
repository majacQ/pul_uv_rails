(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[104],{184:function(n,e,o){"use strict";o.r(e),o.d(e,"ion_nav_pop",(function(){return r}));var t=o(10),i=o(41),r=function(){function n(n){var e=this;Object(t.o)(this,n),this.pop=function(){return Object(i.a)(e.el,"back")}}return n.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')},n.prototype.render=function(){return Object(t.i)(t.a,{onClick:this.pop})},Object.defineProperty(n.prototype,"el",{get:function(){return Object(t.e)(this)},enumerable:!0,configurable:!0}),n}()},41:function(n,e,o){"use strict";o.d(e,"a",(function(){return t}));var t=function(n,e,o,t){var i=n.closest("ion-nav");if(i)if("forward"===e){if(void 0!==o)return i.push(o,t,{skipIfBusy:!0})}else if("root"===e){if(void 0!==o)return i.setRoot(o,t,{skipIfBusy:!0})}else if("back"===e)return i.pop({skipIfBusy:!0});return Promise.resolve(!1)}}}]);