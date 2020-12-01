
import { NgModule } from '@angular/core';
import { LoginComponent } from '../admin-panel/login/login.component';
import { ReferenceComponent } from '../admin-panel/reference/reference.component';
import { RealizationComponent } from '../admin-panel/realization/realization.component';
import { AngularMaterialModule } from '../angular-material.module';
import { AdminComponent } from '../admin-panel/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
@NgModule({
    declarations: [
        AdminComponent,
        LoginComponent,
        ReferenceComponent,
        RealizationComponent,
    ],
    imports: [
        AngularMaterialModule,
        FormsModule,
        CommonModule,
        AdminRoutingModule
    ],
    exports: [
        AngularMaterialModule,
        FormsModule,
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminPanelModule { }
