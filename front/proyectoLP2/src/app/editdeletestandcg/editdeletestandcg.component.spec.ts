import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeletestandcgComponent } from './editdeletestandcg.component';

describe('EditdeletestandcgComponent', () => {
  let component: EditdeletestandcgComponent;
  let fixture: ComponentFixture<EditdeletestandcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdeletestandcgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdeletestandcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
