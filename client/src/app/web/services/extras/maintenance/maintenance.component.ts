import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
