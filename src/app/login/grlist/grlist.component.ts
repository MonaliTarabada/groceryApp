import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grlist',
  templateUrl: './grlist.component.html',
  styleUrls: ['./grlist.component.scss']
})
export class GrlistComponent implements OnInit {

  listData;
  items=[];
  listname:string;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => this.listname=res.listname); 
    var list = localStorage.getItem(this.listname);
    console.log(list);
    if(list!=null){
      this.items=JSON.parse(list);
    }    
    console.log(this.items);
    this.listData = new FormGroup({
      name: new FormControl(),
      quantity: new FormControl()
   });
  }
  addItem(name,quantity){
    console.log("Inside method addItem of grlist" + name + quantity);
    if(name && quantity){
      console.log("Inside if condition");
      let val=this.listname
      this.items.push({name,quantity,val});
      console.log(this.items + " listname :  " +this.listname);
      console.log(name + quantity);
      this.listData.controls['name'].reset();
      this.listData.controls['quantity'].reset();
    }
  }
  deleteItem(i){
    console.log("Inside method of deleteItem of grlist");
    this.items.splice(i,1);
    var bookmarks = JSON.parse(localStorage.getItem(this.listname))
    bookmarks.splice(i, 1)
    console.log("local data"+ i + bookmarks);
    localStorage.setItem(this.listname, JSON.stringify(bookmarks));
  }
  OnClickFinish(){
    console.log("Inside method OnClickFinish of grlist");
    localStorage.setItem(this.listname,JSON.stringify(this.items));
    console.log("finish list:  " +this.items);
    this.listData.reset();
  }
  OnClickLogout(){
    localStorage.removeItem("currentUser");
    console.log("hello logout");
    this.router.navigate(['']);
  }
}
