import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './services/services.component';
import { ViewsComponent } from './index/views/views.component';

const routes: Routes = [
  { path: ':language', 
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'opinions', component: ViewsComponent },
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
