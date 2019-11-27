import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../app.model';
import {BusinessCardService} from '../services/business-card.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input() card: Card;

  first:string;
  last:string;
  phone:string;
  mail:string;
  extra:string;
  imageUri:string;
  constructor(private businesscCardService:BusinessCardService, private db: AngularFirestore ) { 
    this.businesscCardService = businesscCardService;
  }

  ngOnInit() {
    this.first = this.card.firstName;
    this.last = this.card.lastName;
    this.mail = this.card.Email;
    this.phone = this.card.phoneNumber;
    this.extra = this.card.extraText;
    this.imageUri = this.card.imageUri;
  }
  
  destroyCard(phoneNumber:string){
    console.log("delete Card: " + phoneNumber);
    this.businesscCardService.destroyCards(phoneNumber);

  }
}
