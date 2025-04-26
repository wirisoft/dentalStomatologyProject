import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarDentistComponent } from '../components/nav-bar-dentist/nav-bar-dentist.component';
import { FooterDentistComponent } from '../components/footer-dentist/footer-dentist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-treatments-dentist',
  standalone: true,
  imports: [NavBarDentistComponent, FooterDentistComponent, CommonModule, RouterModule],
  templateUrl: './treatments-dentist.component.html',
  styleUrl: './treatments-dentist.component.css'
})
export class TreatmentsDentistComponent implements AfterViewInit{

  @ViewChild('imgWrapper') imgWrapper?: ElementRef;
  @ViewChild('slider') slider?: ElementRef;
  @ViewChild('beforeImage') beforeImage?: ElementRef;
  @ViewChild('sliderHandle') sliderHandle?: ElementRef;
  
  isDragging = false;
  
  ngAfterViewInit() {
    this.initializeComparisonSlider();
  }

  initializeComparisonSlider() {
    if (!this.slider || !this.beforeImage || !this.imgWrapper || !this.sliderHandle) return;
    
    const slider = this.slider.nativeElement;
    const container = this.imgWrapper.nativeElement;
    
    // Set initial position
    this.setSliderPosition(50);
    
    // Add event listeners
    slider.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      this.setSliderPosition(parseInt(target.value));
    });
    
    // Add mouse/touch events for smoother interaction
    container.addEventListener('mousedown', this.startDrag.bind(this));
    container.addEventListener('touchstart', this.startDrag.bind(this), { passive: true });
    
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('touchmove', this.drag.bind(this), { passive: false });
    
    document.addEventListener('mouseup', this.endDrag.bind(this));
    document.addEventListener('touchend', this.endDrag.bind(this));
  }
  
  startDrag(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.drag(e);
  }
  
  drag(e: MouseEvent | TouchEvent) {
    if (!this.isDragging || !this.imgWrapper) return;
    
    e.preventDefault();
    
    const container = this.imgWrapper.nativeElement;
    const containerRect = container.getBoundingClientRect();
    
    let clientX: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    this.setSliderPosition(Math.max(0, Math.min(100, position)));
    
    if (this.slider) {
      (this.slider.nativeElement as HTMLInputElement).value = String(position);
    }
  }
  
  endDrag() {
    this.isDragging = false;
  }

  setSliderPosition(value: number) {
    if (!this.beforeImage || !this.sliderHandle) return;
    
    const beforeImg = this.beforeImage.nativeElement;
    const handle = this.sliderHandle.nativeElement;
    
    // Update clip path instead of width
    beforeImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    
    // Move the slider handle
    handle.style.left = `${value}%`;
  }

  showImage1 = false;
  showImage2 = false;
  showImage3 = false;
  showImage4 = false;
}
