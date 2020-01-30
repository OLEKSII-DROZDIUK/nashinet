import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaInputOutlineComponent   } from './material-input-outline.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule

	],
	declarations: [
		MateriaInputOutlineComponent,
	],
	exports: [
		MateriaInputOutlineComponent,
	],
})
export class MateriaInputOutlineModule { }
