import { Component, AfterViewInit,Input } from '@angular/core';
import { RouterLink, Router, } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPhone, faBars, faCircleChevronRight,faXmark} from '@fortawesome/free-solid-svg-icons' 
import { CommonModule} from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit{
  constructor(private router: Router){}
    faCircleChevronRight = faCircleChevronRight;
    faPhone=faPhone
    faBars=faBars
    faXmark = faXmark
    @Input() title: string = 'Experience the magic of';
    @Input() subtitle: string = 'versatility and duality, best captured in a swirl of fruit and nut falooda';
    @Input() image: string = 'images/galleryNav.png';
    @Input() titlespan:string = 'falooda';
  
  ngAfterViewInit(): void {
    AOS.init();
      const navMenu = document.getElementById('nav-menu');
      const navToggle = document.getElementById('nav-toggle');
      const navClose = document.getElementById('nav-close');
      const navLinks = document.querySelectorAll('.nav__link');
  
      if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
        });
      }
  
      if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        });
      }
  
      navLinks.forEach(link =>
        link.addEventListener('click', () => {
          navMenu?.classList.remove('show-menu');
        })
      );
    }
    gotoOffers(){
      this.router.navigate(['/home'],{fragment:'offers'})
    }
  }
