import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorWordComponent } from './director-word.component';

describe('DirectorWordComponent', () => {
  let component: DirectorWordComponent;
  let fixture: ComponentFixture<DirectorWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
