import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingScreenPage } from './calling-screen.page';

describe('CallingScreenPage', () => {
  let component: CallingScreenPage;
  let fixture: ComponentFixture<CallingScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
