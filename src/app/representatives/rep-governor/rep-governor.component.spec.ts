/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepGovernorComponent } from './rep-governor.component';

describe('RepGovernorComponent', () => {
  let component: RepGovernorComponent;
  let fixture: ComponentFixture<RepGovernorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepGovernorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepGovernorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
