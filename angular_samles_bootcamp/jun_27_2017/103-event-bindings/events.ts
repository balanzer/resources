import { Component } from '@angular/core';

import { scheduleMap } from './app.constants';

@Component({
  selector: 'abc-page',
  templateUrl: './events.html'
})
export class EventsComponent {
  name = 'John Doe';
  message: string;
  currentSchedule: string;

  clockIn(event: MouseEvent) {
    if (event.shiftKey) {
      this.message = 'Clocked in as manager!'
    } else {
      this.message = 'Clocked in as employee';
    }
  }

  clockOut() {
    this.message = 'Have a nice day!';
  }

  showSchedule(day: string) {
    this.currentSchedule = scheduleMap[day];
  }

  clearMessage() {
    this.currentSchedule = '';
  }
}
