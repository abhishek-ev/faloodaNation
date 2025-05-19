import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FranchisePartnerComponent } from '../franchise-partner/franchise-partner.component';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ProductsComponent } from '../products/products/products.component';
import { ReviewsComponent } from '../gallery/reviews-section.component';
import { HomeComponent } from '../home/home/home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'contactUs',
        component:FranchisePartnerComponent
    },
    {
        path:'aboutUs',
        component:AboutComponent
    },
    {
        path:'gallery',
        component:GalleryComponent
    },
    {
        path:'ourProducts',
        component:ProductsComponent
    },
    {
        path:'review',
        component:ReviewsComponent
    },
];
