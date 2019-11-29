import { Component, OnInit } from '@angular/core';
import { TrackProgressService } from './track-progress.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-track-progress',
  templateUrl: './track-progress.component.html',
  styleUrls: ['./track-progress.component.css']
})
export class TrackProgressComponent implements OnInit {

  coordinates;
  calCountTotal;
  calCountYes;
  daysLeftInCycle;
  progress;
  motivation;
  quoteLoaded: boolean = false;

  constructor(private _graphServ: TrackProgressService, public datepipe: DatePipe) {
    this.coordinates = this.fetchForGraph();
    this.displayTotalCal();
  }

  ngOnInit() {
    this.callQtApi();
    let currentDate = this.getDate();
    let splitCurrentDate = currentDate.split("-");
    this.setCycle();
    this.fetchProgress(splitCurrentDate[1]);
  }

  fetchProgress(currentMonth) {
    let len;
    this._graphServ.fetchingProgress(currentMonth).subscribe(data => {
      len = data;
      if (len <= '25') {
        this.progress = 3 * +len;
      } else if (len == '26')
        this.progress = 80;
      else if (len == '27')
        this.progress = 85;
      else if (len == '28')
        this.progress = 90;
      else if (len == '29')
        this.progress = 95;
      else if (len == '30')
        this.progress = 100;
      let pro = this.progress + "%";
      (<HTMLInputElement>document.getElementById("prog")).style.width = pro;

    },
      error => { return error; });
  }

  setCycle() {
    let currentDate = this.getDate();
    let splitCurrentDate = currentDate.split("-");
    if (splitCurrentDate[1] == '4' || splitCurrentDate[1] == '6' || splitCurrentDate[1] == '9' || splitCurrentDate[1] == '11')
      this.daysLeftInCycle = 30 - +splitCurrentDate[0];
    else if (splitCurrentDate[1] == '2')
      this.daysLeftInCycle = 28 - +splitCurrentDate[0];
    else
      this.daysLeftInCycle = 31 - +splitCurrentDate[0];
  }

  displayTotalCal() {
    let fullDate = this.getDate();
    let onlyMonth = fullDate.split("-");
    this._graphServ.fetchingTotalCal(onlyMonth[1]).subscribe(data => {
      this.calCountTotal = data;
    },
      error => { return error; });
  }

  getDate(): string {
    var event = new Date();
    let formattedDate = this.datepipe.transform(event, 'dd-MM-yyyy');
    return formattedDate;
  }

  callQtApi() {
    this._graphServ.callQuote().subscribe(data => {
      let shfl = this.randNum(1, data.length);
      this.motivation = data[shfl]['text'];
      this.quoteLoaded = true;
    },
      error => { return error; });
  }

  randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  fetchForGraph() {
    return this._graphServ.fetchingForGraph().subscribe((data) => {
      this.coordinates = data;  // incoming list assigned to coordinates
      let len = this.coordinates.length;
      this.calCountYes = this.coordinates[len - 1];
    },
      error => {
        alert('You should start your Workout First');
        return error;
      });
  }

}
