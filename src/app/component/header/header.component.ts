import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Renderer2,
	ElementRef, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy, HostListener} from '@angular/core';
import { Router, Data, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

	constructor(@Inject(DOCUMENT) private document: Document,
				private globalService: GlobalService) {
		
	}

// //////////////////////////////////////////////////////////////////////// LIFE CYCLE
	public ngOnInit(): void {
		this.choiceMainCategory(1); //default "Location category"

	}

	public ngAfterViewInit(): void {
		

	};

	public ngOnDestroy(): void {

	};

// ////////////////////////////////////////////////////////////////////////////////// LIFE CYCLE ENd
	
	public choiceMainCategory(index: number) {
		const category = this.document.getElementById('headerCategory') as HTMLDivElement;
		const clickCategory = category.childNodes[index] as HTMLDivElement;

			for (let i = 0; i < category.childNodes.length; i++) {
				let currentNode = category.childNodes[i] as HTMLDivElement;

				currentNode.classList.remove("select");
			};
			
			this.globalService.changeCurentMenuCategory(index);
			clickCategory.classList.add("select");
	};


};
