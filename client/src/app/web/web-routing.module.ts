import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', 
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
