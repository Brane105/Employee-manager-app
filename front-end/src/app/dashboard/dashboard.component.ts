import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Emp } from './emp';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emps? : Array<Emp>
  constructor(public service : ProfileService,private activatedRouter:ActivatedRoute) {
   
   }
  ngOnInit(): void {
    this.service.getEmp().subscribe((data) => {
      this.emps = data;
      console.table(this.emps)
    });
  }
}
