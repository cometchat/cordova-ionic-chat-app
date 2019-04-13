import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupchatViewPage } from './groupchat-view.page';

describe('GroupchatViewPage', () => {
  let component: GroupchatViewPage;
  let fixture: ComponentFixture<GroupchatViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupchatViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupchatViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
