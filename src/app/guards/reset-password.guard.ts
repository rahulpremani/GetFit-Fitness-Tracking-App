import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordGuard implements CanActivate {
  
  constructor(private route: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      return this.verifyEmail();
    }
    
    verifyEmail(): boolean {
      if(localStorage.getItem('reset-password') == 'true'){
        return true;
      } else {
        this.route.navigate(['/']);
        return false;
      }
    }
  }
  