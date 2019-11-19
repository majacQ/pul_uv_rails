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

const AlAngleEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._contentStrings = i18n;
        this.deleteAngle = createEvent(this, "deleteAngle", 7);
        this.saveAngle = createEvent(this, "saveAngle", 7);
    }
    render() {
        if (this.angle) {
            const [angleId, angle] = this.angle;
            return (h("form", { onSubmit: e => e.preventDefault() }, h("ion-item", null, h("ion-input", { id: "title", value: angle.title, placeholder: this._contentStrings.title, required: true, onIonChange: e => (angle.title = e.detail.value), maxlength: "20" })), h("ion-item", null, h("ion-textarea", { id: "description", value: angle.description, placeholder: this._contentStrings.description, rows: "5", onIonChange: e => (angle.description = e.detail.value), maxlength: "280" })), h("ion-item", null, h("ion-button", { size: "small", onClick: () => {
                    this.deleteAngle.emit(angleId);
                    this.angle = null;
                } }, h("ion-icon", { src: MinusIcon }), "\u00A0", this._contentStrings.delete), h("ion-button", { size: "small", type: "submit", onClick: () => {
                    if (angle.title) {
                        this.saveAngle.emit([angleId, angle]);
                    }
                } }, h("ion-icon", { src: TickIcon }), "\u00A0", this._contentStrings.update))));
        }
        return null;
    }
    static get style() { return "#title {\n  --background: var(--al-input-background-color);\n  --color: var(--al-input-color);\n  --padding-bottom: var(--al-input-padding-bottom);\n  --padding-end: var(--al-input-padding-end);\n  --padding-start: var(--al-input-padding-start);\n  --padding-top: var(--al-input-padding-top);\n  font-size: var(--al-input-font-size);\n}\n\n#description {\n  --background: var(--al-textarea-background-color);\n  --color: var(--al-textarea-color);\n  --padding-bottom: var(--al-textarea-padding-bottom);\n  --padding-end: var(--al-textarea-padding-end);\n  --padding-start: var(--al-textarea-padding-start);\n  --padding-top: var(--al-textarea-padding-top);\n  font-size: var(--al-textarea-font-size);\n}"; }
};

export { AlAngleEditor as al_angle_editor };
