/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuItem2Component } from './menu-item-2.component';

describe('MenuItem2Component', () => {
  let component: MenuItem2Component;
  let fixture: ComponentFixture<MenuItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
