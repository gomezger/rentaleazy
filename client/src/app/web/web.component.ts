import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { 
    this.translate.addLangs(['es','it','en']);
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
  }

}
