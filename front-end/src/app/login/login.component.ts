import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  

  errorMessage:any
  constructor(private _builder:FormBuilder,private _service: ProfileService,private _router : Router) { }

  loginForm : FormGroup = this._builder.group({
    user : ['',Validators.required], password : ['',Validators.required]
  })

  ngOnInit(): void {
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
 handleSubmit(){
    let username = this.loginForm.controls['user'].value;
    let password = this.loginForm.controls['password'].value;
    this._service.login(username,password).subscribe({
      next:(data)=>{
        this._router.navigate(['success',data.username])
      },
      error:(err)=>{
        this.errorMessage = err.error.messsage
        alert("The User Id Doesnt Exist")
        this.loginForm.reset()
      }
    })
  }

}

//checkbox for show password
// export class password implements OnInit {
//   public inputType:string ='password';

//   public showPassword(event:any):void{
//     if(event.target.checked){
//       this.inputType='text';
//     } else{
//       this.inputType ='password'
//     }

//   }


//   ngOnInit(): void {}

// }
