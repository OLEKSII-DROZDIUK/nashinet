import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSnackbarComponent } from './material-snackbar.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	imports: [
		CommonModule,
		MatSnackBarModule

	],
	declarations: [
		MaterialSnackbarComponent,
	],
	exports: [
		MaterialSnackbarComponent,
	],
})
export class MatSnackBarModuleModule { }
