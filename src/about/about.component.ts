import { Component } from '@angular/core';
import { FooterComponent } from "../common/footer/footer.component";
import { ContactCardComponent } from "../common/contact-card/contact-card.component";
import { NavbarComponent } from "../common/navbar/navbar.component";

@Component({
  selector: 'app-about',
  imports: [FooterComponent, ContactCardComponent, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
