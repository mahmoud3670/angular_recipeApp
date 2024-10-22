import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private activated: ActivatedRoute) {}
  ngOnInit(): void {
    this.activated.params.subscribe((parms: Params) => {
      this.id = +parms['id'];
      this.editMode = parms['id'] != null;
    });
  }
}
