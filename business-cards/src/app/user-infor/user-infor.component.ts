import { Component, OnInit } from '@angular/core';

import {AuthServiceService} from '../services/auth-service.service';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {

  constructor(private authServiceService: AuthServiceService) { }

  ngOnInit() {
  }


  


}
