import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeLoader } from './employeeLoader';

@Component({
  selector: 'abc-page',
  templateUrl: './employees.html'
})
export class EmployeesComponent {
  employees: Observable<{}[]>;
  employeesText: Observable<string>;

  constructor(employeeLoader: EmployeeLoader) {
    this.employees = employeeLoader.loadEmployeesObj();

    this.employeesText = employeeLoader.loadEmployeesText();
  }
}
