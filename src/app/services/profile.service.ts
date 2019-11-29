import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }

  fetchDetailsForProfile(email: String) {
    return this._http.get('http://localhost:8088/registrationService/register/details/' + email);
  } 

  resetUserPassword(email: string, oldPassword: string, newPassword: string){
    return this._http.post('http://localhost:8088/resetPasswordService/reset-old-password', {"email": email, "oldPassword": oldPassword, "newPassword": newPassword}, {responseType: 'text'});
  }

}
