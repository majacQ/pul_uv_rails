const e=window.aleph.h;import{a as t,b as i}from"./chunk-a3ddc7e5.js";class n{constructor(){this.boundingBoxEnabled=!1,this.displayMode=t.MESH,this.orientation=i.CORONAL,this.graphEnabled=!1}watchStackhelper(){this.slicesIndex=void 0,this.slicesWindowCenter=void 0,this.slicesWindowWidth=void 0,this.volumeSteps=void 0,this.volumeWindowCenter=void 0,this.volumeWindowWidth=void 0}_boundingBoxEnabled(e){this.boundingBoxEnabled=e,this.boundingBoxEnabledChanged.emit(e)}_displayMode(e){this.displayMode=e,this.displayModeChanged.emit(e)}_graphEnabled(e){this.graphEnabled=e,this.graphEnabledChanged.emit(e)}_orientation(e){this.orientation=e,this.orientationChanged.emit(e)}_slicesIndex(e){this.slicesIndex=e,this.slicesIndexChanged.emit(e)}_slicesWindowCenter(e){this.slicesWindowCenter=e,this.slicesWindowCenterChanged.emit(e)}_slicesWindowWidth(e){this.slicesWindowWidth=e,this.slicesWindowWidthChanged.emit(e)}_volumeSteps(e){this.volumeSteps=e,this.volumeStepsChanged.emit(e)}_volumeWindowCenter(e){this.volumeWindowCenter=e,this.volumeWindowCenterChanged.emit(e)}_volumeWindowWidth(e){this.volumeWindowWidth=e,this.volumeWindowWidthChanged.emit(e)}renderDisplayModeToggle(){return this.displayMode!==t.MESH?e("ion-item",{style:{display:"var(--display-mode-display, block)"}},e("ion-icon",{name:"eye",slot:"start"}),e("select",{slot:"end",onChange:e=>this._displayMode(e.srcElement.value)},e("option",{selected:this.displayMode===t.SLICES,value:t.SLICES},"Slices"),e("option",{selected:this.displayMode===t.VOLUME,value:t.VOLUME},"Volume"))):null}renderNodesToggle(){return e("ion-item",{style:{display:"var(--graph-enabled-display, block)"}},e("ion-icon",{name:"add-circle",slot:"start"}),e("ion-toggle",{slot:"end",checked:this.graphEnabled,onIonChange:e=>this._graphEnabled(e.detail.checked)}))}renderBoundingBoxEnabled(){return e("ion-item",{style:{display:"var(--bounding-box-enabled-display, block)"}},e("ion-icon",{name:"cube",slot:"start"}),e("ion-toggle",{slot:"end",checked:this.boundingBoxEnabled,onIonChange:e=>this._boundingBoxEnabled(e.detail.checked)}))}_reverseNumber(e,t,i){return i+t-e}renderOptions(){switch(this.displayMode){case t.SLICES:{if(!this.stackhelper||this.stackhelper&&!this.stackhelper.slice)break;const t=Object.keys(i).indexOf(this.orientation.toUpperCase()),n=this.stackhelper.stack.zCosine;let s;s=1===Math.round(n.x)?1:1===Math.round(n.y)?2:0;const o=Math.round((t+s)%3),a=Math.round((t+s+2)%3),l=this.stackhelper.stack.dimensionsIJK[Object.keys(this.stackhelper.stack.dimensionsIJK)[a]]-1;let d;d=a!==this._lastStackOrientationIndex||void 0===this.slicesIndex?Math.floor(l/2):this.slicesIndex,this._lastStackOrientationIndex=a;const h=1,r=this.stackhelper.stack.minMax[1]-this.stackhelper.stack.minMax[0];let c;c=void 0===this.slicesWindowWidth?r/2:this.slicesWindowWidth;const m=this.stackhelper.stack.minMax[0],u=this.stackhelper.stack.minMax[1];let p;return p=void 0===this.slicesWindowCenter?u/2:this.slicesWindowCenter,this.stackhelper.orientation=o,this.stackhelper.index=d,this.stackhelper.slice.windowWidth=c,this.stackhelper.slice.windowCenter=p,e("div",null,this.renderBoundingBoxEnabled(),e("ion-item",{style:{display:"var(--slices-index-display, block)"}},e("ion-icon",{name:"swap",slot:"start"}),e("ion-range",{slot:"end",min:"0",max:l,value:d,onIonChange:e=>this._slicesIndex(e.detail.value)})),e("ion-item",{style:{display:"var(--slices-orientation-display, block)"}},e("ion-icon",{name:"compass",slot:"start"}),e("select",{slot:"end",onChange:e=>this._orientation(e.srcElement.value)},e("option",{selected:this.orientation===i.CORONAL,value:i.CORONAL},"Coronal"),e("option",{selected:this.orientation===i.SAGGITAL,value:i.SAGGITAL},"Saggital"),e("option",{selected:this.orientation===i.AXIAL,value:i.AXIAL},"Axial"))),e("ion-item",{style:{display:"var(--slices-window-center-display, block)"}},e("ion-icon",{name:"sunny",slot:"start"}),e("ion-range",{slot:"end",min:m,max:u,value:this._reverseNumber(p,m,u),onIonChange:e=>this._slicesWindowCenter(this._reverseNumber(e.detail.value,m,u))})),e("ion-item",{style:{display:"var(--slices-window-width-display, block)"}},e("ion-icon",{name:"contrast",slot:"start"}),e("ion-range",{slot:"end",min:h,max:r,value:this._reverseNumber(c,h,r),onIonChange:e=>this._slicesWindowWidth(this._reverseNumber(e.detail.value,h,r))})))}case t.VOLUME:{if(!this.stackhelper)break;const t=1,i=128;let n;const s=1,o=this.stackhelper.stack.minMax[1]-this.stackhelper.stack.minMax[0];let a;a=void 0===this.volumeWindowWidth?o/2:this.volumeWindowWidth;const l=this.stackhelper.stack.minMax[0],d=this.stackhelper.stack.minMax[1];let h;return h=void 0===this.volumeWindowCenter?d/2:this.volumeWindowCenter,this.stackhelper.steps=n=void 0===this.volumeSteps?16:this.volumeSteps,this.stackhelper.windowWidth=a,this.stackhelper.windowCenter=h,e("div",null,this.renderBoundingBoxEnabled(),e("ion-item",{style:{display:"var(--volume-steps-display, block)"}},e("ion-icon",{name:"swap",slot:"start"}),e("ion-range",{slot:"end",min:t,max:i,value:n,onIonChange:e=>this._volumeSteps(e.detail.value)})),e("ion-item",{style:{display:"var(--volume-window-center-display, block)"}},e("ion-icon",{name:"sunny",slot:"start"}),e("ion-range",{slot:"end",min:l,max:d,value:this._reverseNumber(h,l,d),onIonChange:e=>{this._volumeWindowCenter(this._reverseNumber(e.detail.value,l,d))}})),e("ion-item",{style:{display:"var(--volume-window-width-display, block)"}},e("ion-icon",{name:"contrast",slot:"start"}),e("ion-range",{slot:"end",min:s,max:o,value:this._reverseNumber(a,s,o),onIonChange:e=>this._volumeWindowWidth(this._reverseNumber(e.detail.value,s,o))})))}case t.MESH:return this.renderBoundingBoxEnabled()}return null}render(){return[this.renderDisplayModeToggle(),this.renderNodesToggle(),this.renderOptions()]}static get is(){return"al-control-panel"}static get encapsulation(){return"shadow"}static get properties(){return{boundingBoxEnabled:{type:Boolean,attr:"bounding-box-enabled",mutable:!0},displayMode:{type:String,attr:"display-mode",mutable:!0},graphEnabled:{type:Boolean,attr:"graph-enabled",mutable:!0},orientation:{type:String,attr:"orientation",mutable:!0},slicesIndex:{type:Number,attr:"slices-index",mutable:!0},slicesWindowCenter:{type:Number,attr:"slices-window-center",mutable:!0},slicesWindowWidth:{type:Number,attr:"slices-window-width",mutable:!0},stackhelper:{type:"Any",attr:"stackhelper",mutable:!0,watchCallbacks:["watchStackhelper"]},volumeSteps:{type:Number,attr:"volume-steps",mutable:!0},volumeWindowCenter:{type:Number,attr:"volume-window-center",mutable:!0},volumeWindowWidth:{type:Number,attr:"volume-window-width",mutable:!0}}}static get events(){return[{name:"boundingBoxEnabledChanged",method:"boundingBoxEnabledChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"displayModeChanged",method:"displayModeChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"orientationChanged",method:"orientationChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"slicesIndexChanged",method:"slicesIndexChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"slicesWindowCenterChanged",method:"slicesWindowCenterChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"slicesWindowWidthChanged",method:"slicesWindowWidthChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"graphEnabledChanged",method:"graphEnabledChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"volumeStepsChanged",method:"volumeStepsChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"volumeWindowCenterChanged",method:"volumeWindowCenterChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"volumeWindowWidthChanged",method:"volumeWindowWidthChanged",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-item.sc-al-control-panel{--border-width:0 0 0 0;--inner-border-width:0 0 0 0}ion-item.sc-al-control-panel   select.sc-al-control-panel{padding:5px;min-width:100px}"}}export{n as AlControlPanel};