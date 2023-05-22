import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private httpClient:HttpClient) { }
  logIn(user:User):Observable<any>{
    console.log("inside request")
    let url ="http://localhost:5148/api/auth/authenticate/";
      return this.httpClient.post<User>(url,user);
      }
}
