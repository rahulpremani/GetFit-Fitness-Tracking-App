import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newCredentials } from '../home/reset-password/newCredentials';


@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  
  constructor(private _http: HttpClient) { }

  userExists(email: string){
    return this._http.get("http://localhost:8088/resetPasswordService/user-exists/"+ email, {responseType: 'text'}); 
  }

  userSecurityQuestion(email: string){
    return this._http.get("http://localhost:8088/resetPasswordService/security-question/"+ email, {responseType: 'text'});
  }

  resetPassword(credentials: newCredentials){
    return this._http.post("http://localhost:8088/resetPasswordService/reset-password", credentials, {responseType: 'text'});
  }
}
