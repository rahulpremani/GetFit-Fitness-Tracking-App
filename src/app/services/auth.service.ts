import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(public route: Router, public utilityService: UtilityService) { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }
}
