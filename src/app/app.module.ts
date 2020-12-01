import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterModule } from './shared/footer/footer.module';
import { FirebaseModule } from './firebase.module';
import { HomePageModule } from './home-page/home-page.module';
import { ChoosedCategoryModule } from './choosed-category/choosed-category.module';
import { HeaderModule } from './shared/header/header.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    FirebaseModule,
    HomePageModule,
    ChoosedCategoryModule,
    FooterModule,
    HeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
