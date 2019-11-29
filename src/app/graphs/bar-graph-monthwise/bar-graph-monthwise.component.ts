import { Component, OnInit, Input } from '@angular/core';
import { AddWorkoutService } from 'src/app/dashboard/add-workout-plan/add-workout.service';

@Component({
  selector: 'app-bar-graph-monthwise',
  templateUrl: './bar-graph-monthwise.component.html',
  styleUrls: ['./bar-graph-monthwise.component.css']
})
export class BarGraphMonthwiseComponent implements OnInit {

  @Input() calMonthWise;
  calMonthWiseAvailable: Boolean = false;
  goalAvailableFlag: Boolean = false;
  constructor(private _addWrkServ: AddWorkoutService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  ngOnInit() {
  }

  ngOnChanges(changes) {
    let goalCalr;
    let goalCalories = 0;
    this._addWrkServ.gettingCalories().subscribe(data => {
      goalCalr = data;
      for (let i = 0; i < 30; i++)
        goalCalories += goalCalr;
      let finalGoal = [];
      for (let i = 0; i < this.calMonthWise.length; i++)
        finalGoal[i] = goalCalories;
      this.goalAvailableFlag = true;
      this.barChartData = [
        { data: this.calMonthWise, label: 'Achieved' },
        { data: finalGoal, label: 'Goal' }
      ];
      this.calMonthWiseAvailable = true;
    },
      err => {
        alert('No Entries For Selected Fields Exist');
      }
    );
  }

}