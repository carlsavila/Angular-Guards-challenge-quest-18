import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { isAdminGuard } from './core/is-admin.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { isConnectedGuard } from './core/is-connected.guard';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'admin', component: AdminComponent, canActivate: [isAdminGuard],
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [isConnectedGuard ]
    },
    {    
        path: '', redirectTo: '/home', pathMatch: 'full',
    },
];
