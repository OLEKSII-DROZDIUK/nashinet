import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySeo } from './city-seo.component';
import { cityReducer } from '../../../ngrx/reducers/city.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('cityPage', cityReducer),

	],
	declarations: [
		CitySeo
	],
	exports: [
		CitySeo,
	],
})
export class CitySeoModule { }
