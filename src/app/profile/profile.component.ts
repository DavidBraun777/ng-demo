import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    constructor( 
      private authservice: AuthService, 
      public afAuth: AngularFireAuth
    ) {}
    ngOnInit() {}
    logout() {
      this.authservice.logout();
    }
}