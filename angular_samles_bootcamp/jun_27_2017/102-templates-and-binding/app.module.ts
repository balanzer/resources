import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EmployeeLandingComponent } from './employee-landing.component';

// The module class can have any name you like, but it is wise to name
// it ___Module, because the TypeScript type system cannot yet express
// a type for "the class must have decorator Abc".

@NgModule({
  declarations: [EmployeeLandingComponent],
  imports: [BrowserModule],
  bootstrap: [EmployeeLandingComponent]
})
export class AppModule { }
