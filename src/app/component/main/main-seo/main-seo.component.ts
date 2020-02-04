import { Component, ElementRef, Inject, Input,OnDestroy,OnInit, ViewEncapsulation,
     ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store'
import { AppState } from '../../../ngrx/app.state';
import { AddSeoPage } from '../../../ngrx/actions/seo-page.action';

import { Subscription } from 'rxjs';



@Component({
    selector: 'main-seo',
    templateUrl: './main-seo.component.html',
    styleUrls: ['./main-seo.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })

  export class MainSeo implements OnInit, AfterViewInit, OnDestroy {
    public citySeoPages:any;
    public citySeoPageArray: Array<any> = [];

    public paramsPageLang: string = "ru";
    public seoPageLang: string = "ru"

    public paramsOn: boolean = true;
    public seoPageSearchOn: boolean = false;
    public pageSearchValue:string;
    
    public seoMainForm = new FormGroup({
        inputId: new FormControl('',  Validators.compose([Validators.required])),
        inputUrl: new FormControl('',  Validators.compose([Validators.required])),
        inputDateCreate: new FormControl('',  Validators.compose([Validators.required])),
        inputDataChange: new FormControl('',  Validators.compose([Validators.required])),
        inputCreated: new FormControl('',  Validators.compose([Validators.required])),
        inputLastChange: new FormControl('',  Validators.compose([Validators.required])),
    });
    
    public seoForm =  new FormGroup({
        canonUrl: new FormControl('',  Validators.compose([Validators.required])),
        redirectTo: new FormControl('',  Validators.compose([Validators.required])),
    })


    constructor(@Inject(ElementRef) private element: ElementRef,
                @Inject(DOCUMENT) private document: Document,
                private cdRef:ChangeDetectorRef,
                private store: Store<AppState>) {            
    };

    public ngOnInit(): void {


        this.store.select('citySeoPage').subscribe(({citySeoPages}) => {  //before this need send Id city to server, and return Array of Page
            this.citySeoPages = citySeoPages;
        });
        
    
    };
    

    public ngAfterViewInit(): void {   

    };

    public ngOnDestroy(): void {
		
	};

    ///life off


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

    public changeContentLang(event, lang: string) {
        const tabs = event.target.parentNode as HTMLDivElement;
        this.paramsPageLang = lang;

        if(!event.target.classList.contains('active')) {
            for (let i = 0; i < tabs.childNodes.length; i++) {
				let currentNode = tabs.childNodes[i] as HTMLDivElement;

				currentNode.classList.remove("active");
			};
            event.target.classList.add("active");
        };  
    };

    public changeContentSeoLang(event, lang: string) {
        const tabs = event.target.parentNode as HTMLDivElement;
        this.seoPageLang = lang; 

        if(!event.target.classList.contains('active')) {
            for (let i = 0; i < tabs.childNodes.length; i++) {
				let currentNode = tabs.childNodes[i] as HTMLDivElement;

				currentNode.classList.remove("active");
			};
            event.target.classList.add("active");
        };  
    };

    public addNewPage() {
        const id = `f${(+new Date).toString(16)}`;
		this.store.dispatch(new AddSeoPage({id: id, name: "NEW PAGE", rout: "/new_page", status: "not_public"}))
		this.cdRef.detectChanges();
    };

    public onSearchPage(event) {
		this.pageSearchValue = event.target.value;

		const searchStr = (str:string, arr:Array<any>) => {
			arr.map(obj =>{
				if(obj.name.toLowerCase().indexOf(str.toLocaleLowerCase()) === 0) {
					this.citySeoPageArray.push(obj);
				};
			});
			this.cdRef.detectChanges();
		};

		if(this.pageSearchValue.length > 2) {
			this.seoPageSearchOn = true;
			this.citySeoPageArray = [];
			searchStr(this.pageSearchValue, this.citySeoPages);
		} else {
			this.seoPageSearchOn = false;
			this.citySeoPageArray = [];
		}
    };

};