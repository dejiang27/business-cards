import { Injectable } from '@angular/core';
//import {config} from '../app.config';
//import {Card} from '../app.model';
//import {AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable()

export class AuthServiceService {

  //private user: Observable<firebase.User>;
  user;
  //cards: AngularFirestoreCollection<Card>;
  //private cardDoc: AngularFirestoreDocument<Card>;

  //constructor(private db:AngularFirestore) {
  //  this.cards = db.collection<Card>(config.collection_endpoint);
  // }
  constructor(private angularFireAuth: AngularFireAuth){
    //this.user = angularFireAuth.authState;
    this.user = angularFireAuth.user;
  }

  signIn(email: string, password: string) {
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
