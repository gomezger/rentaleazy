import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    })
  }

}

