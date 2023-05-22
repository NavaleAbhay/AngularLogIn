import { Component, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
   user:User={
     contactNumber: '',
     password: ''
   }
   loggedIn:any;
   role:any;
  
  constructor(private svc:AuthserviceService,private router:Router){}
  
  
  logIn(){
  this.svc.logIn(this.user).subscribe((response)=>{
    console.log(response.token)
    console.log(response) 
   })
  }
}
