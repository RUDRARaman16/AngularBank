import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  current_user =''

  AccountDetails: any = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }
  constructor() {
    this.getDetails();
  }

  saveDetails() {
    localStorage.setItem("AccountDetails", JSON.stringify(this.AccountDetails))
    if (this.current_user) {
      localStorage.setItem("current_user", JSON.stringify(this.current_user))
    }
  }
  getDetails() {
    if (localStorage.getItem("AccountDetails")) {
      this.AccountDetails = JSON.parse(localStorage.getItem("AccountDetails")|| '')
    }
    if (localStorage.getItem("current_user")) {
      this.current_user = JSON.parse(localStorage.getItem("current_user")|| '')
    }
  }
  register(uname:any,acno:any,pswd:any) {
    let user = this.AccountDetails
    if (acno in user) {
      console.log(acno)
      return false
    }
    else {
      user[acno] = {
        acno,
        username: uname,
        password: pswd,
        balance: 0
      }
      this.saveDetails()
      return true
    }
  }
  login(acno: any, pswd: any) {
    let users = this.AccountDetails
    if (acno in users) {
      if (pswd == users[acno]["password"]) {
        this.current_user = users[acno]["username"]
        this.saveDetails()
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
        this.saveDetails()
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
          users[acno]["balance"] -= Wamt
          this.saveDetails()
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






