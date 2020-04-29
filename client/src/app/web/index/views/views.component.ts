import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel({
      pause: true,
      interval: false
    });
  }
}
