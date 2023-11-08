import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as en from '@angular/common/locales/en';
import { FaceAppListComponent } from './face-app-list/face-app-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';


@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceAppListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [    { provide: LOCALE_ID, useValue: 'en-EN'}
],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(en.default);
  }
 }
