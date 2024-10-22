import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) {}

  // @Output() selectedRecipe = new EventEmitter<Recipe>();

  ngOnInit(): void {}

  // onSelect(recipe: Recipe) {
  //   //this.selectedRecipe.emit(recipe);
  //   this.recipeService.selectedRecipe.emit(recipe);
  // }
}
