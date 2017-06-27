import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NameComponent } from './name/name.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: NameComponent }
];

export const routeDefinitionModule =
  RouterModule.forRoot(routes,
    { useHash: true });

export const routedComponents = [
  HomeComponent,
  NameComponent
];
