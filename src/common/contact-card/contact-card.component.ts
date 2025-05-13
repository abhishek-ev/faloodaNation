import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-card',
  imports: [FontAwesomeModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  constructor(private router: Router){}
  faCircleChevronRight = faCircleChevronRight;

  gotoContacts(){
    this.router.navigate(['/contactUs'],{fragment:'franchise'})
  }
}
