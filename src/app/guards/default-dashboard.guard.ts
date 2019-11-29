import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddWorkoutService } from '../dashboard/add-workout-plan/add-workout.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultDashboardGuard implements CanActivate {

  goalExists: any;
  flag: boolean;
  constructor(private addWorkoutService: AddWorkoutService, private route: Router) {
    this.addWorkoutService.checkingIfGoalExists()
    .subscribe((data: Boolean)=> {
      this.goalExists = data;
      this.flag = this.verifyGoalExistence(this.goalExists);
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.flag;
  }
  
  verifyGoalExistence(goalExists): boolean{
    if(goalExists){
      return true;
    } else {
      this.route.navigate(['/dashboard/add-workout-plan']);
      return false;
    }
  }
}
