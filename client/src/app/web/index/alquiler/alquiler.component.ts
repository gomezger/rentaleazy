import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.scss']
})
export class AlquilerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ScrollReveal().reveal('.scroll-reveal-300', { delay: 300, easing: 'ease-in' });
    ScrollReveal().reveal('.scroll-reveal-100', { delay: 100, easing: 'ease-in'  });
  }

}
