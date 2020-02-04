import { Component, ElementRef, Inject, Input, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit } from "@angular/core";

import { Store } from '@ngrx/store'
import { AppState } from '../../../ngrx/app.state';

import { GlobalService } from '../../../services/global.service';
import { DeleteCity } from "../../../ngrx/actions/city.action";

import {City} from '../../../interfaces/city.model';

@Component({
    selector: 'city-location',
    templateUrl:'./city-location.component.html',
    styleUrls: ['./city-location.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })
  export class CityLocation implements AfterViewInit, OnInit {
    @Input('content') cityData: City[];
    @ViewChild('content', {static: false}) content:  City[];

	public selectedCityId:string;
	public allCityData: City[];

	constructor(@Inject(ElementRef) private element: ElementRef,
				private globalService: GlobalService,
				private cdRef:ChangeDetectorRef,
				private store: Store<AppState>) {
                    
	}
	
	public ngOnInit(): void {
		this.store.select('cityPage').subscribe(({allCityData}) => {  //lisent store
			this.allCityData = allCityData;
			console.log("CITY DATA:",allCityData)
		})
		this.changeSelectCity(this.allCityData[0].id); //default its 1st index of array
		
	};
    

    public ngAfterViewInit(): void {   

        
	};

	public ngOnDestroy(): void {

		
	}
	
	//////LIFE OFF

    public toggleSettingBtn(event) {
		const hasClass = event.target.classList.contains('open');

		if(hasClass) {
			event.target.classList.remove("open");
		} else {
			event.target.classList.add("open");
		}
	};

	public publicCity(event, cityId:string) {
		const parent = event.target.parentElement.closest('.city-list__item');
		console.log("public: ", event.target, cityId);
	};


	public deleteCity(event, cityId:string) {
		let filtredCity = this.allCityData.filter((arr:City) => {
			if(arr.id !=  cityId) return arr
		});
		this.store.dispatch(new DeleteCity(filtredCity))

		this.changeSelectCity(this.allCityData[0].id);
	};

	public changeSelectCity( id: string) {
		this.selectedCityId = id;
		this.globalService.changeSelectCityG(id);
	};

};