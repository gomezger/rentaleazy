import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
