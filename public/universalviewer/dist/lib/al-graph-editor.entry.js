import { r as registerInstance, h } from './core-3e20b4c4.js';

const AlGraphEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.nodes = null;
        this.angles = null;
        this.edges = null;
        this.selected = null;
    }
    _getSelectedNode() {
        if (this.selected && this.nodes) {
            const n = this.nodes.get(this.selected);
            if (n) {
                return [this.selected, n];
            }
        }
        return null;
    }
    _getSelectedEdge() {
        if (this.selected && this.edges) {
            const e = this.edges.get(this.selected);
            if (e) {
                return [this.selected, e];
            }
        }
        return null;
    }
    _getSelectedAngle() {
        if (this.selected && this.angles) {
            const a = this.angles.get(this.selected);
            if (a) {
                return [this.selected, a];
            }
        }
        return null;
    }
    render() {
        return [
            h("al-node-list", { nodes: this.nodes, selected: this.selected }),
            h("ion-item-divider", null),
            h("al-node-editor", { node: this._getSelectedNode() }),
            h("al-edge-editor", { edge: this._getSelectedEdge() }),
            h("al-angle-editor", { angle: this._getSelectedAngle() })
        ];
    }
    static get style() { return ""; }
};

export { AlGraphEditor as al_graph_editor };
