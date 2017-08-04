import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<ul>
  <li *ngFor="let team of teams; let last = last">{{ team.baseball }} <strong *ngIf="last">Hey, I'm last!</strong></li>
</ul>

<p>It certainly does!</p>
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
