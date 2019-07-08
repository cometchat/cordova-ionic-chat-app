import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedUsersPage } from './blocked-users.page';

describe('ChatViewPage', () => {
  let component: BlockedUsersPage;
  let fixture: ComponentFixture<BlockedUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
