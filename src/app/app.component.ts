import { Component, ViewChild, ElementRef, OnInit,
  AfterViewInit, Inject, ChangeDetectorRef } from '@angular/core';

  import { Store } from '@ngrx/store'
  import { AppState } from './ngrx/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit, AfterViewInit {
	public currentMenuCategory:number;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
		this.store.select('headerPage').subscribe(({choiceHeaderPage}) => {
			this.currentMenuCategory = choiceHeaderPage;
		})
  };

  public ngAfterViewInit(): void {

  };

};
