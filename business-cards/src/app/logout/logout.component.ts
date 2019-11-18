import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
  }



  logout(): boolean { 
    this.authService.logout(); 
    console.log("You are not logginged anymore!");
    return false;
  }
}
