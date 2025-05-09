import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-products',
  imports: [CommonModule,NavbarComponent,FooterComponent,FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  faCircleChevronRight = faCircleChevronRight;
  faloodaCategories = [
    {
      title: 'The Great Indian Falooda',
      subtitle: 'Chandigarh Ki Gulab (Kulfi Falooda)',
      items: ['Shalimar Falooda', 'Pyaare Gulab Jamun', 'Mumbai Ka King', 'Kesar Pista Falooda', 'Mango Kulfi Falooda'],
      imageUrl: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
      varieties: 18,
    },
    {
      title: 'The League of Falooda Nation',
      subtitle: 'Chandigarh Ki Gulab (Kulfi Falooda)',
      items: ['Shalimar Falooda', 'Pyaare Gulab Jamun', 'Mumbai Ka King', 'Kesar Pista Falooda', 'Mango Kulfi Falooda'],
      imageUrl: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
      varieties: 12,
    },
    {
      title: 'The Great Indian Falooda',
      subtitle: 'Chandigarh Ki Gulab (Kulfi Falooda)',
      items: ['Shalimar Falooda', 'Pyaare Gulab Jamun', 'Mumbai Ka King', 'Kesar Pista Falooda', 'Mango Kulfi Falooda'],
      imageUrl: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
      varieties: 18,
    },
    {
      title: 'The Great Indian Falooda',
      subtitle: 'Chandigarh Ki Gulab (Kulfi Falooda)',
      items: ['Shalimar Falooda', 'Pyaare Gulab Jamun', 'Mumbai Ka King', 'Kesar Pista Falooda', 'Mango Kulfi Falooda','Shalimar Falooda', 'Pyaare Gulab Jamun', 'Mumbai Ka King', 'Kesar Pista Falooda', 'Mango Kulfi Falooda'],
      imageUrl: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
      varieties: 18,
    }
  ];
}
