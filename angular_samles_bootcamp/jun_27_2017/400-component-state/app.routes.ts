import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'do', pathMatch: 'full' },
  { path: 'do', loadChildren: './do/do.module#DoModule' },
  { path: 'dont', loadChildren: './dont/dont.module#DontModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false
};

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, config);
