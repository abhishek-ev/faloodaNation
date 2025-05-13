import { Component } from '@angular/core';
import { NavbarComponent } from "../common/navbar/navbar.component";
import { FooterComponent } from "../common/footer/footer.component";
import { ContactCardComponent } from "../common/contact-card/contact-card.component";

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, FooterComponent, ContactCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
