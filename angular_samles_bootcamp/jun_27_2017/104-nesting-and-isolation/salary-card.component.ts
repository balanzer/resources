import { Component } from '@angular/core';

@Component({
  selector: 'salary-card',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Employee: {{id}}</span>
        <p>
          \${{salary}}
        </p>    
      </div>
    </div>
  `
})
export class SalaryCardComponent {
  salary = Math.round(Math.random() * 100000);
  id = Math.round(Math.random() * 10000);
}
