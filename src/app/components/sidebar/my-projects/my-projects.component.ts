import { Component, OnInit } from '@angular/core';
import { GroupProjectWrapper } from 'src/app/model/GroupProjectWrapper';
import { GroupService } from 'src/app/services/api/group/group.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  projects : GroupProjectWrapper[];

  constructor(private groupService : GroupService) {
    groupService.getProjectsByGroups().subscribe((wrappers : GroupProjectWrapper[]) => {
      console.log(wrappers)
      this.projects = wrappers
    })
  }

  ngOnInit(): void {
    
  }

}
