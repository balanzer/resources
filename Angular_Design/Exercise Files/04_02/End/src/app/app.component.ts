import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <p [@myAnimation]="animationState">I am learning to animate.</p>

    <button (click)="animate()">Animate the paragraph.</button>
  `,
  styles: [``],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
        backgroundColor: '#eee'
      })),
      state('active', style({
        backgroundColor: '#ffcc00'
      }))
    ])
  ]
})
export class AppComponent {

  animationState = 'inactive';

  animate() {
    this.animationState = (this.animationState === 'inactive' ? 'active' : 'inactive');
  }

}
