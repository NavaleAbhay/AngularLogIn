import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  role=localStorage.getItem("role");
statusAdmin:boolean=false;
statusUser:boolean=false


ngOnInit(): void {

  if(this.role=="Admin"){
    this.statusAdmin=true;
  }
  if(this.role=="User"){
    this.statusUser=true;
  }
}


}
