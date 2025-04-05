import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDentistComponent } from './footer-dentist.component';

describe('FooterDentistComponent', () => {
  let component: FooterDentistComponent;
  let fixture: ComponentFixture<FooterDentistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDentistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
