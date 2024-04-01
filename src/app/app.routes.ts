import { Routes } from '@angular/router';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { AboutComponent } from './MyComponents/about/about.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'app', component: AboutComponent },
];
