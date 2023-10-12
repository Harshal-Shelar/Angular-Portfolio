import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsData = [
    {name : 'HTML', percent : '90', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'},
    {name : 'SCSS', percent : '90', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'},
    {name : 'Javascript', percent : '80', icon:'https://logosdownload.com/logo/javascript-logo-big.png'},
    {name : 'Angular', percent : '80', icon:'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png'},
    {name : 'React JS', percent : '70', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
    {name : 'Node JS', percent : '60', icon:'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'},
    {name : 'Express JS', percent : '60', icon:'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'},
    {name : 'MySQL', percent : '70', icon:'https://pngimg.com/d/mysql_PNG23.png'},
    {name : 'MongoDB', percent : '80', icon:'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'},
    {name : 'Git, Github', percent : '90', icon:'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'},
    {name : 'Core Java', percent : '50', icon:'https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png'},
  ]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  showEducation(){
    this.router.navigate(['/education']);
  }

}
