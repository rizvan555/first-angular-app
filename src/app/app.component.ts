import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contain: string = 'I am learning Angular ';
  myAge: string | number = 39;
  // string
  // number
  // boolean
  // date
  // any
  // object
}
