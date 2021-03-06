import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { adjectives, proglangs, terms } from './data';

@Component({
  selector: 'abc-page',
  templateUrl: './grouping.html',
  styleUrls: ['./grouping.css']
})
export class GroupingComponent {
  descriptorsControl: FormControl = new FormControl();
  showDetails: boolean = false;
  terms: any[] = terms;
  adjectives: string[];
  programmingLanguages: any[] = proglangs;

  constructor() {
    this.descriptorsControl.valueChanges.subscribe(x =>
       this.adjectives = adjectives.slice(0, x));
    this.descriptorsControl.setValue(4);
  }
}
