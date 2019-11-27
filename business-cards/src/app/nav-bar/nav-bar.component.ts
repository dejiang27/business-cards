import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private searchService: SearchService, private router:Router) { }

  ngOnInit() {
  }

  firstName: string;

  searchCard(search:HTMLInputElement){
    this.firstName = search.value;
    //console.log("get something " +this.firstName);

    this.searchService.searchCards(this.firstName);
    //console.log("get something " +this.firstName);
    this.router.navigate(['search']);

  }
}
