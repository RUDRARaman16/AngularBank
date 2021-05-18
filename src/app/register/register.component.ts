import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  accno = ""
  pswd = ""




  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  register() {
    var uname = this.uname
    var acno = this.accno
    var pswd = this.pswd
    let user = this.dataservice.AccountDetails
    if (acno in user) {
      alert("User Exists...Please Login")
    }
    else {
      user[acno] = {
        acno,
        username: uname,
        password: pswd,
        balance: 0
      }
      alert("Successfully Registered")
      this.router.navigateByUrl("")

    }


  }


}
