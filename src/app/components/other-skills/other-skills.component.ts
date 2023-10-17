import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.scss']
})
export class OtherSkillsComponent implements OnInit {

  redHatPopup : any = false;
  sihPopup :any = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  seeResume(){
    this.router.navigate(['/resume']);
  }

  redHat(){

  }

  sih(){

  }

}
