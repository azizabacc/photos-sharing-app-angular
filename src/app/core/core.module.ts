import {LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import * as en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule, /* ngIf / ngClass */
    RouterModule,
    HttpClientModule,

  ],
  exports :[
    HeaderComponent
  ],

  providers: [    
    { provide: LOCALE_ID, useValue: 'en-EN'},
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(en.default);
  }
 }
