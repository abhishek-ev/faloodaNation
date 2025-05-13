import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {SOCIAL_MEDIA_LINKS, Branches} from '../common/constants'
import { NavbarComponent } from '../common/navbar/navbar.component';
import { FooterComponent } from '../common/footer/footer.component';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-franchise-partner',
  imports: [CommonModule, FontAwesomeModule,NavbarComponent,FooterComponent,FormsModule],
  templateUrl: './franchise-partner.component.html',
  styleUrl: './franchise-partner.component.css'
})
export class FranchisePartnerComponent {
  faLocationDot = faLocationDot
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  socialLink = SOCIAL_MEDIA_LINKS;
  selectedLocation!: SafeResourceUrl;

  branches = Branches;

  constructor(private sanitizer: DomSanitizer) {
    this.setLocation('Falooda Nation');
  }

  setLocation(location: string) {
    const matchedBranch = this.branches.find(b => b.location === location);
    const branchList = matchedBranch ? matchedBranch.branches.join(', ') : '';
    const query = `Falooda Nation ${location} in ${branchList}`;
    this.selectedLocation = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`);
  }

  
}
