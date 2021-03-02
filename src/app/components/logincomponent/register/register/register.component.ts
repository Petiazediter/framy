import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../login/login/login.component.scss','../../../../app.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm ){
    console.log(form)
  }

}
