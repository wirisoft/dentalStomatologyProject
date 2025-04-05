import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDentistComponent } from './home-dentist.component';

describe('HomeDentistComponent', () => {
  let component: HomeDentistComponent;
  let fixture: ComponentFixture<HomeDentistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDentistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
