import { Component, computed, input } from '@angular/core';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail-v2',
  imports: [],
  templateUrl: './recipes-detail-v2.html',
  styleUrl: './recipes-detail-v2.css'
})
export class RecipesDetailV2 {
  name = input<string>();
  difficulty = input<string>();
  recipesList = RECIPES_LIST_DATA;

  filterRecipesList = computed(() => {
    const name = this.name()?.toLowerCase() ?? '';
    const difficulty = this.difficulty()?.toLowerCase() ?? '';

    return this.recipesList.recipes.filter(x => {
      if (name) return x.name.toLowerCase().includes(name);
      if (difficulty) return x.difficulty.toLowerCase().includes(difficulty);
      return false;
    });
  });
}
