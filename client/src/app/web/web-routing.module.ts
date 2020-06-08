import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './services/services.component';
import { CompleteComponent } from './services/complete/complete.component';
import { CheckInComponent } from './services/check-in/check-in.component';
import { RentalsComponent } from './rentals/rentals.component';
import { ContactComponent } from './contact/contact.component';
import { CleanComponent } from './services/extras/clean/clean.component';
import { BathComponent } from './services/extras/bath/bath.component';
import { MaintenanceComponent } from './services/extras/maintenance/maintenance.component';
import { PhotoComponent } from './services/extras/photo/photo.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: ':language', 
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'rental', component: RentalsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'services', component: ServicesComponent},
      { path: 'services/complete', component: CompleteComponent },
      { path: 'services/check-in', component: CheckInComponent },
      { path: 'services/extras/clean', component: CleanComponent },
      { path: 'services/extras/bath', component: BathComponent },
      { path: 'services/extras/maintenance', component: MaintenanceComponent },
      { path: 'services/extras/photo', component: PhotoComponent },
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
