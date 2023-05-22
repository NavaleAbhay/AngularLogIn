import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  users:any[]=[
  {
    "userId":1,
    "userName":"Abhay",
    "password":"password",
    "role":"Admin"
  },
  {
    "userId":2,
    "userName":"Sahil",
    "password":"password",
    "role":"User"
  },
  {
    "userId":3,
    "userName":"Shubham",
    "password":"password",
    "role":"User"
  },
  {
    "userId":4,
    "userName":"Jayesh",
    "password":"password",
    "role":"Admin"
  }
];


  logIn(username:string,password:string):boolean{
    const user=this.users.find((u)=>u.userName ===username && u.password===password)
    if(user){
      localStorage.setItem("role",user.role);
       return true;
    }
    return false;
  }
}
