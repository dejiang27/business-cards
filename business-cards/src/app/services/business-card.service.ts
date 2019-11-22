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

  cards: AngularFirestoreCollection<Card>;
  private cardDoc: AngularFirestoreDocument<Card>;
  
  constructor(private db: AngularFirestore) {
    this.cards = db.collection<Card>(config.collection_endpoint);
   }

   createCard(card){
     this.cards.add(card);
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
