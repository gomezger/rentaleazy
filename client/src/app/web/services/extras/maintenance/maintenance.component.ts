import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: [
    './maintenance.component.scss', 
    '../../../index/packages/packages.component.scss',
    '../../../rentals/rentals.component.scss',
    '../../check-in/check-in.component.scss'
  ]
})
export class MaintenanceComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('extras.maintenance.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }
}
