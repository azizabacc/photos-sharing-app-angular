import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class AuthService{
    private token!: string;
/* initialisation of the token */
    login():void{
        this.token = 'myToken';
    }
    getTocken (): string {
        return this.token;
    }
}