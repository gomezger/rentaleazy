import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './services/services.component';
import { ViewsComponent } from './index/views/views.component';
import { CompleteComponent } from './services/complete/complete.component';
import { CheckInComponent } from './services/check-in/check-in.component';

const routes: Routes = [
  { path: ':language', 
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'services', component: ServicesComponent},
      { path: 'services/complete', component: CompleteComponent },
      { path: 'services/check-in', component: CheckInComponent },
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
