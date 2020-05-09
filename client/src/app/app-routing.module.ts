import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: ':languaje', loadChildren: () => import('./web/web.module').then(m => m.WebModule) }
];

@NgModule({
  imports: [
		RouterModule.forRoot(
			routes, {
				useHash: false,
				scrollPositionRestoration: 'disabled',
				enableTracing: false,
			}
		)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
