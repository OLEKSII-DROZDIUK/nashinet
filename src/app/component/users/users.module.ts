/**
 * @author [Oleksii Drozdyuk]
 * @create date 2020-01-27 10:00:00
 * @modify date 2020-01-27 10:00:00
 * @desc [description]
*/
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSnackBarModuleModule } from '../material-snackbar/material-snackbar.module';

import { UsersComponent } from './users.component';


@NgModule({
	imports: [
		CommonModule,
		MatSnackBarModuleModule,


	],
	declarations: [
		UsersComponent,
	],
	exports: [
		UsersComponent,
	],
})
export class UsersModule { }
