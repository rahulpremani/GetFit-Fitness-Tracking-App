import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  forgotPasswordForm: FormGroup;

  get getEmail(){
    return this.forgotPasswordForm.get('email');
  }
  constructor(private fgp: FormBuilder, public resetPasswordService: ResetPasswordService, private route: Router,
    public flashMessageService: FlashMessagesService) { 
      window.scrollTo(0,0);
    }

    ngOnInit() {
      
      this.forgotPasswordForm = this.fgp.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
      });
      
    }
    
    forgotPasswordHandler(){
      this.resetPasswordService.userExists(this.forgotPasswordForm.get('email').value)
      .subscribe(data => {
        if(data == "Exists"){
          localStorage.setItem('reset-password-email', this.forgotPasswordForm.get('email').value);
          localStorage.setItem('reset-password', 'true');
          this.route.navigate(['/reset-password']);
        } else {
          setTimeout(() => {
            this.flashMessageService.show("User doesn't exist. Register first please", {cssClass: 'alert-danger', timeout: 2000});
          }, 1000);
          this.route.navigate(['/']);
        }
      });
    }
  }
  
