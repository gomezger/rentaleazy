import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.scss']
})
export class MiniatureComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() icon: string;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
