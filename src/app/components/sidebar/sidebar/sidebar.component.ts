import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentPage = 0

  constructor() { }

  ngOnInit(): void {
  
  }

  onChangePage(page){
    this.currentPage = page
    console.log("page change")
  }

}
