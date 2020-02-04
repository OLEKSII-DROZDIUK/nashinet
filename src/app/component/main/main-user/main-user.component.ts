import { Component, ElementRef, Inject, Input,OnDestroy,OnInit, ViewEncapsulation,
     ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';



import { Subscription } from 'rxjs';



@Component({
    selector: 'main-user',
    templateUrl: './main-user.component.html',
    styleUrls: ['./main-user.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None
  })

  export class MainUserComponent  implements OnInit, AfterViewInit, OnDestroy {

    public  UserMainForm = new FormGroup({
        inputId: new FormControl('',  Validators.compose([Validators.required])),
        inputUrl: new FormControl('',  Validators.compose([Validators.required])),
        inputDateCreate: new FormControl('',  Validators.compose([Validators.required])),
        inputDataChange: new FormControl('',  Validators.compose([Validators.required])),
        inputCreated: new FormControl('',  Validators.compose([Validators.required])),
        inputLastChange: new FormControl('',  Validators.compose([Validators.required])),
        inputEmail: new FormControl('',  Validators.compose([Validators.required])),
        inputFirstName: new FormControl('',  Validators.compose([Validators.required])),
        inputPhone: new FormControl('',  Validators.compose([Validators.required])),
        inputSecondName: new FormControl('',  Validators.compose([Validators.required])),
	});

    constructor(@Inject(ElementRef) private element: ElementRef,
                @Inject(DOCUMENT) private document: Document,
                private cdRef:ChangeDetectorRef,) {            
    };

    public ngOnInit(): void {

        
    
    };
    

    public ngAfterViewInit(): void {   

    };

    public ngOnDestroy(): void {
		
	};

    ///life off



};