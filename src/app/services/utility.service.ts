import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _http: HttpClient) { }

  getSubscriptionType(email: string){
    return this._http.get("http://localhost:8088/utilityService/user-subscription/"+ email, {responseType: 'text'});
  }

  updateSubscriptionType(email: string, subscriptionType: string){
    return this._http.post("http://localhost:8088/utilityService/update-user-subscription", {"email": email, "subscriptionType": subscriptionType}, {responseType: 'text'});
  }
}
