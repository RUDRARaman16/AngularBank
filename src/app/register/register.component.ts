import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  uname = "";
  accno = "";
  pswd = "";

  //model
  registerForm = this.fb.group({
   
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private dataservice: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
   

    if (this.registerForm.valid) {
      var uname = this.registerForm.value.uname
      var acno = this.registerForm.value.accno
      var pswd = this.registerForm.value.pswd
      const result = this.dataservice.register(uname,acno,pswd)
      if (result) {
        alert("Successfully Registered")
        this.router.navigateByUrl("")
      }
      else {
        alert("User Exists...Please Login")
      }
    }
    else {
      alert("Invalid Form")
    }
  }
}
