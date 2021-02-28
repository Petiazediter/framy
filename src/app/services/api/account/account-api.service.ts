import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  private baseUrl : string = "http://localhost:8080"
  private accountsApi : string = "/accounts"

  constructor(private httpClient : HttpClient) { }

  getAllAccount() : Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseUrl}${this.accountsApi}`)
  }

  addAccount(account : Account) : Observable<Account>{
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(account);
    return this.httpClient.post<Account>(`${this.baseUrl}${this.accountsApi}`, body, {'headers':headers})
  }
  
}
