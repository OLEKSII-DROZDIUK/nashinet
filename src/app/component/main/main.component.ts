import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Renderer2,
	ElementRef, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy, HostListener} from '@angular/core';
import { Router, Data, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
	public currentMenuCategory:number = 1; //set default Location page
	private subsMenuCategory: Subscription = new Subscription();

	constructor(@Inject(DOCUMENT) private document: Document,
				private globalService: GlobalService,
				private cdRef: ChangeDetectorRef) {
		
	}

// //////////////////////////////////////////////////////////////////////// LIFE CYCLE
	public ngOnInit(): void {
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

// ////////////////////////////////////////////////////////////////////////////////// LIFE CYCLE ENd


};
