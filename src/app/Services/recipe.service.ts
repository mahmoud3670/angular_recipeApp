import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../Shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // selectedRecipe = new EventEmitter<Recipe>();
  selectedRecipe = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(1, 'kahk', 'decription', '/assets/Category/45.png', [
      new Ingredients('ing1', 10),
      new Ingredients('ing2', 20),
    ]),
    new Recipe(2, 'molud', 'decription', '/assets/Category/47.png', [
      new Ingredients('ing3', 10),
      new Ingredients('ing4', 20),
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes(): Recipe[] {
    return this.recipes;
  }
  getRecipeById(id: number): Recipe {
    const recipe = this.recipes.find((r) => {
      return r.id == id;
    });

    if (recipe) {
      return recipe;
    }
    return new Recipe(0, 'NAN', 'NAN', '/assets/Category/47.png', []);
  }
  addIngredientToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    recipe.id ??= this.recipes.length + 1;
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes);
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index - 1, 1);
    this.recipeChanged.next(this.recipes);
  }

  clearRecipes() {
    this.recipes = [];
  }
}
