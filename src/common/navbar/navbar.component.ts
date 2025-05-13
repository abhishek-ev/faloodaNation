import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPhone, faBars} from '@fortawesome/free-solid-svg-icons' 

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule,RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faPhone=faPhone
  faBars=faBars
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
