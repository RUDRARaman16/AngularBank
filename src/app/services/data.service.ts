import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  AccountDetails: any = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }
  constructor() { }


  register(uname: any, acno: any, pswd: any) {
    let user = this.AccountDetails
    if (acno in user) {
      return false

    }
    else {
      user[acno] = {
        acno,
        username: uname,
        password: pswd,
        balance: 0
      }
      return true


    }
  }

  login(acno: any, pswd: any) {
    let users = this.AccountDetails
    if (acno in users) {
      if (pswd == users[acno]["password"]) {
        return true


      }
      else {
        return false

      }
    }
    else {
      alert("Invalid Account")
      return false
    }







  }
  deposit(acno: any, pswd: any, amount: any) {
    var amt = parseInt(amount)
    let users = this.AccountDetails
    if (acno in users) {

      if (pswd == users[acno]["password"]) {
        users[acno]["balance"] += amt
        return users[acno]["balance"]

      }
      else {
        alert("incorret password")
        return false
      }
    }
    else {
      alert("invalid account")
      return false
    }

  }
  withdraw(acno: any, pswd: any, amount: any) {
    var Wamt = parseInt(amount)
    let users = this.AccountDetails
    if (acno in users) {
      if (pswd == users[acno]["password"]) {
        if (users[acno]["balance"] > Wamt) {

          users[acno]["balance"]-= Wamt
          return users[acno]["balance"]
        }
        else {
          alert("Insufficient Balance")
          return false
        }
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("invalid account")
      return false
    }
  }

}






