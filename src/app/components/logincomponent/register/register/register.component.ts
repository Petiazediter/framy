import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../login/login/login.component.scss','../../../../app.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoading = false
    console.log(this.isLoading)
  }

  onSubmit(form : NgForm ){
    console.log(form)
    // Add account to 
    this.isLoading =true
    this.accountService.addAccount(this.account).subscribe(
      (response) => {                           //Next callback
        console.log('response received ' + response)
        this.isLoading = false
      },
      (error) => {                              //Error callback
        console.error('error caught in component ' + error)
        alert("Server error. Try again later.")
        this.isLoading = false
    });
    
    return true
  }

}
