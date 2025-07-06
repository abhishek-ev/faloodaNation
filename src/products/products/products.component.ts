import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../common/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import * as AOS from 'aos';
import { NavbarComponent } from "../../common/navbar/navbar.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FooterComponent, FontAwesomeModule, NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, AfterViewInit {
  constructor(private route: Router, private dataService: DataService) { }

  faCircleChevronRight = faCircleChevronRight;
  categoryData: {
    id: string,
    name: string,
    description: string,
    image: string,
    items: {
      name: string
    }[],
    active_item: string
  }[] = [];
  selectedImages: { [key: string]: any } = {};
  popupImage: string = '';
  popupDescription: string = '';
  showPopup: boolean = false;

  @ViewChildren('card', { read: ElementRef }) cards!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.dataService
      .getCategoryWithMenuItems()
      .then((data) => {
        this.categoryData = data;

        this.categoryData.forEach((category) => {
          category.active_item = category.items[0]?.name || ''; // Set the first item as the default active value;
        });

      })
      .catch((err) => {
        console.error('Error fetching data', err);
      });
  }

  ngAfterViewInit(): void {
    AOS.init({
      once: true,
      duration: window.innerWidth < 768 ? 600 : 1000,
      offset: 100,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = +entry.target.getAttribute('data-index')!;
            const className = index % 2 === 0 ? 'animate-left' : 'animate-right';
            entry.target.classList.add(className);
            observer.unobserve(entry.target); // unobserve after animation triggers
          }
        });
      },
      { threshold: 0.1 }
    );

    this.cards.forEach((cardEl, i) => {
      cardEl.nativeElement.setAttribute('data-index', i.toString());
      observer.observe(cardEl.nativeElement);
    }); this.cards.forEach((cardEl, i) => {
      const delay = i * 50;
      cardEl.nativeElement.style.animationDelay = `${delay}ms`;
      cardEl.nativeElement.setAttribute('data-index', i.toString());
      observer.observe(cardEl.nativeElement);
    });

  }

  gotoGallery(): void {
    this.route.navigate(['/gallery'], { fragment: 'container' });
  }

  onItemClick(categoryId: string, item: any): void {
    this.selectedImages[categoryId] = item;
    item.active_item = item.name;
    this.categoryData.forEach((category) => {
      if (category.id === categoryId) {
        category.active_item = item.name;
      }
    })
  }

  onImageClick(image: string, description: string): void {
    this.popupImage = image;
    this.popupDescription = description;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
