import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../app.model';
import {BusinessCardService} from '../services/business-card.service';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input() businessCard: Card;

  constructor(private businesscCardService:BusinessCardService ) { 
    this.businesscCardService = businesscCardService;
  }

  ngOnInit() {
  }

}
