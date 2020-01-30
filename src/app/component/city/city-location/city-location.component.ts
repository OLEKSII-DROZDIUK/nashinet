import { Component, ElementRef, Inject, Input, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";

import { GlobalService } from '../../../services/global.service';

@Component({
    selector: 'city-location',
    templateUrl:'./city-location.component.html',
    styleUrls: ['./city-location.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })
  export class CityLocation implements AfterViewInit {
    @Input('content') cityData: Object = null;
    @ViewChild('content', {static: false}) content:  Object;

	public selectedCityId:number;
    
	constructor(@Inject(ElementRef) private element: ElementRef,
				private globalService: GlobalService,) {
                    
	}
	
	public ngOnInit(): void {
		this.changeSelectCity(this.cityData[0].id); //default its 1st index of array

		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		
	};
    

    public ngAfterViewInit(): void {   

        
    };

    public toggleSettingBtn(event) {
		const hasClass = event.target.classList.contains('open');

		if(hasClass) {
			event.target.classList.remove("open");
		} else {
			event.target.classList.add("open");
		}
	};

	public publicCity(event, cityId:number) {
		const parent = event.target.parentElement.closest('.city-list__item');
		console.log("public: ", event.target, cityId);
	};


	public deleteCity(event, cityId:number) {
		const parent = event.target.parentElement.closest('.city-list__item');
		parent.remove();
		console.log("delete city ID: ", cityId);
	};

	public changeSelectCity( id: number) {
		this.selectedCityId = id;
		this.globalService.changeSelectCityG(id);
	};

};