import { Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  template: `
    <h4>Example application with multiple modules</h4>
    <payroll-search></payroll-search>
    <hr-files-search></hr-files-search>
  `
})
export class NestingComponent { }
