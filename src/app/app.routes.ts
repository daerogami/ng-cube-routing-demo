import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';

export const routes: Routes = [
    {
        component: HomePage,
        path: "",
        data: { animation: 'Home' }
    },
    {
        component: AboutPage,
        path: "about",
        data: { animation: 'About' }
    },
    {
      path: "**",
      redirectTo: ""
    }
];
