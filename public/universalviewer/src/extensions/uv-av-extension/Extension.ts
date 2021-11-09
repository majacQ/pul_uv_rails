import { AVCenterPanel } from "../../modules/uv-avcenterpanel-module/AVCenterPanel";
import { BaseEvents } from "../../modules/uv-shared-module/BaseEvents";
import { BaseExtension } from "../../modules/uv-shared-module/BaseExtension";
import { ContentLeftPanel } from "../../modules/uv-contentleftpanel-module/ContentLeftPanel";
import { DownloadDialogue } from "./DownloadDialogue";
import { FooterPanel } from "../../modules/uv-shared-module/FooterPanel";
import { FooterPanel as MobileFooterPanel } from "../../modules/uv-avmobilefooterpanel-module/MobileFooter";
import { HeaderPanel } from "../../modules/uv-shared-module/HeaderPanel";
import { IAVExtension } from "./IAVExtension";
import { MoreInfoRightPanel } from "../../modules/uv-moreinforightpanel-module/MoreInfoRightPanel";
import { SettingsDialogue } from "./SettingsDialogue";
import { ShareDialogue } from "./ShareDialogue";
import { IIIFResourceType } from "@iiif/vocabulary/dist-commonjs/";
import { Strings } from "@edsilv/utils";
import { Thumb, TreeNode, Range } from "manifesto.js";

export default class Extension extends BaseExtension implements IAVExtension {
  $downloadDialogue: JQuery;
  $multiSelectDialogue: JQuery;
  $settingsDialogue: JQuery;
  $shareDialogue: JQuery;
  centerPanel: AVCenterPanel;
  downloadDialogue: DownloadDialogue;
  footerPanel: FooterPanel;
  headerPanel: HeaderPanel;
  leftPanel: ContentLeftPanel;
  mobileFooterPanel: MobileFooterPanel;
  rightPanel: MoreInfoRightPanel;
  settingsDialogue: SettingsDialogue;
  shareDialogue: ShareDialogue;

  create(): void {
    super.create();

    //requirejs.config({shim: {'uv/lib/hls.min': { deps: ['require'], exports: "Hls"}}});

    this.component.subscribe(
      BaseEvents.CANVAS_INDEX_CHANGE,
      (canvasIndex: number) => {
        this.viewCanvas(canvasIndex);
      }
    );

    this.component.subscribe(
      BaseEvents.TREE_NODE_SELECTED,
      (node: TreeNode) => {
        this.fire(BaseEvents.TREE_NODE_SELECTED, node.data.path);
        this.treeNodeSelected(node);
      }
    );

    this.component.subscribe(BaseEvents.THUMB_SELECTED, (thumb: Thumb) => {
      this.component.publish(BaseEvents.CANVAS_INDEX_CHANGE, thumb.index);
    });
  }

  dependencyLoaded(index: number, dep: any): void {
    if (index === (<any>this).getDependencyIndex("waveform-data")) {
      window.WaveformData = dep;
    } else if (index === (<any>this).getDependencyIndex("hls")) {
      window.Hls = dep; //https://github.com/mrdoob/three.js/issues/9602
    }
  }

  createModules(): void {
    super.createModules();

    if (this.isHeaderPanelEnabled()) {
      this.headerPanel = new HeaderPanel(this.shell.$headerPanel);
    } else {
      this.shell.$headerPanel.hide();
    }

    if (this.isLeftPanelEnabled()) {
      this.leftPanel = new ContentLeftPanel(this.shell.$leftPanel);
    } else {
      this.shell.$leftPanel.hide();
    }

    this.centerPanel = new AVCenterPanel(this.shell.$centerPanel);

    if (this.isRightPanelEnabled()) {
      this.rightPanel = new MoreInfoRightPanel(this.shell.$rightPanel);
    } else {
      this.shell.$rightPanel.hide();
    }

    if (this.isFooterPanelEnabled()) {
      this.footerPanel = new FooterPanel(this.shell.$footerPanel);
      this.mobileFooterPanel = new MobileFooterPanel(
        this.shell.$mobileFooterPanel
      );
    } else {
      this.shell.$footerPanel.hide();
    }

    this.$shareDialogue = $(
      '<div class="overlay share" aria-hidden="true"></div>'
    );
    this.shell.$overlays.append(this.$shareDialogue);
    this.shareDialogue = new ShareDialogue(this.$shareDialogue);

    this.$downloadDialogue = $(
      '<div class="overlay download" aria-hidden="true"></div>'
    );
    this.shell.$overlays.append(this.$downloadDialogue);
    this.downloadDialogue = new DownloadDialogue(this.$downloadDialogue);

    this.$settingsDialogue = $(
      '<div class="overlay settings" aria-hidden="true"></div>'
    );
    this.shell.$overlays.append(this.$settingsDialogue);
    this.settingsDialogue = new SettingsDialogue(this.$settingsDialogue);

    if (this.isHeaderPanelEnabled()) {
      this.headerPanel.init();
    }

    if (this.isLeftPanelEnabled()) {
      this.leftPanel.init();
    }

    if (this.isRightPanelEnabled()) {
      this.rightPanel.init();
    }

    if (this.isFooterPanelEnabled()) {
      this.footerPanel.init();
    }
  }

  isLeftPanelEnabled(): boolean {
    let isEnabled: boolean = super.isLeftPanelEnabled();
    const tree: TreeNode | null = this.helper.getTree();

    if (tree && tree.nodes.length) {
      isEnabled = true;
    }

    return isEnabled;
  }

  render(): void {
    super.render();
  }

  getEmbedScript(template: string, width: number, height: number): string {
    const appUri: string = this.getAppUri();
    const iframeSrc: string = `${appUri}#?manifest=${this.helper.manifestUri}&c=${this.helper.collectionIndex}&m=${this.helper.manifestIndex}&cv=${this.helper.canvasIndex}&rid=${this.helper.rangeId}`;
    const script: string = Strings.format(
      template,
      iframeSrc,
      width.toString(),
      height.toString()
    );
    return script;
  }

  treeNodeSelected(node: TreeNode): void {
    const data: any = node.data;

    if (!data.type) return;

    switch (data.type) {
      case IIIFResourceType.MANIFEST:
        // do nothing
        break;
      case IIIFResourceType.COLLECTION:
        // do nothing
        break;
      default:
        this.viewRange(data.path);
        break;
    }
  }

  viewRange(path: string): void {
    const range: Range | null = this.helper.getRangeByPath(path);
    if (!range) return;
    this.component.publish(BaseEvents.RANGE_CHANGE, range);

    // don't update the canvas index, only when thumbs are clicked
    // if (range.canvases && range.canvases.length) {
    //     const canvasId: string = range.canvases[0];
    //     const canvas: manifesto.Canvas | null = this.helper.getCanvasById(canvasId);

    //     if (canvas) {
    //         const canvasIndex: number = canvas.index;

    //         if (canvasIndex !== this.helper.canvasIndex) {
    //             this.component.publish(BaseEvents.CANVAS_INDEX_CHANGE, [canvasIndex]);
    //         }
    //     }
    // }
  }
}
