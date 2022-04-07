import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/api/api/recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalRecipes: number = 0;
  totalItemsShoppingList: number = 10;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.totalRecipes = this.recipeService.getRecipes().length;
  }

}
