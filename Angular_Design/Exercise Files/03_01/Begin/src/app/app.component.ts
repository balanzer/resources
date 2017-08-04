import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <div [ngSwitch]="likes">
    <div *ngSwitchCase="'baseball'">// Display baseball content</div>
    <div *ngSwitchCase="'football'">// Display football content</div>
    <div *ngSwitchCase="'basketball'">// Display basketball content</div>
    <div *ngSwitchDefault>No matches found.</div>
  </div>

  <ng-template #truthtempl>I'm here</ng-template>
  <ng-template #falsetempl>I'm not here</ng-template>
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
}
