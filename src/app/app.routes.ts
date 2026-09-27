import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Recipes } from './pages/recipes/recipes';
import { RecipesList } from './pages/recipes-list/recipes-list';
import { RecipesDetail } from './pages/recipes-detail/recipes-detail';
import { RecipesDetailV2 } from './pages/recipes-detail-v2/recipes-detail-v2';
import { UsersList } from './pages/users-list/users-list';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
  { path: 'recipes', component: Recipes },

  { path: 'recipes-list', component: RecipesList },
  { path: 'recipes-detail/:id', component: RecipesDetail },
  { path: 'recipes-detail-v2', component: RecipesDetailV2 },

  { path: 'users-list', component: UsersList },

  { path: '**', redirectTo: 'home' }
];