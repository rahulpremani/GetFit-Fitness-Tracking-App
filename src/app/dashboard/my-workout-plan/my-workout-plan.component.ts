import { Component, OnInit, Input } from '@angular/core';
import { WorkoutFormService } from 'src/app/services/workout-form.service';
import { workoutData } from './workout-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddWorkoutService } from '../add-workout-plan/add-workout.service';

@Component({
  selector: 'app-my-workout-plan',
  templateUrl: './my-workout-plan.component.html',
  styleUrls: ['./my-workout-plan.component.css']
})
export class MyWorkoutPlanComponent implements OnInit {

  email: string = localStorage.getItem('token');
  filter: FormGroup;
  month: string
  year: string
  duration: string
  finalMonth;
  model: workoutData = {
    title: '',
    activity: '',
    duration: 0,
    calories: 0,
    date: '',

  }
  tCalMonthWise: any = [];     // remmeber these have to be arrays only otherwise console error
  tCalDayWise: any = [];    // specifying any type is a must here
  tCalWeekWise: any = [];
  goalCal;
  tCalMonthWiseDisplayFlag: Boolean = false;
  tCalDayWiseDisplayFlag: Boolean = false;
  tCalWeekWiseDisplayFlag: Boolean = false;
  arrayIterate;
  config: any;
  collection = {
    count: 0,
    data: []
  }

  get getMonth() {
    return this.filter.get('monthSelect');
  }

  get getYear() {
    return this.filter.get('yearSelect');
  }

  get getDuration() {
    return this.filter.get('duration');
  }

  constructor(private _workoutFormService: WorkoutFormService, private _fb: FormBuilder, private _addWrkServ: AddWorkoutService) {

  }

  ngOnInit() {
    this.fetchDataFromDBForTable();

    this.filter = this._fb.group({
      monthSelect: ['', Validators.required],
      yearSelect: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  fetchDataFromDBForTableRefresh() {
    while (this.collection.data.length > 0)
      this.collection.data.pop();
    this._workoutFormService.getWorkoutData(this.email).subscribe(
      (data) => {
        this.model = data;
        this.arrayIterate = Object.values(this.model);
        this.arrayIterate = this.arrayIterate.reverse();
        for (var i = 0, j = 0; i < 5; i++) {
          this.collection.data.push({
            id: i + 1,
            value: this.arrayIterate[j++]
          })
        }
      })

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

  }

  fetchDataFromDBForTable() {
    this._workoutFormService.getWorkoutData(this.email).subscribe(
      (data) => {
        this.model = data;
        this.arrayIterate = Object.values(this.model);
        this.arrayIterate = this.arrayIterate.reverse();
        this.collection.count = this.arrayIterate.length;
        for (var i = 0, j = 0; i < this.collection.count; i++) {
          this.collection.data.push({
            id: i + 1,
            value: this.arrayIterate[j++]
          })
        }
      })

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  plotGraph() {
    this.month = this.filter.get('monthSelect').value
    if (this.month == "January")
      this.finalMonth = 1;
    if (this.month == "February")
      this.finalMonth = 2;
    if (this.month == "March")
      this.finalMonth = 3;
    if (this.month == "April")
      this.finalMonth = 4;
    if (this.month == "May")
      this.finalMonth = 5;
    if (this.month == "June")
      this.finalMonth = 6;
    if (this.month == "July")
      this.finalMonth = 7;
    if (this.month == "August")
      this.finalMonth = 8;
    if (this.month == "September")
      this.finalMonth = 9;
    if (this.month == "October")
      this.finalMonth = 10;
    if (this.month == "November")
      this.finalMonth = 11;
    if (this.month == "December")
      this.finalMonth = 12;

    this.year = this.filter.get('yearSelect').value
    this.duration = this.filter.get('duration').value

    this.refreshData();

  }

  refreshData() {
    setTimeout(() => {
      this._addWrkServ.gettingCalories().subscribe(
        data => this.goalCal = data,
        err => alert('Unknown Error Occured')
      );
      if (this.duration == "Monthly") {
        this._workoutFormService.fetchTotalCalDayWise(this.email, this.finalMonth, this.year).subscribe(data => {
          this.tCalDayWise = data;
          if (this.tCalDayWise.length == 0) {
            alert('No Entries For Selected Fields Exist');
            return;
          }
          this.tCalDayWiseDisplayFlag = true;   // to display the chart for selected dropdown option only
          this.tCalMonthWiseDisplayFlag = false;
          this.tCalWeekWiseDisplayFlag = false;
        },
          err => {
            alert('No Entries For Selected Fields Exist');
          }
        );
      }
      else if (this.duration == "Yearly") {
        this._workoutFormService.fetchTotalCalMonthWise(this.email, this.year).subscribe(data => {
          this.tCalMonthWise = data;
          if (this.tCalMonthWise.length == 0) {
            alert('No Entries For Selected Fields Exist');
            return;
          }
          this.tCalMonthWiseDisplayFlag = true;
          this.tCalDayWiseDisplayFlag = false;
          this.tCalWeekWiseDisplayFlag = false;
        },
          err => {
            alert('No Entries For Selected Fields Exist');
          }
        );
      }
      else if (this.duration == "Weekly") {
        this._workoutFormService.fetchTotalCalDayWise(this.email, this.finalMonth, this.year).subscribe(data => {   // hitting same REST API for week wise, added them week wise
          this.tCalWeekWise = data;
          if (this.tCalWeekWise.length == 0) {
            alert('No Entries For Selected Fields Exist');
            return;
          }
          this.tCalWeekWiseDisplayFlag = true;
          this.tCalDayWiseDisplayFlag = false;
          this.tCalMonthWiseDisplayFlag = false;
        },
          err => {
            alert('No Entries For Selected Fields Exist');
          }
        );
      }
    }, 1);
  }
}
