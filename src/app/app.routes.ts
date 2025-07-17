import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes básicos',
    // Lazy loading the basic page component
    loadComponent: () => import('./pages/basic-page/basic-page.component'),
  },
  {
    path: 'numbers',
    title: 'Pipes Numbers',
    // Lazy loading the numbers page component
    loadComponent: () => import('./pages/numbers-page/numbers-page.component'),
  },
  {
    path: 'uncommon',
    title: 'Pipes no tan comunes',
    // Lazy loading the uncommon page component
    loadComponent: () =>
      import('./pages/uncommon-page/uncommon-page.component'),
  },
  {
    path: 'custom',
    title: 'Pipes personalizados',
    // Lazy loading the custom page component
    loadComponent: () => import('./pages/custom-page/custom-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
