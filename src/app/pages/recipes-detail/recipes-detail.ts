import { Component, computed, input } from '@angular/core';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail',
  imports: [],
  templateUrl: './recipes-detail.html',
  styleUrl: './recipes-detail.css'
})
export class RecipesDetail {
  id = input<number | string>();
  recipesList = RECIPES_LIST_DATA;

  recipe = computed(() =>
    this.recipesList.recipes.find(x => x.id === Number(this.id()))
  );
}
