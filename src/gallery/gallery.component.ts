import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoriesComponent } from './memories-section.component';
import { VideosComponent } from './videos-section.component';
import { ReviewsComponent } from './reviews-section.component';
import { ContactCardComponent } from "../common/contact-card/contact-card.component";


@Component({
  selector: 'app-gallery',
  imports: [CommonModule, MemoriesComponent, VideosComponent, ReviewsComponent, ContactCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  activeTab: string = 'memories';

  setTab(tabName: string) {
    this.activeTab = tabName;
  }
}
