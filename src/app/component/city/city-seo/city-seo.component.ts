import { Component, ElementRef, Inject, Input, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit } from "@angular/core";

import { Store } from '@ngrx/store'
import { AppState } from '../../../ngrx/app.state';

import { GlobalService } from '../../../services/global.service';
import { DeleteCity } from "../../../ngrx/actions/city.action";

import {City} from '../../../interfaces/city.model';

@Component({
    selector: 'city-seo',
    templateUrl:'./city-seo.component.html',
    styleUrls: ['./city-seo.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })
  export class CitySeo implements AfterViewInit, OnInit {
    @Input('content') cityData: City[];
    @ViewChild('content', {static: false}) content:  City[];

	public selectedCityId:string;
	public allCityData: City[];

	constructor(@Inject(ElementRef) private element: ElementRef,
				private globalService: GlobalService,
				private store: Store<AppState>) {
                    
	}
	
	public ngOnInit(): void {
		this.store.select('cityPage').subscribe(({allCityData}) => {  //lisent store
			this.allCityData = allCityData;
		})
		this.changeSelectCity(this.allCityData[0].id); //default its 1st index of array

		
	};
    

    public ngAfterViewInit(): void {   

        
	};
	
	//////LIFE OFF

	public changeSelectCity( id: string) {
		this.selectedCityId = id;
		this.globalService.changeSelectCityG(id);
	};

};