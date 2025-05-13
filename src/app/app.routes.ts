import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FranchisePartnerComponent } from '../franchise-partner/franchise-partner.component';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ProductsComponent } from '../products/products/products.component';
import { ReviewsComponent } from '../gallery/reviews-section.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'aboutUs',
        pathMatch:'full'
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
    {
        path:'offers',
        redirectTo: 'aboutUs'
    }
];

// const routerOptions: ExtraOptions = {
//     scrollPositionRestoration: 'enabled', 
//     anchorScrolling: 'enabled', 
//   };
