import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

    home: string;
     
  constructor() {
    this.home="Dashboard";
  }


}
