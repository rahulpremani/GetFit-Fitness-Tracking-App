import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faChartLine} from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  
  constructor(){
    window.scrollTo(0,0);
  }
  
  faChartLine = faChartLine;
  faEdit = faEdit;
  faBriefcase = faBriefcase;
  
  ngOnInit() {
  }
  
}
