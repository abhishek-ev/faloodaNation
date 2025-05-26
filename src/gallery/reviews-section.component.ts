import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { reviews } from '../common/constants';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ReviewsComponent {
  placeName: string = '';

  allReviews: { name: string; message: string; profilepic:string }[] = [];
  visibleReviews: { name: string; message: string; profilepic:string }[] = [];
  loadCount = 6;
  reviews = reviews;
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

  redirectToGoogleReview() {
    const place = this.placeName.trim();
    if (place) {
      const query = encodeURIComponent(`Falooda Nation ${place} Reviews`);
      const mapsSearchUrl = `https://www.google.com/maps/search/${query}`;
      window.open(mapsSearchUrl, '_blank');
    } else {
      alert('Please enter a place name.');
    }
  } 
}