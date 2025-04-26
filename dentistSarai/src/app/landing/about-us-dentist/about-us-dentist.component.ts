import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterDentistComponent } from '../components/footer-dentist/footer-dentist.component';
import { NavBarDentistComponent } from '../components/nav-bar-dentist/nav-bar-dentist.component';

@Component({
  selector: 'app-about-us-dentist',
  standalone: true,
  imports: [NavBarDentistComponent, FooterDentistComponent, CommonModule, RouterModule],
  templateUrl: './about-us-dentist.component.html',
  styleUrl: './about-us-dentist.component.css'
})
export class AboutUsDentistComponent {

}
