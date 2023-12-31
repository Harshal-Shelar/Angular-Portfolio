import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  email : any = "harshalshelar8251@gmail.com"
  profileSummary : any = "Immediate joiner. Looking for a better opportunity as an Angular or MEAN STACK  developer With 2 years of relevant Industrial experience in Angular Technology in the IT Industry. Completed B.Tech in Information Technology (6.2 CGPA). And passionate about learning new technologies Expert in creating responsive web applications and have knowledge of backend technologies like Node js."
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  openGithub(){
    window.open("https://github.com/Harshal-Shelar");
  }

  openLinkedin(){
    window.open("https://www.linkedin.com/in/harshal-shelar-a562b8154/");
  }

  goNext(){
    this.router.navigate(['/work'])
  }

}
