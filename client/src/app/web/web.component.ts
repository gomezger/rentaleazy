import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  private languages = ['es','it','en'];
  private defaultLanguage = 'es';

  constructor(
    public translate: TranslateService,
    public _activatedRoute: ActivatedRoute,
    public _router: Router
  ) { 
    this.translate.addLangs(this.languages);
  }

  ngOnInit(): void {
    this.translate.setDefaultLang(this.defaultLanguage);
    
    const language:string = this._activatedRoute.snapshot.paramMap.get('language');
    
    if(this.languages.indexOf(language)!=-1){    
      this.translate.use(language);
    }else{
      this._router.navigate(['/',this.translate.getBrowserLang()]);
    }
  }

}
