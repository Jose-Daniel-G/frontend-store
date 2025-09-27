import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'iniciar-sesion', loadComponent: () =>import('./auth/login/login.component').then((m) => m.LoginComponent),},
  { path: 'inicio',  loadComponent: () =>import('./shared/layout/layout.component').then((m) => m.default), },
  { path: 'catalogo', loadChildren: () => import('./products/features/product-shell/product.route'),},
  { path: 'cart', loadChildren: () => import('./cart/cart.routes') },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: '**', redirectTo: 'iniciar-sesion' }
];
