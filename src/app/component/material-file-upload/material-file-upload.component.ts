import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Inject} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient, HttpResponse, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-material-file-upload',
    templateUrl: './material-file-upload.component.html',
    styleUrls: ['./material-file-upload.component.sass'],
  })
export class MaterialFileUploadComponent implements OnInit {
  /** Link text */
      @Input('text') fileName: String;
      @ViewChild('text', {static: false}) text:  String;
      @Input() param = 'file';
      @Input() accept = 'image/*';
      @Output() complete = new EventEmitter<string>();

      constructor(private _http: HttpClient,
                @Inject(DOCUMENT) private document: Document,) { }

    ngOnInit() {


    };

    public onClick() {

        const fileUpload = this.document.getElementById('fileUpload') as HTMLInputElement

        fileUpload.onchange = () => {
                for (let index = 0; index < fileUpload.files.length; index++) {
                    const file = fileUpload.files[index];
                    let reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onload = function () {
                        console.log(reader.result); //have base64 code
                    };
                    reader.onerror = function (error) {
                        console.log('Error when convert img to base64: ', error);
                    };
                }
        };
        fileUpload.click();
    }
}

