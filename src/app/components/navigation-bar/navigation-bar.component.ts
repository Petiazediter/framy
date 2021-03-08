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

  constructor(private accountService : AccountService) {
      AccountService.accountInstanceObserver.subscribe(account => this.accountInstance = account)
  }

  ngOnInit(): void {
    
  }

  signOut(){
    localStorage.clear();
    this.accountService.refresh()
  }

}
