import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventostandaddComponent } from './eventostandadd.component';

describe('EventostandaddComponent', () => {
  let component: EventostandaddComponent;
  let fixture: ComponentFixture<EventostandaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventostandaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventostandaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
