import { ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import type { CountriesData, DrawableCountries, Selection, ValidExtraData } from './data-types.interface';
import * as ɵngcc0 from '@angular/core';
export declare class CountriesMapComponent implements AfterViewInit, OnChanges {
    private readonly cdRef;
    data: CountriesData;
    countryLabel: string;
    valueLabel: string;
    showCaption: boolean;
    captionBelow: boolean;
    minValue: number;
    maxValue: number;
    minColor: string;
    maxColor: string;
    backgroundColor: string;
    noDataColor: string;
    exceptionColor: string;
    private readonly chartReady;
    private readonly chartError;
    private readonly chartSelect;
    private readonly mapContent;
    mapData: DrawableCountries;
    selection: Selection | null;
    private innerLoading;
    get loading(): boolean;
    get selectionValue(): ValidExtraData;
    constructor(cdRef: ChangeDetectorRef);
    private getExtraSelected;
    private selectCountry;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private initializeMap;
    private countryHover;
    private onChartReady;
    private onCharterror;
    onMapSelect({ target }: {
        target?: SVGElement;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CountriesMapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CountriesMapComponent, "countries-map", never, { "countryLabel": "countryLabel"; "valueLabel": "valueLabel"; "showCaption": "showCaption"; "captionBelow": "captionBelow"; "minColor": "minColor"; "maxColor": "maxColor"; "backgroundColor": "backgroundColor"; "noDataColor": "noDataColor"; "exceptionColor": "exceptionColor"; "data": "data"; "minValue": "minValue"; "maxValue": "maxValue"; }, { "chartReady": "chartReady"; "chartError": "chartError"; "chartSelect": "chartSelect"; }, never, never, false>;
}

//# sourceMappingURL=countries-map.component.d.ts.map