import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
