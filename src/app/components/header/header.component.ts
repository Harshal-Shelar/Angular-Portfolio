import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isBottom: any;
  openSidenav : any= false;
  headerData = [
    {name : 'Profile', router:'/profile', icon :'fa fa-user-circle'},
    {name : 'Work', router:'/work', icon :'fa fa-folder'},
    {name : 'Projects', router:'/projects', icon :'fa fa-calendar-check-o'},
    {name : 'Skills', router:'/skills', icon :'fa fa-bullseye'},
    {name : 'Education', router:'/education', icon :'fa fa-graduation-cap'},
    {name : 'Activities', router:'/otherSkills', icon :'fa fa-soccer-ball-o'},
    {name : 'Resume', router:'/resume', icon :'fa fa-vcard-o'},
    {name : 'Contact Me', router:'/contactMe', icon :'fa fa-paper-plane'} 
  ]

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
