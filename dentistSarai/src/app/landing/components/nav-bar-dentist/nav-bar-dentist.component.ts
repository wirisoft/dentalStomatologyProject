import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-nav-bar-dentist',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar-dentist.component.html',
  styleUrls: ['./nav-bar-dentist.component.css']
})
export class NavBarDentistComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const navbar = this.el.nativeElement.querySelector('.sticky-top');
    if (window.scrollY > 300) {
      this.renderer.addClass(navbar, 'shadow-sm');
      this.renderer.setStyle(navbar, 'top', '0px');
    } else {
      this.renderer.removeClass(navbar, 'shadow-sm');
      this.renderer.setStyle(navbar, 'top', '-100px');
    }
  }

}
