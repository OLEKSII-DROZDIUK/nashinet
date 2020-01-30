import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityLocation  } from './city-location.component';


@NgModule({
	imports: [
		CommonModule,

	],
	declarations: [
		CityLocation
	],
	exports: [
		CityLocation,
	],
})
export class CityLocationModule { }
