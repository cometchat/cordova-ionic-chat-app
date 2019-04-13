import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatViewPage } from './chat-view.page';

describe('ChatViewPage', () => {
  let component: ChatViewPage;
  let fixture: ComponentFixture<ChatViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
