import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable()

export class AuthServiceService {

  errs:string;
  constructor(private angularFireAuth: AngularFireAuth, private router: Router){
  }

  login(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        this.router.navigate(['/business-cards']);
      })
      .catch(err => {
        this.errs = err.message;
        console.log('Something is wrong:',this.errs);
      });
  }

  logout(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/']);
  }
  
  isLoggedIn(): boolean{
    return this.angularFireAuth.auth.currentUser !== null;
  }

}
