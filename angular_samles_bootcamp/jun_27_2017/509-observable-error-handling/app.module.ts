import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { EmployeesComponent }  from './employees.component';
import { EmployeesService }  from './employees.service';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [BrowserModule, HttpModule],
  providers: [EmployeesService],
  bootstrap: [EmployeesComponent]
})
export class AppModule { }
