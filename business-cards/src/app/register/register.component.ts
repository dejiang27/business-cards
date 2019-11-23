import { Component, OnInit } from '@angular/core';

import {AuthServiceService} from '../services/auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authServiceService: AuthServiceService) { }

  ngOnInit() {
  }

  errorMessage:string;
  successMessage:string;

  doRegister(email:string, password: string){
    this.authServiceService.register(email, password);
  }
  
}
