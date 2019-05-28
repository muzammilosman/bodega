import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { error } from 'util';
import { analyzeFile } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(public http: HttpClient) { }

  // tslint:disable-next-line:no-shadowed-variable
  handleerror(error: HttpErrorResponse) {
    console.log(error);
  }

  userCheck(phone) {
    return this.http.get('https://bodega.eygert.com/api/users/fetchUser?phone=' + phone);
  }

  addUser(phone, email) {
    const Headers = {
      "phone": phone,
      "username": phone,
      "email": email,
      "emailVerified": true ,
      "password": 'abc'
    };

    console.log(Headers);

    this.http.post('https://bodega.eygert.com/api/users' ,  Headers).subscribe(data => {
      alert('User created' + data);
  });
  }


}
