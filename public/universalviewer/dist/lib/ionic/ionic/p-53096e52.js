import{w as a}from"./p-d5219e04.js";import{b as i,L as n,a as s,c as o}from"./p-94c4865f.js";const t=i=>new Promise((n,s)=>{a(()=>{e(i),c(i).then(a=>{a.animation&&a.animation.destroy(),r(i),n(a)},a=>{r(i),s(a)})})}),e=a=>{const i=a.enteringEl,n=a.leavingEl;h(i,n,a.direction),a.showGoBack?i.classList.add("can-go-back"):i.classList.remove("can-go-back"),g(i,!1),n&&g(n,!1)},c=async a=>{const i=await d(a);return i?p(i,a):m(a)},r=a=>{const i=a.leavingEl;a.enteringEl.classList.remove("ion-page-invisible"),void 0!==i&&i.classList.remove("ion-page-invisible")},d=async a=>{if(a.leavingEl&&a.animated&&0!==a.duration)return a.animationBuilder?a.animationBuilder:"ios"===a.mode?(await(()=>__sc_import_ionic("./p-3107e07c.js"))()).iosTransitionAnimation:(await(()=>__sc_import_ionic("./p-90b00ffe.js"))()).mdTransitionAnimation},p=async(a,i)=>{await w(i,!0);const n=await __sc_import_ionic("./p-d9adb105.js").then(n=>n.create(a,i.baseEl,i));return _(i.enteringEl,i.leavingEl),await l(n,i),i.progressCallback&&i.progressCallback(void 0),n.hasCompleted&&u(i.enteringEl,i.leavingEl),{hasCompleted:n.hasCompleted,animation:n}},m=async a=>{const i=a.enteringEl,n=a.leavingEl;return await w(a,!1),_(i,n),u(i,n),{hasCompleted:!0}},w=async(a,i)=>{const n=(void 0!==a.deepWait?a.deepWait:i)?[y(a.enteringEl),y(a.leavingEl)]:[v(a.enteringEl),v(a.leavingEl)];await Promise.all(n),await b(a.viewIsReady,a.enteringEl)},b=async(a,i)=>{a&&await a(i)},l=(a,i)=>{const n=i.progressCallback,s=new Promise(i=>a.onFinish(i));return n?(a.progressStart(),n(a)):a.play(),s},_=(a,s)=>{f(s,i),f(a,n)},u=(a,i)=>{f(a,s),f(i,o)},f=(a,i)=>{if(a){const n=new CustomEvent(i,{bubbles:!1,cancelable:!1});a.dispatchEvent(n)}},v=a=>a&&a.componentOnReady?a.componentOnReady():Promise.resolve(),y=async a=>{const i=a;if(i){if(null!=i.componentOnReady&&null!=await i.componentOnReady())return;await Promise.all(Array.from(i.children).map(y))}},g=(a,i)=>{i?(a.setAttribute("aria-hidden","true"),a.classList.add("ion-page-hidden")):(a.hidden=!1,a.removeAttribute("aria-hidden"),a.classList.remove("ion-page-hidden"))},h=(a,i,n)=>{void 0!==a&&(a.style.zIndex="back"===n?"99":"101"),void 0!==i&&(i.style.zIndex="100")};export{y as d,f as l,g as s,t};