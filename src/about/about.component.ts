import { Component } from '@angular/core';
import { FooterComponent } from "../common/footer/footer.component";
import { ContactCardComponent } from "../common/contact-card/contact-card.component";

@Component({
  selector: 'app-about',
  imports: [FooterComponent, ContactCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
