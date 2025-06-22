import { Component } from '@angular/core';
import { RouterLink, Router, } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPhone, faBars} from '@fortawesome/free-solid-svg-icons' 
import { CommonModule } from '@angular/common';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home-nav',
  imports: [FontAwesomeModule, RouterLink,CommonModule],
  templateUrl: './home-nav.component.html',
  styleUrl: './home-nav.component.css'
  
})
export class HomeNavComponent {
  constructor(private router: Router){}
  faCircleChevronRight = faCircleChevronRight;
  faPhone=faPhone
  faBars=faBars
  menuOpen = false;
  loaded = false;
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  gotoOffers(){
    this.router.navigate(['/home'],{fragment:'offers'})
  }
}
