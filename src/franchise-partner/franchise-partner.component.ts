import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SOCIAL_MEDIA_LINKS, Branches } from '../common/constants'
import { FooterComponent } from '../common/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import * as AOS from 'aos';


@Component({
  selector: 'app-franchise-partner',
  imports: [CommonModule, FontAwesomeModule, FooterComponent, FormsModule],
  templateUrl: './franchise-partner.component.html',
  styleUrl: './franchise-partner.component.css'
})
export class FranchisePartnerComponent implements OnInit, AfterViewInit  {

  faLocationDot = faLocationDot
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  socialLink = SOCIAL_MEDIA_LINKS;
  selectedLocation!: SafeResourceUrl;
  apiUrl = `https://formsapi.jabwn.com/key/${environment.jabwnApiKey}`;
  branches = Branches;

  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('phone') phoneInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('message') messageInput!: ElementRef;

  submissionSuccess = false;

  constructor(private sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef  ) {
    this.setLocation('Falooda Nation');
  }

  setLocation(location: string) {
    const matchedBranch = this.branches.find(b => b.location === location);
    const branchList = matchedBranch ? matchedBranch.branches.join(', ') : '';
    const query = `Falooda Nation ${location} in ${branchList}`;
    this.selectedLocation = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`);
  }

  onSubmitSuccess(event: Event) {
    // Optional: delay success message until Jabwn returns — but iframe won’t give callback
    this.submissionSuccess = true;

    // Reset input values manually
    setTimeout(() => {
      this.submissionSuccess = false;
      this.nameInput.nativeElement.value = '';
      this.phoneInput.nativeElement.value = '';
      this.emailInput.nativeElement.value = '';
      this.messageInput.nativeElement.value = '';
    }, 4000);
  }

ngOnInit(): void {
  AOS.init({
    duration: 1000,          
    easing: 'ease-in-out',  
    once: true,             
    offset: 220            
  });
}

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }

  animationPicker(index: number, total: number): string {
  return index % 2 === 0 ? 'fade-left' : 'fade-right';
}

animationTiming(index: number, total: number): string {
  return `${900 + (index * 100)}`;
}

}
