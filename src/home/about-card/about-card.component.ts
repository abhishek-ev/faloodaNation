import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about-card',
  imports:[FontAwesomeModule],
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent implements AfterViewInit {
  constructor(private route:Router){}
  faCircleChevronRight = faCircleChevronRight

  ngAfterViewInit() {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-in-out'
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(elem => {
      observer.observe(elem);
    });
  }
  gotoAbout(){
     this.route.navigate(['/aboutUs'])
  }
}
