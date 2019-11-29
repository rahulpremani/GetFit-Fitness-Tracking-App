import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { workoutModel } from 'src/app/workoutModel';
import { WorkoutFormService } from 'src/app/services/workout-form.service';
import { AddWorkoutService } from 'src/app/dashboard/add-workout-plan/add-workout.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { DatePipe } from '@angular/common';
import * as $ from 'jquery';

import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  id: string;
  fName: String;
  arr = [];
  isRunning = false
  source;
  isSubscribed: boolean;
  bgSong = "../assets/bgsong.mp3";

  workoutForm: FormGroup;
  activityArray: any = ['Arnold Press', 'Front Raise', 'Running', 'Rope Jumps', 'Jumping Jacks', 'Squats', 'Flutter Kicks', 'Crunches', 'Push-Ups', 'Planks',
    'Burpee', 'Biceps Curl', 'Triceps Press', 'Curl-Ups', 'Wipers', 'Lunges', 'Pull-Ups',
    'Cycling', 'Jogging', 'Swimming', 'Swimming-Freestyle', 'Swimming-Backstroke', 'Swimming-Butterfly', 'Yoga', 'Weight-Training', 'Running at 5 Min/Km', 'Running at 6 Min/Km', 'Running at 7 Min/Km'];

  activities: any = this.activityArray.sort();
  time: any;
  hours: number;
  minutes: number;
  seconds: number;
  finalMinutes: number;
  weight: any;
  temp: any;
  gender: any;

  model: workoutModel = {
    title: '',
    activity: '',
    duration: 0,
    date: '',
    email: '',
    calories: 0,
    forDay: 0,
    forMonth: 0,
    forYear: 0,
  }

  modelForTotalCalories = {
    email: '',
    date: '',
    totalCalories: 0,
    month: 0,
    year: 0
  }

  modelForTotalCaloriesMonthWise = {
    email: '',
    totalCalories: 0,
    month: 0,
    year: 0
  }

  get title() {
    return this.workoutForm.get('title');
  }

  get activity() {
    return this.workoutForm.get('activity');
  }

  get duration() {
    return this.workoutForm.get('duration');
  }

  ngDoCheck(){
    if (localStorage.getItem('subscription-type') === 'premium') {
      this.isSubscribed = true;
    } else {
      this.isSubscribed = false;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    location.reload();
  }

  fetchGif() {
    if (this.activity.value == "Running" || this.activity.value == "Running at 5 Min/Km" || this.activity.value == "Running at 6 Min/Km" || this.activity.value == "Running at 7 Min/Km") {
      this.source = "running.gif";
      this.isRunning = true
    } else if (this.activity.value == "Swimming" || this.activity.value == "Swimming-Freestyle") {
      this.source = "freestyle.gif";
      this.isRunning = true
    } else if (this.activity.value == "Swimming-Backstroke") {
      this.source = "backstroke.gif";
      this.isRunning = true
    } else if (this.activity.value == "Swimming-Butterfly") {
      this.source = "butterfly.gif";
      this.isRunning = true
    } else if (this.activity.value == "Biceps Curl") {
      this.source = "biceps curl.gif";
      this.isRunning = true
    } else if (this.activity.value == "Crunches") {
      this.source = "crunches.gif";
      this.isRunning = true
    } else if (this.activity.value == "Jogging") {
      this.source = "jogging.gif";
      this.isRunning = true
    } else if (this.activity.value == "Curl-Ups") {
      this.source = "curl ups.gif";
      this.isRunning = true
    } else if (this.activity.value == "Cycling") {
      this.source = "cycling.gif";
      this.isRunning = true
    } else if (this.activity.value == "Flutter Kicks") {
      this.source = "flutter kicks.gif";
      this.isRunning = true
    } else if (this.activity.value == "Lunges") {
      this.source = "lunges.gif";
      this.isRunning = true
    } else if (this.activity.value == "Planks") {
      this.source = "planks.gif";
      this.isRunning = true
    } else if (this.activity.value == "Squats") {
      this.source = "squats.gif";
      this.isRunning = true
    } else if (this.activity.value == "Pull-Ups") {
      this.source = "pull ups.gif";
      this.isRunning = true
    } else if (this.activity.value == "Wipers") {
      this.source = "wipers.gif";
      this.isRunning = true
    } else if (this.activity.value == "Yoga") {
      this.source = "yoga.gif";
      this.isRunning = true
    } else if (this.activity.value == "Push-Ups") {
      this.source = "push ups.gif";
      this.isRunning = true
    } else if (this.activity.value == "Triceps Press") {
      this.source = "triceps press.gif";
      this.isRunning = true
    } else if (this.activity.value == "Weight-Training") {
      this.source = "weight training.gif";
      this.isRunning = true
    } else if (this.activity.value == "Jumping Jacks") {
      this.source = "jumping jacks.gif";
      this.isRunning = true
    } else if (this.activity.value == "Burpee") {
      this.source = "burpee.gif";
      this.isRunning = true
    } else if (this.activity.value == "Front Raise") {
      this.source = "front raise.gif";
      this.isRunning = true
    } else if (this.activity.value == "Rope Jumps") {
      this.source = "rope jump.gif";
      this.isRunning = true
    } else if (this.activity.value == "Arnold Press") {
      this.source = "arnold press.gif";
      this.isRunning = true
    }
  }



  constructor(private router: Router, public authService: AuthService, private fb: FormBuilder,
    private _workoutFormService: WorkoutFormService, private _addWrkServ: AddWorkoutService,
    private _registerService: RegistrationService, public datepipe: DatePipe, public utilityService: UtilityService) {
    this.getName();
  }


  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.fetchWeight();

    this.workoutForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      activity: ['', Validators.required],
    });

    this.fetchGender();
  }

  resetForm() {
    (<HTMLInputElement>document.getElementById("title")).value = "";
    document.getElementById("startPause").innerHTML = "<b>Start</b>";
    (<HTMLInputElement>document.getElementById("stopWatchDisplay")).value = "<b>0:00:00:00</b>";

  }


  fetchWeight() {
    this._addWrkServ.fetchingWeight().subscribe(data => {
      this.weight = data;
    },
      err => {
        alert('Something is wrong');
      }
    );
  }


  fetchGender() {
    this._addWrkServ.fetchingGender().subscribe(data => {
      this.gender = data;
    },
      err => {
        alert('Something is wrong');
      }
    );


  }
  randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  letsStart() {
    this.time = (<HTMLInputElement>document.getElementById('stopWatchDisplay')).innerHTML;
    var arr = this.time.split(":");
    this.hours = (arr[0] * 60);
    this.minutes = arr[1];
    this.seconds = Math.floor(arr[2] % 3600 / 60);
    this.finalMinutes = (+this.hours) + (+this.minutes) + (+this.seconds);
    this.model.title = this.workoutForm.get('title').value;
    this.model.activity = this.workoutForm.get('activity').value;
    this.model.duration = this.finalMinutes;
    this.temp = this.getDate();
    this.model.date = this.temp;
    let arr2 = this.temp.split("-");
    this.model.forDay = arr2[0];
    this.model.forMonth = arr2[1];
    this.model.forYear = arr2[2];
    this.model.email = this.id;
    if (this.finalMinutes < 1) {
      this.model.calories = this.randNum(1, 4);
    }
    else
      this.model.calories = this.calculateCalories(this.model);

    //  below is for activity to be stored daywise
    this.modelForTotalCalories.date = this.model.date;
    this.modelForTotalCalories.email = this.model.email;
    this.modelForTotalCalories.totalCalories = this.model.calories;
    this.modelForTotalCalories.month = arr2[1]; // for posting just the month alone in the total calories table
    this.modelForTotalCalories.year = arr2[2]; // for posting just the year alone in the total calories table
    let tCaloriesExist; // keep declaration here, don't move to top
    this._workoutFormService.checkIfTotalCalExist(this.modelForTotalCalories).subscribe((data) => {
      tCaloriesExist = data;
      if (tCaloriesExist == 1)
        this.updateForTotalCalories(this.modelForTotalCalories);
      else
        this.postForTotalCalories(this.modelForTotalCalories);
    },
      err => {
        alert('Some Error Occured');
      }
    );

    // below is for activity to be stored monthwise
    this.modelForTotalCaloriesMonthWise.email = this.model.email;
    this.modelForTotalCaloriesMonthWise.totalCalories = this.model.calories;
    this.modelForTotalCaloriesMonthWise.month = arr2[1]; // for posting just the month alone in the total calories table MonthWise
    this.modelForTotalCaloriesMonthWise.year = arr2[2]; // for posting just the year alone in the total calories table MonthWise
    let tCaloriesExistMonthWise;
    this._workoutFormService.checkIfTotalCalExistForMonthWise(this.modelForTotalCaloriesMonthWise).subscribe((data) => {
      tCaloriesExistMonthWise = data;
      if (tCaloriesExistMonthWise == 1)
        this.updateForTotalCaloriesMonthWise(this.modelForTotalCaloriesMonthWise);
      else
        this.postForTotalCaloriesMonthWise(this.modelForTotalCaloriesMonthWise);
    },
      err => {
        alert('Some Error Occured');
      }
    );


    this._workoutFormService.sendWorkoutFormData(this.model).subscribe(); // for Every entry/activity to be stores

    document.getElementById("stopWatchDisplay").innerHTML = "0:00:00:00";
  }

  updateForTotalCalories(modelForTotalCalories) {
    this._workoutFormService.updatingForTotalCalories(modelForTotalCalories);
  }

  postForTotalCalories(modelForTotalCalories) {
    this._workoutFormService.postingForTotalCalories(modelForTotalCalories);
  }

  updateForTotalCaloriesMonthWise(modelForTotalCaloriesMonthWise) {
    this._workoutFormService.updatingForTotalCaloriesMonthWise(modelForTotalCaloriesMonthWise);
  }

  postForTotalCaloriesMonthWise(modelForTotalCaloriesMonthWise) {
    this._workoutFormService.postingForTotalCaloriesMonthWise(modelForTotalCaloriesMonthWise);
  }


  getDate(): string {
    var event = new Date();
    let formattedDate = this.datepipe.transform(event, 'dd-MM-yyyy');
    return formattedDate;
  }


  calculateCalories(model): number {
    let met: number = 0;

    if (this.gender == 'male') {

      if (this.model.activity == 'Rope Jumps') met = 11;
      else if (this.model.activity == 'Jumping Jacks') met = 8;
      else if (this.model.activity == 'Squats') met = 5;
      else if (this.model.activity == 'Crunches') met = 2.8;
      else if (this.model.activity == 'Push-Ups') met = 8;
      else if (this.model.activity == 'Pull-Ups') met = 8;
      else if (this.model.activity == 'Cycling') met = 7.5;
      else if (this.model.activity == 'Running') met = 6;
      else if (this.model.activity == 'Running at 5 Min/Km') met = 11.8;
      else if (this.model.activity == 'Running at 6 Min/Km') met = 10;
      else if (this.model.activity == 'Running at 7 Min/Km') met = 9;
      else if (this.model.activity == 'Jogging') met = 7;
      else if (this.model.activity == 'Burpee') met = 10;
      else if (this.model.activity == 'Lunges') met = 3.8;
      else if (this.model.activity == 'Swimming') met = 6;
      else if (this.model.activity == 'Swimming-Freestyle') met = 9.8;
      else if (this.model.activity == 'Swimming-Backstroke') met = 9.5;
      else if (this.model.activity == 'Swimming-Butterfly') met = 13.8;
      else if (this.model.activity == 'Yoga') met = 2.3;
      else if (this.model.activity == 'Weight Training') met = 3.5;
      else if (this.model.activity == 'Biceps Curl') met = 6;
      else if (this.model.activity == 'Triceps Press') met = 6;
      else if (this.model.activity == 'Arnold Press') met = 6;
      else if (this.model.activity == 'Front Raise') met = 6;
      else if (this.model.activity == 'Curl-Ups') met = 6;
      else if (this.model.activity == 'Wipers') met = 5;
      else if (this.model.activity == 'Planks') met = 5;
      else if (this.model.activity == 'Flutter Kicks') met = 6;
    }

    else {

      if (this.model.activity == 'Rope Jumps') met = 9.5;
      else if (this.model.activity == 'Jumping Jacks') met = 6.5;
      else if (this.model.activity == 'Squats') met = 4;
      else if (this.model.activity == 'Crunches') met = 2;
      else if (this.model.activity == 'Push-Ups') met = 6.5;
      else if (this.model.activity == 'Pull-Ups') met = 6.5;
      else if (this.model.activity == 'Cycling') met = 6.5;
      else if (this.model.activity == 'Running') met = 5;
      else if (this.model.activity == 'Running at 5 Min/Km') met = 10;
      else if (this.model.activity == 'Running at 6 Min/Km') met = 8.5;
      else if (this.model.activity == 'Running at 7 Min/Km') met = 7.5;
      else if (this.model.activity == 'Jogging') met = 5.5;
      else if (this.model.activity == 'Burpee') met = 8;
      else if (this.model.activity == 'Lunges') met = 3;
      else if (this.model.activity == 'Swimming') met = 5;
      else if (this.model.activity == 'Swimming-Freestyle') met = 8.7;
      else if (this.model.activity == 'Swimming-Backstroke') met = 8;
      else if (this.model.activity == 'Swimming-Butterfly') met = 11.8;
      else if (this.model.activity == 'Yoga') met = 2;
      else if (this.model.activity == 'Weight Training') met = 2.5;
      else if (this.model.activity == 'Biceps Curl') met = 4.5;
      else if (this.model.activity == 'Triceps Press') met = 4.5;
      else if (this.model.activity == 'Arnold Press') met = 4.5;
      else if (this.model.activity == 'Front Raise') met = 4.5;
      else if (this.model.activity == 'Curl-Ups') met = 4.5;
      else if (this.model.activity == 'Wipers') met = 4.5;
      else if (this.model.activity == 'Planks') met = 4.5;
      else if (this.model.activity == 'Flutter Kicks') met = 4.5;

    }

    return Math.round((met * this.weight * (this.model.duration / 60)));
  }

  getName() {
    this._registerService.getNameOfUser().subscribe(data => {
      this.arr = data.split(" ");
      this.fName = this.arr[0];
    },
      err => {
        alert('Something is wrong in get name');
      }
    );
  }
}
