
export class RegisterDto {
    private _email: string;
    private _password: string;
    private _repeatedPassword: string;

    constructor(email: string, password: string, repeatedPassword: string) {
        this._email = email;
        this._password = password;
        this._repeatedPassword = repeatedPassword;
    }

    public get email() {
        return this._email;
    }

    public get password() {
        return this._password;
    }

    public get repeatedPassword() {
        return this._repeatedPassword;
    }
}