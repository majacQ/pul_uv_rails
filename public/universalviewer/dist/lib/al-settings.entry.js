import { r as registerInstance, c as createEvent, h } from './core-3e20b4c4.js';
import { C as ControlsType, D as DisplayMode, U as Units, O as Orientation } from './index-bab72ca1.js';

const img = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMzIgNDY0aDQ0OEwyNTYgNDggMzIgNDY0em0yNDgtNjRoLTQ4di00OGg0OHY0OHptMC04MGgtNDh2LTk2aDQ4djk2eiIvPjwvc3ZnPg==';

const img$1 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNjAgMzYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNjAgMzYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxMjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEyO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxwYXRoIGQ9Ik0xOTcuNSwzNTIuNGgtMzVWMTgwLjlMOC40LDEwM2MtOC42LTQuNC0xMi4xLTE0LjktNy43LTIzLjVjNC40LTguNiwxNC45LTEyLjEsMjMuNS03LjdMMTgwLDE1MC41bDE1Ni43LTc4LjhsMTUuNywzMS4zCglsLTE1NC45LDc3LjlWMzUyLjR6Ii8+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4MCIgY3k9IjE4MCIgcj0iNzUuOSIvPgo8cGF0aCBkPSJNMTgwLDM2OS45Yy0yLjcsMC01LjQtMC42LTcuOS0xLjlMOC40LDI4NS4zYy01LjktMy05LjYtOS05LjYtMTUuNlY4Ny40YzAtNi43LDMuOC0xMi44LDkuOS0xNS43TDE3Mi40LTcuOQoJYzQuOC0yLjMsMTAuNC0yLjMsMTUuMywwbDE2NC42LDc5LjVjNiwyLjksOS45LDksOS45LDE1Ljh2MTgxLjhjMCw2LjYtMy43LDEyLjYtOS42LDE1LjZsLTE2NC42LDgzLjMKCUMxODUuNCwzNjkuMywxODIuNywzNjkuOSwxODAsMzY5Ljl6IE0zMy44LDI1OC45TDE4MCwzMzIuOGwxNDcuMS03NC41di0xNjBMMTgwLDI3LjNsLTE0Ni4zLDcxVjI1OC45eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTA0LjEsMTMxLjgiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTkyLjEsMTM5LjUiLz4KPC9zdmc+Cg==';

const img$2 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDM2MCAzNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2MCAzNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxODAiIGN5PSIxODAiIHI9IjEwMS4yIi8+Cjwvc3ZnPgo=';

const img$3 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGQ9Ik0zOTMuMSwzMzcuN3YtNTljMC05LjMtNy44LTE2LjgtMTcuMy0xNi44SDE2Ni41Yy05LjUsMC0xNy4zLDcuNi0xNy4zLDE2Ljh2MTY4LjZjMCw5LjMsNy44LDE2LjksMTcuMywxNi45aDIwOS40CgljOS41LDAsMTcuMy03LjYsMTcuMy0xNi44di01OWw2Ni41LDY3LjRWMjcwLjNMMzkzLjEsMzM3Ljd6Ii8+CjxwYXRoIGQ9Ik05OS41LDMwNC4zYzAtODEuMyw2NS4zLTE0Ny44LDE0NS4yLTE0Ny44djczLjlsOTYuOC05OC42bC05Ni44LTk4LjZ2NzMuOWMtMTA2LjUsMC0xOTMuNiw4OC43LTE5My42LDE5Ny4xIi8+Cjwvc3ZnPgo=';

const img$4 = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InMtaW9uLWljb24iPjxwYXRoIGQ9Ik0yNTYgNDhjLTQyLjkgMC04NC4yIDEzLTExOS4yIDM3LjUtMzQuMiAyNC02MC4yIDU3LjItNzUuMSA5Ni4xTDU4IDE5Mmg0NS43bDEuOS01YzguMi0xNy44IDE5LjQtMzMuOSAzMy41LTQ4IDMxLjItMzEuMiA3Mi43LTQ4LjQgMTE2LjktNDguNHM4NS43IDE3LjIgMTE2LjkgNDguNGMzMS4yIDMxLjIgNDguNCA3Mi43IDQ4LjQgMTE2LjkgMCA0NC4xLTE3LjIgODUuNy00OC40IDExNi45LTMxLjIgMzEuMi03Mi43IDQ4LjQtMTE2LjkgNDguNC00NC4xIDAtODUuNi0xNy4yLTExNi45LTQ4LjQtMTQtMTQtMjUuMy0zMC4xLTMzLjUtNDcuOWwtMS45LTVINThsMy42IDEwLjRjMTQuOSAzOC45IDQwLjkgNzIuMSA3NS4xIDk2LjFDMTcxLjggNDUxLjEgMjEzIDQ2NCAyNTYgNDY0YzExNC43IDAgMjA4LTkzLjMgMjA4LTIwOFMzNzAuNyA0OCAyNTYgNDh6Ij48L3BhdGg+PHBhdGggZD0iTTQ4IDI3Ny40aDE4OS43bC00My42IDQ0LjdMMjI0IDM1Mmw5Ni05Ni05Ni05Ni0zMSAyOS45IDQ0LjcgNDQuN0g0OHY0Mi44eiI+PC9wYXRoPjwvc3ZnPgo=';

const img$5 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGQ9Ik0xMDguMSwyODYuNGMwLTgxLjMsNjUuMy0xNDcuOCwxNDUuMi0xNDcuOHY3My45bDk2LjgtOTguNmwtOTYuOC05OC42djczLjlDMTQ2LjgsODkuMiw1OS43LDE3OCw1OS43LDI4Ni40Ii8+CjxjaXJjbGUgY3g9IjMwMyIgY3k9IjM1MS40IiByPSIxMDQiLz4KPC9zdmc+Cg==';

var axial = "Axial";
var bounds = "Bounds";
var boundingBoxEnabled = "Bounding Box";
var brightness = "Level";
var clay = "Clay";
var contrast = "Width";
var controlsType = "Controls Type";
var coronal = "Coronal";
var displayMode = "Display Mode";
var graphEnabled = "Enable Node Placement";
var material = "Material";
var meters = "Meters";
var millimeters = "Millimeters";
var normals = "Normals";
var orbit = "Orbit";
var orientation = "Orientation";
var recenter = "Origin";
var renderSteps = "Render Steps";
var rotate = "Rotate";
var saggital = "Saggital";
var sliceIndex = "Slice Index";
var slices = "Slices";
var slice = "Slice";
var trackball = "Trackball";
var units = "Units";
var volume = "Volume";
var volumeSteps = "Render Detail (only increase if you know your device is capable!)";
var volumeStepsHighEnabled = "Enable High Res";
var volumeStepsHighEnabledWarning = "Activate High Resolution Mode (Computationally Intensive!)";
var windowingTitle = "Windowing (Brightness/Contrast)";
var wireframe = "Wireframe";
var xray = "XRay";
const i18n = {
	axial: axial,
	bounds: bounds,
	boundingBoxEnabled: boundingBoxEnabled,
	brightness: brightness,
	clay: clay,
	contrast: contrast,
	controlsType: controlsType,
	coronal: coronal,
	"default": "Default",
	displayMode: displayMode,
	graphEnabled: graphEnabled,
	material: material,
	meters: meters,
	millimeters: millimeters,
	normals: normals,
	orbit: orbit,
	orientation: orientation,
	recenter: recenter,
	renderSteps: renderSteps,
	rotate: rotate,
	saggital: saggital,
	sliceIndex: sliceIndex,
	slices: slices,
	slice: slice,
	trackball: trackball,
	units: units,
	volume: volume,
	volumeSteps: volumeSteps,
	volumeStepsHighEnabled: volumeStepsHighEnabled,
	volumeStepsHighEnabledWarning: volumeStepsHighEnabledWarning,
	windowingTitle: windowingTitle,
	wireframe: wireframe,
	xray: xray
};

const AlSettings = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._contentStrings = i18n;
        this.boundingBoxEnabledChanged = createEvent(this, "boundingBoxEnabledChanged", 7);
        this.controlsTypeChanged = createEvent(this, "controlsTypeChanged", 7);
        this.displayModeChanged = createEvent(this, "displayModeChanged", 7);
        this.orientationChanged = createEvent(this, "orientationChanged", 7);
        this.recenter = createEvent(this, "recenter", 7);
        this.slicesIndexChanged = createEvent(this, "slicesIndexChanged", 7);
        this.slicesBrightnessChanged = createEvent(this, "slicesBrightnessChanged", 7);
        this.slicesContrastChanged = createEvent(this, "slicesContrastChanged", 7);
        this.unitsChanged = createEvent(this, "unitsChanged", 7);
        this.graphEnabledChanged = createEvent(this, "graphEnabledChanged", 7);
        this.volumeBrightnessChanged = createEvent(this, "volumeBrightnessChanged", 7);
        this.volumeContrastChanged = createEvent(this, "volumeContrastChanged", 7);
        this.volumeStepsChanged = createEvent(this, "volumeStepsChanged", 7);
        this.volumeStepsHighEnabledChanged = createEvent(this, "volumeStepsHighEnabledChanged", 7);
    }
    _boundingBoxEnabled(enabled) {
        this.boundingBoxEnabled = enabled;
        this.boundingBoxEnabledChanged.emit(enabled);
    }
    _controlsType(controlsType) {
        this.controlsType = controlsType;
        this.controlsTypeChanged.emit(controlsType);
    }
    _displayMode(displayMode) {
        this.displayMode = displayMode;
        this.displayModeChanged.emit(displayMode);
    }
    _graphEnabled(enabled) {
        this.graphEnabled = enabled;
        this.graphEnabledChanged.emit(enabled);
    }
    // private _material(material: Material) {
    //   this.material = material;
    //   this.materialChanged.emit(material);
    // }
    _orientation(orientation) {
        this.orientation = orientation;
        this.orientationChanged.emit(orientation);
    }
    _slicesIndex(index) {
        this.slicesIndex = index;
        this.slicesIndexChanged.emit(index);
    }
    _slicesBrightness(brightness) {
        this.slicesBrightness = brightness;
        this.slicesBrightnessChanged.emit(brightness);
    }
    _slicesContrast(contrast) {
        this.slicesContrast = contrast;
        this.slicesContrastChanged.emit(contrast);
    }
    _switchBoundingBoxEnabled() {
        if (this.boundingBoxEnabled) {
            this._boundingBoxEnabled(false);
        }
        else {
            this._boundingBoxEnabled(true);
        }
    }
    _switchControls() {
        if (this.controlsType === ControlsType.ORBIT) {
            this._controlsType(ControlsType.TRACKBALL);
        }
        else if (this.controlsType === ControlsType.TRACKBALL) {
            this._controlsType(ControlsType.ORBIT);
        }
    }
    _units(units) {
        this.units = units;
        this.unitsChanged.emit(this.units);
    }
    _volumeBrightness(brightness) {
        this.volumeBrightness = brightness;
        this.volumeBrightnessChanged.emit(brightness);
    }
    _volumeContrast(contrast) {
        this.volumeContrast = contrast;
        this.volumeContrastChanged.emit(contrast);
    }
    _volumeSteps(steps) {
        steps = Math.round(steps * 10) / 10; // 1 decimal place.
        this.volumeSteps = steps;
        this.volumeStepsChanged.emit(steps);
    }
    _volumeStepsHighEnabled(enabled) {
        if (enabled) {
            this._volumeSteps(this.volumeSteps + 0.2);
        }
        else {
            this._volumeSteps(this.volumeSteps - 0.2);
        }
    }
    renderControlsTypeSelect() {
        let cameraIcon;
        let cameraLabel;
        if (this.controlsType === ControlsType.ORBIT) {
            cameraIcon = img$3;
            cameraLabel = this._contentStrings.orbit;
        }
        else if (this.controlsType === ControlsType.TRACKBALL) {
            cameraIcon = img$5;
            cameraLabel = this._contentStrings.rotate;
        }
        let boundingBoxEnabledIcon;
        if (this.boundingBoxEnabled) {
            boundingBoxEnabledIcon = img$1;
        }
        else {
            boundingBoxEnabledIcon = img$2;
        }
        return (h("div", { style: {
                "margin-top": "10px"
            } }, h("ion-button", { style: {
                width: "80px"
            }, size: "small", onClick: () => {
                this._switchControls();
            } }, h("span", { style: {
                "font-size": "10px",
                color: "white"
            }, slot: "start" }, cameraLabel), h("ion-icon", { style: {
                "min-width": "18px"
            }, slot: "end", src: cameraIcon, title: cameraLabel })), h("ion-button", { style: {
                width: "80px"
            }, size: "small", onClick: () => {
                this.recenter.emit();
            } }, h("span", { style: {
                "font-size": "10px",
                color: "white"
            }, slot: "start" }, this._contentStrings.recenter), h("ion-icon", { style: {
                "min-width": "18px"
            }, slot: "end", src: img$4, title: this._contentStrings.recenter })), h("ion-button", { style: {
                width: "80px"
            }, size: "small", onClick: () => {
                this._switchBoundingBoxEnabled();
            } }, h("span", { style: {
                "font-size": "10px",
                color: "white"
            }, slot: "start" }, this._contentStrings.bounds), h("ion-icon", { style: {
                "min-width": "18px"
            }, slot: "end", src: boundingBoxEnabledIcon, title: this._contentStrings.bounds }))));
    }
    renderDisplayModeToggle() {
        if (this.displayMode !== DisplayMode.MESH) {
            return (h("ion-item", { style: {
                    display: "var(--display-mode-display, block)",
                    "margin-top": "10px"
                } }, h("span", { title: this._contentStrings.displayMode }, "Mode"), h("select", { slot: "end", onChange: e => this._displayMode(e.srcElement
                    .value) }, h("option", { selected: this.displayMode === DisplayMode.SLICES, value: DisplayMode.SLICES }, this._contentStrings.slices), h("option", { selected: this.displayMode === DisplayMode.VOLUME, value: DisplayMode.VOLUME }, this._contentStrings.volume))));
        }
        return null;
    }
    renderGraphEnabled() {
        if (this.graphVisible) {
            return (h("div", null, h("ion-list-header", { style: {
                    color: "var(--al-item-color)",
                    "border-width": "1px 0 0 0",
                    "border-color": "var(--ion-list-header-border-color)",
                    "border-style": "solid",
                    "margin-top": "10px"
                } }, h("span", null, "Measure and Annotate")), h("ion-item", { style: {
                    display: "var(--graph-enabled-display, block)"
                } }, h("span", { title: this._contentStrings.graphEnabled }, this._contentStrings.graphEnabled), h("ion-toggle", { slot: "end", checked: this.graphEnabled, onIonChange: e => this._graphEnabled(e.detail.checked) })), h("ion-item", { style: {
                    display: "var(--units-display, block)"
                } }, h("span", { title: this._contentStrings.units }, "Units"), h("select", { slot: "end", onChange: e => this._units(e.srcElement.value) }, h("option", { selected: this.units === Units.MILLIMETERS, value: Units.MILLIMETERS }, this._contentStrings.millimeters), h("option", { selected: this.units === Units.METERS, value: Units.METERS }, this._contentStrings.meters)))));
        }
        else {
            return null;
        }
    }
    renderHiResEnabled() {
        return (h("ion-item", { style: {
                display: "var(--volume-steps-high-display, block)"
            } }, h("span", { title: this._contentStrings.volumeStepsHighEnabledWarning }, this._contentStrings.volumeStepsHighEnabled, " ", h("ion-icon", { src: img })), h("ion-toggle", { slot: "end", checked: this.volumeStepsHighEnabled, onIonChange: e => this._volumeStepsHighEnabled(e.detail.checked) })));
    }
    renderSlicesControls() {
        return (h("div", null, h("ion-item", { style: {
                display: "var(--slices-orientation-display, block)"
            } }, h("span", { color: "primary" }, "Plane"), h("select", { slot: "end", onChange: e => this._orientation(e.srcElement
                .value) }, h("option", { selected: this.orientation === Orientation.CORONAL, value: Orientation.CORONAL }, this._contentStrings.coronal), h("option", { selected: this.orientation === Orientation.SAGGITAL, value: Orientation.SAGGITAL }, this._contentStrings.saggital), h("option", { selected: this.orientation === Orientation.AXIAL, value: Orientation.AXIAL }, this._contentStrings.axial))), h("ion-item", { style: {
                display: "var(--slices-index-display, block)"
            } }, h("span", null, this._contentStrings.slice), h("ion-range", { slot: "end", min: "0", max: "1", step: 1 / this.slicesMaxIndex, value: this.slicesIndex, onIonChange: e => this._slicesIndex(e.detail.value) }))));
    }
    renderSlicesWindowingControls() {
        return (h("div", null, h("ion-list-header", { style: {
                color: "var(--al-item-color)",
                "border-width": "1px 0 0 0",
                "border-color": "var(--ion-list-header-border-color)",
                "border-style": "solid",
                "margin-top": "10px"
            } }, h("span", null, this._contentStrings.windowingTitle)), h("ion-item", { style: {
                display: "var(--slices-brightness-display, block)"
            } }, h("span", null, this._contentStrings.brightness), h("ion-range", { slot: "end", min: "0", max: "1", step: ".05", snaps: "true", ticks: "false", value: this.slicesBrightness, onIonChange: e => {
                this._slicesBrightness(e.detail.value);
            } })), h("ion-item", { style: {
                display: "var(--slices-contrast-display, block)"
            } }, h("span", null, this._contentStrings.contrast), h("ion-range", { slot: "end", min: "0", max: "1", step: ".05", snaps: "true", ticks: "false", value: this.slicesContrast, onIonChange: e => this._slicesContrast(e.detail.value) }))));
    }
    renderVolumeWindowingControls() {
        return (h("div", null, h("ion-list-header", { style: {
                color: "var(--al-item-color)",
                "border-width": "1px 0 0 0",
                "border-color": "var(--ion-list-header-border-color)",
                "border-style": "solid",
                "margin-top": "10px"
            } }, h("span", null, this._contentStrings.windowingTitle)), h("ion-item", { style: {
                display: "var(--volume-brightness-display, block)"
            } }, h("span", null, this._contentStrings.brightness), h("ion-range", { slot: "end", min: "0", max: "1", step: ".05", snaps: "true", ticks: "false", value: this.volumeBrightness, onIonChange: e => {
                this._volumeBrightness(e.detail.value);
            } })), h("ion-item", { style: {
                display: "var(--volume-contrast-display, block)"
            } }, h("span", null, this._contentStrings.contrast), h("ion-range", { slot: "end", min: "0", max: "1", step: ".05", snaps: "true", ticks: "false", value: this.volumeContrast, onIonChange: e => this._volumeContrast(e.detail.value) }))));
    }
    renderOptions() {
        switch (this.displayMode) {
            case DisplayMode.SLICES: {
                return (h("div", null, this.renderSlicesControls(), this.renderSlicesWindowingControls()));
            }
            case DisplayMode.VOLUME: {
                return (h("div", null, this.renderHiResEnabled(), this.renderVolumeWindowingControls()));
            }
            default: {
                return;
            }
        }
    }
    render() {
        return (h("div", { style: {
                "max-width": "100%",
                "overflow-x": "hidden"
            } }, this.renderControlsTypeSelect(), this.renderDisplayModeToggle(), this.renderOptions(), this.renderGraphEnabled()));
    }
    static get style() { return "/**\n * \@prop --display-mode-display: Display Mode Toggle Display\n * \@prop --graph-enabled-display: Graph Enabled Toggle Display\n * \@prop --bounding-box-enabled-display: Bounding Box Enabled Toggle Display\n * \@prop --slices-index-display: Slices Index Range Display\n * \@prop --slices-orientation-display: Slices Orientation Select Display\n * \@prop --slices-window-center-display: Slices Window Center Range Display\n * \@prop --slices-window-width-display: Slices Window Width Range Display\n * \@prop --volume-steps-display: Volume Steps Range Display\n * \@prop --volume-window-center-display: Volume Window Center Range Display\n * \@prop --volume-window-width-display: Volume Window Width Range Display\n */\n\nselect {\n  padding: 5px;\n  min-width: 100px;\n  background-color: var(--al-select-background-color);\n  color: var(--al-item-color);\n  border: none;\n}\n\n\@supports (-moz-appearance: none) {\n  select {\n    background-color: #ffffff !important;\n    color: #000000 !important;\n  }\n}\n\nion-label {\n  color: var(--al-item-color);\n}"; }
};

export { AlSettings as al_settings };
