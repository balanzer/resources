import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeesService } from './employees.service';

@Component({
  selector: 'abc-page',
  template: `
    <h3>Employees</h3>
    <ul>
      <li *ngFor="let e of employees | async">
        {{e.first_name}} {{e.last_name}}
      </li>
    </ul>
  `
})
export class EmployeesComponent {
  employees: Observable<any[]>;

  constructor(es: EmployeesService) {
    // this.employees = es.getEmployees();
    // this.employees = es.poll1();
    this.employees = es.poll2();
  }
}
