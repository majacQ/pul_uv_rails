(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[74],{12:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return f})),e.d(n,"e",(function(){return d})),e.d(n,"f",(function(){return i})),e.d(n,"g",(function(){return o})),e.d(n,"h",(function(){return h})),e.d(n,"i",(function(){return c})),e.d(n,"j",(function(){return l})),e.d(n,"k",(function(){return u}));var r=function(t){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},i=function(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null},u=function(t,n,e,r,i){if(t||o(n)){var u=n.querySelector("input.aux-input");u||((u=n.ownerDocument.createElement("input")).type="hidden",u.classList.add("aux-input"),n.appendChild(u)),u.disabled=i,u.name=e,u.value=r||""}},a=function(t,n,e){return Math.max(t,Math.min(n,e))},s=function(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}},c=function(t){return t.timeStamp||Date.now()},l=function(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},h=function(t){var n="rtl"===document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,n){var e=t._original||t;return{_original:t,emit:d(e.emit.bind(e),n)}},d=function(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}},212:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_router",(function(){return C}));var r=e(10),o=e(12),i=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new e((function(n){n(t.value)})).then(u,a)}s((r=r.apply(t,n||[])).next())}))},u=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},a=function(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},s=function(t){if(null==t)return[""];var n=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===n.length?[""]:n},c=function(t,n,e,r,o){return void 0===o&&(o=!1),i(void 0,void 0,void 0,(function(){var i,a,s,l;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,6,,7]),i=h(t),r>=n.length||!i?[2,o]:[4,i.componentOnReady()];case 1:return u.sent(),a=n[r],[4,i.setRouteId(a.id,a.params,e)];case 2:return(s=u.sent()).changed&&(e="root",o=!0),[4,c(s.element,n,e,r+1,o)];case 3:return o=u.sent(),s.markVisible?[4,s.markVisible()]:[3,5];case 4:u.sent(),u.label=5;case 5:return[2,o];case 6:return l=u.sent(),console.error(l),[2,!1];case 7:return[2]}}))}))},l=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",h=function(t){if(t){if(t.matches(l))return t;var n=t.querySelector(l);return n||void 0}},f=function(t,n){return n.find((function(n){return function(t,n){var e=n.from;if(void 0===n.to)return!1;if(e.length>t.length)return!1;for(var r=0;r<e.length;r++){var o=e[r];if("*"===o)return!0;if(o!==t[r])return!1}return e.length===t.length}(t,n)}))},d=function(t,n){for(var e=Math.min(t.length,n.length),r=0;r<e&&t[r].toLowerCase()===n[r].id;r++);return r},p=function(t,n){for(var e,r=new m(t),o=!1,i=0;i<n.length;i++){var u=n[i].path;if(""===u[0])o=!0;else{for(var a=0,s=u;a<s.length;a++){var c=s[a],l=r.next();if(":"===c[0]){if(""===l)return null;((e=e||[])[i]||(e[i]={}))[c.slice(1)]=l}else if(l!==c)return null}o=!1}}return!o||o===(""===r.next())?e?n.map((function(t,n){return{id:t.id,path:t.path,params:v(t.params,e[n])}})):n:null},v=function(t,n){return!t&&n?n:t&&!n?t:t&&n?Object.assign(Object.assign({},t),n):void 0},g=function(t){for(var n=1,e=1,r=0,o=t;r<o.length;r++)for(var i=0,u=o[r].path;i<u.length;i++){var a=u[i];":"===a[0]?n+=Math.pow(1,e):""!==a&&(n+=Math.pow(2,e)),e++}return n},m=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),w=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var n=R(t,"to");return{from:s(R(t,"from")),to:null==n?void 0:s(n)}}))},b=function(t){return S(y(t))},y=function(t,n){return void 0===n&&(n=t),Array.from(n.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(n){var e=R(n,"component");if(null==e)throw new Error("component missing in ion-route");return{path:s(R(n,"url")),id:e.toLowerCase(),params:n.componentProps,children:y(t,n)}}))},R=function(t,n){return n in t?t[n]:t.hasAttribute(n)?t.getAttribute(n):null},S=function(t){for(var n=[],e=0,r=t;e<r.length;e++){var o=r[e];P([],n,o)}return n},P=function(t,n,e){var r=t.slice();if(r.push({id:e.id,path:e.path,params:e.params}),0!==e.children.length)for(var o=0,i=e.children;o<i.length;o++){var u=i[o];P(r,n,u)}else n.push(r)},C=function(){function t(t){Object(r.o)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(r.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(r.d)(this,"ionRouteDidChange",7)}return t.prototype.componentWillLoad=function(){return i(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,h(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(o.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(o.e)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),n=this.getPath();return console.debug("[ion-router] URL changed -> update nav",n,t),this.writeNavStateRoot(n,t)},t.prototype.onBackButton=function(t){var n=this;t.detail.register(0,(function(){return n.back()}))},t.prototype.push=function(t,n){void 0===n&&(n="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,n);var e=s(t);return this.setPath(e,n),this.writeNavStateRoot(e,n)},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return i(this,void 0,void 0,(function(){return u(this,(function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var n=function(t){var n=[];t.forEach((function(t){return n.push.apply(n,t.path)}));var e=t.map((function(t){return t.id}));console.debug("%c "+a(n),"font-weight: bold; padding-left: 20px","=>\t","("+e.join(", ")+")")},e=0,r=t;e<r.length;e++){n(r[e])}console.groupEnd()}(b(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var n=0,e=t;n<e.length;n++){var r=e[n];r.to&&console.debug("FROM: ","$c "+a(r.from),"font-weight: bold"," TO: ","$c "+a(r.to),"font-weight: bold")}console.groupEnd()}(w(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return i(this,void 0,void 0,(function(){var n,e,r,o,a,s;return u(this,(function(c){switch(c.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,(l=window.document.body,i(void 0,void 0,void 0,(function(){var t,n,e,r;return u(this,(function(o){switch(o.label){case 0:t=[],e=l,o.label=1;case 1:return(n=h(e))?[4,n.getRouteId()]:[3,3];case 2:return(r=o.sent())?(e=r.element,r.element=void 0,t.push(r),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:t,outlet:n}]}}))})))];case 1:return n=c.sent(),e=n.ids,r=n.outlet,o=b(this.el),(a=function(t,n){for(var e=null,r=0,o=t.map((function(t){return t.id})),i=0,u=n;i<u.length;i++){var a=u[i],s=d(o,a);s>r&&(e=a,r=s)}return e?e.map((function(n,e){return{id:n.id,path:n.path,params:v(n.params,t[e]&&t[e].params)}})):null}(e,o))?(s=function(t){for(var n=[],e=0,r=t;e<r.length;e++)for(var o=r[e],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var s=o.params&&o.params[a.slice(1)];if(!s)return null;n.push(s)}else""!==a&&n.push(a)}return n}(a))?(console.debug("[ion-router] nav changed -> update URL",e,s),this.setPath(s,t),[4,this.safeWriteNavState(r,a,"root",s,null,e.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",e.map((function(t){return t.id}))),[2,!1]);case 2:return c.sent(),[2,!0]}var l}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&f(t,w(this.el))&&this.writeNavStateRoot(t,"root")},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),"root")},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var n=t.history.state,e=this.lastState;return this.lastState=n,n>e?"forward":n<e?"back":"root"},t.prototype.writeNavStateRoot=function(t,n){return i(this,void 0,void 0,(function(){var e,r,o,i,a;return u(this,(function(u){return t?(e=w(this.el),r=f(t,e),o=null,r&&(this.setPath(r.to,n),o=r.from,t=r.to),i=b(this.el),(a=function(t,n){for(var e=null,r=0,o=0,i=n;o<i.length;o++){var u=i[o],a=p(t,u);if(null!==a){var s=g(a);s>r&&(r=s,e=a)}}return e}(t,i))?[2,this.safeWriteNavState(document.body,a,n,t,o)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,n,e,r,o,a){return void 0===a&&(a=0),i(this,void 0,void 0,(function(){var i,s,c;return u(this,(function(u){switch(u.label){case 0:return[4,this.lock()];case 1:i=u.sent(),s=!1,u.label=2;case 2:return u.trys.push([2,4,,5]),[4,this.writeNavState(t,n,e,r,o,a)];case 3:return s=u.sent(),[3,5];case 4:return c=u.sent(),console.error(c),[3,5];case 5:return i(),[2,s]}}))}))},t.prototype.lock=function(){return i(this,void 0,void 0,(function(){var t,n;return u(this,(function(e){switch(e.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return n=t})),void 0===t?[3,2]:[4,t];case 1:e.sent(),e.label=2;case 2:return[2,n]}}))}))},t.prototype.writeNavState=function(t,n,e,r,o,a){return void 0===a&&(a=0),i(this,void 0,void 0,(function(){var i,s;return u(this,(function(u){switch(u.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(i=this.routeChangeEvent(r,o))&&this.ionRouteWillChange.emit(i),[4,c(t,n,e,a)]);case 1:return s=u.sent(),this.busy=!1,s&&console.debug("[ion-router] route changed",r),i&&this.ionRouteDidChange.emit(i),[2,s]}}))}))},t.prototype.setPath=function(t,n){this.state++,function(t,n,e,r,o,i){var u=a(s(n).concat(r));e&&(u="#"+u),"forward"===o?t.pushState(i,"",u):t.replaceState(i,"",u)}(window.history,this.root,this.useHash,t,n,this.state)},t.prototype.getPath=function(){return function(t,n,e){var r=t.pathname;if(e){var o=t.hash;r="#"===o[0]?o.slice(1):""}return function(t,n){if(t.length>n.length)return null;if(t.length<=1&&""===t[0])return n;for(var e=0;e<t.length;e++)if(t[e].length>0&&t[e]!==n[e])return null;return n.length===t.length?[""]:n.slice(t.length)}(s(n),s(r))}(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,n){var e=this.previousPath,r=a(t);return this.previousPath=r,r===e?null:{from:e,redirectedFrom:n?a(n):null,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.e)(this)},enumerable:!0,configurable:!0}),t}()}}]);