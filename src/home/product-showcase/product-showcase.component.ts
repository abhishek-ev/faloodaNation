import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.css',
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.product-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProductShowcaseComponent {
  constructor(private routes : Router){}
  faCircleChevronRight = faCircleChevronRight
  products = [
    {
      title: 'The Great Indian Faloodas',
      varieties: 10,
      image: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
      route: '/products/falooda-indian'
    },
    {
      title: 'The League of Falooda Nation',
      varieties: 10,
      image: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
    },
    {
      title: 'Signature Sundaes',
      varieties: 10,
      image: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
    },
    {
      title: 'Signature Sundaes',
      varieties: 10,
      image: 'https://img.freepik.com/free-photo/lychee-jelly-seasonal-fruit-beautifully-decorated-thai-dessert-concept_1150-23501.jpg?ga=GA1.1.104214007.1745296814&semt=ais_hybrid&w=740',
    } 
  ];

  onViewAllClick() {
    this.routes.navigate(['/ourProducts'])
  }
}
