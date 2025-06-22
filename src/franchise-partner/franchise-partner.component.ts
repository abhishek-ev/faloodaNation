import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {SOCIAL_MEDIA_LINKS, Branches} from '../common/constants'
import { FooterComponent } from '../common/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-franchise-partner',
  imports: [CommonModule, FontAwesomeModule,FooterComponent,FormsModule],
  templateUrl: './franchise-partner.component.html',
  styleUrl: './franchise-partner.component.css'
})
export class FranchisePartnerComponent {

  ngOnInit() {
  console.log('API URL:', this.apiUrl);
}
  faLocationDot = faLocationDot
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  socialLink = SOCIAL_MEDIA_LINKS;
  selectedLocation!: SafeResourceUrl;
  apiUrl = `https://formsapi.jabwn.com/key/${environment.jabwnApiKey}`;
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
