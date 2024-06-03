import { Component } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-auth',
    styleUrls: ['./auth.component.scss'],
    templateUrl: './auth.component.html',
    standalone: true,
    imports: [
        MatTabsModule,
        RouterModule
    ]
})
export class AuthComponent {

}