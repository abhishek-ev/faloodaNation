import { Component,OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-videos-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos-section.component.html',
  styleUrl: './videos-section.component.css'
})
export class VideosComponent implements OnInit {
  gallery: any[] = [];
  visibleVideos: SafeResourceUrl[] = [];
  loadCount = 12;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {}

ngOnInit() {
  this.dataService.getGallery().then((data) => {
    const allUrls = data.map(item =>
      this.sanitizer.bypassSecurityTrustResourceUrl(item.url)
    );
    this.visibleVideos = allUrls.slice(0, this.loadCount);
  }).catch((error) => {
    console.error("Error fetching gallery: ", error);
  });
}

viewMore() {
  const next = this.visibleVideos.length + this.loadCount;
  this.visibleVideos = this.gallery.slice(0, next);
}

  get allLoaded() {
    return this.visibleVideos.length >= this.gallery.length;
  }
}
