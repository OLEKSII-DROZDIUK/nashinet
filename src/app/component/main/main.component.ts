import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation,
	ElementRef, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy, HostListener} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store'
import { AppState } from '../../ngrx/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
	public currentMenuCategory:number = 1; //set default Location page

	constructor(@Inject(DOCUMENT) private document: Document,
				private cdRef: ChangeDetectorRef,
				private store: Store<AppState>) {
		
	}

// //////////////////////////////////////////////////////////////////////// LIFE CYCLE
	public ngOnInit(): void {

		this.store.select('headerPage').subscribe(({choiceHeaderPage}) => {  //lisent store
			this.currentMenuCategory = choiceHeaderPage;
			this.cdRef.detectChanges();
		})


	}

	public ngAfterViewInit(): void {
		

	};

	public ngOnDestroy(): void {

	};

// ////////////////////////////////////////////////////////////////////////////////// LIFE CYCLE ENd


};
