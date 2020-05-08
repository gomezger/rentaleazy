import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: [
    './complete.component.scss',
    '../../index/packages/packages.component.scss'
  ]
})
export class CompleteComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('index.packages.options.0.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }
}
