import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/Account';
import { GroupProjectWrapper } from 'src/app/model/GroupProjectWrapper';
import { AccountService } from '../../account/account.service';
import { AccountApiService } from '../account/account-api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient : HttpClient){}

  getProjectsByGroups() : Observable<GroupProjectWrapper[]>{
    const headers = {'content-type':'application/json'}
    const body = ""
    return this.httpClient.post<GroupProjectWrapper[]>("http://localhost:8080/api/projects",body, {'headers':headers})
  }
}
