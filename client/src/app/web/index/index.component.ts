import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('index.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }

  setLanguage(language: any){
    this.translate.use(language);
  }

}
