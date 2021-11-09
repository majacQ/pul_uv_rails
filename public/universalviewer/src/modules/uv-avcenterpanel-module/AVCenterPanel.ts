import { BaseEvents } from "../uv-shared-module/BaseEvents";
import { CenterPanel } from "../uv-shared-module/CenterPanel";
import { Position } from "../uv-shared-module/Position";
import { sanitize } from "../../Utils";
import { Async, Bools } from "@edsilv/utils";
import {
  Canvas,
  IExternalResource,
  LabelValuePair,
  LanguageMap,
  Range
} from "manifesto.js";
import { AVComponent } from "@iiif/iiif-av-component";

export class AVCenterPanel extends CenterPanel {
  $avcomponent: JQuery;
  avcomponent: any;
  private _lastCanvasIndex: number | undefined;
  private _mediaReady: boolean = false;
  private _isThumbsViewOpen: boolean = false;

  constructor($element: JQuery) {
    super($element);
    this.attributionPosition = Position.BOTTOM_RIGHT;
  }

  create(): void {
    this.setConfig("avCenterPanel");

    super.create();

    const that = this;

    this.component.subscribe(
      BaseEvents.OPEN_EXTERNAL_RESOURCE,
      (resources: IExternalResource[]) => {
        that.openMedia(resources);
      }
    );

    this.component.subscribe(
      BaseEvents.CANVAS_INDEX_CHANGE,
      (canvasIndex: number) => {
        this._viewCanvas(canvasIndex);
      }
    );

    this.component.subscribe(BaseEvents.RANGE_CHANGE, (range: Range | null) => {
      if (!this._observeRangeChanges()) {
        return;
      }

      this._whenMediaReady(() => {
        that._viewRange(range);
        that._setTitle();
      });
    });

    this.component.subscribe(BaseEvents.METRIC_CHANGE, () => {
      this._whenMediaReady(() => {
        if (this.avcomponent) {
          this.avcomponent.set({
            limitToRange: this._limitToRange(),
            constrainNavigationToRange: this._limitToRange()
          });
        }
      });
    });

    this.component.subscribe(BaseEvents.CREATED, () => {
      this._setTitle();
    });

    this.component.subscribe(BaseEvents.OPEN_THUMBS_VIEW, () => {
      this._isThumbsViewOpen = true;

      this._whenMediaReady(() => {
        if (this.avcomponent) {
          this.avcomponent.set({
            virtualCanvasEnabled: false
          });

          const canvas: Canvas | null = this.extension.helper.getCurrentCanvas();

          if (canvas) {
            this._viewCanvas(this.extension.helper.canvasIndex);
          }
        }
      });
    });

    this.component.subscribe(BaseEvents.OPEN_TREE_VIEW, () => {
      this._isThumbsViewOpen = false;

      this._whenMediaReady(() => {
        if (this.avcomponent) {
          this.avcomponent.set({
            virtualCanvasEnabled: true
          });
        }
      });
    });

    this._createAVComponent();
  }

  private _createAVComponent(): void {
    this.$avcomponent = $('<div class="iiif-av-component"></div>');
    this.$content.prepend(this.$avcomponent);

    this.avcomponent = new AVComponent({
      target: <HTMLElement>this.$avcomponent[0],
      data: {
        posterImageExpanded: this.options.posterImageExpanded
      }
    });

    this.avcomponent.on(
      "mediaready",
      () => {
        this._mediaReady = true;
      },
      false
    );

    this.avcomponent.on(
      "rangechanged",
      (rangeId: string | null) => {
        if (rangeId) {
          this._setTitle();

          const range: Range | null = this.extension.helper.getRangeById(
            rangeId
          );

          if (range) {
            const currentRange: Range | null = this.extension.helper.getCurrentRange();

            if (range !== currentRange) {
              this.component.publish(BaseEvents.RANGE_CHANGE, range);
            }
          } else {
            this.component.publish(BaseEvents.RANGE_CHANGE, null);
          }
        } else {
          this.component.publish(BaseEvents.RANGE_CHANGE, null);
        }
      },
      false
    );
  }

  private _observeRangeChanges(): boolean {
    if (!this._isThumbsViewOpen) {
      return true;
    }

    return false;
  }

  private _setTitle(): void {
    let title: string = "";
    let value: string | null;
    let label: LanguageMap;

    // get the current range or canvas title
    const currentRange: Range | null = this.extension.helper.getCurrentRange();

    if (currentRange) {
      label = currentRange.getLabel();
    } else {
      label = this.extension.helper.getCurrentCanvas().getLabel();
    }

    value = LanguageMap.getValue(label);

    if (value) {
      title = value;
    }

    if (Bools.getBool(this.config.options.includeParentInTitleEnabled, false)) {
      // get the parent range or manifest's title
      if (currentRange) {
        if (currentRange.parentRange) {
          label = currentRange.parentRange.getLabel();
          value = LanguageMap.getValue(label);
        }
      } else {
        value = this.extension.helper.getLabel();
      }

      if (value) {
        title += this.content.delimiter + value;
      }
    }

    this.title = title;

    // set subtitle
    const groups: manifold.MetadataGroup[] = this.extension.helper.getMetadata(<
      manifold.MetadataOptions
    >{
      range: currentRange
    });

    for (let i = 0; i < groups.length; i++) {
      const group: manifold.MetadataGroup = groups[i];

      const item: LabelValuePair | undefined = group.items.find(
        (el: LabelValuePair) => {
          if (el.label) {
            const label: string | null = LanguageMap.getValue(el.label);
            if (
              label &&
              label.toLowerCase() === this.config.options.subtitleMetadataField
            ) {
              return true;
            }
          }

          return false;
        }
      );

      if (item) {
        this.subtitle = LanguageMap.getValue(item.value);
        break;
      }
    }

    this.$title.text(sanitize(this.title));

    this.resize(false);
  }

  private _isCurrentResourceAccessControlled(): boolean {
    const canvas: Canvas = this.extension.helper.getCurrentCanvas();
    return canvas.externalResource.isAccessControlled();
  }

  openMedia(resources: IExternalResource[]) {
    this.extension.getExternalResources(resources).then(() => {
      if (this.avcomponent) {
        // reset if the media has already been loaded (degraded flow has happened)
        if (this.extension.helper.canvasIndex === this._lastCanvasIndex) {
          this.avcomponent.reset();
        }

        this._lastCanvasIndex = this.extension.helper.canvasIndex;

        this.avcomponent.set({
          helper: this.extension.helper,
          adaptiveAuthEnabled: this._isCurrentResourceAccessControlled(),
          autoPlay: this.config.options.autoPlay,
          autoSelectRange: true,
          constrainNavigationToRange: this._limitToRange(),
          content: this.content,
          defaultAspectRatio: 0.56,
          doubleClickMS: 350,
          limitToRange: this._limitToRange(),
          posterImageRatio: this.config.options.posterImageRatio
        });

        this.component.publish(BaseEvents.EXTERNAL_RESOURCE_OPENED);
        this.component.publish(BaseEvents.LOAD);
      }
    });
  }

  private _limitToRange(): boolean {
    return !this.extension.isDesktopMetric();
  }

  private _whenMediaReady(cb: () => void): void {
    Async.waitFor(() => {
      return this._mediaReady;
    }, cb);
  }

  private _viewRange(range: Range | null): void {
    this._whenMediaReady(() => {
      if (range && this.avcomponent) {
        this.avcomponent.playRange(range.id);
      }

      // don't resize the av component to avoid expensively redrawing waveforms
      this.resize(false);
    });
  }

  private _viewCanvas(canvasIndex: number): void {
    this._whenMediaReady(() => {
      const canvas: Canvas | null = this.extension.helper.getCanvasByIndex(
        canvasIndex
      );

      if (this.avcomponent) {
        this.avcomponent.showCanvas(canvas.id);
      }
    });
  }

  resize(resizeAVComponent: boolean = true) {
    super.resize();

    if (resizeAVComponent && this.avcomponent) {
      this.$avcomponent.height(this.$content.height());
      this.avcomponent.resize();
    }
  }
}
