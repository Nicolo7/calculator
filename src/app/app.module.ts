import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoanComponent } from './components/loan/loan.component';
import { LandingComponent } from './shared/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
