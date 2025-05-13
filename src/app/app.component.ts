import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { ProductsComponent } from '../products/products/products.component';
import { FooterComponent } from '../common/footer/footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { AboutComponent } from '../about/about.component';
import { ContactCardComponent } from '../common/contact-card/contact-card.component';
import { FranchisePartnerComponent } from '../franchise-partner/franchise-partner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent , FooterComponent,GalleryComponent,NavbarComponent,AboutComponent,ContactCardComponent,FranchisePartnerComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faloodaNation';
}
