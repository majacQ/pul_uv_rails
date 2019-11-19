import { r as registerInstance, c as createEvent, h } from './core-3e20b4c4.js';
import { M as MinusIcon, T as TickIcon } from './tick-6b9dc8be.js';

var description = "Description";
var title = "Title";
var update = "Update";
const i18n = {
	"delete": "Delete",
	description: description,
	title: title,
	update: update
};

const AlNodeEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._contentStrings = i18n;
        this.deleteNode = createEvent(this, "deleteNode", 7);
        this.saveNode = createEvent(this, "saveNode", 7);
    }
    render() {
        if (this.node) {
            const [nodeId, node] = this.node;
            return (h("form", { onSubmit: e => e.preventDefault() }, h("ion-item", null, h("ion-input", { id: "title", value: node.title, placeholder: this._contentStrings.title, required: true, onIonChange: e => (node.title = e.detail.value), maxlength: "20" })), h("ion-item", null, h("ion-textarea", { id: "description", value: node.description, placeholder: this._contentStrings.description, rows: "5", onIonChange: e => (node.description = e.detail.value), maxlength: "280" })), h("ion-item", null, h("ion-button", { size: "small", onClick: () => {
                    this.deleteNode.emit(nodeId);
                    this.node = null;
                } }, h("ion-icon", { src: MinusIcon }), "\u00A0", this._contentStrings.delete), h("ion-button", { size: "small", type: "submit", onClick: () => {
                    if (node.title) {
                        this.saveNode.emit([nodeId, node]);
                    }
                } }, h("ion-icon", { src: TickIcon }), "\u00A0", this._contentStrings.update))));
        }
        return null;
    }
    static get style() { return "#title {\n  --background: var(--al-input-background-color);\n  --color: var(--al-input-color);\n  --padding-bottom: var(--al-input-padding-bottom);\n  --padding-end: var(--al-input-padding-end);\n  --padding-start: var(--al-input-padding-start);\n  --padding-top: var(--al-input-padding-top);\n  font-size: var(--al-input-font-size);\n}\n\n#description {\n  --background: var(--al-textarea-background-color);\n  --color: var(--al-textarea-color);\n  --padding-bottom: var(--al-textarea-padding-bottom);\n  --padding-end: var(--al-textarea-padding-end);\n  --padding-start: var(--al-textarea-padding-start);\n  --padding-top: var(--al-textarea-padding-top);\n  font-size: var(--al-textarea-font-size);\n}"; }
};

export { AlNodeEditor as al_node_editor };
