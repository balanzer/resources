import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <input #count value="my value" (keyup)="0">
  <p>{{ count.value.length }}</p>

  <button (click)="myFunc(count)">My button</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  likes = 'soccer';

  teams = [
    { baseball: 'Indians'},
    { baseball: 'Mets'},
    { baseball: 'Yankees'},
  ]

  myFunc(count) {
    console.log(count.value);
  }
}
