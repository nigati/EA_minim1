import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqextendedComponent } from './faqextended.component';

describe('FaqextendedComponent', () => {
  let component: FaqextendedComponent;
  let fixture: ComponentFixture<FaqextendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqextendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqextendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
