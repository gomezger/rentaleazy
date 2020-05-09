import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';

//translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient} from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');}
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

//componentes
import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { ArrowRightComponent } from './components/arrow-right/arrow-right.component';
import { ViewsComponent } from './index/views/views.component';
import { ViewComponent } from './index/views/view/view.component';
import { PackagesComponent } from './index/packages/packages.component';
import { AboutComponent } from './index/about/about.component';
import { CheckComponent } from './components/check/check.component';
import { AdditionalComponent } from './index/additional/additional.component';
import { CompleteComponent } from './services/complete/complete.component';
import { CheckInComponent } from './services/check-in/check-in.component';
import { AlquilerComponent } from './index/alquiler/alquiler.component';
import { RentalsComponent } from './rentals/rentals.component';
import { ContactComponent } from './contact/contact.component';
import { CleanComponent } from './services/extras/clean/clean.component';
import { BathComponent } from './services/extras/bath/bath.component';
import { MaintenanceComponent } from './services/extras/maintenance/maintenance.component';
import { PhotoComponent } from './services/extras/photo/photo.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WebComponent, 
    IndexComponent, 
    HeaderComponent, 
    FooterComponent, 
    CarouselComponent, 
    ServicesComponent,
    ArrowRightComponent,
    ViewsComponent,
    ViewComponent,
    PackagesComponent,
    AboutComponent,
    CheckComponent,
    AdditionalComponent,
    CompleteComponent,
    CheckInComponent,
    AlquilerComponent,
    RentalsComponent,
    ContactComponent,
    CleanComponent,
    BathComponent,
    MaintenanceComponent,
    PhotoComponent,
    AboutUsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    WebRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient] 
      }
    })  
  ]
})
export class WebModule { }
