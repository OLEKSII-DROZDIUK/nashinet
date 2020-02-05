import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MateriaInputOutlineModule} from '../../material-input-outline/material-input-outline.module';
import {MatButtonModule} from '@angular/material/button'; 

import { MaterialFileUploadModule} from '../../material-file-upload/material-file-upload.module';

import { MainLocation  } from './main-location.component';
import { cityReducer } from 'src/app/ngrx/reducers/city.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('cityPage', cityReducer),
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatButtonModule,
		MateriaInputOutlineModule,
		MaterialFileUploadModule
	],
	declarations: [
		[MainLocation]
	],
	exports: [
		MainLocation
	],
})
export class MainLocationModule { }
