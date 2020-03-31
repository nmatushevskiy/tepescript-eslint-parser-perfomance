import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-component-five',
  templateUrl: './another-component-five.component.html',
  styleUrls: ['./another-component-five.component.css']
})
export class AnotherComponentFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('12345')
  }

}
