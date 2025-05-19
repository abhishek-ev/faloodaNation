import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive ,Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPhone, faBars} from '@fortawesome/free-solid-svg-icons' 

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
}
