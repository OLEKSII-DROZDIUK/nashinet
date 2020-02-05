/**
 * @author [Oleksii Drozdyuk]
 * @create date 2020-01-27 10:00:00
 * @modify date 2020-01-27 10:00:00
 * @desc [description]
*/
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSnackBarModuleModule } from '../material-snackbar/material-snackbar.module';
import { StoreModule } from '@ngrx/store';

import { usersReducer } from '../../ngrx/reducers/users.reducer';

import { UsersComponent } from './users.component';


@NgModule({
	imports: [
		CommonModule,
		MatSnackBarModuleModule,
		StoreModule.forRoot({usersPage: usersReducer}),
	],
	declarations: [
		UsersComponent,
	],
	exports: [
		UsersComponent,
	],
})
export class UsersModule { }
