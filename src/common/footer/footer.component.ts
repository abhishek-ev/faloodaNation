import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faYoutube , faInstagram ,faFacebook ,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {SOCIAL_MEDIA_LINKS} from '../constants' 
import { RouterLink ,Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private route:Router){}
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  socialLinks = SOCIAL_MEDIA_LINKS


  gotoReviews(){
    this.route.navigate(['/gallery'],{fragment : 'reviews'})
  }
}
