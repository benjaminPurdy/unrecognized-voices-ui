/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BillHouseComponent } from './bill-house.component';

describe('BillHouseComponent', () => {
  let component: BillHouseComponent;
  let fixture: ComponentFixture<BillHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
