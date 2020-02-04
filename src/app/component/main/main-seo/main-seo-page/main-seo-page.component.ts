import { Component, ElementRef, Inject, Input,OnDestroy,OnInit, ViewEncapsulation,
     ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';


import { Subscription } from 'rxjs';


@Component({
    selector: 'main-seo-page',
    templateUrl: './main-seo-page.component.html',
    styleUrls: ['./main-seo-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })

  export class MainSeoPage implements OnInit, AfterViewInit, OnDestroy {
    @Input('content') citySeoPages: any;
    @ViewChild('content', {static: false}) content:  any;

	public selectedPageId: String;

    constructor(@Inject(ElementRef) private element: ElementRef,
                @Inject(DOCUMENT) private document: Document,
                private cdRef:ChangeDetectorRef,) {            
    };

    public ngOnInit(): void {
		this.selectedPageId = this.citySeoPages[0].id
    };
    

    public ngAfterViewInit(): void {   

    };

    public ngOnDestroy(): void {
		
	};

  ///life off

	public changeSelectSeoPage( id: String) {
		this.selectedPageId = id;
	};

	public toggleSettingBtn(event) {

		const hasClass = event.target.classList.contains('open');

		if(hasClass) {
			event.target.classList.remove("open");
		} else {
			event.target.classList.add("open");
		}
	};

	public publicPage(id:String) {
		console.log("public page")
	};
	
	public archivePage(id: String) {
		console.log("archive seo page")
	};

	public deleteCity(id: String) {
		console.log(" delete page")
	}


};