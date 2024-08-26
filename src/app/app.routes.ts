import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    
    { 
        path: 'login',
        loadComponent: () => import("./components/login/login.component").then((m) => m.LoginComponent),
    },
    
    { path: '**', redirectTo: 'login' },
];
