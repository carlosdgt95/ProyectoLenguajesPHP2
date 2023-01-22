import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoscgComponent } from './eventoscg.component';

describe('EventoscgComponent', () => {
  let component: EventoscgComponent;
  let fixture: ComponentFixture<EventoscgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoscgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoscgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
