import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MateriaInputOutlineModule} from '../../material-input-outline/material-input-outline.module';

import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

import { MaterialFileUploadComponent } from '../../material-file-upload/material-file-upload.component';

import { MainLocation  } from './main-location.component';



@NgModule({
	imports: [
		CommonModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatIconModule,
		MatProgressBarModule,
		MatButtonModule,
		MateriaInputOutlineModule
	],
	declarations: [
		[MainLocation, MaterialFileUploadComponent]
	],
	exports: [
		MainLocation
	],
})
export class MainLocationModule { }
