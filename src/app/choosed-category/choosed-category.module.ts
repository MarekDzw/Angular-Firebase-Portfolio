import { NgModule } from '@angular/core';
import {
  ChoosedCategoryComponent,
  SingleComponent
} from './choosed-category.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChoosedCategoryComponent, SingleComponent],
  entryComponents: [ChoosedCategoryComponent, SingleComponent],
  imports: [CommonModule, RouterModule]
})
export class ChoosedCategoryModule {}
