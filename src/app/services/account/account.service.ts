import { Injectable } from '@angular/core';
import { CookieOptionsProvider, CookieService, COOKIE_OPTIONS } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private static key_username : string = "com.codecool.cookies.username"
  private static key_password : string = "com.codecool.cookies.password"

  constructor(private cookieService : CookieService) {

  }

  getUsername() : string {
    return this.cookieService.get(AccountService.key_username);
  }

  getPassword(): string{
    return this.cookieService.get(AccountService.key_password);
  }

  setUsername(username : string) : void{
    this.cookieService.put(AccountService.key_username,username, )
  }

}
