import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  
  paymentGatewayForm: FormGroup;
  namePattern: string = "[a-zA-Z\\s]*$";
  
  constructor(public pgf: FormBuilder, public utilityService: UtilityService, public route: Router, public authService: AuthService, public flashMessage: FlashMessagesService) { }
  
  get getCardName(){
    return this.paymentGatewayForm.get('cardname');
  }
  
  get getCardNumber(){
    return this.paymentGatewayForm.get('cardnumber');
  }
  
  get getExpMonth(){
    return this.paymentGatewayForm.get('expmonth');
  }
  
  get getExpYear(){
    return this.paymentGatewayForm.get('expyear'); 
  }
  
  get getCVV(){
    return this.paymentGatewayForm.get('cvv');
  }
  
  ngOnInit() {
    this.paymentGatewayForm = this.pgf.group({
      cardname: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      cardnumber: ['', [Validators.required, Validators.minLength(16)]],
      expmonth: ['', [Validators.required, Validators.minLength(2)]],
      expyear: ['', [Validators.required, Validators.minLength(4)]],
      cvv: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  
  onPaymentHandler(){
    this.utilityService.updateSubscriptionType(localStorage.getItem('token'), 'premium')
    .subscribe(data => {
      if(data == 'Updated Subscription'){
        setTimeout(() => {
          this.flashMessage.show("You're a Premium User now, Please login again", {cssClass: 'alert-success', timeout: 2000});
        }, 1000);
        this.authService.logout();
        window.scrollTo(0,0);
      }
    });
  }
  
}
