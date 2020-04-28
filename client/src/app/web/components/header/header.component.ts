import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/services/info';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // attributes
  public lang: string;
  public phone: any;
  public social: any;
  public city: any;

  constructor(
    public translate: TranslateService,
    public _activatedRoute: ActivatedRoute,
    public _router: Router
  ) { }

  ngOnInit(): void {
    this.lang = this._activatedRoute.snapshot.paramMap.get('language');
    this.phone = Info.phone;
    this.social = Info.social;
    this.city = Info.city;
  }

  /**
   * Change the current language for the new language. Update the url prefix.
   * @param lang_new abbreviation of the new language
   */
  setLanguage(lang_new: string): void{
    // set new language
    this.translate.use(lang_new);
    
    //modifico el lang acutal
    this.lang = lang_new;

    // current language
    const lang_old:string = this._activatedRoute.snapshot.paramMap.get('language');

    // old url
    const url_old = this._router.url;

    // replace es, en or it for new language
    const url_new = url_old.replace(lang_old, lang_new);


    // navigate to new url
    this._router.navigate([url_new]);


  }

}
