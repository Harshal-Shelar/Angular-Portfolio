import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  openSidebar: any = true;

  menuSidebar = [
    {
      link_name: "Profile",
      link: "/profile",
      icon: "fa fa-user-o",
      sub_menu: []
    }, {
      link_name: "Work Experience",
      link: '/work',
      icon: "fa fa-briefcase",
      sub_menu: []
    }, {
      link_name: "Education",
      link: '/education',
      icon: "fa fa-graduation-cap",
      sub_menu: []
    }, {
      link_name: "Projects",
      link: "/projects",
      icon: "fa fa-folder-open-o",
      sub_menu: []
    }, {
      link_name: "Technical Skills",
      link: "/skills",
      icon: "	fa fa-terminal",
      sub_menu: []
    }, {
      link_name: "Activities",
      link: "/otherSkills",
      icon: "fa fa-star-o",
      sub_menu: []
    }, {
      link_name: "Resume",
      link: "/resume",
      icon: "fa fa-file-pdf-o",
      sub_menu: []
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

}
