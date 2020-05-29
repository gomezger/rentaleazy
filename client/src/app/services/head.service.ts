import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HeadService {

  constructor(
    public translate: TranslateService,
    private _meta: Meta
  ) { }


  public setMetas(title: string, url: string, description: string): void{
    this._meta.addTags([
      { name: 'og:title', content:title },
      { name: 'og:url', content: url },
      { name: 'og:description', content: description },
    ]);
  }

  getData(data: string): string {
    this.translate.get(data).subscribe((res: string) => {
      return res;
    });
    return '';
  }
  

}
