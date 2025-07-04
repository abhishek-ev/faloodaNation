import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-contact-card',
  imports: [FontAwesomeModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      once: true,
      duration: window.innerWidth < 768 ? 600 : 1000,
      offset: 100,
    });
  }
  constructor(private router: Router) { }
  faCircleChevronRight = faCircleChevronRight;

  gotoContacts() {
    this.router.navigate(['/contactUs'], { fragment: 'franchise' })
  }
}
