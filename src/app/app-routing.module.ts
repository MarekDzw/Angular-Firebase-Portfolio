import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosedCategoryComponent } from './choosed-category/choosed-category.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'category/:id', component: ChoosedCategoryComponent },
  {
    path: 'panel',
    loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'
  },
  { path: 'admin', redirectTo: 'panel/admin' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
