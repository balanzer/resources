import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { PageComponent } from './page';
import { SharedModule } from './shared-module/shared.module';

// Providing at the app module level
// For state we generally want a singleton throughout
import { EmployeeListService } from './notification-manager/employee-list/employee-list.service';
import { PositionListService } from './notification-manager/position-list/position-list.service';

@NgModule({
  declarations: [
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [EmployeeListService, PositionListService],
  bootstrap: [PageComponent]
})
export class AppModule { }
