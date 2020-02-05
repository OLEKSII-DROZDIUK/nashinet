import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store'
import { AppState } from '../../ngrx/app.state';

import { City } from '../../interfaces/city.model';
import { AddCity, LoadCitiesAction } from '../../ngrx/actions/city.action'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})

export class CityComponent implements OnInit, AfterViewInit, OnDestroy {
	public cityData:City[] = [];

	public currentMenuCategory:number;
	//search city variable
	public citySearchValue: string  = "";
	public citySearchArray: Array<any> = [];
	public citySearchOn: boolean = false;

	//Variable for ngrx
	loading$: Observable<boolean>;
	error$: Observable<Error>;

	constructor(@Inject(DOCUMENT) private document: Document,
				private cdRef:ChangeDetectorRef,
				private store: Store<AppState>) {
		
	};

// //////////////////////////////////////////////////////////////////////// LIFE CYCLE
	public ngOnInit(): void {
	
		this.store.dispatch(new LoadCitiesAction());
		
		this.store.select('cityPage').subscribe(({allCityData}) => {  //lisent store
			this.cityData = allCityData;
			this.cdRef.detectChanges();
		})

		this.store.select('headerPage').subscribe(({choiceHeaderPage}) => {
			this.currentMenuCategory = choiceHeaderPage;
			this.citySearchOn = false;
			this.cdRef.detectChanges();
		})

	}

	public ngAfterViewInit(): void {
		

	};

	public ngOnDestroy(): void {
		this.cdRef.detach();
	};

//////////////////////////////////////////////////////////////////////////////////// LIFE CYCLE ENd

	public addNewCity() {
		const id = `f${(+new Date).toString(16)}`;
		this.store.dispatch(new AddCity({id: id, name: "NEW City", rout: "/new_city", logo: "/assets/images/city/city_img.svg", published: false}))
		this.cdRef.detectChanges();
	};

	public onSearchCity(event) {
		this.citySearchValue = event.target.value;

		const searchStr = (str:string, arr:Array<any>) => {
			arr.map(obj =>{
				if(obj.name.toLowerCase().indexOf(str.toLocaleLowerCase()) === 0) {
					this.citySearchArray.push(obj);
				};
			});
			this.cdRef.detectChanges();
		};

		if(this.citySearchValue.length > 2) {
			this.citySearchOn = true;
			this.citySearchArray = [];
			searchStr(this.citySearchValue, this.cityData);
		} else {
			this.citySearchOn = false;
			this.citySearchArray = [];
		}
	};

};
