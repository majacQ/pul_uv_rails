(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[160],{49:function(e,n,a){"use strict";a.r(n),a.d(n,"mdTransitionAnimation",(function(){return o}));a(10),a(12);var i=a(16),t=a(25),o=function(e,n){var a="back"===n.direction,o=n.enteringEl,r=n.leavingEl,c=Object(t.e)(o),d=c.querySelector("ion-toolbar"),s=Object(i.a)();if(s.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),a?s.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):s.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),d){var b=Object(i.a)();b.addElement(d),s.addAnimation(b)}if(r&&a){s.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(i.a)();l.addElement(Object(t.e)(r)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),s.addAnimation(l)}return s}}}]);