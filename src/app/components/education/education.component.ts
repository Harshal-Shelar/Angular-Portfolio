import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  openAcitivities(){
    this.router.navigate(['/otherSkills'])
  }

}
