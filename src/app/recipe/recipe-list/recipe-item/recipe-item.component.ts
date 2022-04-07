import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/api/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() index: number = 0;
  @Input() recipe: Recipe = {
    name: 'Default Recipe Name',
    description: 'Default Recipe Description',
    imagePath: 'assets/images/default_recipe.jpg',
    ingredients: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
