import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFileUploadComponent } from './material-file-upload.component';

import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatProgressBarModule,
		MatButtonModule

	],
	declarations: [
		MaterialFileUploadComponent
	],
	exports: [
		MaterialFileUploadComponent,
	],
})
export class MaterialFileUploadModule { }
