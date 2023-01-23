import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggeventoComponent } from './aggevento.component';

describe('AggeventoComponent', () => {
  let component: AggeventoComponent;
  let fixture: ComponentFixture<AggeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggeventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
