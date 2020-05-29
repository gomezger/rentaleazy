import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeadService } from 'src/app/services/head.service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public _head: HeadService
  ) { }

  ngOnInit(): void {
    this.setData();

    this._head.setMetas('index.packages.title','','');

  }

  setData(){
    this.translate.get('index.packages.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }
}
