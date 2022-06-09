import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AddempComponent } from './addemp/addemp.component';
import { GetempComponent } from './getemp/getemp.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UpdateComponent,
    DeleteComponent,
    AddempComponent,
    GetempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
