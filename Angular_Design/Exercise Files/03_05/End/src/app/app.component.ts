import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <img [src]="logoUrl" *ngIf="buttonState">
  <button (mouseenter)="toggleLogo()">Toggle Logo</button>

  <input type="text" (keyup.enter)="keyPress($event.target.value)">
  <p>{{ typed }}</p>

  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {

  buttonState = true;
  logoUrl = 'http://lnked.in/linkedinlogopng';
  typed:string = '';

  toggleLogo() {
    this.buttonState = (this.buttonState ? false : true);
  }

  keyPress(event) {
    this.typed = event;
  }
  

}
