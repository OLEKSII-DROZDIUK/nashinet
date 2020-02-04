import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainSeoPageModule } from './main-seo-page/main-seo-page.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialFileUploadModule } from '../../material-file-upload/material-file-upload.module';

import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MainSeo  } from './main-seo.component';
import { MatSelectModule } from '@angular/material';


@NgModule({
	imports: [
		CommonModule,
		MainSeoPageModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatIconModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatSelectModule,
		MaterialFileUploadModule
	],
	declarations: [
		MainSeo
	],
	exports: [
		MainSeo
	],
})
export class MainSeoModule { }
