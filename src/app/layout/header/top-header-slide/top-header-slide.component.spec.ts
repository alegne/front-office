import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderSlideComponent } from './top-header-slide.component';

describe('TopHeaderSlideComponent', () => {
  let component: TopHeaderSlideComponent;
  let fixture: ComponentFixture<TopHeaderSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeaderSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
