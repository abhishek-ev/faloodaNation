import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { images } from '../common/constants';


@Component({
  selector: 'app-memories-section',
  imports: [CommonModule],
  templateUrl: './memories-section.component.html',
  styleUrl: './memories-section.component.css'
})
export class MemoriesComponent implements OnInit {
  allMemories: string[] = [];
  visibleMemories: string[] = [];
  loadCount = 12;

  images = images;

ngOnInit() {
  this.allMemories = this.images;
  this.visibleMemories = this.allMemories.slice(0, this.loadCount);
}

viewMore() {
  const next = this.visibleMemories.length + this.loadCount;
  this.visibleMemories = this.allMemories.slice(0, next);
}

get allLoaded() {
  return this.visibleMemories.length >= this.allMemories.length;
}
  
}
