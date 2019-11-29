import { Component, OnInit, Input } from '@angular/core';
import { AddWorkoutService } from 'src/app/dashboard/add-workout-plan/add-workout.service';

@Component({
  selector: 'app-bar-graph-daywise',
  templateUrl: './bar-graph-daywise.component.html',
  styleUrls: ['./bar-graph-daywise.component.css']
})
export class BarGraphDaywiseComponent implements OnInit {

  @Input() calDayWise;
  calDayWiseAvailable: Boolean = false;
  goalAvailableFlag: Boolean = false;
  constructor(private _addWrkServ: AddWorkoutService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15',
    'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30', 'Day 31'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  ngOnInit() {

  }

  ngOnChanges(changes) {
    let goalCalr;
    let goalCalories = [];
    this._addWrkServ.gettingCalories().subscribe(data => {
      goalCalr = data;
      for (let i = 0; i < this.calDayWise.length; i++)
        goalCalories[i] = goalCalr;
        console.log(goalCalories);
      this.goalAvailableFlag = true;
      this.barChartData = [
        { data: this.calDayWise, label: 'Achieved' },
        { data: goalCalories, label: 'Goal' }
      ];
      this.calDayWiseAvailable = true;
    },
      err => {
        alert('No Entries For Selected Fields Exist');
      }
    );
  }

}
