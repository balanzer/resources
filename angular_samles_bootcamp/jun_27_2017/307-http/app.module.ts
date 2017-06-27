import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { EmployeesComponent }  from './employees';
import { EmployeeLoader } from './employeeLoader';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [BrowserModule, HttpModule],
  providers: [EmployeeLoader],
  bootstrap: [EmployeesComponent]
})
export class AppModule { }
