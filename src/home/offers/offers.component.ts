import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { offers } from '../../common/constants';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
  animations: []

})
export class OffersComponent implements OnInit {
    offers: any[] = [];

      constructor(private dataService: DataService) {}

        ngOnInit() {
    this.dataService.getOffers().then((data) => {
      this.offers = data;
    }).catch((error) => {
      console.error("Error fetching offers: ", error);
    });
  }

  popupImage: string | null = null;

  openPopup(image: string) {
    this.popupImage = image;
  }

  closePopup() {
    this.popupImage = null;
  }
 

  whyUsCards = [
    { icon: 'images/icon-unique-varieties-icon.png', title: '35+ Unique Varieties' },
    { icon: 'images/icon-Finest-Quality-Ingredients-icon.png', title: 'Finest Quality Ingredients' },
    { icon: 'images/icon-Exclusive-Signature-Recipes-icon.png', title: 'Exclusive Signature Recipes' },
    { icon: 'images/icon-Tradition-Meets-Innovation-icon.png', title: 'Tradition Meets Innovation' },
  ];
}
