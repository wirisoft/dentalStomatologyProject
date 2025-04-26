import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsDentistComponent } from './treatments-dentist.component';

describe('TreatmentsDentistComponent', () => {
  let component: TreatmentsDentistComponent;
  let fixture: ComponentFixture<TreatmentsDentistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentsDentistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreatmentsDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
