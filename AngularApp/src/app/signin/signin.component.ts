import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  status:boolean=false;
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

  login(){
    this.status=true;
  }
  logout(){
    this.status=false;
  }
}
