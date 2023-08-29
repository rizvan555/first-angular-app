import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hallo</h1>
    <h3>{{ name }}</h3>
    <h4>I am {{ myAge }} years old.</h4>
    <h5 [innerHTML]="contain"></h5>
    <input type="text" value="{{ inputValue }}" />`,

  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Rizvan Karimov';
  contain: string = 'I am learning Angular ';
  myAge: string | number = 39;
  inputValue: string = 'Enter your Name';
  // string
  // number
  // boolean
  // date
  // any
  // object
}
