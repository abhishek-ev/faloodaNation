import { Component, HostListener, ChangeDetectorRef } from '@angular/core';import { OffersComponent } from "../offers/offers.component";
import { ProductShowcaseComponent } from "../product-showcase/product-showcase.component";
import { AboutCardComponent } from "../about-card/about-card.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ContactCardComponent } from "../../common/contact-card/contact-card.component";
import { FooterComponent } from "../../common/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [OffersComponent, ProductShowcaseComponent, AboutCardComponent, TestimonialsComponent, ContactCardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isScrolling = false;
  private scrollTimeout: any;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolling = true;
    this.cdr.detectChanges();

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      this.cdr.detectChanges(); 
    }, 500);
  }
}
