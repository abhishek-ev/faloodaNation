import { Component } from '@angular/core';
import { HomeNavComponent } from "../../../../home/home-nav/home-nav.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-layout',
  imports: [HomeNavComponent, RouterModule],
  templateUrl: './home-layout.component.html',
})
export class HomeLayoutComponent {

}
