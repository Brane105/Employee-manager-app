import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './dashboard/emp';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseURL = "http://localhost:3001/profile"
  constructor(private _http :HttpClient) { }
  //login 
  public login(username:string, password:string): Observable<any> {
   let url = `${this.baseURL}/${username}/${password}`;
   return this._http.get(url);
  }
  //login 
  public getEmp(): Observable<Emp[]> {
    let url = `${this.baseURL}/emp`;
    return this._http.get<Emp[]>(url);
   }
   public deleteemp(id:any): Observable<Emp[]> {
    let url = `${this.baseURL}/emp/delete/${id}`; ///profile/emp/delete/:id
    return this._http.delete<Emp[]>(url);
   }
   public updateUser(id:any,dept:any,data:any):Observable<any>{
     console.log(id,dept)
    return this._http.put(`${this.baseURL}/emp/${id}/${dept}`,data)
  }
  public storeEmp(formValue: any): Observable<any> {
    return this._http.post(`${this.baseURL}/emp/store`, formValue);
  }
}
// profile/emp/store
