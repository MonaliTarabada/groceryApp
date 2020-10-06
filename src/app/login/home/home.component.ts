import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private service:MyServiceService,private route:ActivatedRoute) { }
  listData;
  items=[];
  tables=[];
  lname;
  user;
  listArray=[];
  myData;
  ngOnInit(): void {
    console.log("Inside ngOnInit() method");
    this.listData=new FormGroup({
      name:new FormControl(''),
      quantity:new FormControl(''),
      listname:new FormControl('')
    })
    this.route.params.subscribe(res => this.user=res.user); 
    var list=window.localStorage.getItem(this.user);
    var listItem=JSON.parse(list);
    this.items=listItem.name;
    console.log(this.items);
  }
  OnClickLogout(){
    window.localStorage.removeItem("currentUser");
    this.router.navigate(['']);
  }
  addNewList(){
    console.log("Inside the method addNewList");
    this.router.navigate(['grlist']);
  }
  addItem(listname){
    console.log("Inside method addItem- "+listname);
    var username =this.user;
    var data = JSON.parse(window.localStorage.getItem(this.user));
    if(data.name!=null){
      for(let i of data.name){
        this.listArray.push(i);
      }
    }
    this.listArray.push(listname);
    console.log(this.listArray);
    if(listname){
      var details = {
        user: username,
        pswd: data.pswd,
        name: this.listArray
      };
      this.myData = JSON.stringify(details);
      this.lname=listname;
      this.listData.controls['listname'].reset();
    }
  }
  deleteItem(i){
    console.log("Inside method of deleteItem");
    this.items.splice(i,1);
    var bookmarks = JSON.parse(window.localStorage.getItem(this.user))
    bookmarks.name.splice(i, 1)
    console.log("local data"+ i + bookmarks.name);
    window.localStorage.setItem(this.user, JSON.stringify(bookmarks));
  }
  OnClickFinish(){
    console.log("Inside method OnClickFinish");
    localStorage.setItem(this.user, this.myData);
    this.ngOnInit();
    this.listData.reset();
  }
  onClickList(listname){
    console.log("Inside the method OnClickList");
    this.router.navigate(['/grlist',listname]);
  }
}
