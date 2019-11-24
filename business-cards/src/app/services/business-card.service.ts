import { Injectable } from '@angular/core';

import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import {config} from '../app.config';
import {Card} from '../app.model';


@Injectable()

export class BusinessCardService {

  //cards: AngularFirestoreCollection<Card>;
  private cardDoc: AngularFirestoreDocument<Card>;
  
  cards;

  constructor(private db: AngularFirestore) {
    //this.cards = db.collection<Card>(config.collection_endpoint);
    this.cards = this.db.collection('cards').valueChanges();
   }

   getCards(){
     return this.cards;
   }

   addCards(card: Card){
     this.db.collection('cards').add({
       firstName: card.firstName,
       lastname: card.lastName,
       phoneNumber: card.phoneNumber,
       Email: card.Email,
       extraText: card.extraText,
       imageUri: card.imageUri
     });
   }


   updateCard(id, update){
    this.cardDoc = this.db.doc<Card>(`${config.collection_endpoint}/${id}`);

    this.cardDoc.update(update);
   }

   destroyCard(id){
    this.cardDoc = this.db.doc<Card>(`${config.collection_endpoint}/${id}`);

    this.cardDoc.delete();

   }

}
