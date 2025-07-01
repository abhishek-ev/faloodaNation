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

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FooterComponent, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, AfterViewInit {
  constructor(private route: Router, private dataService: DataService) {}

  faCircleChevronRight = faCircleChevronRight;
  categoryData: any[] = [];
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
      })
      .catch((err) => {
        console.error('Error fetching data', err);
      });
  }

  ngAfterViewInit(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = +entry.target.getAttribute('data-index')!;
          const className = index % 2 === 0 ? 'animate-left' : 'animate-right';
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  this.cards.forEach((cardEl, i) => {
    cardEl.nativeElement.setAttribute('data-index', i.toString());
    observer.observe(cardEl.nativeElement);
  });
}


  gotoGallery(): void {
    this.route.navigate(['/gallery'], { fragment: 'container' });
  }

  onItemClick(categoryId: string, item: any): void {
    this.selectedImages[categoryId] = item;
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
