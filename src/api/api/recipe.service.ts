import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'Falafel Burger',
      description:
        "A healthy burger that's filling too. These are great for anyone after a satisfying bite low in calories.",
      imagePath: '/assets/images/default_recipe.jpg',
      ingredients: [
        {
          name: 'can chickpeas, rinsed and drained',
          amount: 400,
        },
        {
          name: 'small red onion, roughly chopped',
          amount: 1,
        },
        {
          name: 'garlic clove, chopped',
          amount: 1,
        },
        {
          name: 'handful of flat-leaf parsley or curly parsley',
          amount: 1,
        },
        {
          name: 'ground cumin',
          amount: 1,
        },
        {
          name: 'ground coriander',
          amount: 1,
        },
        {
          name: 'tsp harissa paste or chilli powder',
          amount: 0.5,
        },
        {
          name: 'tbsp plain flour',
          amount: 2,
        },
        {
          name: 'tbsp sunflower oil',
          amount: 2,
        },
        {
          name: 'toasted pitta bread, to serve',
          amount: 1,
        },
        {
          name: 'tub tomato salsa, to serve',
          amount: 200,
        },
        {
          name: 'green salad, to serve',
          amount: 1,
        },
      ],
    },
    {
      name: 'Falafel Burger',
      description:
        "A healthy burger that's filling too. These are great for anyone after a satisfying bite low in calories.",
      imagePath: '/assets/images/default_recipe.jpg',
      ingredients: [
        {
          name: 'can chickpeas, rinsed and drained',
          amount: 400,
        },
        {
          name: 'small red onion, roughly chopped',
          amount: 1,
        },
        {
          name: 'garlic clove, chopped',
          amount: 1,
        },
        {
          name: 'handful of flat-leaf parsley or curly parsley',
          amount: 1,
        },
        {
          name: 'ground cumin',
          amount: 1,
        },
        {
          name: 'ground coriander',
          amount: 1,
        },
        {
          name: 'tsp harissa paste or chilli powder',
          amount: 0.5,
        },
        {
          name: 'tbsp plain flour',
          amount: 2,
        },
        {
          name: 'tbsp sunflower oil',
          amount: 2,
        },
        {
          name: 'toasted pitta bread, to serve',
          amount: 1,
        },
        {
          name: 'tub tomato salsa, to serve',
          amount: 200,
        },
        {
          name: 'green salad, to serve',
          amount: 1,
        },
      ],
    },
    {
      name: 'Falafel Burger',
      description:
        "A healthy burger that's filling too. These are great for anyone after a satisfying bite low in calories.",
      imagePath: '/assets/images/default_recipe.jpg',
      ingredients: [
        {
          name: 'can chickpeas, rinsed and drained',
          amount: 400,
        },
        {
          name: 'small red onion, roughly chopped',
          amount: 1,
        },
        {
          name: 'garlic clove, chopped',
          amount: 1,
        },
        {
          name: 'handful of flat-leaf parsley or curly parsley',
          amount: 1,
        },
        {
          name: 'ground cumin',
          amount: 1,
        },
        {
          name: 'ground coriander',
          amount: 1,
        },
        {
          name: 'tsp harissa paste or chilli powder',
          amount: 0.5,
        },
        {
          name: 'tbsp plain flour',
          amount: 2,
        },
        {
          name: 'tbsp sunflower oil',
          amount: 2,
        },
        {
          name: 'toasted pitta bread, to serve',
          amount: 1,
        },
        {
          name: 'tub tomato salsa, to serve',
          amount: 200,
        },
        {
          name: 'green salad, to serve',
          amount: 1,
        },
      ],
    },
    {
      name: 'Falafel Burger',
      description:
        "A healthy burger that's filling too. These are great for anyone after a satisfying bite low in calories.",
      imagePath: '/assets/images/default_recipe.jpg',
      ingredients: [
        {
          name: 'can chickpeas, rinsed and drained',
          amount: 400,
        },
        {
          name: 'small red onion, roughly chopped',
          amount: 1,
        },
        {
          name: 'garlic clove, chopped',
          amount: 1,
        },
        {
          name: 'handful of flat-leaf parsley or curly parsley',
          amount: 1,
        },
        {
          name: 'ground cumin',
          amount: 1,
        },
        {
          name: 'ground coriander',
          amount: 1,
        },
        {
          name: 'tsp harissa paste or chilli powder',
          amount: 0.5,
        },
        {
          name: 'tbsp plain flour',
          amount: 2,
        },
        {
          name: 'tbsp sunflower oil',
          amount: 2,
        },
        {
          name: 'toasted pitta bread, to serve',
          amount: 1,
        },
        {
          name: 'tub tomato salsa, to serve',
          amount: 200,
        },
        {
          name: 'green salad, to serve',
          amount: 1,
        },
      ],
    },
    {
      name: 'Falafel Burger',
      description:
        "A healthy burger that's filling too. These are great for anyone after a satisfying bite low in calories.",
      imagePath: '/assets/images/default_recipe.jpg',
      ingredients: [
        {
          name: 'can chickpeas, rinsed and drained',
          amount: 400,
        },
        {
          name: 'small red onion, roughly chopped',
          amount: 1,
        },
        {
          name: 'garlic clove, chopped',
          amount: 1,
        },
        {
          name: 'handful of flat-leaf parsley or curly parsley',
          amount: 1,
        },
        {
          name: 'ground cumin',
          amount: 1,
        },
        {
          name: 'ground coriander',
          amount: 1,
        },
        {
          name: 'tsp harissa paste or chilli powder',
          amount: 0.5,
        },
        {
          name: 'tbsp plain flour',
          amount: 2,
        },
        {
          name: 'tbsp sunflower oil',
          amount: 2,
        },
        {
          name: 'toasted pitta bread, to serve',
          amount: 1,
        },
        {
          name: 'tub tomato salsa, to serve',
          amount: 200,
        },
        {
          name: 'green salad, to serve',
          amount: 1,
        },
      ],
    },
  ];
  recipesChanged = new Subject<Recipe[]>();

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
