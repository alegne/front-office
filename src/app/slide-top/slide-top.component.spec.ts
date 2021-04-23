import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTopComponent } from './slide-top.component';

describe('SlideTopComponent', () => {
  let component: SlideTopComponent;
  let fixture: ComponentFixture<SlideTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
