import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: [
    './photo.component.scss',    
    '../../../index/packages/packages.component.scss',
    '../../../rentals/rentals.component.scss'
  ]
})
export class PhotoComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('extras.photo.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }

}
