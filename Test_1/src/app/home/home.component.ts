import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){}
   

  onclick(num:any){
   if(num===""){
    alert("enter number")
   }
   else{
    this.router.navigate(["/test-form",num])

   }
    

  }







  // _keyUp(event: any) {
  //   const pattern = /[0-9\+\-\ ]/;
  //   if(event!= pattern){
  //     alert("please enter number only")
  //   }
  //   else{
      
  //   }

    //  let inputChar = String.fromCharCode(event.key);

    // if (!pattern.test(inputChar)) {
      
    //    event.preventDefault();
    // }
  }

