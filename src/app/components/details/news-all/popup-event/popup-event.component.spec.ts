import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEventComponent } from './popup-event.component';

describe('PopupEventComponent', () => {
  let component: PopupEventComponent;
  let fixture: ComponentFixture<PopupEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
