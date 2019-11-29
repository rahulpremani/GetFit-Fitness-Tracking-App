import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddWorkoutService {

  email = localStorage.getItem('token');
  constructor(private _http: HttpClient) {
  }

  insertingGoal(model) {
    let url = "http://localhost:8088/fetchExercise/goals/goal";
    this._http.post(url, model).subscribe(
      res => res,
      err => alert('Unknown Error Occured')
    );
  }
  gettingCalories() { 
    let url = "http://localhost:8088/fetchExercise/goals/goal/" + this.email;
    return this._http.get(url); 
  } 
  fetchingWeight() {
    let url = "http://localhost:8088/registrationService/register/users/" + this.email;
    return this._http.get(url);
  }
 
  fetchingMode() { 
    let url = "http://localhost:8088/fetchExercise/goals/goal/getMode/" + this.email;  
    return this._http.get(url);
  }
  gettingBodyType() {
    let url = "http://localhost:8088/fetchExercise/goals/goal/get-body-type/" + this.email;
    return this._http.get(url);
  }
  checkingIfGoalExists() {
    let url = "http://localhost:8088/fetchExercise/goals/if-exists/" + this.email;
    return this._http.get(url);
  }
  fetchingExercises(bodyTypeValue) {
    let url = "http://localhost:8088/fetchExercise/fetch-exercise/exercises/" + bodyTypeValue;
    return this._http.get(url); 
  }
  fetchingExercisesForWomen(bodyTypeValue) {
    let url = "http://localhost:8088/fetchExercise/fetch-exercise-women/exercises/" + bodyTypeValue;
    return this._http.get(url);
  }
  fetchingDiet(bodyTypeValue) {
    let url = "http://localhost:8088/fetchExercise/fetch-diet/diet/" + bodyTypeValue;
    return this._http.get(url);
  }
  fetchingGender() {
    let url = "http://localhost:8088/registrationService/register/users/gender/" + this.email;
    return this._http.get(url);
  }

}
