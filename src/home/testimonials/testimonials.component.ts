import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { reviews } from '../../common/constants';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit,OnDestroy {
  constructor(private router:Router, private sanitizer: DomSanitizer){}
  faCircleChevronRight = faCircleChevronRight
  currentIndex = 0;
  isPaused = false;
  scrollPosition = 0;
  intervalId: any;

  testimonials = reviews;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.scrollPosition++;
        // Reset scroll position to loop smoothly
        if (this.scrollPosition > this.testimonials.length * 320) {
          this.scrollPosition = 0;
        }
      }
    }, 10); // speed control: lower = faster
  }

  stopAutoScroll() {
    clearInterval(this.intervalId);
  }

  onMouseEnter() {
    this.isPaused = true;
  }

  onMouseLeave() {
    this.isPaused = false;
  }
  gotoReviews(){
    this.router.navigate(['/gallery'],{fragment:'reviews'})
  }
}
