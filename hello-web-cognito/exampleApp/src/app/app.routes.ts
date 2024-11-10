import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { LoginComponent } from './login/login.component';
import { NewPasswordRequireComponent } from './new-password-require/new-password-require.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-password-require', component: NewPasswordRequireComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

