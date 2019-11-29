import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { phoneNumberValidator } from 'src/app/validators/phone-validator';
import * as $ from "jquery";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from './user';
import { DatePipe } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserCredentials } from './UserCredentials';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  passwordPattern: string = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$";
  namePattern: string = "[a-zA-Z\\s]*$";
  
  loginForm: FormGroup;
  signupForm: FormGroup;
  returnUrl: String;
  model: User = new User();
  userCredentials: UserCredentials = new UserCredentials();
  loginStatus: string;

  get getLoginEmail(){
    return this.loginForm.get('email');
  }
  
  get getPassword(){
    return this.loginForm.get('password');
  }
  
  get getFullName(){
    return this.signupForm.get('fullName');
  }
  
  get getEmail(){
    return this.signupForm.get('email');
  }
  
  get getMobileNumber(){
    return this.signupForm.get('mobileNumber');
  }
  
  get getRegistrationPassword(){
    return this.signupForm.get('password');
  }
  
  get getGender(){
    return this.signupForm.get('gender');
  }
  
  get getHeight(){
    return this.signupForm.get('height');
  }
  
  get getWeight(){
    return this.signupForm.get('weight');
  }
  
  get getDateOfBirth(){
    return this.signupForm.get('dateOfBirth');
  }
  
  get getSecurityQuestion(){
    return this.signupForm.get('securityQuestion');
  }
  
  get getAnswer(){
    return this.signupForm.get('answer');
  }
  
  constructor(private lf: FormBuilder, private sf: FormBuilder, 
    public authService: AuthService, public registerService: RegistrationService, 
    private router: Router, public datepipe: DatePipe, private flashMessage: FlashMessagesService,
    public loginService: LoginService) {
      window.scrollTo(0,0);
     }

    
    ngOnInit() {
      $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
      });
      this.loginForm = this.lf.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', Validators.required]
      });
      
      this.signupForm = this.sf.group({
        fullName: ['', [Validators.required, Validators.pattern(this.namePattern), Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        mobileNumber: ['', [Validators.required, phoneNumberValidator, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
        gender: ['', Validators.required],
        height: ['', [Validators.required]],
        weight: ['', [Validators.required, phoneNumberValidator]],
        dateOfBirth: ['', Validators.required],
        securityQuestion: ['', Validators.required],
        answer: ['', Validators.required]
      });
      
      this.returnUrl = '/dashboard';
    }
  
  login(){
    this.userCredentials.setEmail(this.loginForm.get('email').value);
    this.userCredentials.setPassword(this.loginForm.get('password').value);
    
    this.loginService.loginUser(this.userCredentials)
    .subscribe(data => {
      this.loginStatus = data;
      if(this.loginStatus === "Success"){
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.loginForm.get('email').value);
        this.router.navigate([this.returnUrl]);
      } else if(this.loginStatus === "Invalid Password"){
        this.loginForm.reset();
        this.router.navigate(['/']);
        window.scrollTo(0,0);
        this.flashMessage.show('Invalid Password', {cssClass: 'alert-danger', timeout: 2000});
      } else if(this.loginStatus === "We're currently down because of a server issue, We're working to fix it, Inconvenience is regretted"){
        this.loginForm.reset();
        this.router.navigate(['/']);
        this.flashMessage.show(data, {cssClass: 'alert-danger', timeout: 2000});
      } else { 
        this.loginForm.reset();
        this.router.navigate(['/']);
        window.scrollTo(0,0);
        this.flashMessage.show("User doesn't exist. Register first Please.", {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }

  register(){
    this.model.setFullName(this.signupForm.get('fullName').value);
    this.model.setEmail(this.signupForm.get('email').value);
    this.model.setPassword(this.signupForm.get('password').value);
    this.model.setGender(this.signupForm.get('gender').value);
    this.model.setWeight(this.signupForm.get('weight').value);
    this.model.setHeight(this.signupForm.get('height').value);
    this.model.setSubscriptionType('free');
    this.model.setMobileNumber(this.signupForm.get('mobileNumber').value);
    this.model.setDateOfBirth(this.datepipe.transform(this.signupForm.get('dateOfBirth').value, "dd-MM-yyyy"));
    this.model.setAnswer(this.signupForm.get('answer').value);
    this.model.setSecurityQuestion(this.signupForm.get('securityQuestion').value);
    this.registerService.registerUser(this.model)
    .subscribe(
      data => {
        if(data == 'false'){
          this.signupForm.reset();
          window.scrollTo(0,0);
          this.router.navigate(['/']);
          this.flashMessage.show('Registered Successfully ! Login Now.', {cssClass: 'alert-success', timeout: 2000});
        } else if(data == 'true'){
          this.signupForm.reset();
          window.scrollTo(0,0);
          this.router.navigate(['/']);
          this.flashMessage.show('User is already registered', {cssClass: 'alert-danger', timeout: 2000});
        } else{
          this.signupForm.reset();
          window.scrollTo(0,0);
          this.router.navigate(['/']);
          this.flashMessage.show(data, {cssClass: 'alert-danger', timeout: 2000});
        }
      },
      error => {
        console.log("Error", error);
      });
    }  
  }