import { r as registerInstance, c as createEvent, h, H as Host, e as getElement } from './core-3e20b4c4.js';

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.transitioning = false;
        this.onTabClicked = (ev) => {
            const { tab } = ev.detail;
            this.select(tab);
        };
        this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = createEvent(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = createEvent(this, "ionTabsDidChange", 3);
    }
    async componentWillLoad() {
        const tabs = this.tabs;
        await this.select(tabs[0]);
        this.ionNavWillLoad.emit();
    }
    componentWillRender() {
        const tabBar = this.el.querySelector("ion-tab-bar");
        if (tabBar) {
            const tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabBar.selectedTab = tab;
        }
    }
    /**
     * Select a tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    async select(tab) {
        const selectedTab = await this.getTab(tab);
        if (selectedTab) {
            if (!this.shouldSwitch(selectedTab)) {
                return false;
            }
            this.setActive(selectedTab);
            this.tabSwitch();
            return true;
        }
        return false;
    }
    /**
     * Get a specific tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    async getTab(tab) {
        const tabEl = typeof tab === "string" ? this.tabs.find(t => t.tab === tab) : tab;
        return tabEl;
    }
    /**
     * Get the currently selected tab.
     */
    getSelected() {
        return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject("transitioning already happening");
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionTabsWillChange.emit({ tab: selectedTab.tab });
        try {
            selectedTab.setActive();
        }
        catch (e) {
            // do nothing
        }
        return true;
    }
    tabSwitch() {
        const selectedTab = this.selectedTab;
        const leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionTabsDidChange.emit({ tab: selectedTab.tab });
        }
    }
    shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return (selectedTab !== undefined &&
            selectedTab !== leavingTab &&
            !this.transitioning);
    }
    get tabs() {
        return Array.from(this.el.querySelectorAll("ion-tab"));
    }
    render() {
        return (h(Host, { onIonTabButtonClick: this.onTabClicked }, h("slot", { name: "top" }), h("div", { class: "tabs-inner" }, h("slot", null)), h("slot", { name: "bottom" })));
    }
    get el() { return getElement(this); }
    static get style() { return "/*\@import \"../../themes/ionic.globals\";*/\n\n:host {\n  /*\@include position(0, 0, 0, 0);*/\n\n  /* display: flex;\n  position: static;\n\n  flex-direction: column; */\n\n  /* width: 100%; */\n  /* height: 100%; */\n\n  /* contain: layout size style; */\n  z-index: var(--z-index-page-container);\n\n  --ion-tab-bar-color: var(--al-item-color);\n}\n\n.tabs-inner {\n  position: relative;\n\n  /* flex: 1;\n\n  contain: layout size style; */\n}"; }
};

export { Tabs as al_tabs };
