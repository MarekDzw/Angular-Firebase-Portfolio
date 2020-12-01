import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    canActivate(): Observable<boolean> {
        return this.authService.authState$.pipe(map(state => {
            if (state !== null) { return true; }
            this.router.navigate(['/panel/login']);
            return false;
        }
        )
        );
    }
}