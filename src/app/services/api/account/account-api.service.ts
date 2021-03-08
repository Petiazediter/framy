import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  private baseUrl : string = "http://localhost:8080"
  private accountsApi : string = "/api/register"
  private accountLoginApi : string ="/api/login"

  constructor(private httpClient : HttpClient) { }


  loginAccount(account : Account) : Observable<Account>{
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(account);
    console.log("Account: " + account)
    return this.httpClient.post<Account>(`${this.baseUrl}${this.accountLoginApi}`,body,{'headers':headers})
  }

  addAccount(account : Account) : Observable<Account>{
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(account);
    return this.httpClient.post<Account>(`${this.baseUrl}${this.accountsApi}`, body, {'headers':headers})
  }
  
}
