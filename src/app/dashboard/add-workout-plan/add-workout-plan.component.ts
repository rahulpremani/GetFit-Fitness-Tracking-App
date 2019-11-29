import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { myGoals } from './myGoals';
import { AddWorkoutService } from './add-workout.service';

@Component({
  selector: 'app-add-workout-plan',
  templateUrl: './add-workout-plan.component.html',
  styleUrls: ['./add-workout-plan.component.css']
})
export class AddWorkoutPlanComponent implements OnInit {

  get getBodyTypeValidator() {
    return this.bodyForm.get('bodyType');
  }

  get getTrainingModeValidator() {
    return this.bodyForm.get('workoutMode');
  }

  mode = '';
  goalCalories;
  goalFlag: boolean = false;
  weight;
  modeValue;
  bodyTypeValue;
  finalModeValue;
  finalBodyTypeValue;
  exercises;
  finalUserDietMorning = [];
  finalUserDietNoon = [];
  finalUserDietEvening = [];
  gender;
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', "FRIDAY", 'SATURDAY', 'SUNDAY'];
  ifExists: Boolean;
  ifExerciseExists: Boolean;
  ifDietExists: Boolean;
  bodyForm: FormGroup;
  finalFlag: Boolean;
  dropdownSelected: boolean = true;
  model: myGoals = {
    email: '',
    bodyType: '',
    calories: 0,
    mode: ''
  }

  constructor(private bf: FormBuilder, private _addWrkServ: AddWorkoutService) {
    this.refreshData();
  }


  refreshData() {
    setTimeout(() => {
      this.getCalories();
      this.getBodyType();
      this.fetchMode();
      this.ifGoalExists();
      this.fetchWeight();
      this.finalFlag = true;
    }, 1);
  }

  ngOnInit() {
    this.bodyForm = this.bf.group({
      bodyType: ['', Validators.required],
      workoutMode: ['', Validators.required]
    });
  }



  fetchDiet(bodyTypeValue) {
    this._addWrkServ.fetchingDiet(bodyTypeValue).subscribe(data => {
      for (let i = 0; i < 7; i++)
        this.finalUserDietMorning[i] = data[i];
      for (let i = 7, j = 0; i < 14; i++ , j++) {
        this.finalUserDietNoon[j] = data[i];
      }
      for (let i = 14, j = 0; i < 21; i++ , j++)
        this.finalUserDietEvening[j] = data[i];
      this.ifDietExists = true;
      this.finalFlag = true;
    },
      err => {
        alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
      }
    );
  }

  fetchExercises(bodyTypeValue) {
    this._addWrkServ.fetchingExercises(bodyTypeValue).subscribe(data => {
      this.exercises = data;
      this.ifExerciseExists = true;
      this.finalFlag = true;
    },
      err => {
        alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
      }
    );
  }

  fetchExercisesForFemale(bodyTypeValue) {
    this._addWrkServ.fetchingExercisesForWomen(bodyTypeValue).subscribe(data => {
      this.exercises = data;
      this.ifExerciseExists = true;
      this.finalFlag = true;
    },
      err => {
        alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
      }
    );
  }

  ifGoalExists() {
    this._addWrkServ.checkingIfGoalExists().subscribe((data: Boolean) => {
      this.ifExists = data;
    },
      err => {
        alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
      }
    );
  }

  fetchMode() {
    this._addWrkServ.fetchingMode().subscribe(
      data => {
        this.modeValue = data[0];
        if (this.modeValue == 'mode1')
          this.finalModeValue = '1 Month';
        if (this.modeValue == 'mode2')
          this.finalModeValue = '2 Months';
        if (this.modeValue == 'mode3')
          this.finalModeValue = '3 Months';

      },
      err => alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted")
    );
  }

  getBodyType() {

    this._addWrkServ.gettingBodyType().subscribe(data => {
      this.bodyTypeValue = data[0];
      if (this.goalFlag == true && this.ifDietExists == true && this.ifExerciseExists == true) {
        this.finalFlag = true;
        this.ifExists = true;
      }
      this._addWrkServ.fetchingGender().subscribe(data => {
        this.gender = data;
        if (this.gender == "male")
          this.fetchExercises(this.bodyTypeValue);
        else
          this.fetchExercisesForFemale(this.bodyTypeValue);
        return data;
      },
        err => {
          alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
        }
      );
      this.fetchDiet(this.bodyTypeValue);
      if (this.bodyTypeValue == 'lean')
        this.finalBodyTypeValue = 'Lean Body';
      else if (this.bodyTypeValue == 'muscular')
        this.finalBodyTypeValue = 'Muscular Build';
      else if (this.bodyTypeValue == 'fat')
        this.finalBodyTypeValue = 'Fat Loss';
    },
      err => {
        alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
      }
    );
  }

  getCalories() {

    this._addWrkServ.gettingCalories().subscribe(data => {
      this.goalCalories = data;
      this.goalFlag = true;
      this.finalFlag = true;
      if (this.goalFlag == true && this.ifDietExists == true && this.ifExerciseExists == true) {
        this.finalFlag = true;
        this.ifExists = true;
      }
    },
      err => {
        alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
      }
    );

  }

  fetchWeight() {
    this._addWrkServ.fetchingWeight().subscribe(data => {
      this.weight = data;
    },
      err => {
        alert("We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted");
      }
    );
  }

  insertGoal() {
    if (this.goalFlag == true && this.ifDietExists == true && this.ifExerciseExists == true) {
      this.finalFlag = true;
      this.ifExists = true;
      this.refreshData();
    }
    this.model.email = localStorage.getItem('token');

    if (this.bodyForm.get('bodyType').value == "Lean & Fit")
      this.model.bodyType = "lean";
    if (this.bodyForm.get('bodyType').value == "Muscular")
      this.model.bodyType = "muscular";
    if (this.bodyForm.get('bodyType').value == "Fat Loss")
      this.model.bodyType = "fat";


    if (this.bodyForm.get('workoutMode').value == "Beast Mode(1 month)")
      this.model.mode = "mode1";
    if (this.bodyForm.get('workoutMode').value == "Intermediate Mode(2 months)")
      this.model.mode = "mode2";
    if (this.bodyForm.get('workoutMode').value == "Normal Mode(3 months)")
      this.model.mode = "mode3";

    this.mode = this.bodyForm.get('workoutMode').value;
    if (this.model.bodyType == 'lean') {
      if (this.mode == 'Beast Mode(1 month)') {
        if (this.weight >= 90) {
          this.model.calories = 5800;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 4600;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 2300;
        }
        if (this.weight < 70) {
          this.model.calories = 1050;
        }
      }
      if (this.mode == 'Intermediate Mode(2 months)') {
        if (this.weight >= 90) {
          this.model.calories = 2900;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 2300;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 1160;
        }
        if (this.weight < 70) {
          this.model.calories = 580;
        }
      }
      if (this.mode == 'Normal Mode(3 months)') {
        if (this.weight >= 90) {
          this.model.calories = 1940;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 1600;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 770;
        }
        if (this.weight < 70) {
          this.model.calories = 400;
        }
      }
    }
    else if (this.model.bodyType == 'fat') {
      if (this.mode == 'Beast Mode(1 month)') {
        if (this.weight >= 90) {
          this.model.calories = 6100;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 4850;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 2578;
        }
        if (this.weight < 70) {
          this.model.calories = 1267;
        }
      }
      if (this.mode == 'Intermediate Mode(2 months)') {
        if (this.weight >= 90) {
          this.model.calories = 3150;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 2578;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 1350;
        }
        if (this.weight < 70) {
          this.model.calories = 680;
        }
      }
      if (this.mode == 'Normal Mode(3 months)') {
        if (this.weight >= 90) {
          this.model.calories = 2167;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 1865;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 960;
        }
        if (this.weight < 70) {
          this.model.calories = 700;
        }
      }
    }
    else if (this.model.bodyType == 'muscular') {
      if (this.mode == 'Beast Mode(1 month)') {
        if (this.weight >= 90) {
          this.model.calories = 2500;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 2100;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 1800;
        }
        if (this.weight < 70) {
          this.model.calories = 1100;
        }
      }
      if (this.mode == 'Intermediate Mode(2 months)') {
        if (this.weight >= 90) {
          this.model.calories = 1900;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 1670;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 1170;
        }
        if (this.weight < 70) {
          this.model.calories = 680;
        }
      }
      if (this.mode == 'Normal Mode(3 months)') {
        if (this.weight >= 90) {
          this.model.calories = 1960;
        }
        if (this.weight >= 80 && this.weight < 90) {
          this.model.calories = 1780;
        }
        if (this.weight >= 70 && this.weight < 80) {
          this.model.calories = 960;
        }
        if (this.weight < 70) {
          this.model.calories = 700;
        }
      }
    }

    this._addWrkServ.insertingGoal(this.model);
  }

}

