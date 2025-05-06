import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css'],
  imports: [CommonModule]
})
export class ReviewsComponent {
  allReviews: { name: string; message: string }[] = [];
  visibleReviews: { name: string; message: string }[] = [];
  loadCount = 6;
  reviews = [
    { name: 'Zaeem Abdulla', message: 'Best Falooda ever! Highly recommended.' },
    { name: 'Zaeem Abdulla', message: 'Loved the flavors and ambience!' },
    { name: 'Zaeem Abdulla', message: 'Perfect place to chill with friends!' },
    { name: 'Zaeem Abdulla', message: 'Best Falooda ever! Highly recommended.' },
    { name: 'Zaeem Abdulla', message: 'Loved the flavors and ambience!' },
    { name: 'Zaeem Abdulla', message: 'Perfect place to chill with friends!' },
    { name: 'Zaeem Abdulla', message: 'Best Falooda ever! Highly recommended.' },
    { name: 'Zaeem Abdulla', message: 'Loved the flavors and ambience!' },
    { name: 'Zaeem Abdulla', message: 'Perfect place to chill with friends!' },
    { name: 'Zaeem Abdulla', message: 'Best Falooda ever! Highly recommended.' },
    { name: 'Zaeem Abdulla', message: 'Loved the flavors and ambience!' },
    { name: 'Zaeem Abdulla', message: 'Perfect place to chill with friends!' },
  ];
  ngOnInit() {
    this.allReviews = this.reviews;
    this.visibleReviews = this.allReviews.slice(0, this.loadCount);
  }

  viewMore() {
    const next = this.visibleReviews.length + this.loadCount;
    this.visibleReviews = this.allReviews.slice(0, next);
  }
  
  get allLoaded() {
    return this.visibleReviews.length >= this.allReviews.length;
  }
}