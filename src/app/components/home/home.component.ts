import { Component, OnInit } from '@angular/core';
import { AccountApiService } from 'src/app/services/api/account/account-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accounts : Account[];

  constructor(private accountApi : AccountApiService) { }

  ngOnInit(): void {
  }


}
