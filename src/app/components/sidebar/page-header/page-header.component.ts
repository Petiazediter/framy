import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() navTitle : string;
  @Input() buttonText : string;
  @Input() buttonIcon : string; 

  constructor() { }

  ngOnInit(): void {
  }

}
