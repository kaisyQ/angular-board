import { LoginComponent } from './../../components/login/login.component';
import { RegisterComponent } from './../../components/register/register.component';
import { Component } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-auth',
    styleUrls: ['./auth.component.scss'],
    templateUrl: './auth.component.html',
    standalone: true,
    imports: [
        LoginComponent,
        RegisterComponent,
        MatTabsModule,
        RouterModule
    ]
})
export class AuthComponent {

}