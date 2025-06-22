import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';
import { faloodaCategories } from '../../common/constants';
import { DataService } from '../../service/data.service';



@Component({
  selector: 'app-products',
  imports: [CommonModule, FooterComponent, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private route : Router,private dataService: DataService
){}
  faCircleChevronRight = faCircleChevronRight;
  categoryData: any[] = [];
  selectedImages: { [key: string]: any } = {}; // per-category image override
  popupImage: string = '';
  popupDescription: string = '';
  showPopup: boolean = false;

  ngOnInit(): void {
    this.dataService.getCategoryWithMenuItems().then((data) => {
      this.categoryData = data;
    }).catch((err) => {
      console.error('Error fetching data', err);
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
