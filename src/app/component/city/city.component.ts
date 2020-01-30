import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Renderer2,
	ElementRef, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { GlobalService } from '../../services/global.service';
//store
import { CITY_IN_STORE } from '../../DATA/city-data';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})

export class CityComponent implements OnInit, AfterViewInit, OnDestroy {
	public cityData:{ id: number, name: string, rout: string, logo: string }[] = [];
	public currentMenuCategory:number = 1;
	//search city variable
	public citySearchValue: string  = "";
	public citySearchArray: Array<any> = [];
	public citySearchOn: boolean = false;

	private subsMenuCategory: Subscription = new Subscription();

	constructor(@Inject(DOCUMENT) private document: Document,
				private cdRef:ChangeDetectorRef,
				private globalService: GlobalService,) {
		
	};

// //////////////////////////////////////////////////////////////////////// LIFE CYCLE
	public ngOnInit(): void {
		this.cityData = CITY_IN_STORE;

		this.subsMenuCategory = this.globalService.$currentMenuCategory.subscribe((index: number) => {
			this.currentMenuCategory = index;
			this.cdRef.detectChanges();
		})
	}

	public ngAfterViewInit(): void {
		

	};

	public ngOnDestroy(): void {
		this.subsMenuCategory.unsubscribe();
	};

//////////////////////////////////////////////////////////////////////////////////// LIFE CYCLE ENd

	public addNewCity() {
		this.cityData = [...this.cityData,{id: 999, name: "NEW City", rout: "/new_city", logo: "/assets/images/city/city_img.svg"}]
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

		if(this.citySearchValue.length > 0) {
			this.citySearchOn = true;
			this.citySearchArray = [];
			searchStr(this.citySearchValue, this.cityData);
		} else {
			this.citySearchOn = false;
			this.citySearchArray = [];
		}
	};


};
