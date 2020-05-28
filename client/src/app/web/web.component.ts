import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { ActivatedRoute, Router } from '@angular/router';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  private languages = ['es','en'];
  private defaultLanguage = 'es';

  constructor(
    public translate: TranslateService,
    public _activatedRoute: ActivatedRoute,
    public _router: Router
  ) { 
  }

  ngOnInit(): void {
    this.language();
    ScrollReveal().reveal('.scroll-reveal-350', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-300', { delay: 300, easing: 'ease-in' });
    ScrollReveal().reveal('.scroll-reveal-250', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-200', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-150', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-100', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-50', { delay: 100, easing: 'ease-in'  });
  }


  language(){
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLanguage);
    document.documentElement.setAttribute('lang','es');
    
    const language:string = this._activatedRoute.snapshot.paramMap.get('language');

    
    if(this.languages.indexOf(language)!=-1){    
      this.translate.use(language);
      document.documentElement.setAttribute('lang',language);
    }else{
      this._router.navigate(['/',this.translate.getBrowserLang()]);
    }
  }

}
