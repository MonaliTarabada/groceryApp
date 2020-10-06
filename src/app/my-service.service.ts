import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  authlogin(username:string,password:string){
    console.log("Inside authlogin method of myService");
    var pswd = JSON.parse(window.localStorage.getItem(username));
    console.log(" Localstorage password : "+ pswd.user +pswd.name+pswd.pswd);
    if(pswd.pswd==password)
    {
      localStorage.setItem("currentUser",username);
      return true;
    }
    else
    return false;  
  }
  register(username:string,password:string){
    console.log("Inside method register()");
    var details = {
      user: username,
      pswd: password,
      name: ''
    };
    var myData = JSON.stringify(details);
    localStorage.setItem(username, myData);
  }
}
