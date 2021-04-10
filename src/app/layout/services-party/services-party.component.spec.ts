import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPartyComponent } from './services-party.component';

describe('ServicesPartyComponent', () => {
  let component: ServicesPartyComponent;
  let fixture: ComponentFixture<ServicesPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
