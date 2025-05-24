import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FranchisePartnerComponent } from '../franchise-partner/franchise-partner.component';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ProductsComponent } from '../products/products/products.component';
import { ReviewsComponent } from '../gallery/reviews-section.component';
import { HomeComponent } from '../home/home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout/home-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout/default-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
      path: '',
      component: HomeLayoutComponent,
      children: [
        { path: 'home', component: HomeComponent },
      ]
    },
    {
      path: '',
      component: DefaultLayoutComponent,
      children: [
        { path: 'aboutUs', component: AboutComponent },
        { path: 'contactUs', component: FranchisePartnerComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'ourProducts', component: ProductsComponent },
        { path: 'review', component:ReviewsComponent},
      ]
    },
    { path: '**', redirectTo: 'home' }
  ];
  
