import { Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  templateUrl: './employee-landing.component.html'
})
export class EmployeeLandingComponent {
  employee: string;
  // Implicit public, equivalent to
  // public version: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.
  daysWorked: number;
  company: { name: string; };
  // If the value is known at initialization, it is ok to do so here.
  employeeOfTheWeek = 'Jane Smith';

  constructor() {
    this.employee = 'John Doe';
    this.daysWorked = 81;
    this.company = { name: 'Acme, Inc.' };
  }
}
