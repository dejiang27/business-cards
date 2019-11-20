import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string): boolean { 
    //this.message = '';
    this.authService.login(email, password);

    if (this.authService.isLoggedIn()) {
      console.log('can not sign in!');

      //this.message = 'Incorrect credentials.'; 
      //setTimeout(function() {
      //  this.message = ''; 
      //}.bind(this), 2500);
    }else{
      console.log("You are in!");
      //this.message = 'Congraduations!';
    }
    return false; 
  }

}
