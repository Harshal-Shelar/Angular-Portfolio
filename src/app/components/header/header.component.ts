import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isBottom: any;
  openSidenav : any= false;

  constructor() { }

  ngOnInit(): void {
  }

  showSidenav(){
    this.openSidenav = true;
  }
  
  @HostListener('window:scroll', [])
  onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      return this.isBottom = true;
    } else {
      return this.isBottom = false;
    }
  }
}
