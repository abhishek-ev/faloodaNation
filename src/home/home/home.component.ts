import { Component } from '@angular/core';
import { HomeNavComponent } from "../home-nav/home-nav.component";
import { OffersComponent } from "../offers/offers.component";
import { ProductShowcaseComponent } from "../product-showcase/product-showcase.component";
import { AboutCardComponent } from "../about-card/about-card.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ContactCardComponent } from "../../common/contact-card/contact-card.component";
import { FooterComponent } from "../../common/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HomeNavComponent, OffersComponent, ProductShowcaseComponent, AboutCardComponent, TestimonialsComponent, ContactCardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
