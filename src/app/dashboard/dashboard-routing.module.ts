import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TrackProgressComponent } from './track-progress/track-progress.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddWorkoutPlanComponent } from './add-workout-plan/add-workout-plan.component';
import { MyWorkoutPlanComponent } from './my-workout-plan/my-workout-plan.component';
import { AuthGuard } from '../guards/auth.guard';
import { GoPremiumComponent } from './go-premium/go-premium.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PremiumFeaturesComponent } from './premium-features/premium-features.component';
import { DefaultDashboardGuard } from '../guards/default-dashboard.guard';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', component: TrackProgressComponent, canActivate: [DefaultDashboardGuard]},
    {path: 'dashboard/my-profile', component: MyProfileComponent},
    {path: 'dashboard/add-workout-plan', component: AddWorkoutPlanComponent},
    {path: 'dashboard/my-workout-plan', component: MyWorkoutPlanComponent},
    {path: 'dashboard/track-progress', component: TrackProgressComponent},
    {path: 'dashboard/go-premium', component: GoPremiumComponent},
    // {path: 'dashboard/go-premium', component: TrackProgressComponent},
    {path: 'dashboard/payment-gateway', component: PaymentGatewayComponent},
    {path: 'dashboard/premium-features', component: PremiumFeaturesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
