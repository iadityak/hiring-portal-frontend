import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReqWrapComponent } from './modal-req-wrap.component';

describe('ModalReqWrapComponent', () => {
  let component: ModalReqWrapComponent;
  let fixture: ComponentFixture<ModalReqWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReqWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReqWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
