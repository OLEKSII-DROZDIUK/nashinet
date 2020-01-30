import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';


@Component({
  selector: 'app-material-input-outline',
  templateUrl: './material-input-outline.component.html',
  styleUrls: ['./material-input-outline.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None

})
export class MateriaInputOutlineComponent implements OnInit {
  @Output() delSubCityLine = new EventEmitter<any>();

  ngOnInit() {

  }

  public clickDel(event:any) {
    this.delSubCityLine.emit(event);

  };


}
