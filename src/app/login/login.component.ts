import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formDtls;
  msg;
  constructor(private router:Router,private service:MyServiceService) { }

  ngOnInit(): void {
    this.formDtls=new FormGroup({
      email:new FormControl("",[Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      password:new FormControl("",[Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)]) 
    })
  }
  OnClickSubmit(data){
  console.log("username:"+ data.email + " Password:"+ data.password);
  var user = this.service.authlogin(data.email,data.password);
  console.log(user);
  if(user){
    this.router.navigate(['/home',data.email]);
  }else{
    this.msg="Invalid Username Or Password";
  }
  }
  OnClickRegister(){
    console.log("Inside method OnClickRegister()");
    this.router.navigate(['/register']);
  }
}
