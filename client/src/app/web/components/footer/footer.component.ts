import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/services/info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public phone: any;
  public social: any;

  constructor() { }

  ngOnInit(): void {
    this.phone = Info.phone;
    this.social = Info.social;
  }

}
