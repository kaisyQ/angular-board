import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-auth-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
    providers: [AuthService]
})
export class LoginComponent {
  
    public loading = false;
    public email = '';
    public password = '';
    
    constructor(
        private authService: AuthService
    ) {}

    public submit(email: string, password: string) {
        this.authService.login(email, password);
    }
}
