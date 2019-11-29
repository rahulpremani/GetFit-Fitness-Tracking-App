import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../home/log-in/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  registerUser(userDetails: User) {
    return this._http.post('http://localhost:8088/Fault-Tolerance-Fitness/userso', userDetails, {responseType: 'text'}); 
  }

  getNameOfUser() {
    let email = localStorage.getItem('token');
    let url = "http://localhost:8088/registrationService/register/users/name/" + email;
    return this._http.get(url, {responseType: 'text'});
  }
}
