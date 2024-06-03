import { Component, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { RegisterDto } from './../../dto/register.dto'
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
    providers: [AuthService]
})
export class RegisterComponent {
    public loading = signal(false);

    public email = signal('');
    public password = signal('');
    public repeatedPassword = signal('');


    constructor(
        private authService: AuthService
    ) {}

    public submit(email: WritableSignal<string>, password: WritableSignal<string>, repeatedPassword: WritableSignal<string>) {

        this.authService.register(
            new RegisterDto(email(), password(), repeatedPassword())
        );
    }
}