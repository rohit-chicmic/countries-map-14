import { Component, ElementRef, Input, Output, ViewChild, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { CharErrorCode } from './chart-events.interface';
import { en as countriesEN } from '@jagomf/countrieslist';
import { scale } from 'chroma-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./base-map.component";
const _c0 = ["mapContent"];
function CountriesMapComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "span", 5);
    i0.ɵɵtext(2, "Loading map...");
    i0.ɵɵelementEnd()();
} }
function CountriesMapComponent_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.countryLabel);
} }
function CountriesMapComponent_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.selection == null ? null : ctx_r4.selection.countryName);
} }
function CountriesMapComponent_div_3_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ": ");
    i0.ɵɵelementEnd();
} }
function CountriesMapComponent_div_3_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.selectionValue);
} }
function CountriesMapComponent_div_3_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "span", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementStart(4, "span", 23);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.key);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.val);
} }
function CountriesMapComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, CountriesMapComponent_div_3_div_10_div_1_Template, 6, 2, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.selection == null ? null : ctx_r7.selection.extra);
} }
const _c1 = function (a0) { return { "goes-first": a0 }; };
const _c2 = function (a0) { return { "has-value": a0 }; };
function CountriesMapComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtemplate(3, CountriesMapComponent_div_3_span_3_Template, 2, 1, "span", 9);
    i0.ɵɵtemplate(4, CountriesMapComponent_div_3_span_4_Template, 2, 1, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 11)(6, "span", 12);
    i0.ɵɵtext(7);
    i0.ɵɵtemplate(8, CountriesMapComponent_div_3_span_8_Template, 2, 0, "span", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CountriesMapComponent_div_3_span_9_Template, 2, 1, "span", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, CountriesMapComponent_div_3_div_10_Template, 2, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, !ctx_r2.captionBelow));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r2.selection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.selection);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c2, ctx_r2.selection));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.valueLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.selection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.selection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r2.selection == null ? null : ctx_r2.selection.extra) && (ctx_r2.selection == null ? null : ctx_r2.selection.extra.length) > 0);
} }
const exists = item => typeof item !== 'undefined' && item !== null;
const countryNum = (item) => parseInt(item.value?.toString());
const countryClass = 'countryxx';
const oceanId = 'ocean';
const getStrokeWidth = (isHovered) => isHovered ? '0.2%' : '0.1%';
const getStrokeColor = (isHovered) => isHovered ? '#888' : '#afafaf';
const countryName = (countryCode) => {
    return countriesEN[countryCode];
};
export class CountriesMapComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.countryLabel = 'Country';
        this.valueLabel = 'Value';
        this.showCaption = true;
        this.captionBelow = true;
        this.minColor = 'white';
        this.maxColor = 'red';
        this.backgroundColor = 'white';
        this.noDataColor = '#CFCFCF';
        this.exceptionColor = '#FFEE58';
        this.chartReady = new EventEmitter();
        this.chartError = new EventEmitter();
        this.chartSelect = new EventEmitter();
        this.selection = null;
        this.innerLoading = true;
    }
    get loading() {
        return this.innerLoading;
    }
    get selectionValue() {
        return this.data[this.selection.countryId].value;
    }
    getExtraSelected(country) {
        const { extra } = this.data[country];
        return extra && Object.keys(extra).map(key => ({ key, val: extra[key] }));
    }
    selectCountry(country) {
        this.selection = country ? {
            countryId: country,
            countryName: countryName(country),
            extra: this.getExtraSelected(country)
        } : null;
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        this.initializeMap();
    }
    ngOnChanges(changes) {
        const changedMapValueButNotOnStart = ['data', 'minColor', 'maxColor', 'backgroundColor', 'noDataColor', 'exceptionColor']
            .some(attr => changes[attr] && !changes[attr].firstChange);
        if (changedMapValueButNotOnStart) {
            this.initializeMap();
        }
    }
    initializeMap() {
        try {
            // data is provided: might be able to paint countries in colors
            if (this.data) {
                // get highest value in range
                const maxVal = exists(this.maxValue) ? this.maxValue : Object.values(this.data).reduce((acc, curr) => countryNum(curr) > acc || acc === null ? countryNum(curr) : acc, null);
                // get lowest value in range
                const minVal = exists(this.minValue) ? this.minValue : Object.values(this.data).reduce((acc, curr) => countryNum(curr) < acc || acc === null ? countryNum(curr) : acc, null);
                // map values in range to colors
                const valToCol = scale([this.minColor, this.maxColor]).colors((maxVal ?? 1) - (minVal ?? 0) + 1).reduce((acc, curr, i) => ({ ...acc, [i + minVal]: curr }), {});
                // create local Map using provided data + calculated colors
                this.mapData = Object.entries(this.data).reduce((acc, [countryId, countryVal]) => ({ ...acc,
                    [countryId.toLowerCase()]: {
                        ...countryVal,
                        color: valToCol[countryNum(countryVal)] // value in between minVal and maxVal
                            || (
                            // value below minVal
                            countryNum(countryVal) <= minVal ? valToCol[minVal] :
                                // value above maxVal
                                countryNum(countryVal) >= maxVal ? valToCol[maxVal]
                                    // weird; should never get to here
                                    : this.exceptionColor)
                    } }), {});
                // no data provided: will paint plain map
            }
            else {
                this.mapData = {};
            }
            const svgMap = this.mapContent.nativeElement.children[0];
            svgMap.style.backgroundColor = this.backgroundColor;
            svgMap.querySelectorAll(`.${countryClass}`).forEach(item => {
                const mapItem = this.mapData[item.id.toLowerCase()];
                const isException = mapItem ? !exists(mapItem.value) : false;
                item.style.fill = mapItem ? isException ? this.exceptionColor : mapItem.color : this.noDataColor;
                item.onmouseenter = this.countryHover.bind(this, item, true);
                item.onmouseleave = this.countryHover.bind(this, item, false);
            });
            this.innerLoading = false;
            this.cdRef.detectChanges();
            this.onChartReady();
        }
        catch (e) {
            this.onCharterror({ id: CharErrorCode.loading, message: 'Could not load' });
        }
    }
    countryHover(item, hovered) {
        item.style.strokeWidth = getStrokeWidth(hovered);
        item.style.stroke = getStrokeColor(hovered);
        item.querySelectorAll('.landxx').forEach(i => {
            i.style.strokeWidth = getStrokeWidth(hovered);
            i.style.stroke = getStrokeColor(hovered);
        });
    }
    onChartReady() {
        if (this.innerLoading) {
            this.innerLoading = false;
            this.chartReady.emit();
        }
    }
    onCharterror(error) {
        this.chartError.emit(error);
    }
    onMapSelect({ target }) {
        const event = {
            selected: false,
            value: null,
            country: null
        };
        let newItem;
        if (target.id === oceanId) {
            this.selectCountry(null);
        }
        else {
            newItem = target;
            while (!newItem.classList.contains(countryClass)) {
                newItem = newItem.parentNode;
            }
        }
        const country = this.mapData[newItem?.id];
        if (country) {
            event.selected = true;
            event.value = countryNum(country);
            event.country = newItem.id.toUpperCase();
            this.selectCountry(event.country);
        }
        else {
            this.selectCountry(null);
        }
        this.chartSelect.emit(event);
    }
}
CountriesMapComponent.ɵfac = function CountriesMapComponent_Factory(t) { return new (t || CountriesMapComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CountriesMapComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CountriesMapComponent, selectors: [["countries-map"]], viewQuery: function CountriesMapComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapContent = _t.first);
    } }, inputs: { data: "data", countryLabel: "countryLabel", valueLabel: "valueLabel", showCaption: "showCaption", captionBelow: "captionBelow", minValue: "minValue", maxValue: "maxValue", minColor: "minColor", maxColor: "maxColor", backgroundColor: "backgroundColor", noDataColor: "noDataColor", exceptionColor: "exceptionColor" }, outputs: { chartReady: "chartReady", chartError: "chartError", chartSelect: "chartSelect" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [["class", "major-block loading", 4, "ngIf"], [1, "major-block", "cm-map-content", 3, "ngClass", "click"], ["mapContent", ""], ["class", "major-block cm-caption-container", 3, "ngClass", 4, "ngIf"], [1, "major-block", "loading"], [1, "text"], [1, "major-block", "cm-caption-container", 3, "ngClass"], [1, "cm-simple-caption"], [1, "cm-country-label"], ["class", "cm-default-label", 4, "ngIf"], ["class", "cm-country-name", 4, "ngIf"], [1, "cm-value-label"], [1, "cm-value-text", 3, "ngClass"], [4, "ngIf"], ["class", "cm-value-content", 4, "ngIf"], ["class", "cm-extended-caption", 4, "ngIf"], [1, "cm-default-label"], [1, "cm-country-name"], [1, "cm-value-content"], [1, "cm-extended-caption"], ["class", "cm-extended-item", 4, "ngFor", "ngForOf"], [1, "cm-extended-item"], [1, "cm-extended-label"], [1, "cm-extended-value"]], template: function CountriesMapComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CountriesMapComponent_div_0_Template, 3, 0, "div", 0);
        i0.ɵɵelementStart(1, "countries-map-base", 1, 2);
        i0.ɵɵlistener("click", function CountriesMapComponent_Template_countries_map_base_click_1_listener($event) { return ctx.onMapSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CountriesMapComponent_div_3_Template, 11, 12, "div", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, ctx.captionBelow));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.showCaption);
    } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CountriesMapBaseComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:space-between;align-items:stretch;align-content:stretch}.major-block.loading[_ngcontent-%COMP%]{flex:0 1 auto;align-self:center}.major-block.loading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-style:italic;font-family:sans-serif;color:gray}.major-block.cm-map-content[_ngcontent-%COMP%]{flex:0 1 auto}.major-block.goes-first[_ngcontent-%COMP%]{order:0}.major-block[_ngcontent-%COMP%]:not(.goes-first){order:1}.major-block.cm-caption-container[_ngcontent-%COMP%]{flex:0 1 auto;display:flex;flex-flow:column nowrap;justify-content:space-between}.cm-simple-caption[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between}.cm-country-label[_ngcontent-%COMP%]{flex:0 1 auto;align-self:flex-start}.cm-value-label[_ngcontent-%COMP%]{flex:0 1 auto;align-self:flex-end}.cm-country-label[_ngcontent-%COMP%], .cm-value-label[_ngcontent-%COMP%]{flex:0 1 auto}.cm-country-label[_ngcontent-%COMP%]   .cm-country-name[_ngcontent-%COMP%]{font-weight:700}.cm-country-label[_ngcontent-%COMP%]   .cm-country-name[_ngcontent-%COMP%], .cm-value-label[_ngcontent-%COMP%]   .cm-value-text[_ngcontent-%COMP%]{color:#333}.cm-country-label[_ngcontent-%COMP%]   .cm-default-label[_ngcontent-%COMP%], .cm-value-label[_ngcontent-%COMP%]   .cm-value-text[_ngcontent-%COMP%]:not(.has-value){font-style:italic;color:#777}.cm-extended-caption[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));grid-gap:5px}.cm-extended-item[_ngcontent-%COMP%]{margin:5px auto}.cm-extended-item[_ngcontent-%COMP%]   .cm-extended-label[_ngcontent-%COMP%]{font-weight:700}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountriesMapComponent, [{
        type: Component,
        args: [{ selector: 'countries-map', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"major-block loading\" *ngIf=\"loading\"><span class=\"text\">Loading map...</span></div>\r\n\r\n<countries-map-base class=\"major-block cm-map-content\" #mapContent (click)=\"onMapSelect($event)\" [ngClass]=\"{'goes-first': captionBelow}\">\r\n</countries-map-base>\r\n\r\n<div class=\"major-block cm-caption-container\" [ngClass]=\"{'goes-first': !captionBelow}\"\r\n  *ngIf=\"!loading && showCaption\">\r\n  <div class=\"cm-simple-caption\">\r\n    <div class=\"cm-country-label\">\r\n      <span class=\"cm-default-label\" *ngIf=\"!selection\">{{countryLabel}}</span>\r\n      <span class=\"cm-country-name\" *ngIf=\"selection\">{{selection?.countryName}}</span>\r\n    </div>\r\n    <div class=\"cm-value-label\">\r\n      <span class=\"cm-value-text\"\r\n        [ngClass]=\"{'has-value': selection}\">{{valueLabel}}<span *ngIf=\"selection\">: </span></span>\r\n      <span class=\"cm-value-content\" *ngIf=\"selection\">{{selectionValue}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"cm-extended-caption\" *ngIf=\"selection?.extra && selection?.extra.length > 0\">\r\n    <div *ngFor=\"let item of selection?.extra\" class=\"cm-extended-item\">\r\n      <span class=\"cm-extended-label\">{{item.key}}</span>:\r\n      <span class=\"cm-extended-value\">{{item.val}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host{display:flex;flex-flow:column nowrap;justify-content:space-between;align-items:stretch;align-content:stretch}.major-block.loading{flex:0 1 auto;align-self:center}.major-block.loading .text{font-style:italic;font-family:sans-serif;color:gray}.major-block.cm-map-content{flex:0 1 auto}.major-block.goes-first{order:0}.major-block:not(.goes-first){order:1}.major-block.cm-caption-container{flex:0 1 auto;display:flex;flex-flow:column nowrap;justify-content:space-between}.cm-simple-caption{display:flex;flex-flow:row nowrap;justify-content:space-between}.cm-country-label{flex:0 1 auto;align-self:flex-start}.cm-value-label{flex:0 1 auto;align-self:flex-end}.cm-country-label,.cm-value-label{flex:0 1 auto}.cm-country-label .cm-country-name{font-weight:700}.cm-country-label .cm-country-name,.cm-value-label .cm-value-text{color:#333}.cm-country-label .cm-default-label,.cm-value-label .cm-value-text:not(.has-value){font-style:italic;color:#777}.cm-extended-caption{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));grid-gap:5px}.cm-extended-item{margin:5px auto}.cm-extended-item .cm-extended-label{font-weight:700}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { data: [{
            type: Input
        }], countryLabel: [{
            type: Input
        }], valueLabel: [{
            type: Input
        }], showCaption: [{
            type: Input
        }], captionBelow: [{
            type: Input
        }], minValue: [{
            type: Input
        }], maxValue: [{
            type: Input
        }], minColor: [{
            type: Input
        }], maxColor: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], noDataColor: [{
            type: Input
        }], exceptionColor: [{
            type: Input
        }], chartReady: [{
            type: Output
        }], chartError: [{
            type: Output
        }], chartSelect: [{
            type: Output
        }], mapContent: [{
            type: ViewChild,
            args: ['mapContent', { static: false, read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyaWVzLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWIvc3JjL2xpYi9jb3VudHJpZXMtbWFwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi9zcmMvbGliL2NvdW50cmllcy1tYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLFlBQVksRUFJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJekQsT0FBTyxFQUFFLEVBQUUsSUFBSSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7SUNsQmxDLDhCQUFpRCxjQUFBO0lBQW1CLDhCQUFjO0lBQUEsaUJBQU8sRUFBQTs7O0lBU25GLGdDQUFrRDtJQUFBLFlBQWdCO0lBQUEsaUJBQU87OztJQUF2QixlQUFnQjtJQUFoQix5Q0FBZ0I7OztJQUNsRSxnQ0FBZ0Q7SUFBQSxZQUEwQjtJQUFBLGlCQUFPOzs7SUFBakMsZUFBMEI7SUFBMUIsb0ZBQTBCOzs7SUFJckIsNEJBQXdCO0lBQUEsa0JBQUU7SUFBQSxpQkFBTzs7O0lBQ3RGLGdDQUFpRDtJQUFBLFlBQWtCO0lBQUEsaUJBQU87OztJQUF6QixlQUFrQjtJQUFsQiwyQ0FBa0I7OztJQUlyRSwrQkFBb0UsZUFBQTtJQUNsQyxZQUFZO0lBQUEsaUJBQU87SUFBQSxrQkFDbkQ7SUFBQSxnQ0FBZ0M7SUFBQSxZQUFZO0lBQUEsaUJBQU8sRUFBQTs7O0lBRG5CLGVBQVk7SUFBWixpQ0FBWTtJQUNaLGVBQVk7SUFBWixpQ0FBWTs7O0lBSGhELCtCQUF5RjtJ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clxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJFcnJvckNvZGUgfSBmcm9tICcuL2NoYXJ0LWV2ZW50cy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgdHlwZSB7IENoYXJ0U2VsZWN0RXZlbnQsIENoYXJ0RXJyb3JFdmVudCB9IGZyb20gJy4vY2hhcnQtZXZlbnRzLmludGVyZmFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQ291bnRyaWVzRGF0YSwgU2VsZWN0aW9uRXh0cmEsIERyYXdhYmxlQ291bnRyaWVzLCBTZWxlY3Rpb24sXHJcbiAgVmFsaWRFeHRyYURhdGEsIERyYXdhYmxlQ291bnRyeSwgQ291bnRyeURhdGEgfSBmcm9tICcuL2RhdGEtdHlwZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgZW4gYXMgY291bnRyaWVzRU4gfSBmcm9tICdAamFnb21mL2NvdW50cmllc2xpc3QnO1xyXG5pbXBvcnQgeyBzY2FsZSB9IGZyb20gJ2Nocm9tYS1qcyc7XHJcblxyXG5jb25zdCBleGlzdHMgPSBpdGVtID0+IHR5cGVvZiBpdGVtICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtICE9PSBudWxsO1xyXG5jb25zdCBjb3VudHJ5TnVtID0gKGl0ZW06IENvdW50cnlEYXRhKSA9PiBwYXJzZUludChpdGVtLnZhbHVlPy50b1N0cmluZygpKTtcclxuXHJcbmNvbnN0IGNvdW50cnlDbGFzcyA9ICdjb3VudHJ5eHgnO1xyXG5jb25zdCBvY2VhbklkID0gJ29jZWFuJztcclxuY29uc3QgZ2V0U3Ryb2tlV2lkdGggPSAoaXNIb3ZlcmVkOiBib29sZWFuKSA9PiBpc0hvdmVyZWQgPyAnMC4yJScgOiAnMC4xJSc7XHJcbmNvbnN0IGdldFN0cm9rZUNvbG9yID0gKGlzSG92ZXJlZDogYm9vbGVhbikgPT4gaXNIb3ZlcmVkID8gJyM4ODgnIDogJyNhZmFmYWYnO1xyXG5cclxuY29uc3QgY291bnRyeU5hbWUgPSAoY291bnRyeUNvZGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgcmV0dXJuIGNvdW50cmllc0VOW2NvdW50cnlDb2RlXTtcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY291bnRyaWVzLW1hcCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdW50cmllcy1tYXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvdW50cmllcy1tYXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRyaWVzTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZGF0YTogQ291bnRyaWVzRGF0YTtcclxuICBASW5wdXQoKSBjb3VudHJ5TGFiZWwgPSAnQ291bnRyeSc7XHJcbiAgQElucHV0KCkgdmFsdWVMYWJlbCA9ICdWYWx1ZSc7XHJcbiAgQElucHV0KCkgc2hvd0NhcHRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGNhcHRpb25CZWxvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbWluVmFsdWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBtYXhWYWx1ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1pbkNvbG9yID0gJ3doaXRlJztcclxuICBASW5wdXQoKSBtYXhDb2xvciA9ICdyZWQnO1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgQElucHV0KCkgbm9EYXRhQ29sb3IgPSAnI0NGQ0ZDRic7XHJcbiAgQElucHV0KCkgZXhjZXB0aW9uQ29sb3IgPSAnI0ZGRUU1OCc7XHJcblxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIHJlYWRvbmx5IGNoYXJ0UmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHByaXZhdGUgcmVhZG9ubHkgY2hhcnRFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFcnJvckV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBwcml2YXRlIHJlYWRvbmx5IGNoYXJ0U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydFNlbGVjdEV2ZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdtYXBDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIHByaXZhdGUgcmVhZG9ubHkgbWFwQ29udGVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIG1hcERhdGE6IERyYXdhYmxlQ291bnRyaWVzO1xyXG4gIHNlbGVjdGlvbjogU2VsZWN0aW9uIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgaW5uZXJMb2FkaW5nID0gdHJ1ZTtcclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyTG9hZGluZztcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3Rpb25WYWx1ZSgpOiBWYWxpZEV4dHJhRGF0YSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuc2VsZWN0aW9uLmNvdW50cnlJZF0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXh0cmFTZWxlY3RlZChjb3VudHJ5OiBzdHJpbmcpOiBTZWxlY3Rpb25FeHRyYVtdIHwgbnVsbCB7XHJcbiAgICBjb25zdCB7IGV4dHJhIH0gPSB0aGlzLmRhdGFbY291bnRyeV07XHJcbiAgICByZXR1cm4gZXh0cmEgJiYgT2JqZWN0LmtleXMoZXh0cmEpLm1hcChrZXkgPT4gKHsga2V5LCB2YWw6IGV4dHJhW2tleV0gfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RDb3VudHJ5KGNvdW50cnk/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uID0gY291bnRyeSA/IHtcclxuICAgICAgY291bnRyeUlkOiBjb3VudHJ5LFxyXG4gICAgICBjb3VudHJ5TmFtZTogY291bnRyeU5hbWUoY291bnRyeSksXHJcbiAgICAgIGV4dHJhOiB0aGlzLmdldEV4dHJhU2VsZWN0ZWQoY291bnRyeSlcclxuICAgIH0gOiBudWxsO1xyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoYW5nZWRNYXBWYWx1ZUJ1dE5vdE9uU3RhcnQgPSBbJ2RhdGEnLCAnbWluQ29sb3InLCAnbWF4Q29sb3InLCAnYmFja2dyb3VuZENvbG9yJywgJ25vRGF0YUNvbG9yJywgJ2V4Y2VwdGlvbkNvbG9yJ11cclxuICAgICAgLnNvbWUoYXR0ciA9PiBjaGFuZ2VzW2F0dHJdICYmICFjaGFuZ2VzW2F0dHJdLmZpcnN0Q2hhbmdlKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlZE1hcFZhbHVlQnV0Tm90T25TdGFydCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZU1hcCgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGRhdGEgaXMgcHJvdmlkZWQ6IG1pZ2h0IGJlIGFibGUgdG8gcGFpbnQgY291bnRyaWVzIGluIGNvbG9yc1xyXG4gICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgLy8gZ2V0IGhpZ2hlc3QgdmFsdWUgaW4gcmFuZ2VcclxuICAgICAgICBjb25zdCBtYXhWYWwgPSBleGlzdHModGhpcy5tYXhWYWx1ZSkgPyB0aGlzLm1heFZhbHVlIDogT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpLnJlZHVjZShcclxuICAgICAgICAgIChhY2MsIGN1cnIpID0+IGNvdW50cnlOdW0oY3VycikgPiBhY2MgfHwgYWNjID09PSBudWxsPyBjb3VudHJ5TnVtKGN1cnIpIDogYWNjLCBudWxsIGFzIG51bWJlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gZ2V0IGxvd2VzdCB2YWx1ZSBpbiByYW5nZVxyXG4gICAgICAgIGNvbnN0IG1pblZhbCA9IGV4aXN0cyh0aGlzLm1pblZhbHVlKSA/IHRoaXMubWluVmFsdWUgOiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkucmVkdWNlKFxyXG4gICAgICAgICAgKGFjYywgY3VycikgPT4gY291bnRyeU51bShjdXJyKSA8IGFjYyB8fCBhY2MgPT09IG51bGw/IGNvdW50cnlOdW0oY3VycikgOiBhY2MsIG51bGwgYXMgbnVtYmVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gbWFwIHZhbHVlcyBpbiByYW5nZSB0byBjb2xvcnNcclxuICAgICAgICBjb25zdCB2YWxUb0NvbCA9IHNjYWxlKFt0aGlzLm1pbkNvbG9yLCB0aGlzLm1heENvbG9yXSkuY29sb3JzKChtYXhWYWwgPz8gMSkgLSAobWluVmFsID8/IDApICsgMSkucmVkdWNlKChhY2MsIGN1cnIsIGkpID0+XHJcbiAgICAgICAgICAoeyAuLi5hY2MsIFtpICsgbWluVmFsXTogY3VyciB9KSwge30gYXMgeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBsb2NhbCBNYXAgdXNpbmcgcHJvdmlkZWQgZGF0YSArIGNhbGN1bGF0ZWQgY29sb3JzXHJcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKS5yZWR1Y2UoKGFjYywgWyBjb3VudHJ5SWQsIGNvdW50cnlWYWwgXSkgPT5cclxuICAgICAgICAgICh7IC4uLmFjYyxcclxuICAgICAgICAgICAgW2NvdW50cnlJZC50b0xvd2VyQ2FzZSgpXToge1xyXG4gICAgICAgICAgICAgIC4uLmNvdW50cnlWYWwsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhbFRvQ29sW2NvdW50cnlOdW0oY291bnRyeVZhbCldIC8vIHZhbHVlIGluIGJldHdlZW4gbWluVmFsIGFuZCBtYXhWYWxcclxuICAgICAgICAgICAgICAgIHx8IChcclxuICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgYmVsb3cgbWluVmFsXHJcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlOdW0oY291bnRyeVZhbCkgPD0gbWluVmFsID8gdmFsVG9Db2xbbWluVmFsXSA6XHJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIGFib3ZlIG1heFZhbFxyXG4gICAgICAgICAgICAgICAgICBjb3VudHJ5TnVtKGNvdW50cnlWYWwpID49IG1heFZhbCA/IHZhbFRvQ29sW21heFZhbF1cclxuICAgICAgICAgICAgICAgICAgLy8gd2VpcmQ7IHNob3VsZCBuZXZlciBnZXQgdG8gaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5leGNlcHRpb25Db2xvclxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IGFzIERyYXdhYmxlQ291bnRyeSB9KSxcclxuICAgICAgICAgIHt9IGFzIERyYXdhYmxlQ291bnRyaWVzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIC8vIG5vIGRhdGEgcHJvdmlkZWQ6IHdpbGwgcGFpbnQgcGxhaW4gbWFwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tYXBEYXRhID0ge307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHN2Z01hcCA9IHRoaXMubWFwQ29udGVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdIGFzIFNWR1NWR0VsZW1lbnQ7XHJcbiAgICAgIHN2Z01hcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgc3ZnTWFwLnF1ZXJ5U2VsZWN0b3JBbGw8U1ZHU1ZHRWxlbWVudD4oYC4ke2NvdW50cnlDbGFzc31gKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hcEl0ZW0gPSB0aGlzLm1hcERhdGFbaXRlbS5pZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBjb25zdCBpc0V4Y2VwdGlvbiA9IG1hcEl0ZW0gPyAhZXhpc3RzKG1hcEl0ZW0udmFsdWUpIDogZmFsc2U7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5maWxsID0gbWFwSXRlbSA/IGlzRXhjZXB0aW9uID8gdGhpcy5leGNlcHRpb25Db2xvciA6IG1hcEl0ZW0uY29sb3IgOiB0aGlzLm5vRGF0YUNvbG9yO1xyXG4gICAgICAgIGl0ZW0ub25tb3VzZWVudGVyID0gdGhpcy5jb3VudHJ5SG92ZXIuYmluZCh0aGlzLCBpdGVtLCB0cnVlKTtcclxuICAgICAgICBpdGVtLm9ubW91c2VsZWF2ZSA9IHRoaXMuY291bnRyeUhvdmVyLmJpbmQodGhpcywgaXRlbSwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuaW5uZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLm9uQ2hhcnRSZWFkeSgpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5vbkNoYXJ0ZXJyb3IoeyBpZDogQ2hhckVycm9yQ29kZS5sb2FkaW5nLCBtZXNzYWdlOiAnQ291bGQgbm90IGxvYWQnIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb3VudHJ5SG92ZXIoaXRlbTogU1ZHRWxlbWVudCwgaG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaXRlbS5zdHlsZS5zdHJva2VXaWR0aCA9IGdldFN0cm9rZVdpZHRoKGhvdmVyZWQpO1xyXG4gICAgaXRlbS5zdHlsZS5zdHJva2UgPSBnZXRTdHJva2VDb2xvcihob3ZlcmVkKTtcclxuICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbDxTVkdFbGVtZW50PignLmxhbmR4eCcpLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGkuc3R5bGUuc3Ryb2tlV2lkdGggPSBnZXRTdHJva2VXaWR0aChob3ZlcmVkKTtcclxuICAgICAgaS5zdHlsZS5zdHJva2UgPSBnZXRTdHJva2VDb2xvcihob3ZlcmVkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNoYXJ0UmVhZHkoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbm5lckxvYWRpbmcpIHtcclxuICAgICAgdGhpcy5pbm5lckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFydFJlYWR5LmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DaGFydGVycm9yKGVycm9yOiBDaGFydEVycm9yRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhcnRFcnJvci5lbWl0KGVycm9yKTtcclxuICB9XHJcblxyXG4gIG9uTWFwU2VsZWN0KHsgdGFyZ2V0IH06IHsgdGFyZ2V0PzogU1ZHRWxlbWVudCB9KTogdm9pZCB7XHJcbiAgICBjb25zdCBldmVudDogQ2hhcnRTZWxlY3RFdmVudCA9IHtcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgY291bnRyeTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgbmV3SXRlbTogU1ZHRWxlbWVudDtcclxuICAgIGlmICh0YXJnZXQuaWQgPT09IG9jZWFuSWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RDb3VudHJ5KG51bGwpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0l0ZW0gPSB0YXJnZXQ7XHJcbiAgICAgIHdoaWxlICghbmV3SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY291bnRyeUNsYXNzKSkge1xyXG4gICAgICAgIG5ld0l0ZW0gPSBuZXdJdGVtLnBhcmVudE5vZGUgYXMgU1ZHRWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLm1hcERhdGFbbmV3SXRlbT8uaWRdO1xyXG4gICAgaWYgKGNvdW50cnkpIHtcclxuICAgICAgZXZlbnQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBldmVudC52YWx1ZSA9IGNvdW50cnlOdW0oY291bnRyeSk7XHJcbiAgICAgIGV2ZW50LmNvdW50cnkgPSBuZXdJdGVtLmlkLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShldmVudC5jb3VudHJ5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhcnRTZWxlY3QuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibWFqb3ItYmxvY2sgbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ1wiPjxzcGFuIGNsYXNzPVwidGV4dFwiPkxvYWRpbmcgbWFwLi4uPC9zcGFuPjwvZGl2PlxyXG5cclxuPGNvdW50cmllcy1tYXAtYmFzZSBjbGFzcz1cIm1ham9yLWJsb2NrIGNtLW1hcC1jb250ZW50XCIgI21hcENvbnRlbnQgKGNsaWNrKT1cIm9uTWFwU2VsZWN0KCRldmVudClcIiBbbmdDbGFzc109XCJ7J2dvZXMtZmlyc3QnOiBjYXB0aW9uQmVsb3d9XCI+XHJcbjwvY291bnRyaWVzLW1hcC1iYXNlPlxyXG5cclxuPGRpdiBjbGFzcz1cIm1ham9yLWJsb2NrIGNtLWNhcHRpb24tY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydnb2VzLWZpcnN0JzogIWNhcHRpb25CZWxvd31cIlxyXG4gICpuZ0lmPVwiIWxvYWRpbmcgJiYgc2hvd0NhcHRpb25cIj5cclxuICA8ZGl2IGNsYXNzPVwiY20tc2ltcGxlLWNhcHRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbS1jb3VudHJ5LWxhYmVsXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY20tZGVmYXVsdC1sYWJlbFwiICpuZ0lmPVwiIXNlbGVjdGlvblwiPnt7Y291bnRyeUxhYmVsfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY20tY291bnRyeS1uYW1lXCIgKm5nSWY9XCJzZWxlY3Rpb25cIj57e3NlbGVjdGlvbj8uY291bnRyeU5hbWV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtLXZhbHVlLWxhYmVsXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY20tdmFsdWUtdGV4dFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwieydoYXMtdmFsdWUnOiBzZWxlY3Rpb259XCI+e3t2YWx1ZUxhYmVsfX08c3BhbiAqbmdJZj1cInNlbGVjdGlvblwiPjogPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbS12YWx1ZS1jb250ZW50XCIgKm5nSWY9XCJzZWxlY3Rpb25cIj57e3NlbGVjdGlvblZhbHVlfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY20tZXh0ZW5kZWQtY2FwdGlvblwiICpuZ0lmPVwic2VsZWN0aW9uPy5leHRyYSAmJiBzZWxlY3Rpb24/LmV4dHJhLmxlbmd0aCA+IDBcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VsZWN0aW9uPy5leHRyYVwiIGNsYXNzPVwiY20tZXh0ZW5kZWQtaXRlbVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNtLWV4dGVuZGVkLWxhYmVsXCI+e3tpdGVtLmtleX19PC9zcGFuPjpcclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbS1leHRlbmRlZC12YWx1ZVwiPnt7aXRlbS52YWx9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19