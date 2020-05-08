import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clean',
  templateUrl: './clean.component.html',
  styleUrls: [
    './clean.component.scss', 
    '../../../index/packages/packages.component.scss',
    '../../../rentals/rentals.component.scss',
    '../../check-in/check-in.component.scss'
  ]
})
export class CleanComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('extras.clean.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }
}
