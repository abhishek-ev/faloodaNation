import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, Router, } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPhone, faBars, faCircleChevronRight,faXmark} from '@fortawesome/free-solid-svg-icons' 
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

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
   faXmark = faXmark
 
 ngAfterViewInit(): void {
   AOS.init({
       duration: 1000,
       easing: 'ease-in-out',
       once: true,
       mirror: false,
     });
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
   closeMenu() {
   document.getElementById('nav-menu')?.classList.remove('show-menu');
 }
 }