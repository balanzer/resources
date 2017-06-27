import { Component } from '@angular/core';

const recordList = [
  { empName: 'Cynthia Cunningham', units: 4575.29879815, totalRevenue: 46739.8278, rank: 7  },
  { empName: 'Peter Clark', units: 1030, totalRevenue: 8675.309, rank: 8 },
  { empName: 'Theresa Soto', units: 8669.89, totalRevenue: 67439820.3498, rank: 2 },
  { empName: 'Russell Fisher', units: 4565.3892, totalRevenue: 5789230.9843, rank: 4 },
  { empName: 'Elizabeth Hudson', units: 89.2979879, totalRevenue: 789709.834098, rank: 5 },
  { empName: 'Heather Spencer', units: 10480, totalRevenue: 9879873.40598, rank: 3 },
  { empName: 'Barbara Tran', units: 1038.6829, totalRevenue: 90855398.2987, rank: 1 },
  { empName: 'Julia Anderson', units: 3928.593, totalRevenue: 678098.979998, rank: 6 }
];

@Component({
  selector: 'abc-page',
  templateUrl: './visuals.html'
})
export class VisualsComponent {

  records = recordList;

  status(record: {rank: number}) {
    if (record.rank === 1) {
      return 'bonus';
    } else if (record.rank >= 7) {
      return 'fired';
    } else {
      return '';
    }
  }
}
