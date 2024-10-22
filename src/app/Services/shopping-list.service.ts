import { Injectable } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingrenidents: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('mango', 10),
  ];
  constructor() {}
  getIngredients(): Ingredients[] {
    return this.ingrenidents;
  }

  addIngredient(ingrenident: Ingredients) {
    this.ingrenidents.push(ingrenident);
  }
  addIngredients(ingrenidents: Ingredients[]) {
    // for (let ingrenident of ingrenidents) {
    //   this.ingrenidents.push(ingrenident);
    // }
    this.ingrenidents.push(...ingrenidents);
  }
}
