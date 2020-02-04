import { Component, ElementRef, Inject, Input,OnDestroy,OnInit, ViewEncapsulation,
     ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store'
import { AppState } from '../../../ngrx/app.state';

import { GlobalService } from '../../../services/global.service';
import { Subscription } from 'rxjs';

import {City} from '../../../interfaces/city.model';


@Component({
    selector: 'main-location',
    templateUrl: './main-location.component.html',
    styleUrls: ['./main-location.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })

  export class MainLocation implements OnInit, AfterViewInit, OnDestroy {
    public cityData:City[];
    public currentCityData:City[];
    public paramsOn: boolean = true;
    public contentFormLang: string = "ru";
    public subCityLang: string =  "ru";
    public subCityFormInputs:Array<any> = [];
    public selectedCityId:string;

    public strtest:string = 'sadasdasdsdasdasdasdasdas'
    
    private subsSelectCityId: Subscription = new Subscription();

    public cityMainForm = new FormGroup({
        inputId: new FormControl('',  Validators.compose([Validators.required])),
        inputUrl: new FormControl('',  Validators.compose([Validators.required])),
        inputDateCreate: new FormControl('',  Validators.compose([Validators.required])),
        inputDataChange: new FormControl('',  Validators.compose([Validators.required])),
        inputCreated: new FormControl('',  Validators.compose([Validators.required])),
        inputLastChange: new FormControl('',  Validators.compose([Validators.required])),
        inputEmail: new FormControl('',  Validators.compose([Validators.required])),
        inputGoogleMap: new FormControl('',  Validators.compose([Validators.required])),
        inputPhone: new FormControl('',  Validators.compose([Validators.required])),
        inputSaturday: new FormControl('',  Validators.compose([Validators.required])),
        inputSunday: new FormControl('',  Validators.compose([Validators.required])),
        inputWorkWeekday: new FormControl('',  Validators.compose([Validators.required])),
	});

    constructor(@Inject(ElementRef) private element: ElementRef,
                @Inject(DOCUMENT) private document: Document,
                private globalService: GlobalService,
                private cdRef:ChangeDetectorRef,
                private store: Store<AppState>) {            
    };

    public ngOnInit(): void {

        this.store.select('cityPage').subscribe(({allCityData}) => {  //lisent store
            this.cityData = allCityData;
        });
        
        this.searchCurrentCity(this.cityData[0].id);
        
        this.subsSelectCityId = this.globalService.$selectedCityId.subscribe((id: string) => {
            this.selectedCityId = id;
            this.searchCurrentCity(id);
			this.cdRef.detectChanges();
        })
    };
    

    public ngAfterViewInit(): void {   

    };

    public ngOnDestroy(): void {
		this.subsSelectCityId.unsubscribe();
	};

    ///life off

    public searchCurrentCity(id:string) {
        this.currentCityData = this.cityData.filter(arr => arr.id === id);
        this.cdRef.detectChanges();
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
            console.log(this.subCityFormInputs, currentNode)
            if(currentNode ===  parent) {
                i--
                this.subCityFormInputs.splice(i,1);//del from Array
            break;
            };
        };
        
        this.cdRef.detectChanges();
    };

    public addSubCityLine(event) {
        this.subCityFormInputs.push("input");
    };


};