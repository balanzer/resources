import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardSetComponent } from './card-set.component';
import { SalaryCardComponent } from './salary-card.component';

@NgModule({
  declarations: [
    CardSetComponent,
    SalaryCardComponent
  ],
  imports: [BrowserModule],
  bootstrap: [CardSetComponent]
})
export class AppModule { }
