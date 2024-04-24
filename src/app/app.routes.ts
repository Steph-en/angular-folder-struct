import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then((m) => m.authRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-routing.module').then((m) => m.dashboardRoutes)
  },
  {
    path: '**',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
];
