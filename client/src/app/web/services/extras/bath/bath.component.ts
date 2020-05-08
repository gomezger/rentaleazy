import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bath',
  templateUrl: './bath.component.html',
  styleUrls: [
    './bath.component.scss',    
    '../../../index/packages/packages.component.scss',
    '../../../rentals/rentals.component.scss',
    '../../check-in/check-in.component.scss'
  ]
})
export class BathComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('extras.bath.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }
}
