import { r as registerInstance, c as createEvent, h } from './core-3e20b4c4.js';

const img = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InMtaW9uLWljb24iPjxwYXRoIGQ9Ik0xOTIgMTI4bDEyOCAxMjgtMTI4IDEyOHoiPjwvcGF0aD48L3N2Zz4K';

var update = "Update";
const i18n = {
	update: update
};

const AlConsole = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._contentStrings = i18n;
        this.graph = null;
        this.tabSize = 2;
        this.graphSubmitted = createEvent(this, "graphSubmitted", 7);
    }
    _getGraphJson() {
        let json = "";
        try {
            json = JSON.stringify(JSON.parse(this.graph), undefined, this.tabSize);
        }
        catch (_a) {
            // do nothing
        }
        return json;
    }
    render() {
        return (h("form", { onSubmit: e => e.preventDefault() }, h("ion-item", null, h("ion-textarea", { id: "graph", value: this._getGraphJson(), rows: "10", required: true, onIonChange: e => (this.graph = e.detail.value), maxlength: "5000", ref: el => (this._graph = el) })), h("ion-item", null, h("ion-button", { size: "small", type: "submit", onClick: () => {
                if (this.graph) {
                    this.graphSubmitted.emit(this._graph.value);
                }
            } }, h("ion-icon", { src: img }), "\u00A0", this._contentStrings.update))));
    }
    static get style() { return "#graph {\n  --background: var(--al-textarea-background-color);\n  --color: var(--al-textarea-color);\n  --padding-bottom: var(--al-textarea-padding-bottom);\n  --padding-end: var(--al-textarea-padding-end);\n  --padding-start: var(--al-textarea-padding-start);\n  --padding-top: var(--al-textarea-padding-top);\n  font-size: var(--al-console-font-size);\n}"; }
};

export { AlConsole as al_console };
