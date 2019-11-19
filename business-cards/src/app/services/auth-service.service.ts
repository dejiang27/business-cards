import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable()

export class AuthServiceService {

  constructor(private angularFireAuth: AngularFireAuth){
  }

  login(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  logout(){
    this.angularFireAuth.auth.signOut();
  }
  
  isLoggined(): boolean{
    return this.angularFireAuth.auth.currentUser !== null;
  }

}
