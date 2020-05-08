import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: [
    './about-us.component.scss',
    '../rentals/rentals.component.scss',
    '../index/packages/packages.component.scss'
  ]
})
export class AboutUsComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('about.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }
}
