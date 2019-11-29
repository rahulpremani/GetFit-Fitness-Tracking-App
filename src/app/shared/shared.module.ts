import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FontAwesomeModule , FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faUser as faRegularUser} from '@fortawesome/free-regular-svg-icons';
import { faFireAlt as faSolidFire, faTasks as faSolidTasks, faTachometerAlt as faSolidTachometer, faFileDownload as faSolidFileDownload,faDumbbell as faSolidDumbbell,
faSignOutAlt as faSolidSignout, faUser as faSolidUser, faEdit as faSolidEdit, faTrashAlt as faSolidTrash, faRunning as faSolidRunning, faBriefcase as faSolidBriefCase} from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  providers: [DatePipe],
})
export class SharedModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faRegularUser, faSolidFire,faSolidTachometer, faSolidTasks, faSolidFileDownload, faSolidDumbbell,
      faSolidSignout, faSolidUser, faSolidEdit, faSolidTrash, faSolidRunning, faSolidBriefCase)
}
}
