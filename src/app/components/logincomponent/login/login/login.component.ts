import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from 'src/app/model/Account';
import { AccountApiService } from 'src/app/services/api/account/account-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../../app.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  isLoading : boolean = false

  constructor(private apiService : AccountApiService) {
   }

  ngOnInit(): void {
 
  }

  onSubmit(form : NgForm){
    this.username = form.value.username;
    this.password = form.value.password;
    this.isLoading =true
    this.apiService.loginAccount(new Account(this.username,this.password,"")).subscribe(
      (account : Account) => {   
        this.isLoading = false                        //Next callback
        if (account == null){
          alert("User not found.")
        } else {
          localStorage.setItem("username", this.username)
          localStorage.setItem("password",this.password)
        }
      },
      (error) => {   
        this.isLoading = false                           //Error callback
        alert(error)
      }
    )
  }

}
