import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Account } from 'src/app/model/Account';
import { AccountService } from 'src/app/services/account/account.service';
import { AccountApiService } from 'src/app/services/api/account/account-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../login/login/login.component.scss','../../../../app.component.css']
})
export class RegisterComponent implements OnInit {

  usernameAndPasswordRegex = new RegExp('^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$');
  emailRegex = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+');
  account : Account;
  username : string;
  password : string;
  password2 : string;
  email : string;
  isLoading : boolean = false;

  constructor(private accountService : AccountApiService, private accountServ : AccountService) { 
  }

  ngOnInit(): void {
    this.isLoading = false
    console.log(this.isLoading)
  }

  onSubmit(form : NgForm ){
    this.username = form.value.username
    this.password = form.value.password1
    this.password2 = form.value.password2
    this.email = form.value.email

    if (this.isValid()){
      this.account = new Account(this.username,this.password,this.email)
    }
  }

  private isValid() : boolean{
    
    if ( this.password != this.password2){
      alert("The given passwords not matching!")
      return false
    } else if(!this.usernameAndPasswordRegex.test(this.username)) {
      alert("The given username contains illegal character(s)!")
      return false
    } else if (this.username.length < 5){
      alert("The given username is too short!")
      return false
    } else if (this.password.length<5){
      alert("The given password is too short!")
      return false
    } else if (!this.emailRegex.test(this.email)){
      alert("The format of the email address is not valid!")
      return false
    }

    // Add account to 
    this.account = new Account(this.username,this.password,this.email)
    this.isLoading =true
    this.accountService.addAccount(this.account).subscribe(
      (account : Account) => {                     
        if (account == null){
          alert("Username or email address is already taken.")
          return;
        }
        this.isLoading = false
        this.accountServ.loginAccount(account)
        console.log(account)
      },
      (error) => {                              //Error callback
        alert("Server error. Try again later.")
        this.isLoading = false
    });
    
    return true
  }

}
