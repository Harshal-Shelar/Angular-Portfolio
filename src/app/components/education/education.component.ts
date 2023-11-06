import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/skills']);
  }

  goNext(){
    this.router.navigate(['/otherSkills']);
  }

}
