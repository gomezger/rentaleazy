import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ScrollReveal().reveal('.scroll-reveal-300', { delay: 300, easing: 'ease-in' });
    ScrollReveal().reveal('.scroll-reveal-100', { delay: 100, easing: 'ease-in'  });
  }

}

