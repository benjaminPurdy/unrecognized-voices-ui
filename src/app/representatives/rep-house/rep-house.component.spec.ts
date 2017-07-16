/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepHouseComponent } from './rep-house.component';

describe('RepHouseComponent', () => {
  let component: RepHouseComponent;
  let fixture: ComponentFixture<RepHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
