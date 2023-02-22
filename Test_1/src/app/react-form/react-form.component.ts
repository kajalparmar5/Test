import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent implements OnInit {
  constructor(
    private localStorage: ServicesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  number: any;
  tempData: any;
  title = '';
  title2 = '';
  title3 = '';
  final = '';
  data = [];
  user: any;
  id = '';
  company = [
  "techExtensor",
  "Google",
  "MicroSoft",
  "Facebook"
];

  d: any;
 
  reactiveform:any;
  
  ngOnInit() {
this.route.queryParams.subscribe(params=>{
  this.id=params?.['data']
})

   // this.id = this.route.snapshot.params['id'];
    this.tempData = new ServicesService().getData(this.id);
    this.d = JSON.parse(this.tempData);
    
  

    console.log(this.d);

this.reactiveform=new FormGroup({
  fname:new FormControl(this.d.fname||''),
  mname:new FormControl(this.d.sname||''),
  lname:new FormControl(this.d.tname||''),
  txta:new FormControl(this.d.fname+" "+this.d.sname+" "+this.d.tname||''),
  age:new FormControl(this.d.age||''),
  gender:new FormControl(this.d.gender||''),
  hobby:new FormGroup({
    reading:new FormControl(this.d.hobies['reading']),
    sports:new FormControl(this.d.hobies['sports']),
    riding:new FormControl(this.d.hobies['riding']),
    gaming:new FormControl(this.d.hobies['gaming']),
    music:new FormControl(this.d.hobies['music']),
  }),
  company: new FormControl(this.d.company||'')
})
  
  }
  



  onSubmit() {
   localStorage.setItem(this.id,JSON.stringify(this.reactiveform?.value))
   alert("data is saved")
  }

  clearForm(){
    this.reactiveform.reset();
  }
}
