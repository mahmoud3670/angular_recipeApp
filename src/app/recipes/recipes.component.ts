import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../Services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeSubscribtion: Subscription;
  // onSelect(recipe: Recipe) {
  //   //this.selectedRecipe.emit(recipe);
  //   this.recipe = recipe;
  // }
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeSubscribtion = this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
  ngOnDestroy(): void {
    this.recipeSubscribtion.unsubscribe();
  }
}
