import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { FooterComponent } from '../../../common/footer/footer.component';

@Component({
  selector: 'app-vijayawada',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './vijayawada.component.html',
  styleUrl: './vijayawada.component.css'
})
export class VijayawadaComponent implements OnInit {
  selectedLocation: SafeResourceUrl;
  mapUrl = 'https://www.google.com/maps?q=Falooda%20Nation%20Vijayawada%2C%20Guru%20Nanak%20Colony%20Road%2C%20Kanaka%20Durga%20Gazetted%20Officers%20Colony%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520008&output=embed';
  schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Falooda Nation Vijayawada',
    'image': 'https://faloodanation.com/images/FaloodaNationLogo.png',  
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Guru Nanak Colony Road, Kanaka Durga Gazetted Officers Colony',
      'addressLocality': 'Vijayawada',
      'addressRegion': 'Andhra Pradesh',
      'postalCode': '520008',
      'addressCountry': 'IN'
    },
    'telephone': '+91 98959 32828',
    // 'email': 'director@thegreenbay.in',
    'url': 'https://faloodanation.com/vijayawada',  
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '16.5062',  
      'longitude': '80.6480'
    }
  };

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer
  ) {
    this.selectedLocation = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

  ngOnInit() {
    this.title.setTitle('Falooda Nation Vijayawada | Best Falooda in Andhra Pradesh');
    this.meta.updateTag({ name: 'description', content: 'Falooda Nation Vijayawada branch on Guru Nanak Colony Road, Andhra Pradesh. Discover authentic faloodas, contact details, reviews and an embedded Google Map.' });
  }
}