import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){ 
      return this.isLoggedIn();
    }
    
    public isLoggedIn(): boolean{
      if( localStorage.getItem('isLoggedIn') == "true"){
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }
    
  }
  