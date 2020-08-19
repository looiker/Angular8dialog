import { Component, OnInit , Input, Output, EventEmitter, } from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.scss']
})
export class BindingTestComponent implements OnInit {

  @Input() public userName;
  @Output() public userNameChange = new EventEmitter();
  constructor() { }
  public sender;
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  public change(userName: string){
    this.userNameChange.emit(this.userName);
  }


}
