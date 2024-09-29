import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    
    { 
        path: 'login',
        loadComponent: () => import("./components/login/login.component").then((login) => login.LoginComponent),
    },

    {
        path: 'register',
        loadComponent: () => import("./components/register/register.component").then((register) => register.RegisterComponent)
    },
    
    { path: '**', redirectTo: 'login' },
];
