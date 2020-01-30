import { Component, ElementRef, Inject, Input,OnDestroy,OnInit, ViewEncapsulation,
     ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';

import { GlobalService } from '../../../services/global.service';
import { Subscription } from 'rxjs';

//store
import { CITY_IN_STORE } from '../../../DATA/city-data';

@Component({
    selector: 'main-location',
    templateUrl: './main-location.component.html',
    styleUrls: ['./main-location.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })

  export class MainLocation implements OnInit, AfterViewInit, OnDestroy {
    public cityData:{ id: number, name: string, rout: string, logo: string }[] = [];
    public currentCityData:Object = null;
    public paramsOn: boolean = true;
    public contentFormLang: string = "ru";
    public subCityLang: string =  "ru";
    public subCityFormInputs:Array<any> = [];
    public selectedCityId:number = 0;
    
    private subsSelectCityId: Subscription = new Subscription();

    constructor(@Inject(ElementRef) private element: ElementRef,
                @Inject(DOCUMENT) private document: Document,
                private globalService: GlobalService,
                private cdRef:ChangeDetectorRef,) {            
    };

    public ngOnInit(): void {
        this.cityData = CITY_IN_STORE;
        this.searchCurrentCity(this.selectedCityId);
        
        this.subsSelectCityId = this.globalService.$selectedCityId.subscribe((id: number) => {
            this.selectedCityId = id;
            this.searchCurrentCity(id);
            console.log("in subs select city id")
			this.cdRef.detectChanges();
        })
    
    };
    

    public ngAfterViewInit(): void {   

    };

    public ngOnDestroy(): void {
		this.subsSelectCityId.unsubscribe();
	};

    ///life off

    public searchCurrentCity(id:number) {
        this.currentCityData = this.cityData.filter(arr => arr.id === id);
        console.log(this.currentCityData)
    };

    public changeContent(event) {
        const tabs = event.target.parentNode as HTMLDivElement;

        if(!event.target.classList.contains('active')){
            for (let i = 0; i < tabs.childNodes.length; i++) {
				let currentNode = tabs.childNodes[i] as HTMLDivElement;

				currentNode.classList.remove("active");
			};
            event.target.classList.add("active")
            this.paramsOn = !this.paramsOn
        };            
    };

    public changeSetElemsLang(event, lang:string) {
        const tabs = event.target.parentNode as HTMLDivElement;
        this.subCityLang = lang;

        if(!event.target.classList.contains('active')) {
            for (let i = 0; i < tabs.childNodes.length; i++) {
				let currentNode = tabs.childNodes[i] as HTMLDivElement;

				currentNode.classList.remove("active");
			};
            event.target.classList.add("active");
        };  
    };

    public changeContentLang(event, lang: string) {
        const tabs = event.target.parentNode as HTMLDivElement;
        this.contentFormLang = lang;

        if(!event.target.classList.contains('active')) {
            for (let i = 0; i < tabs.childNodes.length; i++) {
				let currentNode = tabs.childNodes[i] as HTMLDivElement;

				currentNode.classList.remove("active");
			};
            event.target.classList.add("active");
        };  
    };

    public delSubCityLine(event:any) {
        const parantConteiner = this.document.getElementById('subCityForm') as HTMLDivElement;
        const parent = event.target.closest("app-material-input-outline") as HTMLDivElement;

        for (let i = 1; i < parantConteiner.childNodes.length; i++) {
            let currentNode = parantConteiner.childNodes[i] as HTMLDivElement;
            if(currentNode ===  parent) {
                this.subCityFormInputs.splice(i--,1);//del from Array
            break;
            };
        
        };
    };

    public addSubCityLine(event) {
        this.subCityFormInputs.push("input");
    };


};