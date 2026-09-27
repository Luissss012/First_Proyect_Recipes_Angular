import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList {
  private router = inject(Router);

  recipesList = RECIPES_LIST_DATA;
  _recipesListFilter = this.recipesList.recipes;

  filterType = '';
  _name = '';
  _difficulty = '';

  get canFilter(): boolean {
    if (this.filterType === 'NAME') return this._name.trim().length > 0;
    if (this.filterType === 'DIFFICULTY') return this._difficulty.trim().length > 0;
    return false;
  }

  viewDetails(id: number): void {
    this.router.navigate(['recipes-detail', id]);
  }

  filterRecipesList(): void {
    if (this.filterType === 'NAME') {
      const name = this._name.trim().toLowerCase();
      this._recipesListFilter = this.recipesList.recipes.filter(x =>
        x.name.toLowerCase().includes(name)
      );
      return;
    }

    if (this.filterType === 'DIFFICULTY') {
      const difficulty = this._difficulty.trim().toLowerCase();
      this._recipesListFilter = this.recipesList.recipes.filter(x =>
        x.difficulty.toLowerCase().includes(difficulty)
      );
      return;
    }

    this._recipesListFilter = this.recipesList.recipes;
  }

  filterRecipesListExternal(): void {
    if (!this.canFilter) return;

    this.router.navigate(['recipes-detail-v2'], {
      queryParams:
        this.filterType === 'NAME'
          ? { name: this._name.trim() }
          : { difficulty: this._difficulty.trim() }
    });
  }
}
