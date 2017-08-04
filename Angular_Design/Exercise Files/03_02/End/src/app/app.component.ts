import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <p [ngClass]="myClasses">Class binding example</p>
  
  `,
  styles: [
    `
    .danger {
      color:red;
      font-weight:bold;
    }
    .safe {
      text-decoration:underline;
    }
    .changed {
      font-style:italic;
    }
    `
  ]
})
export class AppComponent {
  
  property1 = true;
  property2 = true;
  property3 = false;
  myClasses = {
    danger: this.property1,
    safe: this.property2,
    changed: this.property3
  }

}
