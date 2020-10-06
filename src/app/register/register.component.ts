import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formDtls;
  constructor(private router:Router,private service:MyServiceService) { }

  ngOnInit(): void {
    this.formDtls=new FormGroup({
      email:new FormControl("",[Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      password:new FormControl("",[Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)]),
      cnfpassword:new FormControl("",[Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)])
    })
  }
  OnClickSubmit(data){
    console.log("username:"+ data.email + " Password:"+ data.password);
    var user = this.service.register(data.email,data.password);
    this.formDtls.reset();
  }
  OnClickLogin(){
    console.log("Inside method OnClickLogin()");
    this.router.navigate(['']);
  }
}
