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
import { ServicesComponent } from './index/services/services.component';


@NgModule({
  declarations: [
    WebComponent, 
    IndexComponent, 
    HeaderComponent, 
    FooterComponent, CarouselComponent, ServicesComponent
  ],
  imports: [
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
