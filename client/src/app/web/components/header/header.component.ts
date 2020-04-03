import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public _activatedRoute: ActivatedRoute,
    public _router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Change the current language for the new language. Update the url prefix.
   * @param lang_new abbreviation of the new language
   */
  setLanguage(lang_new: string): void{
    // set new language
    this.translate.use(lang_new);

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
