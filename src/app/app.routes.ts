import { Routes } from '@angular/router';
import { pageRoutes } from './landing/page-dentist-routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/landing/home-dentist',
        pathMatch: 'full'
    },
    ...pageRoutes,
    {
        path: '**',
        redirectTo: '/landing/components/404-dentist',
        pathMatch: 'full'
    }
];
