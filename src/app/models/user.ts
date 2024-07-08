export class User {

    constructor(
        private _login: string, 
        private _role:string, 
        private _password : string) {}

        get login(): string {
            return this._login;
        }
        get password(): string {
            return this._password;
        }
        set password(psw: string) {
            this._role = psw;
        }
        get role(): string {
            return this._role;
        }
        set role(role: string) {
            this._role = role;
        }

}
