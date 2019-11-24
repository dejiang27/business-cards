import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import {AuthServiceService} from '../services/auth-service.service';
import {BusinessCardService} from '../services/business-card.service';
import {Card} from '../app.model';
import {BusinessCardComponent} from '../business-card/business-card.component';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.css']
})
export class BusinessCardsComponent implements OnInit {

  cards;
  constructor(private authServiceService: AuthServiceService, private router:Router, private businessCardService: BusinessCardService) { 
    this.cards = businessCardService.getCards();
  }

  ngOnInit() {
  }

}
