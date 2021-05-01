import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Task144444444444';
  team ="KKR";
  email="abc@gmail.com"
  runs=333;
  strikerate =66;
  flag=false;
  ballsbowled = 44;
  pSongs ="sriram"
 
  play(){
    alert("button clicked")
  }
  change(){
    alert("change called..")
  }
  
 // sendText(event : Event){
  //  alert("entered text is : " + (<HTMLInputElement>event.target).value)
  //  this.enteredValue = (<HTMLInputElement>event.target).value;
   // this.enteredValue = event.target.value;
   // this.propertyDemo = this.enteredValue + " captain ";
    //alert(this.enteredValue)
  }

  




