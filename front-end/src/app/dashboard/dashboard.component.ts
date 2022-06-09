import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Emp } from './emp';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emps? : Array<Emp>
  constructor(public service : ProfileService,private activatedRouter:ActivatedRoute,public router:Router) {
   
   }
  ngOnInit(): void {
    this.service.getEmp().subscribe((data) => {
      this.emps = data;
    });
  }
  deleteEmp(id:any) { 
    this.service.deleteemp(id)
    .subscribe((response: any) => {
      this.emps = []
      this.ngOnInit();
    });
   }
   logout(): void{
    this.router.navigate(['']);
  }
}
