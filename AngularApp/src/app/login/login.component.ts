import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loggedIn: boolean = false;
  role: any;
  status: boolean = false;
  signinstatus: boolean = false;
  signout: boolean = false;

  user: User = {
    contactNumber: '',
    password: ''
  };


  constructor(private svc: AuthserviceService, private router: Router) { }


  logIn() {
    this.svc.logIn(this.user).subscribe((response) => {
      localStorage.setItem("jwt", response.token);
      this.loggedIn = true;
      this.signout = true;
    })
  }
  login() {
    this.status = true;
    this.signinstatus = true;
  }
  logout() {
    this.loggedIn = false;
    this.signinstatus = false;
    this.signout = false;
    this.status = false;
    localStorage.removeItem("jwt");
  }
}
