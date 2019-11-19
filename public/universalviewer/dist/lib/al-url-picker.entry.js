import { r as registerInstance, c as createEvent, h } from './core-3e20b4c4.js';

const img = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InMtaW9uLWljb24iPjxwYXRoIGQ9Ik0yNTYgMzg4Yy03Mi41OTcgMC0xMzItNTkuNDA1LTEzMi0xMzIgMC03Mi42MDEgNTkuNDAzLTEzMiAxMzItMTMyIDM2LjMgMCA2OS4yOTkgMTUuNCA5Mi40MDYgMzkuNjAxTDI3OCAyMzRoMTU0VjgwbC01MS42OTggNTEuNzAyQzM0OC40MDYgOTkuNzk4IDMwNC40MDYgODAgMjU2IDgwYy05Ni43OTcgMC0xNzYgNzkuMjAzLTE3NiAxNzZzNzguMDk0IDE3NiAxNzYgMTc2YzgxLjA0NSAwIDE0OC4yODctNTQuMTM0IDE2OS40MDEtMTI4SDM3OC44NWMtMTguNzQ1IDQ5LjU2MS02Ny4xMzggODQtMTIyLjg1IDg0eiI+PC9wYXRoPjwvc3ZnPgo=';

const AlUrlPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.urls = null;
        this.url = null;
        this.urlChanged = createEvent(this, "urlChanged", 7);
    }
    render() {
        if (this.urls) {
            return (h("form", { onSubmit: e => e.preventDefault() }, h("ion-item", null, h("ion-select", { id: "select", value: this.url, interface: "popover", placeholder: "", onIonChange: e => this.urlChanged.emit(e.detail.value) }, Array.from(this.urls).map(([url, title]) => {
                return (h("ion-select-option", { value: url }, title));
            }))), h("ion-item", null, h("ion-input", { id: "input", type: "url", size: "100", placeholder: "src", required: true, value: this.url, ref: el => (this._input = el) })), h("ion-item", null, h("ion-button", { id: "submit", size: "small", type: "submit", onClick: () => this.urlChanged.emit(this._input.value) }, h("ion-icon", { src: img }), "\u00A0Load"))));
        }
        return null;
    }
    static get style() { return "#select {\n  --padding-start: 0px;\n  width: 100%;\n  max-width: 100% !important;\n}\n\n#input {\n  --background: var(--al-input-background-color);\n  --color: var(--al-input-color);\n  --padding-start: var(--al-input-padding-start);\n}"; }
};

export { AlUrlPicker as al_url_picker };
