import { Routes } from "@angular/router";
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                loadComponent: () => LoginComponent
            },
            {
                path: 'sign-in',
                loadComponent: () => LoginComponent
            },
            {
                path: 'sign-up',
                loadComponent: () => RegisterComponent
            }
        ]
    
    }
];

export default routes;