import { Injectable } from '@angular/core';

import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Card } from '../app.model';
//import {Router} from '@angular/Router';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  //result: Array<{firstName:string, lastName:string, phoneNumber:string, Email:string, extraText:string, imageUri:string}> = [];

  //results:[Card] = [];
  constructor(private db:AngularFirestore ) {

   }
   result:Array<Card> = [];

   searchCards(firstName:string){
    this.result = [];
    const cardList = this.db.firestore.collection('cards').where('firstName', '==', firstName);
    cardList.get().then( searchC =>{
      searchC.forEach(search =>{
        const he = search.id;
        const card = this.db.collection('cards').doc(he).ref.get().then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            const Email = doc.data()["Email"];
            const phoneNumber = doc.data()["phoneNumber"];
            const firstName = doc.data()["firstName"];
            const lastName = doc.data()["lastName"];
            const extraText = doc.data()["extarText"];
            const imageUri = doc.data()["imageUri"];
            const card = new Card(firstName, lastName, phoneNumber, Email, extraText, imageUri);

            //this.result.push({firstName, lastName, phoneNumber, Email, extraText, imageUri});
            this.result.push(card);

            console.log('Document data:', doc.data());
            //console.log("get mail" + Email);
          }
        });
      });
      //return result;
      //
      //console.log(this.result);
      return this.result;

      //this.router.navigate(['search']);
    });
    return this.result;

  }
}
