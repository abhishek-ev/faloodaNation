import { Component,OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MemoriesComponent } from './memories-section.component';
import { VideosComponent } from './videos-section.component';
import { ReviewsComponent } from './reviews-section.component';
import { ContactCardComponent } from "../common/contact-card/contact-card.component";
import { NavbarComponent } from "../common/navbar/navbar.component";
import { FooterComponent } from "../common/footer/footer.component";


@Component({
  selector: 'app-gallery',
  imports: [CommonModule, MemoriesComponent, VideosComponent, ReviewsComponent, ContactCardComponent, NavbarComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit, AfterViewInit{
  activeTab: string = 'memories';

  constructor(private route: ActivatedRoute, private el: ElementRef) {}
  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'reviews') {
        this.setTab('reviews');
        setTimeout(() => this.scrollToFragment(fragment), 100);
      }
    });
  }

  ngAfterViewInit() {
    // Handles case if the component is already loaded
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'reviews') {
        this.setTab('reviews');
        setTimeout(() => this.scrollToFragment(fragment), 100);
      }
    });
  }

  setTab(tabName: string) {
    this.activeTab = tabName;
  }

  scrollToFragment(fragment: string) {
    const element = this.el.nativeElement.querySelector(`#${fragment}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
