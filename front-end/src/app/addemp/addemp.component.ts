import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  empid:number | undefined;
  empname:string | undefined;
  email:string | undefined;
  dept:string | undefined;
  level:string | undefined;
  constructor(private fb:FormBuilder, private _service:ProfileService, private _rout:Router) { }

  ngOnInit(): void {
  }
  // "_id" : ObjectId("62a1b5c3241ef2d28c476359"),
  // "empid" : 4,
  // "empname" : "Chris",
  // "email" : "Chris@gmail.com",
  // "dept" : "IT",
  // "level" : "Manager
  addContact(empForm:any) {
    this._service.storeEmp(empForm)
    .subscribe((response : any) => {
      console.log(empForm)
    });
  }
}
