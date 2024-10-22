import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';
import { ShoppingListService } from '../Services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  // ingrenidents: Ingredients[] = [
  //   new Ingredients('Apple', 5),
  //   new Ingredients('mango', 10),
  // ];
  ingrenidents: Ingredients[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingrenidents = this.shoppingListService.getIngredients();
  }
  // onIngredientAdded(ingredient: Ingredients) {
  //   this.shoppingListService.addIngredient(ingredient);
  // }
}
