System.register(["./p-905de140.system.js","./p-45890bdd.system.js","./p-2a88194b.system.js","./p-f5c02c04.system.js"],function(t){"use strict";var o,e,i,n,r,s,p;return{setters:[function(t){o=t.r;e=t.c;i=t.d;n=t.h;r=t.H},function(){},function(t){s=t.n},function(t){p=t.GESTURE_CONTROLLER}],execute:function(){var a=function(){function t(t){o(this,t);this.lastClick=-1e4;this.blocker=p.createBlocker({disableScroll:true});this.visible=true;this.tappable=true;this.stopPropagation=true;this.ionBackdropTap=e(this,"ionBackdropTap",7)}t.prototype.componentDidLoad=function(){if(this.stopPropagation){this.blocker.block()}};t.prototype.componentDidUnload=function(){this.blocker.destroy()};t.prototype.onTouchStart=function(t){this.lastClick=s(t);this.emitTap(t)};t.prototype.onMouseDown=function(t){if(this.lastClick<s(t)-2500){this.emitTap(t)}};t.prototype.emitTap=function(t){if(this.stopPropagation){t.preventDefault();t.stopPropagation()}if(this.tappable){this.ionBackdropTap.emit()}};t.prototype.render=function(){var t;var o=i(this);return n(r,{tabindex:"-1",class:(t={},t[o]=true,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})};Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"},enumerable:true,configurable:true});return t}();t("ion_backdrop",a)}}});