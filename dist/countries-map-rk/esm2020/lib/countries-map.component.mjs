import { Component, ElementRef, Input, Output, ViewChild, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { CharErrorCode } from './chart-events.interface';
import { en as countriesEN } from '@jagomf/countrieslist';
import { scale } from 'chroma-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./base-map.component";
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
CountriesMapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CountriesMapComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
CountriesMapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: CountriesMapComponent, selector: "countries-map", inputs: { data: "data", countryLabel: "countryLabel", valueLabel: "valueLabel", showCaption: "showCaption", captionBelow: "captionBelow", minValue: "minValue", maxValue: "maxValue", minColor: "minColor", maxColor: "maxColor", backgroundColor: "backgroundColor", noDataColor: "noDataColor", exceptionColor: "exceptionColor" }, outputs: { chartReady: "chartReady", chartError: "chartError", chartSelect: "chartSelect" }, viewQueries: [{ propertyName: "mapContent", first: true, predicate: ["mapContent"], descendants: true, read: ElementRef }], usesOnChanges: true, ngImport: i0, template: "<div class=\"major-block loading\" *ngIf=\"loading\"><span class=\"text\">Loading map...</span></div>\r\n\r\n<countries-map-base class=\"major-block cm-map-content\" #mapContent (click)=\"onMapSelect($event)\" [ngClass]=\"{'goes-first': captionBelow}\">\r\n</countries-map-base>\r\n\r\n<div class=\"major-block cm-caption-container\" [ngClass]=\"{'goes-first': !captionBelow}\"\r\n  *ngIf=\"!loading && showCaption\">\r\n  <div class=\"cm-simple-caption\">\r\n    <div class=\"cm-country-label\">\r\n      <span class=\"cm-default-label\" *ngIf=\"!selection\">{{countryLabel}}</span>\r\n      <span class=\"cm-country-name\" *ngIf=\"selection\">{{selection?.countryName}}</span>\r\n    </div>\r\n    <div class=\"cm-value-label\">\r\n      <span class=\"cm-value-text\"\r\n        [ngClass]=\"{'has-value': selection}\">{{valueLabel}}<span *ngIf=\"selection\">: </span></span>\r\n      <span class=\"cm-value-content\" *ngIf=\"selection\">{{selectionValue}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"cm-extended-caption\" *ngIf=\"selection?.extra && selection?.extra.length > 0\">\r\n    <div *ngFor=\"let item of selection?.extra\" class=\"cm-extended-item\">\r\n      <span class=\"cm-extended-label\">{{item.key}}</span>:\r\n      <span class=\"cm-extended-value\">{{item.val}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host{display:flex;flex-flow:column nowrap;justify-content:space-between;align-items:stretch;align-content:stretch}.major-block.loading{flex:0 1 auto;align-self:center}.major-block.loading .text{font-style:italic;font-family:sans-serif;color:gray}.major-block.cm-map-content{flex:0 1 auto}.major-block.goes-first{order:0}.major-block:not(.goes-first){order:1}.major-block.cm-caption-container{flex:0 1 auto;display:flex;flex-flow:column nowrap;justify-content:space-between}.cm-simple-caption{display:flex;flex-flow:row nowrap;justify-content:space-between}.cm-country-label{flex:0 1 auto;align-self:flex-start}.cm-value-label{flex:0 1 auto;align-self:flex-end}.cm-country-label,.cm-value-label{flex:0 1 auto}.cm-country-label .cm-country-name{font-weight:700}.cm-country-label .cm-country-name,.cm-value-label .cm-value-text{color:#333}.cm-country-label .cm-default-label,.cm-value-label .cm-value-text:not(.has-value){font-style:italic;color:#777}.cm-extended-caption{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));grid-gap:5px}.cm-extended-item{margin:5px auto}.cm-extended-item .cm-extended-label{font-weight:700}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.CountriesMapBaseComponent, selector: "countries-map-base" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CountriesMapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'countries-map', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"major-block loading\" *ngIf=\"loading\"><span class=\"text\">Loading map...</span></div>\r\n\r\n<countries-map-base class=\"major-block cm-map-content\" #mapContent (click)=\"onMapSelect($event)\" [ngClass]=\"{'goes-first': captionBelow}\">\r\n</countries-map-base>\r\n\r\n<div class=\"major-block cm-caption-container\" [ngClass]=\"{'goes-first': !captionBelow}\"\r\n  *ngIf=\"!loading && showCaption\">\r\n  <div class=\"cm-simple-caption\">\r\n    <div class=\"cm-country-label\">\r\n      <span class=\"cm-default-label\" *ngIf=\"!selection\">{{countryLabel}}</span>\r\n      <span class=\"cm-country-name\" *ngIf=\"selection\">{{selection?.countryName}}</span>\r\n    </div>\r\n    <div class=\"cm-value-label\">\r\n      <span class=\"cm-value-text\"\r\n        [ngClass]=\"{'has-value': selection}\">{{valueLabel}}<span *ngIf=\"selection\">: </span></span>\r\n      <span class=\"cm-value-content\" *ngIf=\"selection\">{{selectionValue}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"cm-extended-caption\" *ngIf=\"selection?.extra && selection?.extra.length > 0\">\r\n    <div *ngFor=\"let item of selection?.extra\" class=\"cm-extended-item\">\r\n      <span class=\"cm-extended-label\">{{item.key}}</span>:\r\n      <span class=\"cm-extended-value\">{{item.val}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host{display:flex;flex-flow:column nowrap;justify-content:space-between;align-items:stretch;align-content:stretch}.major-block.loading{flex:0 1 auto;align-self:center}.major-block.loading .text{font-style:italic;font-family:sans-serif;color:gray}.major-block.cm-map-content{flex:0 1 auto}.major-block.goes-first{order:0}.major-block:not(.goes-first){order:1}.major-block.cm-caption-container{flex:0 1 auto;display:flex;flex-flow:column nowrap;justify-content:space-between}.cm-simple-caption{display:flex;flex-flow:row nowrap;justify-content:space-between}.cm-country-label{flex:0 1 auto;align-self:flex-start}.cm-value-label{flex:0 1 auto;align-self:flex-end}.cm-country-label,.cm-value-label{flex:0 1 auto}.cm-country-label .cm-country-name{font-weight:700}.cm-country-label .cm-country-name,.cm-value-label .cm-value-text{color:#333}.cm-country-label .cm-default-label,.cm-value-label .cm-value-text:not(.has-value){font-style:italic;color:#777}.cm-extended-caption{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));grid-gap:5px}.cm-extended-item{margin:5px auto}.cm-extended-item .cm-extended-label{font-weight:700}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { data: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyaWVzLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWIvc3JjL2xpYi9jb3VudHJpZXMtbWFwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi9zcmMvbGliL2NvdW50cmllcy1tYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLFlBQVksRUFJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJekQsT0FBTyxFQUFFLEVBQUUsSUFBSSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUM7QUFDcEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRTNFLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUNqQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDeEIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxTQUFrQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzNFLE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBa0IsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNB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QyxPQUFPLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOztrSEE1S1UscUJBQXFCO3NHQUFyQixxQkFBcUIsNmlCQW1CZ0IsVUFBVSxrREN6RDVELDB6Q0F5QkE7MkZEYWEscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLGVBQWUsbUJBQ1IsdUJBQXVCLENBQUMsTUFBTTt3R0FNdEMsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFFcUIsVUFBVTtzQkFBcEMsTUFBTTtnQkFDb0IsVUFBVTtzQkFBcEMsTUFBTTtnQkFDb0IsV0FBVztzQkFBckMsTUFBTTtnQkFFd0UsVUFBVTtzQkFBeEYsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhckVycm9yQ29kZSB9IGZyb20gJy4vY2hhcnQtZXZlbnRzLmludGVyZmFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQ2hhcnRTZWxlY3RFdmVudCwgQ2hhcnRFcnJvckV2ZW50IH0gZnJvbSAnLi9jaGFydC1ldmVudHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHR5cGUgeyBDb3VudHJpZXNEYXRhLCBTZWxlY3Rpb25FeHRyYSwgRHJhd2FibGVDb3VudHJpZXMsIFNlbGVjdGlvbixcclxuICBWYWxpZEV4dHJhRGF0YSwgRHJhd2FibGVDb3VudHJ5LCBDb3VudHJ5RGF0YSB9IGZyb20gJy4vZGF0YS10eXBlcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBlbiBhcyBjb3VudHJpZXNFTiB9IGZyb20gJ0BqYWdvbWYvY291bnRyaWVzbGlzdCc7XHJcbmltcG9ydCB7IHNjYWxlIH0gZnJvbSAnY2hyb21hLWpzJztcclxuXHJcbmNvbnN0IGV4aXN0cyA9IGl0ZW0gPT4gdHlwZW9mIGl0ZW0gIT09ICd1bmRlZmluZWQnICYmIGl0ZW0gIT09IG51bGw7XHJcbmNvbnN0IGNvdW50cnlOdW0gPSAoaXRlbTogQ291bnRyeURhdGEpID0+IHBhcnNlSW50KGl0ZW0udmFsdWU/LnRvU3RyaW5nKCkpO1xyXG5cclxuY29uc3QgY291bnRyeUNsYXNzID0gJ2NvdW50cnl4eCc7XHJcbmNvbnN0IG9jZWFuSWQgPSAnb2NlYW4nO1xyXG5jb25zdCBnZXRTdHJva2VXaWR0aCA9IChpc0hvdmVyZWQ6IGJvb2xlYW4pID0+IGlzSG92ZXJlZCA/ICcwLjIlJyA6ICcwLjElJztcclxuY29uc3QgZ2V0U3Ryb2tlQ29sb3IgPSAoaXNIb3ZlcmVkOiBib29sZWFuKSA9PiBpc0hvdmVyZWQgPyAnIzg4OCcgOiAnI2FmYWZhZic7XHJcblxyXG5jb25zdCBjb3VudHJ5TmFtZSA9IChjb3VudHJ5Q29kZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICByZXR1cm4gY291bnRyaWVzRU5bY291bnRyeUNvZGVdO1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb3VudHJpZXMtbWFwJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRyaWVzLW1hcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY291bnRyaWVzLW1hcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNNYXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBDb3VudHJpZXNEYXRhO1xyXG4gIEBJbnB1dCgpIGNvdW50cnlMYWJlbCA9ICdDb3VudHJ5JztcclxuICBASW5wdXQoKSB2YWx1ZUxhYmVsID0gJ1ZhbHVlJztcclxuICBASW5wdXQoKSBzaG93Q2FwdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgY2FwdGlvbkJlbG93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtaW5WYWx1ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFZhbHVlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbWluQ29sb3IgPSAnd2hpdGUnO1xyXG4gIEBJbnB1dCgpIG1heENvbG9yID0gJ3JlZCc7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICBASW5wdXQoKSBub0RhdGFDb2xvciA9ICcjQ0ZDRkNGJztcclxuICBASW5wdXQoKSBleGNlcHRpb25Db2xvciA9ICcjRkZFRTU4JztcclxuXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgcmVhZG9ubHkgY2hhcnRSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcHJpdmF0ZSByZWFkb25seSBjaGFydEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEVycm9yRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHByaXZhdGUgcmVhZG9ubHkgY2hhcnRTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0U2VsZWN0RXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21hcENvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgcHJpdmF0ZSByZWFkb25seSBtYXBDb250ZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgbWFwRGF0YTogRHJhd2FibGVDb3VudHJpZXM7XHJcbiAgc2VsZWN0aW9uOiBTZWxlY3Rpb24gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBpbm5lckxvYWRpbmcgPSB0cnVlO1xyXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5uZXJMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGlvblZhbHVlKCk6IFZhbGlkRXh0cmFEYXRhIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5zZWxlY3Rpb24uY291bnRyeUlkXS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFeHRyYVNlbGVjdGVkKGNvdW50cnk6IHN0cmluZyk6IFNlbGVjdGlvbkV4dHJhW10gfCBudWxsIHtcclxuICAgIGNvbnN0IHsgZXh0cmEgfSA9IHRoaXMuZGF0YVtjb3VudHJ5XTtcclxuICAgIHJldHVybiBleHRyYSAmJiBPYmplY3Qua2V5cyhleHRyYSkubWFwKGtleSA9PiAoeyBrZXksIHZhbDogZXh0cmFba2V5XSB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdENvdW50cnkoY291bnRyeT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSBjb3VudHJ5ID8ge1xyXG4gICAgICBjb3VudHJ5SWQ6IGNvdW50cnksXHJcbiAgICAgIGNvdW50cnlOYW1lOiBjb3VudHJ5TmFtZShjb3VudHJ5KSxcclxuICAgICAgZXh0cmE6IHRoaXMuZ2V0RXh0cmFTZWxlY3RlZChjb3VudHJ5KVxyXG4gICAgfSA6IG51bGw7XHJcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hhbmdlZE1hcFZhbHVlQnV0Tm90T25TdGFydCA9IFsnZGF0YScsICdtaW5Db2xvcicsICdtYXhDb2xvcicsICdiYWNrZ3JvdW5kQ29sb3InLCAnbm9EYXRhQ29sb3InLCAnZXhjZXB0aW9uQ29sb3InXVxyXG4gICAgICAuc29tZShhdHRyID0+IGNoYW5nZXNbYXR0cl0gJiYgIWNoYW5nZXNbYXR0cl0uZmlyc3RDaGFuZ2UpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VkTWFwVmFsdWVCdXROb3RPblN0YXJ0KSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplTWFwKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gZGF0YSBpcyBwcm92aWRlZDogbWlnaHQgYmUgYWJsZSB0byBwYWludCBjb3VudHJpZXMgaW4gY29sb3JzXHJcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAvLyBnZXQgaGlnaGVzdCB2YWx1ZSBpbiByYW5nZVxyXG4gICAgICAgIGNvbnN0IG1heFZhbCA9IGV4aXN0cyh0aGlzLm1heFZhbHVlKSA/IHRoaXMubWF4VmFsdWUgOiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkucmVkdWNlKFxyXG4gICAgICAgICAgKGFjYywgY3VycikgPT4gY291bnRyeU51bShjdXJyKSA+IGFjYyB8fCBhY2MgPT09IG51bGw/IGNvdW50cnlOdW0oY3VycikgOiBhY2MsIG51bGwgYXMgbnVtYmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBnZXQgbG93ZXN0IHZhbHVlIGluIHJhbmdlXHJcbiAgICAgICAgY29uc3QgbWluVmFsID0gZXhpc3RzKHRoaXMubWluVmFsdWUpID8gdGhpcy5taW5WYWx1ZSA6IE9iamVjdC52YWx1ZXModGhpcy5kYXRhKS5yZWR1Y2UoXHJcbiAgICAgICAgICAoYWNjLCBjdXJyKSA9PiBjb3VudHJ5TnVtKGN1cnIpIDwgYWNjIHx8IGFjYyA9PT0gbnVsbD8gY291bnRyeU51bShjdXJyKSA6IGFjYywgbnVsbCBhcyBudW1iZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBtYXAgdmFsdWVzIGluIHJhbmdlIHRvIGNvbG9yc1xyXG4gICAgICAgIGNvbnN0IHZhbFRvQ29sID0gc2NhbGUoW3RoaXMubWluQ29sb3IsIHRoaXMubWF4Q29sb3JdKS5jb2xvcnMoKG1heFZhbCA/PyAxKSAtIChtaW5WYWwgPz8gMCkgKyAxKS5yZWR1Y2UoKGFjYywgY3VyciwgaSkgPT5cclxuICAgICAgICAgICh7IC4uLmFjYywgW2kgKyBtaW5WYWxdOiBjdXJyIH0pLCB7fSBhcyB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGxvY2FsIE1hcCB1c2luZyBwcm92aWRlZCBkYXRhICsgY2FsY3VsYXRlZCBjb2xvcnNcclxuICAgICAgICB0aGlzLm1hcERhdGEgPSBPYmplY3QuZW50cmllcyh0aGlzLmRhdGEpLnJlZHVjZSgoYWNjLCBbIGNvdW50cnlJZCwgY291bnRyeVZhbCBdKSA9PlxyXG4gICAgICAgICAgKHsgLi4uYWNjLFxyXG4gICAgICAgICAgICBbY291bnRyeUlkLnRvTG93ZXJDYXNlKCldOiB7XHJcbiAgICAgICAgICAgICAgLi4uY291bnRyeVZhbCxcclxuICAgICAgICAgICAgICBjb2xvcjogdmFsVG9Db2xbY291bnRyeU51bShjb3VudHJ5VmFsKV0gLy8gdmFsdWUgaW4gYmV0d2VlbiBtaW5WYWwgYW5kIG1heFZhbFxyXG4gICAgICAgICAgICAgICAgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAvLyB2YWx1ZSBiZWxvdyBtaW5WYWxcclxuICAgICAgICAgICAgICAgICAgY291bnRyeU51bShjb3VudHJ5VmFsKSA8PSBtaW5WYWwgPyB2YWxUb0NvbFttaW5WYWxdIDpcclxuICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgYWJvdmUgbWF4VmFsXHJcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlOdW0oY291bnRyeVZhbCkgPj0gbWF4VmFsID8gdmFsVG9Db2xbbWF4VmFsXVxyXG4gICAgICAgICAgICAgICAgICAvLyB3ZWlyZDsgc2hvdWxkIG5ldmVyIGdldCB0byBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmV4Y2VwdGlvbkNvbG9yXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gYXMgRHJhd2FibGVDb3VudHJ5IH0pLFxyXG4gICAgICAgICAge30gYXMgRHJhd2FibGVDb3VudHJpZXNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgLy8gbm8gZGF0YSBwcm92aWRlZDogd2lsbCBwYWludCBwbGFpbiBtYXBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1hcERhdGEgPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc3ZnTWFwID0gdGhpcy5tYXBDb250ZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gYXMgU1ZHU1ZHRWxlbWVudDtcclxuICAgICAgc3ZnTWFwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICBzdmdNYXAucXVlcnlTZWxlY3RvckFsbDxTVkdTVkdFbGVtZW50PihgLiR7Y291bnRyeUNsYXNzfWApLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFwSXRlbSA9IHRoaXMubWFwRGF0YVtpdGVtLmlkLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIGNvbnN0IGlzRXhjZXB0aW9uID0gbWFwSXRlbSA/ICFleGlzdHMobWFwSXRlbS52YWx1ZSkgOiBmYWxzZTtcclxuICAgICAgICBpdGVtLnN0eWxlLmZpbGwgPSBtYXBJdGVtID8gaXNFeGNlcHRpb24gPyB0aGlzLmV4Y2VwdGlvbkNvbG9yIDogbWFwSXRlbS5jb2xvciA6IHRoaXMubm9EYXRhQ29sb3I7XHJcbiAgICAgICAgaXRlbS5vbm1vdXNlZW50ZXIgPSB0aGlzLmNvdW50cnlIb3Zlci5iaW5kKHRoaXMsIGl0ZW0sIHRydWUpO1xyXG4gICAgICAgIGl0ZW0ub25tb3VzZWxlYXZlID0gdGhpcy5jb3VudHJ5SG92ZXIuYmluZCh0aGlzLCBpdGVtLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbm5lckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMub25DaGFydFJlYWR5KCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhcnRlcnJvcih7IGlkOiBDaGFyRXJyb3JDb2RlLmxvYWRpbmcsIG1lc3NhZ2U6ICdDb3VsZCBub3QgbG9hZCcgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvdW50cnlIb3ZlcihpdGVtOiBTVkdFbGVtZW50LCBob3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpdGVtLnN0eWxlLnN0cm9rZVdpZHRoID0gZ2V0U3Ryb2tlV2lkdGgoaG92ZXJlZCk7XHJcbiAgICBpdGVtLnN0eWxlLnN0cm9rZSA9IGdldFN0cm9rZUNvbG9yKGhvdmVyZWQpO1xyXG4gICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsPFNWR0VsZW1lbnQ+KCcubGFuZHh4JykuZm9yRWFjaChpID0+IHtcclxuICAgICAgaS5zdHlsZS5zdHJva2VXaWR0aCA9IGdldFN0cm9rZVdpZHRoKGhvdmVyZWQpO1xyXG4gICAgICBpLnN0eWxlLnN0cm9rZSA9IGdldFN0cm9rZUNvbG9yKGhvdmVyZWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2hhcnRSZWFkeSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlubmVyTG9hZGluZykge1xyXG4gICAgICB0aGlzLmlubmVyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNoYXJ0UmVhZHkuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNoYXJ0ZXJyb3IoZXJyb3I6IENoYXJ0RXJyb3JFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFydEVycm9yLmVtaXQoZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgb25NYXBTZWxlY3QoeyB0YXJnZXQgfTogeyB0YXJnZXQ/OiBTVkdFbGVtZW50IH0pOiB2b2lkIHtcclxuICAgIGNvbnN0IGV2ZW50OiBDaGFydFNlbGVjdEV2ZW50ID0ge1xyXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBjb3VudHJ5OiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBuZXdJdGVtOiBTVkdFbGVtZW50O1xyXG4gICAgaWYgKHRhcmdldC5pZCA9PT0gb2NlYW5JZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdENvdW50cnkobnVsbCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3SXRlbSA9IHRhcmdldDtcclxuICAgICAgd2hpbGUgKCFuZXdJdGVtLmNsYXNzTGlzdC5jb250YWlucyhjb3VudHJ5Q2xhc3MpKSB7XHJcbiAgICAgICAgbmV3SXRlbSA9IG5ld0l0ZW0ucGFyZW50Tm9kZSBhcyBTVkdFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMubWFwRGF0YVtuZXdJdGVtPy5pZF07XHJcbiAgICBpZiAoY291bnRyeSkge1xyXG4gICAgICBldmVudC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGV2ZW50LnZhbHVlID0gY291bnRyeU51bShjb3VudHJ5KTtcclxuICAgICAgZXZlbnQuY291bnRyeSA9IG5ld0l0ZW0uaWQudG9VcHBlckNhc2UoKTtcclxuICAgICAgdGhpcy5zZWxlY3RDb3VudHJ5KGV2ZW50LmNvdW50cnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RDb3VudHJ5KG51bGwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFydFNlbGVjdC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYWpvci1ibG9jayBsb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+TG9hZGluZyBtYXAuLi48L3NwYW4+PC9kaXY+XHJcblxyXG48Y291bnRyaWVzLW1hcC1iYXNlIGNsYXNzPVwibWFqb3ItYmxvY2sgY20tbWFwLWNvbnRlbnRcIiAjbWFwQ29udGVudCAoY2xpY2spPVwib25NYXBTZWxlY3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsnZ29lcy1maXJzdCc6IGNhcHRpb25CZWxvd31cIj5cclxuPC9jb3VudHJpZXMtbWFwLWJhc2U+XHJcblxyXG48ZGl2IGNsYXNzPVwibWFqb3ItYmxvY2sgY20tY2FwdGlvbi1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J2dvZXMtZmlyc3QnOiAhY2FwdGlvbkJlbG93fVwiXHJcbiAgKm5nSWY9XCIhbG9hZGluZyAmJiBzaG93Q2FwdGlvblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbS1zaW1wbGUtY2FwdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtLWNvdW50cnktbGFiZWxcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbS1kZWZhdWx0LWxhYmVsXCIgKm5nSWY9XCIhc2VsZWN0aW9uXCI+e3tjb3VudHJ5TGFiZWx9fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbS1jb3VudHJ5LW5hbWVcIiAqbmdJZj1cInNlbGVjdGlvblwiPnt7c2VsZWN0aW9uPy5jb3VudHJ5TmFtZX19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY20tdmFsdWUtbGFiZWxcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbS12YWx1ZS10ZXh0XCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7J2hhcy12YWx1ZSc6IHNlbGVjdGlvbn1cIj57e3ZhbHVlTGFiZWx9fTxzcGFuICpuZ0lmPVwic2VsZWN0aW9uXCI+OiA8L3NwYW4+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNtLXZhbHVlLWNvbnRlbnRcIiAqbmdJZj1cInNlbGVjdGlvblwiPnt7c2VsZWN0aW9uVmFsdWV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbS1leHRlbmRlZC1jYXB0aW9uXCIgKm5nSWY9XCJzZWxlY3Rpb24/LmV4dHJhICYmIHNlbGVjdGlvbj8uZXh0cmEubGVuZ3RoID4gMFwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWxlY3Rpb24/LmV4dHJhXCIgY2xhc3M9XCJjbS1leHRlbmRlZC1pdGVtXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY20tZXh0ZW5kZWQtbGFiZWxcIj57e2l0ZW0ua2V5fX08L3NwYW4+OlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNtLWV4dGVuZGVkLXZhbHVlXCI+e3tpdGVtLnZhbH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=