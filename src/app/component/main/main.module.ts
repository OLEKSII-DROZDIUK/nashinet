/**
 * @author [Oleksii Drozdyuk]
 * @create date 2020-01-27 10:00:00
 * @modify date 2020-01-27 10:00:00
 * @desc [description]
*/
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainLocationModule } from './main-location/main-location.module';
import  { MainSeoModule } from './main-seo/main-seo.module';
import { MainUserModule } from './main-user/main-user.module';

import { MainComponent } from './main.component'; 
import { StoreModule } from '@ngrx/store';
import { headerPageReducer } from '../../ngrx/reducers/header.reducer';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('headerPage', headerPageReducer),
		MainLocationModule,
		MainSeoModule,
		MainUserModule
		
	],
	declarations: [
		MainComponent,
	],
	exports: [
		MainComponent
	],
})
export class MainModule { }
