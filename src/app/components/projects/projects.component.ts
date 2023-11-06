import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  openMeanCrud(){
    window.open("https://github.com/Harshal-Shelar/MEAN-CRUD/tree/frontEnd");
  }

  openMernLogin(){
    window.open("https://github.com/Harshal-Shelar/MERN-Login-CRUD/tree/frontEnd");
  }

  openSkills(){
    this.router.navigate(['/skills']);
  }
  goBack(){
    this.router.navigate(['/work']);
  }

  goNext(){
    this.router.navigate(['/skills']);
  }
}
