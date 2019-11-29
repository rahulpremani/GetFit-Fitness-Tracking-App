import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TrackProgressComponent } from './track-progress/track-progress.component';
import { MyWorkoutPlanComponent } from './my-workout-plan/my-workout-plan.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddWorkoutPlanComponent } from './add-workout-plan/add-workout-plan.component';
import { GraphsModule } from '../graphs/graphs.module';
import {FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faUser as faRegularUser} from '@fortawesome/free-regular-svg-icons';
import { faFireAlt as faSolidFire, faTasks as faSolidTasks, faTachometerAlt as faSolidTachometer, faFileDownload as faSolidFileDownload,faDumbbell as faSolidDumbbell,
faSignOutAlt as faSolidSignout, faUser as faSolidUser, faEdit as faSolidEdit, faTrashAlt as faSolidTrash, faFireAlt, faSync as faSolidSync} from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { GoPremiumComponent } from './go-premium/go-premium.component';
import { PremiumFeaturesComponent } from './premium-features/premium-features.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { FlashMessagesModule} from 'angular2-flash-messages';

@NgModule({
  declarations: [
    DashboardComponent,
    TrackProgressComponent,
    MyWorkoutPlanComponent,
    MyProfileComponent,
    AddWorkoutPlanComponent,
    GoPremiumComponent,
    PremiumFeaturesComponent,
    PaymentGatewayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    GraphsModule,
    NgbModule,
    NgxPaginationModule,
    DashboardRoutingModule,
    NgxPaginationModule
  ],
  providers: [DatePipe]
})
export class DashboardModule {

  faRegularUser = faRegularUser;
  faSolidFire = faSolidFire;
  faSolidTasks = faSolidTasks;
  faSolidFileDownload = faSolidFileDownload;
  faSolidSignout = faSolidSignout;
  faSolidUser = faSolidUser;
  faSolidTrash = faSolidTrash;
  faSolidDumbbell = faSolidDumbbell;
  faSolidTachometer = faSolidTachometer;
  faSolidEdit = faSolidEdit;

  constructor(library: FaIconLibrary){
    library.addIcons(faRegularUser, faSolidFire,faSolidTachometer, faSolidTasks, faSolidFileDownload, faSolidDumbbell,
      faSolidSignout, faSolidUser, faSolidEdit, faSolidTrash, faSolidSync )
}

}
