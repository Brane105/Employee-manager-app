import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
