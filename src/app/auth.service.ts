import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import { Injectable } from '@angular/core';

export interface Credentials {
    email: string;
    password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    readonly authState$: Observable<User | null> = this.fireAuth.authState;

    constructor(private fireAuth: AngularFireAuth) { }

    get user(): User | null {
        return this.fireAuth.auth.currentUser;
    }

    login({ email, password }: Credentials) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }
    logout() {
        return this.fireAuth.auth.signOut();
    }
}