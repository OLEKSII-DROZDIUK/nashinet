import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainUserComponent } from './main-user.component';
import { MatSelectModule } from '@angular/material';


@NgModule({
	imports: [
		CommonModule,
		MatInputModule,
		ReactiveFormsModule,
		FormsModule,
		MatSelectModule,

	],
	declarations: [
		MainUserComponent 
	],
	exports: [
		MainUserComponent  
	],
})
export class MainUserModule { }
