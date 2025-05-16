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
    { image: 'https://img.freepik.com/free-photo/strawberry-milkshake-with-ice-table_140725-5486.jpg?ga=GA1.1.2131745765.1747425652&semt=ais_hybrid&w=740'},
    { image: 'https://img.freepik.com/free-photo/vanilla-strawberry-icecream-with-cinnamon-powder-glass-cup_114579-13182.jpg?ga=GA1.1.2131745765.1747425652&semt=ais_hybrid&w=740' },
    { image: 'https://img.freepik.com/free-photo/front-view-dessert-glass-with-straw_23-2148603256.jpg?ga=GA1.1.2131745765.1747425652&semt=ais_hybrid&w=740' },
  ];

  whyUsCards = [
    { icon: 'images/icon-unique-varieties-icon.png', title: '35+ Unique Varieties' },
    { icon: 'images/icon-Finest-Quality-Ingredients-icon.png', title: 'Finest Quality Ingredients' },
    { icon: 'images/icon-Exclusive-Signature-Recipes-icon.png', title: 'Exclusive Signature Recipes' },
    { icon: 'images/icon-Tradition-Meets-Innovation-icon.png', title: 'Tradition Meets Innovation' },
  ];
}
