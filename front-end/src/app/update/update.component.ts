import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _service: ProfileService) { }

  ngOnInit(): void {
  }
  data:any|undefined=undefined
  users:any | undefined=undefined
  id=new FormControl('');
  dept=new FormControl('');

  handleUpdate(){
    let id=this.id.value;
    let dept=this.dept.value;
    console.log(dept)
    this._service.updateUser(id,dept,this.data).subscribe((data)=>{
      this.users=data
      
    })
  }
}
