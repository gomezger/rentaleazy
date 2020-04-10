import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './index/services/services.component';

const routes: Routes = [
  { path: ':language', 
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'packages', component: ServicesComponent },
      { path: '*', component: IndexComponent },
      { path: '**', component: IndexComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
