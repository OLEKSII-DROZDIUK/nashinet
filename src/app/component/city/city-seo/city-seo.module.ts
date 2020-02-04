import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySeo } from './city-seo.component';


@NgModule({
	imports: [
		CommonModule,

	],
	declarations: [
		CitySeo
	],
	exports: [
		CitySeo,
	],
})
export class CitySeoModule { }
