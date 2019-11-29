import { Component, OnInit, Input } from '@angular/core';
import { AddWorkoutService } from 'src/app/dashboard/add-workout-plan/add-workout.service';

@Component({
  selector: 'app-bar-graph-weekwise',
  templateUrl: './bar-graph-weekwise.component.html',
  styleUrls: ['./bar-graph-weekwise.component.css']
})
export class BarGraphWeekwiseComponent implements OnInit {

  @Input() calWeekWise;
  calWeekWiseAvailable: Boolean = true;
  goalAvailableFlag: Boolean = false;
  constructor(private _addWrkServ: AddWorkoutService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  ngOnInit() {
  }

  ngOnChanges(changes) {
    let goalCalr;
    let lastThreeDays;
    let goalCalories = 0;
    this._addWrkServ.gettingCalories().subscribe(data => {
      goalCalr = data;
      for (let i = 0; i < 7; i++)
        goalCalories += goalCalr;
        for (let i = 0; i < 3; i++)
        lastThreeDays = 3 * goalCalr;
      let finalGoal = [];
      for (let i = 0; i < 5; i++)
        finalGoal[i] = goalCalories;
        finalGoal[finalGoal.length - 1] = lastThreeDays;
      this.goalAvailableFlag = true;
      let week = [0, 0, 0, 0, 0];
      let len = this.calWeekWise.length;
      if (len <= 7)
        for (let i = 0; i < 7; i++)
          week[0] += this.calWeekWise[i];
      else if (len >= 8 && len <= 14) {
        for (let i = 0; i < 7; i++)
          week[0] += this.calWeekWise[i];
        for (let i = 7; i < len; i++)
          week[1] += this.calWeekWise[i];
      } else if (len >= 15 && len <= 21) {
        for (let i = 0; i < 7; i++)
          week[0] += this.calWeekWise[i];
        for (let i = 7; i < 14; i++)
          week[1] += this.calWeekWise[i];
        for (let i = 14; i < len; i++)
          week[2] += this.calWeekWise[i];
      } else if (len >= 22 && len <= 28) {
        for (let i = 0; i < 7; i++)
          week[0] += this.calWeekWise[i];
        for (let i = 7; i < 14; i++)
          week[1] += this.calWeekWise[i];
        for (let i = 14; i < 21; i++)
          week[2] += this.calWeekWise[i];
        for (let i = 21; i < len; i++)
          week[3] += this.calWeekWise[i];
      } else if (len >= 28 && len <= 31) {
        for (let i = 0; i < 7; i++)
          week[0] += this.calWeekWise[i];
        for (let i = 7; i < 14; i++)
          week[1] += this.calWeekWise[i];
        for (let i = 14; i < 21; i++)
          week[2] += this.calWeekWise[i];
        for (let i = 21; i < 28; i++)
          week[3] += this.calWeekWise[i];
        for (let i = 28; i < len; i++)
          week[4] += this.calWeekWise[i];
      }
      this.barChartData = [
        { data: [week[0], week[1], week[2], week[3], week[4]], label: 'Achieved' },
        { data: finalGoal, label: 'Goal' }
      ];
      this.calWeekWiseAvailable = true;
    },
      err => {
        alert('No Entries For Selected Fields Exist');
      }
    );

  }


}
