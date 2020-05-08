import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: [
    './check-in.component.scss',
    '../../index/packages/packages.component.scss'
  ]
})
export class CheckInComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('index.packages.options.1.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }

}
