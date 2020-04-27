import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/services/info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public phone: any;
  public social: any;
  public lang: string;

  constructor(
    public _activatedRoute: ActivatedRoute
  ) {     
    this.lang = this._activatedRoute.snapshot.paramMap.get('language');
  }

  ngOnInit(): void {
    this.phone = Info.phone;
    this.social = Info.social;
  }

}
