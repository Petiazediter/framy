import { Injectable } from '@angular/core';
import { CookieOptionsProvider, CookieService, COOKIE_OPTIONS } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/Account';
import { AccountApiService } from '../api/account/account-api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account : Account;
  accountObserver : Observable<Account>

  constructor(private accountApi : AccountApiService) {
    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")
    if ( username != null && password != null){
     this.accountObserver= accountApi.loginAccount(new Account(username,password,""))
    }
  }

  loginAccount(account){
    this.account = account;
  }

}
