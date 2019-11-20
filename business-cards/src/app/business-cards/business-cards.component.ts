import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import {AuthServiceService} from '../services/auth-service.service';
@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.css']
})
export class BusinessCardsComponent implements OnInit {

  constructor(private authServiceService: AuthServiceService, private router:Router) { }

  ngOnInit() {
  }

}
