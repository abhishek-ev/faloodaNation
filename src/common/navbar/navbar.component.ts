import { Component, OnInit } from '@angular/core';
import { RouterLink,Router, NavigationEnd } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPhone, faBars} from '@fortawesome/free-solid-svg-icons' 
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  navImage:string = '';
  heading:string = '';
  highlight:string = '';
  navAbout:string = '';
  
  constructor(private router:Router){}
  faPhone=faPhone
  faBars=faBars
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  gotoOffers(){
    this.router.navigate(['/home'],{fragment:'offers'})
  }
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.url;

        if (currentRoute.includes('/contactUs')) {
          this.navImage = 'assets/images/conatctNavImg.png';
          this.heading = "Connect With";
          this.highlight = "US"
          this.navAbout = "Get In Touch"
        } else if (currentRoute.includes('/aboutUs')) {
          this.navImage = 'assets/images/ProductNavFalooda.png';
          this.heading = "About";
          this.highlight = "US"
          this.navAbout = "A Flavorful Journey of Passion and Perfection"
        } else if (currentRoute.includes('/gallery')) {
          this.navImage = 'assets/images/galleryNavImg.png';
          this.heading = "Gallery";
          this.highlight = ""
          this.navAbout = "A glimpse into the vibrant world of Falooda Nation—photos, videos, and moments that define us"
        } else if (currentRoute.includes('/ourProducts')) {
          this.navImage = 'assets/images/ProductNavFalooda.png';
          this.heading = "OUR";
          this.highlight = "Products"
          this.navAbout = "Explore Our Unique varieties"
        }
        else {
          this.navImage = 'assets/images/ProductNavFalooda.png';
          this.heading = "Falooda";
          this.highlight = "Nation"
          this.navAbout = "Explore Our Unique varieties"
        }
      });
  }
  
}
