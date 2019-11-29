import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    FeaturesComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    FlashMessagesModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HomeRoutingModule
  ],
  providers: [DatePipe, FlashMessagesService],
  exports: [
    AboutUsComponent,
    ContactUsComponent,
    FeaturesComponent
  ]
})
export class HomeModule { }
