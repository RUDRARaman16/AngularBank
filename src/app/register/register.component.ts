import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname=""
accno=""
pswd=""
 


  constructor() { }

  ngOnInit(): void {
  }
register(){
  alert("Acoount created")
}
 
   
}