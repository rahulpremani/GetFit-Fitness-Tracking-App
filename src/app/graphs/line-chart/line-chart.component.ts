import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { TrackProgressService } from 'src/app/dashboard/track-progress/track-progress.service';
import { AddWorkoutService } from 'src/app/dashboard/add-workout-plan/add-workout.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  isDataAvailable: Boolean = false;   // don't forget to add *ngIf to Line Chart HTML
  isGoalAvailable: Boolean = false;
  achievedCal: any;
  goalCrd;
  goalCal: any = [];
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  public lineChartOptions: any = {
    responsive: 'true',
    type: 'line'

  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',

    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  ngOnInit() {
  }

  constructor(private _trkProgServ: TrackProgressService, private _addWrkServ: AddWorkoutService) {

    this._addWrkServ.gettingCalories().subscribe(data => {
      this.goalCrd = data;
      for (let i = 0; i < 7; i++)
        this.goalCal[i] = this.goalCrd;
    },
      err => {
        alert('Something is wrong');
      }
    );
    this._trkProgServ.fetchingForGraph().subscribe((data) => {
      this.achievedCal = data;
      this.isGoalAvailable = true;
      if (this.achievedCal.length > 7) {
        let counterDisplayFive = this.achievedCal.length - 7;
        for (let i = 1; i <= counterDisplayFive; i++)
          this.achievedCal.shift();
      }
      this.lineChartData = [
        {
          data: this.achievedCal, label: 'Achieved'
        },
        { data: this.goalCal, label: 'Goals' },
      ];
      this.isDataAvailable = true;
    },
      error => { return error; });
  }

}
