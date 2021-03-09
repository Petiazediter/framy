import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/Account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  accountInstance : Account;

  constructor(private accountService : AccountService,private httpClient : HttpClient) {
      AccountService.accountInstanceObserver.subscribe(account => this.accountInstance = account)
  }

  ngOnInit(): void {
    
  }

  signOut(){
    this.httpClient.get<number>("http://localhost:8080/api/signout").subscribe(
      (response) => {
        this.accountService.refresh()
      }
    )
  }

}
