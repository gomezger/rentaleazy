import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './services/services.component';
import { CompleteComponent } from './services/complete/complete.component';
import { CheckInComponent } from './services/check-in/check-in.component';
import { RentalsComponent } from './rentals/rentals.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: ':language', 
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'rental', component: RentalsComponent },
      { path: 'services', component: ServicesComponent},
      { path: 'services/complete', component: CompleteComponent },
      { path: 'services/check-in', component: CheckInComponent },
      { path: 'contact', component: ContactComponent },
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
