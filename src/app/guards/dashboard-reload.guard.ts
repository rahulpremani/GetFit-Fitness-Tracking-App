import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardReloadGuard implements CanActivate {

  constructor(private route: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.onDashboard();
  }
  
  onDashboard(): boolean{
    if(localStorage.getItem('isLoggedIn') == 'true'){
      this.route.navigate(['/dashboard']);
      return true;
    } else {
      return false;
    }
  }
}
