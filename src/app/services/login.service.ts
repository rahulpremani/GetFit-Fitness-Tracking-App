import { Injectable } from '@angular/core';
import { UserCredentials } from '../home/log-in/UserCredentials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  loginUser(userCredentials: UserCredentials){
    return this._http.post("http://localhost:8088/Fault-Tolerance-Fitness/autho", userCredentials, {responseType: 'text'});
  }
}
