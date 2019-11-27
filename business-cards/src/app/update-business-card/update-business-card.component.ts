import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.model';
import {BusinessCardService} from '../services/business-card.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-update-business-card',
  templateUrl: './update-business-card.component.html',
  styleUrls: ['./update-business-card.component.css']
})
export class UpdateBusinessCardComponent implements OnInit {

  @Input() first:string;
  @Input() last:string;
  @Input() phone:string;
  @Input() mail:string;
  @Input() extra:string;

  card;
  myshow = false;

  constructor(private businesscCardService:BusinessCardService, private db: AngularFirestore ) { 
    this.businesscCardService = businesscCardService;

  }

  ngOnInit() {
    this.card = this.db.collection('cards').doc(this.phone).snapshotChanges();
  }


  oldData(){
    console.log("editing ..." + this.phone +this.last+this.first+this.mail+ this.extra);
  }

  updateCard(firsts: HTMLInputElement, lasts: HTMLInputElement, phones: HTMLInputElement, mails: HTMLInputElement, extras: HTMLInputElement){
    if(this.phone == phones.value){
      
      this.businesscCardService.updateCards(new Card(firsts.value, lasts.value, phones.value, mails.value, extras.value, ""));
    }else{
      this.businesscCardService.destroyCards(this.phone);
      this.businesscCardService.addCards(new Card(firsts.value, lasts.value, phones.value, mails.value, extras.value, ""));
    }

  }

  show(){
    return this.myshow;
  }

  myFunction(){
    if(this.myshow){
      return this.myshow = false;
    }else{
      return this.myshow = true;
    }
}
}
