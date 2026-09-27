import { Component } from '@angular/core';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes {
  recipesList = RECIPES_LIST_DATA;
}
