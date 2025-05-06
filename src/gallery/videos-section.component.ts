import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos-section.component.html',
  styleUrl: './videos-section.component.css'
})
export class VideosComponent {
  allVedios: SafeResourceUrl[] = [];
  visibleVedios: SafeResourceUrl[] = [];
  loadCount = 12;
  videolinks: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const urls = [
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
      "https://www.youtube.com/embed/SlpveO908gc",
    ];

    this.videolinks = urls.map(url =>
      this.sanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }
  ngOnInit() {
    this.allVedios = this.videolinks;
    this.visibleVedios = this.allVedios.slice(0, this.loadCount);
  }
  
  viewMore() {
    const next = this.visibleVedios.length + this.loadCount;
    this.visibleVedios = this.allVedios.slice(0, next);
  }
  
  get allLoaded() {
    return this.visibleVedios.length >= this.allVedios.length;
  }
}
