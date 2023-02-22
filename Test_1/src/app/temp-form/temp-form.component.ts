import { Component ,OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

  company = [
    "techExtensor",
    "Google",
    "MicroSoft",
    "Facebook"]
  title=""
  title2=""
  title3=""
  final=""
  data:any;
  id = '0';
  
  constructor(private router:Router,private localStorage:ServicesService,private route:ActivatedRoute ){}
  ngOnInit(): void {
  
  this.id = this.route.snapshot.params['id'];
  if (this.localStorage.getData(this.id) != null){
    this.data=  JSON.parse(this.localStorage.getData(this.id) ?? '');
    this.userModel = new User(
      this.data['fname'],
      this.data['mname'],
      this.data['lname'],
      this.data['age'],
      this.data['gender'],
      this.data['hobby'],
      this.data['company'],
    )

  }

  //  alert(JSON.parse( this.data))
  }
  fclick(name:string){
    this.title=name
    this.final=this.title
  }
  sclick(name2:string){
    this.title2=name2
    this.final=this.title+" "+this.title2

  }
  lclick(name3:string){
    this.title3=name3
    this.final=this.title+"  "+this.title2+"  "+this.title3
  }

  onback(){
    this.router.navigate(["../"])
  }

  // onsubmit(){
  //   this.router.navigate(["/react-form"])
  // }
  // userModel =new User('','','','','','','','')

  userModel = new User("","","","","",{"reading": "","sports":"","riding":"","gaming":"","music":""},"");
  mydata :any;

  onSubmit(){
    //console.log(this.userModel);
    this.mydata=this.userModel
   // console.log(this.mydata);
    new ServicesService().setData(this.id,this.userModel)
    // this.localStorage.setData(this.number,this.Data);
    this.router.navigate(["/react-form"],{queryParams:{data:this.id}})
    // {queryParamsHandling:'preserve'}
   // this.router.navigate(['/react-form'+this.number])
  }

    // new ServicesService().setData(this.userModel);
    //console.log(this.userModel)
    // this.data=  new ServicesService().getData();
    // alert(JSON.parse( this.data))
  

}
