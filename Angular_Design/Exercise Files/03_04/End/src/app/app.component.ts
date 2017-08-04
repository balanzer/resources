import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <img [src]="logoUrl">
  <button [disabled]="buttonState">Purchase</button>

  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {

  buttonState = true;
  logoUrl = 'http://lnked.in/linkedinlogopng';

}
