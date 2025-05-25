import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';
import { faloodaCategories } from '../../common/constants';


@Component({
  selector: 'app-products',
  imports: [CommonModule, FooterComponent, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private route : Router){}
  faCircleChevronRight = faCircleChevronRight;
  faloodaCategories = faloodaCategories;
  gotoGallery(){
    this.route.navigate(['/gallery'],{fragment:'container'})
  }
}
