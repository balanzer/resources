import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PayrollModule } from './payroll/payroll.module';
import { HrModule } from './hr-files/hr.module';
import { NestingComponent } from './nesting.component';

@NgModule({
  declarations: [
    NestingComponent
  ],
  imports: [PayrollModule, HrModule, BrowserModule],
  bootstrap: [NestingComponent]
})
export class AppModule { }
