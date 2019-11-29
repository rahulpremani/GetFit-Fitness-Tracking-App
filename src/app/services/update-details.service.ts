import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../dashboard/my-profile/profile';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsService {

  constructor(private _http: HttpClient) { }

  updateDetails(updateDetails: Profile) {
    let url = "http://localhost:8088/registrationService/register/update/users"
    this._http.put(url, updateDetails).subscribe(
      () => { },
      err => {
        console.log("error while updating");
      }
    )
  }

}