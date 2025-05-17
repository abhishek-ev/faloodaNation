import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
  animations:[]
  
})
export class OffersComponent {

  popupImage: string | null = null;

openPopup(imageUrl: string) {
  this.popupImage = imageUrl;
}

closePopup() {
  this.popupImage = null;
}

  offers = [
    { image: 'images/offers.png'},
    { image: 'images/offers.png' },
    { image: 'images/offers.png' },
  ];

  whyUsCards = [
    { icon: 'images/icon-unique-varieties-icon.png', title: '35+ Unique Varieties' },
    { icon: 'images/icon-Finest-Quality-Ingredients-icon.png', title: 'Finest Quality Ingredients' },
    { icon: 'images/icon-Exclusive-Signature-Recipes-icon.png', title: 'Exclusive Signature Recipes' },
    { icon: 'images/icon-Tradition-Meets-Innovation-icon.png', title: 'Tradition Meets Innovation' },
  ];
}
