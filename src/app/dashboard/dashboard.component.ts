import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public utilityService: UtilityService) { 
    this.utilityService.getSubscriptionType(localStorage.getItem('token'))
    .subscribe(data => {
      localStorage.setItem('subscription-type', data);
    });
  }

  ngOnInit() {
  }
  ngOnDestroy(){
  }
}
