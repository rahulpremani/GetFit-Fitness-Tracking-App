import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  faBookOpen = faBookOpen;
  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  namePattern: string = "[a-zA-Z\\s]*$";

  get getFullName() {
    return this.registrationForm.get('fullName');
  }
  get getEmail() {
    return this.registrationForm.get('email');
  }
  get getSubject() {
    return this.registrationForm.get('subject');
  }
  get getMessage() {
    return this.registrationForm.get('message');
  }

  constructor(private fb: FormBuilder) { 
    window.scrollTo(0,0);
  }

  registrationForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    subject: ['', [Validators.required, Validators.minLength(10)]],
    message: ['', [Validators.required, Validators.minLength(25)]]
  });

  ngOnInit() {
  }
}