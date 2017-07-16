/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BillGovernorComponent } from './bill-governor.component';

describe('BillGovernorComponent', () => {
  let component: BillGovernorComponent;
  let fixture: ComponentFixture<BillGovernorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillGovernorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillGovernorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
