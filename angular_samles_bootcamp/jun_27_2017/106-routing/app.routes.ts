// This example shows the particular variation of routing syntax
// needed to work with the CLI lazy loading support. The syntax can be
// slightly different if you are using a different tooling approach.

import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

// Note there is no import of the HrSearchComponent or reference to './hr-files-search.component'.

const routes: Routes = [
  { path: '', redirectTo: 'hr', pathMatch: 'full' },
  { path: 'hr', loadChildren: './hr-files/hr.module#HrModule' },
  { path: 'payroll', loadChildren: './payroll/payroll.module#PayrollModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false // Turn this on for console.logging of route events
  // ,preloadingStrategy: PreloadAllModules
};

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, config);

// Behind the scenes, Angular converts the above syntax to something like
// this:

// loadChildren: () =>
// System.import('./hr/hr.module').then(({HrModule}) => HrModule)
