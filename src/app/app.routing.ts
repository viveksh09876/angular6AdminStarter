import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', loadChildren: './layout/layout.module#LayoutModule'}
];

