import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordGuard } from '../guards/reset-password.guard';
import { DashboardReloadGuard } from '../guards/dashboard-reload.guard';
import { FreezeBackGuard } from '../guards/freeze-back.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: LogInComponent, canActivate:[FreezeBackGuard]},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'features', component: FeaturesComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'reset-password', component: ResetPasswordComponent, canActivate: [ResetPasswordGuard]}
  ]}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
