import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { } from './services/global.service'
import { HttpClientModule} from '@angular/common/http'
// import { cityReducer } from './ngrx/reducers/city.reducer';
// import { headerPageReducer } from './ngrx/reducers/header.reducer';
// import { citySeoPagesReducer } from './ngrx/reducers/seo-page.reducer';
// import { usersReducer } from './ngrx/reducers/users.reducer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
//module
import { CityModule } from './component/city/city.module';
import { MainModule } from './component/main/main.module';
import { UsersModule } from './component/users/users.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobalService } from './services/global.service';
// import { AppState } from './ngrx/app.state';


import {reducers} from './ngrx/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects } from './ngrx/effects/city.effects';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CityModule,
    MainModule,
    UsersModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CityEffects]),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
