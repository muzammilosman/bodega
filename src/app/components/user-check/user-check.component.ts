import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import {} from '@angular/forms';

import { UserservicesService } from '../../services/userservices.service';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.css']
})
export class UserCheckComponent implements OnInit {

  phone: string;
  name: string;
  email: string;
  latitude: string;
  longitude: string;
  userFound = false;

  userDetail: any;
  constructor(private userservice: UserservicesService) { }

  ngOnInit() {
  }

  checkuser() {
    this.userservice.userCheck(this.phone).subscribe(data => {
      this.userDetail = data;
      this.userFound = true;
    },
    error => {
      this.userFound = false;
      console.log( 'Error message' + error);
    });
  }

  addNewUser() {
    this.userservice.addUser(this.phone, this.email);
  }

}
