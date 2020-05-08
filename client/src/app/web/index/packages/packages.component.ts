import { Component, OnInit, Input } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  @Input() recoil: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

