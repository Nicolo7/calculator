import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './shared/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
