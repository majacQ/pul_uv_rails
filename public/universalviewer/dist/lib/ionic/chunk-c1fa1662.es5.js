Ionic.loadBundle("chunk-c1fa1662.js",["exports"],function(e){window;function n(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}e.mdTransitionAnimation=function(e,i,o){var a=o.leavingEl,r=n(o.enteringEl),t=new e;t.addElement(r).beforeRemoveClass("ion-page-invisible");var d="back"===o.direction;d?t.duration(o.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):t.duration(o.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("translateY","40px","0px",!0).fromTo("opacity",.01,1,!0);var c=r.querySelector("ion-toolbar");if(c){var s=new e;s.addElement(c),t.add(s)}if(a&&d){t.duration(o.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=new e;l.addElement(n(a)).fromTo("translateY","0px","40px").fromTo("opacity",1,0),t.add(l)}return Promise.resolve(t)}});