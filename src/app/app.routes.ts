import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { RouterModule,Route } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home',component:HomeComponent},
  { path: 'resources', component: ResourcesComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component:ContactusComponent  },
];
