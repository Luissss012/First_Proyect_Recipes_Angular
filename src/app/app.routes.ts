import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Recipes } from './pages/recipes/recipes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'recipes',
    component: Recipes
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];