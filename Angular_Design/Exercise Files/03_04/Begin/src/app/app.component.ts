import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <p [style.font-weight]="myWeight ? 'bold' : 'normal'">Style binding example</p>
  
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {
  
  myWeight = true;

  ngStyles = {
    'color': 'red',
    'font-weight': 'bold'
  }

}
