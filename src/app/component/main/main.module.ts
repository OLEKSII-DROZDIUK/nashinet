/**
 * @author [Oleksii Drozdyuk]
 * @create date 2020-01-27 10:00:00
 * @modify date 2020-01-27 10:00:00
 * @desc [description]
*/
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainLocationModule } from './main-location/main-location.module';

import { MainComponent } from './main.component';

@NgModule({
	imports: [
		CommonModule,
		MainLocationModule,
		
	],
	declarations: [
		MainComponent,
	],
	exports: [
		MainComponent
	],
})
export class MainModule { }
