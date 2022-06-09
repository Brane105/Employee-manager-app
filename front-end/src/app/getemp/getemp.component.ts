import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Emp } from '../dashboard/emp';
@Component({
  selector: 'app-getemp',
  templateUrl: './getemp.component.html',
  styleUrls: ['./getemp.component.css']
})
export class GetempComponent implements OnInit {

  emps? : Array<Emp>
  constructor(public service : ProfileService,private activatedRouter:ActivatedRoute) {
   
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
}
