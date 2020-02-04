import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainSeoPage  } from './main-seo-page.component';


@NgModule({
	imports: [
		CommonModule,

	],
	declarations: [
		MainSeoPage 
	],
	exports: [
		MainSeoPage
	],
})
export class MainSeoPageModule { }
