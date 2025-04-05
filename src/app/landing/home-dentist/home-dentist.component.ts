import { Component } from '@angular/core';
import { NavBarDentistComponent } from "../components/nav-bar-dentist/nav-bar-dentist.component";

@Component({
  selector: 'app-home-dentist',
  standalone: true,
  imports: [NavBarDentistComponent],
  templateUrl: './home-dentist.component.html',
  styleUrls: ['./home-dentist.component.css']
})
export class HomeDentistComponent {

}
