import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-material-snackbar',
  templateUrl: './material-snackbar.component.html',
  styleUrls: ['./material-snackbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None

})
export class MaterialSnackbarComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.openSnackBar("test", "tesssssttt111")
  };

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  };

}
