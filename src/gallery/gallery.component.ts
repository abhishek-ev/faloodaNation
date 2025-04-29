import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoriesComponent } from './memories-section.component';
import { VideosComponent } from './videos-section.component';
import { ReviewsComponent } from './reviews-section.component';


@Component({
  selector: 'app-gallery',
  imports: [CommonModule,MemoriesComponent,VideosComponent,ReviewsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  activeTab: string = 'memories';

  setTab(tabName: string) {
    this.activeTab = tabName;
  }
}
