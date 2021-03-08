import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieOptionsProvider, CookieService, COOKIE_OPTIONS } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/Account';
import { AccountApiService } from '../api/account/account-api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  public static accountInstanceObserver : Observable<Account>;

  constructor(private accountApi : AccountApiService, private httpClient : HttpClient) {
    AccountService.accountInstanceObserver = this.httpClient.get<Account>("http://localhost:8080/api/cookielogin");
  }

  loginAccount(account){
    window.location.assign("http://localhost:4200");
  }

  refresh(){
    window.location.assign("http://localhost:4200");
  }

}
