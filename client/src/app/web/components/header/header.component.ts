import { Component, OnInit, ViewChild, ElementRef, DoCheck } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/services/info';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  // attributes
  public lang: string;
  public phone: any;
  public social: any;

  constructor(
    public translate: TranslateService,
    public _activatedRoute: ActivatedRoute,
    public _router: Router
  ) { }

  ngOnInit(): void {
    this.phone = Info.phone;
    this.social = Info.social;
  }

  ngDoCheck(): void{
    this.lang = this._activatedRoute.snapshot.paramMap.get('language');
  }

  /**
   * Change the current language for the new language. Update the url prefix.
   * @param lang_new abbreviation of the new language
   */
  setLanguage(lang_new: string): void{
    this.lang = this._activatedRoute.snapshot.paramMap.get('language');

    localStorage.setItem('lang', lang_new);
    
    // set new language
    this.translate.use(lang_new);
    
    //modifico el lang acutal
    this.lang = lang_new;

    document.documentElement.setAttribute('lang',lang_new);

    // current language
    const lang_old:string = this._activatedRoute.snapshot.paramMap.get('language');

    // old url
    const url_old = this._router.url;

    // replace es, en or it for new language
    const url_new = url_old.replace(lang_old, lang_new);

    this.collapseNav();

    // navigate to new url
    this._router.navigate([url_new]);


  }

  
  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }
  
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }


}
