import { Injectable } from "@angular/core";
import { RegisterDto } from "../dto/register.dto";

@Injectable()
export class AuthService {
    
    login(email: string, password: string) {
        console.log(email, password);
    }

    register(data: RegisterDto) {

        if(!data.password || !data.repeatedPassword || !data.password) {
            throw new Error('test');
        }


        if(data.password === data.repeatedPassword) {
            console.log('from register', data);
        }
        
    }

    checkMe() {

    }
}