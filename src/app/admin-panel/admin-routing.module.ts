import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin-panel/admin/admin.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../admin-panel/login/login.component';
import { ReferenceComponent } from '../admin-panel/reference/reference.component';
import { RealizationComponent } from '../admin-panel/realization/realization.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'add-reference', component: ReferenceComponent, canActivate: [AuthGuard] },
    { path: 'add-realization', component: RealizationComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
