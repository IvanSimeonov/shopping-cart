import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeHomeComponent } from './recipe/recipe-home/recipe-home.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeHomeComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
