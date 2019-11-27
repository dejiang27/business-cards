import { Component, OnInit } from '@angular/core';
import {BusinessCardService} from '../services/business-card.service';
import {Card} from '../app.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-business-card',
  templateUrl: './new-business-card.component.html',
  styleUrls: ['./new-business-card.component.css']
})
export class NewBusinessCardComponent implements OnInit {


  message:string;
  constructor(private businessCardService: BusinessCardService, private db : AngularFirestore) {
    this.businessCardService = businessCardService;
   }

  ngOnInit() {
  }

  addCard(firstName:HTMLInputElement, lastName:HTMLInputElement, Email:HTMLInputElement, phoneNumber: HTMLInputElement, extraText:HTMLInputElement):boolean{
    this.businessCardService.addCards(new Card(firstName.value, lastName.value, phoneNumber.value, Email.value, extraText.value, ""));
    //console.log("Added a new business card:" +firstName.value +" " + lastName.value);

    firstName.value = '';
    lastName.value = '';
    Email.value = '';
    phoneNumber.value = '';
    extraText.value = '';

    this.message = this.businessCardService.message;
    return false;
  }
}
