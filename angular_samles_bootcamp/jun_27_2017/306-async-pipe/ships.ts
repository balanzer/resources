import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ship, MyService } from './my-service';

@Component({
  selector: 'abc-page',
  templateUrl: 'ships.html'
})
export class ShipsComponent {
  ships1: Observable<Ship[]>;

  constructor(api: MyService) {
    this.ships1 = api.loadShips1();

    // This subscription will 'leak':
    // this.ships1.subscribe((x) => {
    //   console.log(x);
    // });
  }
}
