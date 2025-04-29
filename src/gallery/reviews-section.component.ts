import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css']
})
export class ReviewsComponent {
  reviews = [
    { name: 'Zaeem Abdulla', message: 'Best Falooda ever! Highly recommended.' },
    { name: 'Zaeem Abdulla', message: 'Loved the flavors and ambience!' },
    { name: 'Zaeem Abdulla', message: 'Perfect place to chill with friends!' },
  ];
}