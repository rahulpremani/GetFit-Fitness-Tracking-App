import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from './profile';
import { ProfileService } from 'src/app/services/profile.service';
import { UpdateDetailsService } from 'src/app/services/update-details.service';
import * as $ from "jquery";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  mobilePattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
  passwordPattern: string = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$";

  model: Profile = new Profile();

  get getHeight() {
    return this.profileForm.get('height');
  }
  get getWeight() {
    return this.profileForm.get('weight');
  }
  get getMobile() {
    return this.profileForm.get('mobile');
  }

  get getOldPassword(){
    return this.resetPasswordForm.get('oldPassword');
  }
  get getNewPassword(){
    return this.resetPasswordForm.get('newPassword');
  }

  profileForm: FormGroup;
  resetPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private _profileService: ProfileService, private _updateDetails: UpdateDetailsService, private flashMessage: FlashMessagesService) {

  }

  email = localStorage.getItem('token');

  clear() {
    this.profileForm.reset();
    $(':input').val("");
    $('#newMobileNumber').val(this.model.mobileNumber);
    $('#newHeight').val(this.model.height);
    $('#newWeight').val(this.model.weight);
  }

  clearResetForm() {
    this.resetPasswordForm.reset();
    $('#oldPasswordId').val("");
    $('#newPasswordId').val("");
  }

  ngOnInit() {

    this._profileService.fetchDetailsForProfile(this.email)
      .subscribe(data => {
        this.model.setFullName(data[0]);
        this.model.setEmail(data[1]);
        this.model.setMobileNumber(data[2]);
        this.model.setHeight(data[3]);
        this.model.setWeight(data[4]);
      });

    this.profileForm = this.fb.group({
      height: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.min(1000000000)]],
      weight: ['', [Validators.required]]
    });

    this.resetPasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      newPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    });
  }

  updateDetails() {
    this.model.email = this.email;
    this.model.mobileNumber = (<HTMLInputElement>document.getElementById('newMobileNumber')).value;
    this.model.height = (<HTMLInputElement>document.getElementById('newHeight')).value;
    this.model.weight = (<HTMLInputElement>document.getElementById('newWeight')).value;
    this._updateDetails.updateDetails(this.model);
  }

  resetPasswordHandler(){
    this._profileService.resetUserPassword(this.email, this.resetPasswordForm.get('oldPassword').value, this.resetPasswordForm.get('newPassword').value)
    .subscribe(data => {
      if(data == 'Password Updated Successfully'){
        this.flashMessage.show(data, {cssClass: 'alert-success', timeout: 2000});
        this.clearResetForm();
      } else {
        this.flashMessage.show(data, {cssClass: 'alert-danger', timeout: 2000});
        this.clearResetForm();
      }
    });
  }
}
