import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../../Shared/ingredients.model';
import { ShoppingListService } from '../../Services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredients;
  @ViewChild('f', { static: true }) shoppingForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        ingredient
      );
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onDistroy() {
    this.subscription.unsubscribe();
  }
}
