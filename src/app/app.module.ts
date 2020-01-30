import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
//module
import { CityModule } from './component/city/city.module';
import { MainModule } from './component/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobalService } from './services/global.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CityModule,
    MainModule,
    
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
