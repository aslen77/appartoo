import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedUser: User ; 
users: User[];
readonly baseURL = 'http://localhost:3000';
  constructor(public http : HttpClient) { }


postUser(user : User) {
return this.http.post(this.baseURL , user);
}

getUserList(){ 
  return this.http.get(this.baseURL);
}
  
}
