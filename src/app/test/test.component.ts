import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
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
  num = 1;
  msg = '';
  flag = false;
  arr = [1, 2, 3, 4, 5];
   today = new Date();
  // tslint:disable-next-line: typedef
  getData(){
    alert(1);
  }
  // setData(){
  //   this.msg('这是设置的值');
  // }
  keyUpFn(e)
  {
    console.log(e);
  }
 

  ngOnInit() {// 生命周期钩子函数

  }

}
