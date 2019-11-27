import { Component, OnInit, Input } from '@angular/core';

import {SearchService} from '../services/search.service';
import { Card } from '../app.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  message:string;
  cards:Array<Card>;
  constructor(private searchService: SearchService) {

    this.cards=this.searchService.result;
   }

  ngOnInit() {
  }

  getCards(){
    return this.cards;
  }

}
