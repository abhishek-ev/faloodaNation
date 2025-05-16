import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit,OnDestroy {
  currentIndex = 0;
  isPaused = false;
  scrollPosition = 0;
  intervalId: any;

  testimonials = [
    { text: '“Falooda Nation serves the Best Falooda\'s in town! Variety of flavours, Great Ambience and moderate Price! Highly recommend!”', author: 'Zaeem Abdulla' },
    { text: '“Loved the rose falooda, refreshing and flavorful. Definitely coming back for more!”', author: 'Zaeem Abdulla' },
    { text: '“Every bite is a delight! The ambiance is perfect. Highly recommended!”', author: 'Zaeem Abdulla' },
    { text: '“Affordable, tasty, and fresh desserts. This place is a hidden gem!”', author: 'Zaeem Abdulla' },
    { text: '“Perfect place to hang out with friends. Love the variety!”', author: 'Zaeem Abdulla' },
    { text: '“So many options! Everything tasted amazing. Will come again.”', author: 'Zaeem Abdulla' }
  ];

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
}
