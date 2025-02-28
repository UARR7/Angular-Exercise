import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // For forms
import { HttpClientModule } from '@angular/common/http'; // For HTTP calls

import { AppComponent } from './app.component'; // Correct import
import { HeroComponent } from './hero/hero.component'; // HeroComponent
import { FormComponent } from './form/form.component'; // FormComponent

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent, // Add HeroComponent
    FormComponent  // Add FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // For forms
    HttpClientModule     // For HTTP calls
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
