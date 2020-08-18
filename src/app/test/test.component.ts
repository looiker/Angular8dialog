import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  oracle = 'wind';
  constructor() { }
  content = '<span>巴拉拉小魔仙</span>';
  id = '123';
  title = 'hello angular';
  list = [{name: 'Jani' , country: 'Norway'},
          {name: 'aplha', country: 'china'},
          {name: 'bate' , country: 'america'}, ];
  arrs = [1, 2 , 3, 4, 5];
  // tslint:disable-next-line: typedef
  ngOnInit() {// 生命周期钩子函数

  }

}
