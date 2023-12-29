import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'angular_2.0_codes';
  valid=true
  // isvalid=true
  constructor() {
  }
  // onchange(val:any){
  //   this.isvalid=val

  // }
   ngOnInit(){
    
   }
}
