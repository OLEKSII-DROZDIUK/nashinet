import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityLocation  } from './city-location.component';
import { cityReducer } from '../../../ngrx/reducers/city.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('cityPage', cityReducer),

	],
	declarations: [
		CityLocation
	],
	exports: [
		CityLocation,
	],
})
export class CityLocationModule { }
