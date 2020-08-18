import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  oracle = 'wind';
  constructor() { }
  
  // tslint:disable-next-line: typedef
  ngOnInit() {


  }

}
