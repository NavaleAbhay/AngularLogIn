import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  token=localStorage.getItem("jwt");
status:boolean=true;



ngOnInit(): void {
console.log(this.token)
  if(this.token ==null){
    this.status=false;
  }
}
}
