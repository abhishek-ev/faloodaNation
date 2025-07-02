import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.css',
})

export class ProductShowcaseComponent {

  constructor(
    private routes: Router,
    private dataService: DataService
  ) { }


  faCircleChevronRight = faCircleChevronRight
   categoryData: any[] = [];


  ngOnInit(): void {
    this.dataService.getCategoryWithMenuItems().then((data) => {
      this.categoryData = data;
    }).catch((err) => {
      console.error('Error fetching data', err);
    });
  }

  onViewAllClick() {
    this.routes.navigate(['/ourProducts'])
  }

  ngAfterViewInit(): void {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
    offset: 100
  });
}
}
