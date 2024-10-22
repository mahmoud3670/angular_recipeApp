import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
  OnInit,
} from '@angular/core';
import { Ingredients } from '../../Shared/ingredients.model';
import { ShoppingListService } from '../../Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameRef: ElementRef;
  @ViewChild('nameInput', { static: true }) amountRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    const ingredient = new Ingredients(
      this.nameRef.nativeElement.value,
      this.amountRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(ingredient);
    //this.ingredientAdded.emit(ingredient);
  }
}
