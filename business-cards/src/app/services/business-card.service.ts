import { Injectable } from '@angular/core';

import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import {config} from '../app.config';
import {Card} from '../app.model';
import { Observable } from 'rxjs';


@Injectable()

export class BusinessCardService {

  //cards: AngularFirestoreCollection<Card>;
  //private cardDoc: AngularFirestoreDocument<Card>;
  
  cards;
  message:string;

  constructor(private db: AngularFirestore) {
    //this.cards = db.collection<Card>(config.collection_endpoint);
    this.cards = this.db.collection('cards').valueChanges();
   }

   getCards() :Observable<any[]>{
     return this.cards;
   }

   addCards(card: Card){

    if((card.firstName != "") &&(card.lastName != "") && (card.phoneNumber != "")){
      this.db.collection('cards').doc(card.phoneNumber).set({
        firstName: card.firstName,
        lastName: card.lastName,
        phoneNumber: card.phoneNumber,
        Email: card.Email,
        extraText: card.extraText,
        imageUri: card.imageUri
      });
    }else{
      this.message = "Can not add a card without names and phone number";
      console.log("Can not add a card without names and phone number");
    }
   }


   updateCards(card:Card){
    //this.cardDoc = this.db.doc<Card>(`${config.collection_endpoint}/${id}`);
    //this.cardDoc.update(update);
    console.log("Updating ..." + card.phoneNumber);
    this.db.collection('cards').doc(card.phoneNumber).set({
      firstName: card.firstName,
       lastName: card.lastName,
       phoneNumber: card.phoneNumber,
       Email: card.Email,
       extraText: card.extraText,
       imageUri: card.imageUri
    });

   }

   destroyCards(id:string){
    //this.cardDoc = this.db.doc<Card>(`${config.collection_endpoint}/${id}`);
    //this.cardDoc.delete();
    
    console.log("Removing ..." + id);
    this.db.collection('cards').doc(id).delete();

   }
}
