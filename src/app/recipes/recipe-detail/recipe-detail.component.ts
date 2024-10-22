import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private activated: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe(
      +this.activated.snapshot.params['id']
    );
    this.activated.params.subscribe((param: Params) => {
      this.recipe = this.recipeService.getRecipe(+param['id']);
    });
  }
  addToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {
      relativeTo: this.activated,
    });
  }
}
