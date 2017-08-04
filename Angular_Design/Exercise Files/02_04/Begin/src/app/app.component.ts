import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <div *ngIf="!title; then truthtempl else falsetempl">
    This will not appear.
  </div>

  <ng-template #truthtempl>I'm here</ng-template>
  <ng-template #falsetempl>I'm not here</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  teams = [
    { baseball: 'Indians'},
    { baseball: 'Mets'},
    { baseball: 'Yankees'},
  ]
}
