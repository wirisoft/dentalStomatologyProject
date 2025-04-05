import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDentistComponent } from './nav-bar-dentist.component';

describe('NavBarDentistComponent', () => {
  let component: NavBarDentistComponent;
  let fixture: ComponentFixture<NavBarDentistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarDentistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
