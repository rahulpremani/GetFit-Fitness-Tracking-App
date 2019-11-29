import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-premium-features',
  templateUrl: './premium-features.component.html',
  styleUrls: ['./premium-features.component.css']
})
export class PremiumFeaturesComponent implements OnInit {

  safeSrcVideo1: SafeResourceUrl;
  safeSrcVideo2: SafeResourceUrl;
  safeSrcVideo3: SafeResourceUrl;
  safeSrcVideo4: SafeResourceUrl;
  safeSrcVideo5: SafeResourceUrl;
  safeSrcVideo6: SafeResourceUrl;
  safeSrcVideo7: SafeResourceUrl;
  safeSrcVideo8: SafeResourceUrl;
  safeSrcVideo9: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrcVideo1 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/iW6QeqA_iD4?cc_load_policy=1");
    this.safeSrcVideo2 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Yz7Ofr9z1co");
    this.safeSrcVideo3 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/u6PNjgn1ocM");
    this.safeSrcVideo4 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dI0O8TnC2d8"); 
    this.safeSrcVideo5 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/CxktmQ3zJOA"); 
    this.safeSrcVideo6 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dinpkrcpKAk"); 
    this.safeSrcVideo7 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/WFKik6EXSOM"); 
    this.safeSrcVideo8 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/YGGleRBn99Q"); 
    this.safeSrcVideo9 =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ZaO3JJwxE88");
   }

  ngOnInit() {
  }

}
