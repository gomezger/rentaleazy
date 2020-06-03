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
    ScrollReveal().reveal('.scroll-reveal-350', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-300', { delay: 300, easing: 'ease-in' });
    ScrollReveal().reveal('.scroll-reveal-250', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-200', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-150', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-100', { delay: 100, easing: 'ease-in'  });
    ScrollReveal().reveal('.scroll-reveal-50', { delay: 100, easing: 'ease-in'  });

    const aux = this._activatedRoute.snapshot.paramMap;
    let language:string = null;
  
    if(aux!=null)
      language = aux.get('language');

    if(language==null || this.languages.indexOf(language)!=1 || language==undefined){
      language = this.getLanguage();
      this.language(language);
    }else{
      this.language(language);
    }
  }


  language(lang){
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLanguage);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang',lang);
    this._router.navigate(['/',lang]);
  }


  private getLanguage(): string{
    const lang = localStorage.getItem('lang');

    if(lang==null || lang==undefined){
      return this.defaultLanguage;
    }else{
      for(let l of this.languages)
        if(l===lang) 
          return lang;
    }
    return this.defaultLanguage;   
  }
}
