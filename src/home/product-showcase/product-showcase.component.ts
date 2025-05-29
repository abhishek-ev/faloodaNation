import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faloodaCategories } from '../../common/constants';


//service
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule, FontAwesomeModule],
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

  constructor(
    private routes: Router,
    private dataService: DataService
  ) { }


  faCircleChevronRight = faCircleChevronRight
  products = faloodaCategories;


  ngOnInit(): void {
    this.dataService.getCategoryList().then((categoryList) => {
      console.debug("categoryList", categoryList)
      // this.products = categoryList;
    });
  }


  onViewAllClick() {
    this.routes.navigate(['/ourProducts'])
  }
}
