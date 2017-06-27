import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const API_URL = '/api';

// Or, connect directly to the API server (not on C9)
// const API_URL = 'http://localhost:8085';

@Injectable()
export class EmployeeLoader {
  constructor(private http: Http) { }

  private load() {
    return this.http.get(API_URL + '/employees');
  }

  loadEmployeesObj() {
    return this.load()
      .do(res => console.log(res))
      .map(res => res.json());
  }

  loadEmployeesText() {
    return this.load()
      .map(res => res.text());
  }
}
