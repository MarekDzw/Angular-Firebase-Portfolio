
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { AboutMeComponent } from '../home-page/about-me/about-me.component';
import { ReferenceContactComponent } from '../home-page/reference-contact/reference-contact.component';
import { SliderComponent } from '../home-page/reference-contact/slider/slider.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CategoryComponent,
        AboutMeComponent,
        ReferenceContactComponent,
        SliderComponent,
        HomePageComponent,
    ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        RouterModule,
    ],
})
export class HomePageModule { }
