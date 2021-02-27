import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  
}
