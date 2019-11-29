import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { newCredentials } from './newCredentials';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  passwordPattern: string = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";

  resetPasswordForm: FormGroup;
  
  securityQuestion;
  email;
  
  model = new newCredentials();
  
  constructor(public rpf: FormBuilder, public resetPasswordService: ResetPasswordService, public flashMessage: FlashMessagesService, private route: Router, private activateRoute: ActivatedRoute) {
    window.scrollTo(0,0);
  }
  
  get getPassword(){
    return this.resetPasswordForm.get('password');
  }

  get getAnswer(){
    return this.resetPasswordForm.get('answer');
  }
  ngOnInit() {
    
    this.resetPasswordForm = this.rpf.group({
      answer: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    });
    
    this.email = localStorage.getItem('reset-password-email');
    localStorage.setItem('reset-password', 'false');
    this.resetPasswordService.userSecurityQuestion(this.email)
    .subscribe((data) => {
      this.securityQuestion = data;
    });
  }
  
  resetPasswordHandler(){
    this.model.setEmail(this.email);
    this.model.setAnswer(this.resetPasswordForm.get('answer').value);
    this.model.setNewPassword(this.resetPasswordForm.get('password').value);
    this.resetPasswordService.resetPassword(this.model)
    .subscribe(data => {
      if(data == "Password Updated Successfully"){
        setTimeout(() => {
          this.flashMessage.show(data, {cssClass: 'alert-success', timeout: 2000});
        }, 1000);
        this.route.navigate(['/']);
      } else {
        this.flashMessage.show("Wrong Answer", {cssClass: 'alert-danger', timeout: 2000});
        this.resetPasswordForm.reset();
      }
    });
  }
}
