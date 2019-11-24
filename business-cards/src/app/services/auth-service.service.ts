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
    if(this.isLoggedIn()){
      this.angularFireAuth.auth.signOut();
      this.router.navigate(['/']);
    }else{
      console.log("No user logged in");

    }
    
  }
  
  isLoggedIn(): boolean{
    return this.angularFireAuth.auth.currentUser !== null;
  }

  register(email: string, password: string){
    this.angularFireAuth
    .auth.
    createUserWithEmailAndPassword(email, password)
    .then(res =>{
      console.log(res);
      console.log('Successfully signed up');
      this.router.navigate(['/login']);

    }, err =>{
      console.log(err);
      console.log('Something is wrong: ' + err);
    })
  }

  getCurrentUser(){
    if(this.isLoggedIn()){
      var user = this.angularFireAuth.auth.currentUser;
      return user.email;
    }else{
      console.log("No user logged in");

    }
  }
}
