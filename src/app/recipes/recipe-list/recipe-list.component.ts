import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  // @Output() selectedRecipe = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('kahk', 'decription', '/assets/Category/45.png'),
  //   new Recipe('molud', 'decription', '/assets/Category/47.png'),
  // ];

  constructor(
    private recipeServes: RecipeService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipes = this.recipeServes.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activated });
  }
  // onSelectedRecipe(recipe: Recipe) {
  //   this.selectedRecipe.emit(recipe);
  // }
}
