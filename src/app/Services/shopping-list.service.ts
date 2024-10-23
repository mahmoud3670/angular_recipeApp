import { Injectable } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('mango', 10),
  ];
  constructor() {}
  getIngredients(): Ingredients[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: Ingredients[]) {
    // for (let ingrenident of ingredients) {
    //   this.ingredients.push(ingrenident);
    // }
    this.ingredients.push(...ingredients);
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
