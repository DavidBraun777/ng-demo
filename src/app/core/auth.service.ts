import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ) {}

    logout() {
        this.afAuth.signOut();
        this.router.navigate(['']);
    }
}