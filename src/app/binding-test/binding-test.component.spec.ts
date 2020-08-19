/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BindingTestComponent } from './binding-test.component';

describe('BindingTestComponent', () => {
  let component: BindingTestComponent;
  let fixture: ComponentFixture<BindingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
