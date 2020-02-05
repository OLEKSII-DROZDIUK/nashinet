/**
 * @author [Oleksii Drozdyuk]
 * @create date 2020-01-27 10:00:00
 * @modify date 2020-01-27 10:00:00
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { StoreModule } from '@ngrx/store';
import { headerPageReducer } from '../../ngrx/reducers/header.reducer';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('headerPage', headerPageReducer),
	],
	declarations: [
		HeaderComponent,
	],
	exports: [
		HeaderComponent
	],
})
export class HeaderModule { }
