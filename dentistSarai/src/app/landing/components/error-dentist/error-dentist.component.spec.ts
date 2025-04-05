import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDentistComponent } from './error-dentist.component';

describe('ErrorDentistComponent', () => {
  let component: ErrorDentistComponent;
  let fixture: ComponentFixture<ErrorDentistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDentistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
