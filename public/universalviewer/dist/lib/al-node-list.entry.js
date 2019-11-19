import { r as registerInstance, c as createEvent, h } from './core-3e20b4c4.js';

var graphEmpty = "The graph is currently empty";
const i18n = {
	graphEmpty: graphEmpty
};

const AlNodeList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._contentStrings = i18n;
        this.nodes = null;
        this.selected = null;
        this.selectedChanged = createEvent(this, "selectedChanged", 7);
    }
    render() {
        if (this.nodes && this.nodes.size) {
            return (h("ion-list", null, Array.from(this.nodes).map(([nodeId, node]) => {
                return (h("ion-item", { selected: this.selected === nodeId ? true : false, onClick: () => this.selectedChanged.emit(nodeId) }, node.title));
            })));
        }
        return (h("ion-item", null, h("p", null, this._contentStrings.graphEmpty)));
    }
    static get style() { return "ion-item {\n  --color: var(--al-item-color);\n  --border-color: var(--al-item-border-color);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-item[selected] {\n  --color: var(--al-item-selected-color);\n}"; }
};

export { AlNodeList as al_node_list };
