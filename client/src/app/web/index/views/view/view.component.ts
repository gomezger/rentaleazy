import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @Input() active: boolean = false;
  @Input() image: string;
  @Input() text: string;
  @Input() title: string;
  @Input() photo: string;
  @Input() score: string;
  @Input() name: string;
  @Input() surname: string;
  @Input() flag: string;

  constructor() { }

  ngOnInit(): void {
  }

}
