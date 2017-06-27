import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeLoader, Employee } from '../employee-loader';

@Component({
  selector: 'employee-list',
  moduleId: __moduleName,
  templateUrl: './employee-list.html'
})
export class EmployeeListComponent {
  list$: Observable<Employee[]>;

  constructor(loader: EmployeeLoader) {
    this.list$ = loader.getList();
  }
}
