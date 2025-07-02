import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import AOS from 'aos';


@Component({
  selector: 'app-memories-section',
  imports: [CommonModule],
  templateUrl: './memories-section.component.html',
  styleUrl: './memories-section.component.css'
})
export class MemoriesComponent implements OnInit {
  allMemories: { image: string, name?: string }[] = [];
  visibleMemories: { image: string, name?: string }[] = [];
  loadCount = 12;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosters().then((data) => {
      this.allMemories = data;
      this.visibleMemories = this.allMemories.slice(0, this.loadCount);
      setTimeout(() => AOS.refreshHard(), 0); // refresh after rendering
    }).catch((error) => {
      console.error("Error fetching posters: ", error);
    });

    AOS.init({
    duration: 600,
    once: true,
    easing: 'ease-in-out',
    offset: 100
  });
  }

  viewMore() {
    const next = this.visibleMemories.length + this.loadCount;
    this.visibleMemories = this.allMemories.slice(0, next);
    setTimeout(() => AOS.refreshHard(), 0); // refresh AOS after DOM update
  }

  get allLoaded() {
    return this.visibleMemories.length >= this.allMemories.length;
  }


}
