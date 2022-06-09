import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetempComponent } from './getemp/getemp.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"success/:username",component:DashboardComponent,children:[
    {path:"",component:GetempComponent},
    {path:"update",component:UpdateComponent},
    {path:"addemp",component:AddempComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
