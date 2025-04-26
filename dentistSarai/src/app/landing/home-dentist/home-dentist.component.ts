import { Component, AfterViewInit } from '@angular/core';
import { NavBarDentistComponent } from "../components/nav-bar-dentist/nav-bar-dentist.component";
import { FooterDentistComponent } from '../components/footer-dentist/footer-dentist.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home-dentist',
  standalone: true,
  imports: [NavBarDentistComponent, FooterDentistComponent, CommonModule, RouterModule],
  templateUrl: './home-dentist.component.html',
  styleUrls: ['./home-dentist.component.css']
})
export class HomeDentistComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    // Esperar a que jQuery y Owl Carousel estén disponibles
    setTimeout(() => {
      if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
        $(".header-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          loop: true,
          nav: false,
          dots: true,
          items: 1,
          dotsData: true,
        });
        console.log("Carousel initialized");
        
        // Inicializar contador
        if ($.fn.counterUp) {
          $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
          });
        }
      } else {
        console.error("jQuery or Owl Carousel not loaded");
      }
    }, 500); // Aumentar el timeout para dar más tiempo a que carguen las bibliotecas
  
    // Back to top button
    $(window).scroll(() => {
      if ($(window).scrollTop()! > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
        
    $('.back-to-top').click(() => {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  }


  
  

}