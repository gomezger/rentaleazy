import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(
    public _route: Router,
    public _activatedRoute: ActivatedRoute
  ){
    const language:string = this._activatedRoute.snapshot.paramMap.get('language');
    //this._route.navigate(['/es']);
  }

}
