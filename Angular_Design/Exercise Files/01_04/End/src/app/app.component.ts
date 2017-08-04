import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>
  Inline HTML
</h1>

<p>It certainly does!</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
