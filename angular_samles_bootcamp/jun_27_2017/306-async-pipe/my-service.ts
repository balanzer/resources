import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export interface Ship {
  name: string;
  filmName: string;
}

const sampleShipData: Ship[] = [
  { name: 'Titanic', filmName: 'Titanic' },
  { name: 'Orca', filmName: 'Jaws' },
  { name: 'Poseidon', filmName: 'Poseidon' }
];

@Injectable()
export class MyService {

  // The details of constructing the observable are
  // not important; rather, the important thing here is that this
  // data is only available asynchronously from this example data
  // service.

  loadShips1(): Observable<Ship[]> {
    return Observable.of(sampleShipData).delay(2000);
  }
}
