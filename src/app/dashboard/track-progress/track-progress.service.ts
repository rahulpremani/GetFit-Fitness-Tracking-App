import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class TrackProgressService {

  email = localStorage.getItem('token');
  
  constructor(private _http: HttpClient) { }

  fetchingForGraph(): Observable<string> {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories/fetchForGraph/" + this.email;
    return this._http.get<any>(url).catch(this.errorHandler);

  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

  callQuote() {
    let url = "https://type.fit/api/quotes";
    return this._http.get<string>(url).catch(this.errorHandler);
  }

  fetchingTotalCal(month){
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories/fetch-month/" + this.email + "/" + month;
    return this._http.get(url);
  }

  fetchingProgress(currentMonth){
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories/fetch-progress/" + this.email + "/" + currentMonth;
      return this._http.get(url);
  }

}
