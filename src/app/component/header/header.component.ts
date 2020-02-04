import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Renderer2,
	ElementRef, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy, HostListener} from '@angular/core';
import { Router, Data, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from '../../services/global.service';

import { Store } from '@ngrx/store'
import { AppState } from '../../ngrx/app.state';

import { ChangeHeaderPage } from  '../../ngrx/actions/header.action'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
	public headerPage:number;

	constructor(@Inject(DOCUMENT) private document: Document,
				private globalService: GlobalService,
				private cdRef:ChangeDetectorRef,
				private store: Store<AppState>) {
		
	}

// //////////////////////////////////////////////////////////////////////// LIFE CYCLE
	public ngOnInit(): void {

		this.store.select('headerPage').subscribe(({choiceHeaderPage}) => {  //lisent store
            this.headerPage = choiceHeaderPage
		})
		this.choiceMainCategory(this.headerPage)

	}

	public ngAfterViewInit(): void {
		

	};

	public ngOnDestroy(): void {
		this.cdRef.detach();
	};

// ////////////////////////////////////////////////////////////////////////////////// LIFE CYCLE ENd
	
	public choiceMainCategory(index: number) {
		const category = this.document.getElementById('headerCategory') as HTMLDivElement;
		const clickCategory = category.childNodes[index] as HTMLDivElement;

			for (let i = 0; i < category.childNodes.length; i++) {
				let currentNode = category.childNodes[i] as HTMLDivElement;

				currentNode.classList.remove("select");
			};

			this.store.dispatch(new ChangeHeaderPage(index))

			clickCategory.classList.add("select");
	};


};
