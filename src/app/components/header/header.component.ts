import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openSidenav : any= false;
  constructor() { }

  ngOnInit(): void {
  }

  showSidenav(){
    this.openSidenav = true;
  }
}
