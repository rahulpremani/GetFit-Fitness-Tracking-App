import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { workoutData } from '../dashboard/my-workout-plan/workout-data';

@Injectable({
  providedIn: 'root'
})
export class WorkoutFormService {

  constructor(private _http: HttpClient) { }

  updatingForTotalCalories(modelForTotalCalories) {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories/users";
    this._http.put(url, modelForTotalCalories).subscribe(
      res => res,
      err => alert('Some Error Occured')
    );
  }

  postingForTotalCalories(modelForTotalCalories) {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories/users";
    this._http.post(url, modelForTotalCalories).subscribe(
      res => res,
      err => alert('Some Error Occured')
    );
  }

  updatingForTotalCaloriesMonthWise(modelForTotalCaloriesMonthWise) {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories-month-wise/users";
    this._http.put(url, modelForTotalCaloriesMonthWise).subscribe(
      res => res,
      err => alert('Some Error Occured')
    );
  }

  postingForTotalCaloriesMonthWise(modelForTotalCaloriesMonthWise) {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories-month-wise/users";
    this._http.post(url, modelForTotalCaloriesMonthWise).subscribe(
      res => res,
      err => alert('Some Error Occured')
    );
  }

  sendWorkoutFormData(model: Object): Observable<{}> {
    let url = "http://localhost:8088/Workout-Form-Data/workoutFormData/";
    return this._http.post(url, model)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  checkIfTotalCalExist(modelForTotalCalories) {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories/if-exists/" + modelForTotalCalories.email + "/" + modelForTotalCalories.date;
    return this._http.get(url);
  }

  checkIfTotalCalExistForMonthWise(modelForTotalCaloriesMonthWise) {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories-month-wise/if-exists/" + modelForTotalCaloriesMonthWise.email + "/" + modelForTotalCaloriesMonthWise.month;
    return this._http.get(url);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened while submitting workout form data; please try again later.');
  }

  getWorkoutData(email): Observable<workoutData> {
    let url = "http://localhost:8088/Workout-Form-Data/getWorkoutData/" + email;
    return this._http.get<workoutData>(url)
      .pipe(
        catchError(this.errorWorkoutData)
      )
  }

  errorWorkoutData() {
    return throwError(
      'Something bad happened while fetching workout data; please try again later.'
    )
  }

  fetchTotalCalDayWise(email, finalMonth, year) {
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories/fetch-total-day-wise/" + email + "/" + finalMonth + "/" + year;
    return this._http.get(url);
  }

  fetchTotalCalMonthWise(email, year){
    let url = "http://localhost:8088/Workout-Form-Data/for-total-calories-month-wise/fetch-total-month-wise/" + email + "/" + year;
    return this._http.get(url);
  }
}
