import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [

    {
      path:"",component:HomeComponent
    },
    {
      path:":id",component:SingleProductPageComponent
    },
    {
      path:"**",component:NotfoundComponent
    }

];
