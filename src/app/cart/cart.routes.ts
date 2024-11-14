import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./cart.component'),
  },
  // { path: 'inicio',  loadComponent: () =>import('../shared/layout/layout.component')},
] as Routes;
