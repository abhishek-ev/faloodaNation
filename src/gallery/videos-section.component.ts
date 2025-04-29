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
    ];

    this.videolinks = urls.map(url =>
      this.sanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }
}
