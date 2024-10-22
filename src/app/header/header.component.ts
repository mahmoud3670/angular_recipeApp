import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // @Output() actionSelected = new EventEmitter<string>();
  // recipe: string = 'active';
  // shopping: string = '';
  // onSelect(action: string) {
  //   if (action == 'recipe') {
  //     this.recipe = 'active';
  //     this.shopping = '';
  //   } else {
  //     this.shopping = 'active';
  //     this.recipe = '';
  //   }
  //   this.actionSelected.emit(action);
  // }
}
