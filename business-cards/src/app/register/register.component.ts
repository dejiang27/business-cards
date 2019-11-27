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

  errs:string;

  doRegister(email:string, password: string, cpassword:string){
    if(password === cpassword){
      this.authServiceService.register(email, password);
    }else{
      this.errs = "passwords must match!";
      console.log(this.errs);
    }
  }
}
