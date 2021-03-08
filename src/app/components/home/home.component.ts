import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { AccountApiService } from 'src/app/services/api/account/account-api.service';
import {Account} from 'src/app/model/Account'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accountInstance : Account

  constructor(private accountApi : AccountApiService, private accountService  :AccountService) {
   AccountService.accountInstanceObserver.subscribe( account => this.accountInstance = account );
    }

  ngOnInit(): void {

  } 


}
