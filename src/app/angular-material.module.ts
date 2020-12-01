import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatSidenavModule,
    LayoutModule,
    SlickCarouselModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatSidenavModule,
    LayoutModule,
    SlickCarouselModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule {}
