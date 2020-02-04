/**
 * @author [Oleksii Drozdyuk]
 * @create date 2020-01-27 10:00:00
 * @modify date 2020-01-27 10:00:00
 * @desc [description]
*/
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
import { CityLocationModule } from './city-location/city-location.module';
import { CitySeoModule } from './city-seo/city-seo.module'


@NgModule({
	imports: [
		CommonModule,
		CityLocationModule,
		CitySeoModule

	],
	declarations: [
		CityComponent,
	],
	exports: [
		CityComponent,
	],
})
export class CityModule { }
