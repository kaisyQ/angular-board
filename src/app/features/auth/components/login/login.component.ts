import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-auth-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class LoginComponent {
    
}
