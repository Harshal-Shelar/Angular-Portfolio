import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  exp1 = false;
  exp2 = false;
  exp3 = false;

  companyCardData = [
    { 
      name: 'Aquarious Technology', 
      position: 'MEAN Stack Developer', 
      date: 'May. 2, 2023 to Aug. 31, 2023',
      img : 'assets/aquarious.jpg',
      details : `CZ Masters is an Angular-based responsive web application, where the
      admin has access all over the project, he can accept the request of a user
      who has requested the new property.
      Admin can manage the properties, and issues regarding the owned
      properties. The user can check the properties listed by the admin and also
      can buy a new property and register the complaints if he has one.
      The Admin can manage the notifications and the social media handles. And
      can communicate with staff and vendors for inquiries and issues with the
      property`,
      exp : 3
    },
    { 
      name: 'Fintech Global Center', 
      position: 'Front End Developer', 
      date: 'Nov. 28, 2022 to Mar. 10, 2023' ,
      img : 'assets/fintech.jpg',
      details : `
      NoCode app is an Angular-based responsive web app that is basically created
      to reduce the workload of creating applications through coding.
      Also, in this project, you can create your own style application according to your
      needs and if you want to buy domains then you have to pay for that. Also, you
      can create n number of applications.
      There are some components like Post, Newsletter, Email, SMS, and Admin
      going through all these components you can create your application.
      `,
      exp : 2
    },
    { 
      name: 'Intellect Design Arena', 
      position: 'Software Engineer', 
      date: 'Jul. 26, 2021 to Sept. 14, 2022' ,
      img : 'assets/intellect.png',
      details : `Worked as a front-end developer in an iGTB project, for Transaction Limit
      Management product for Barkleys and Lloyds Banking Group.
      The Product is used to give the decision of Pay or No Pay whether the
      transaction can be done or not depending on the Limits and Balances in the
      Account.
      My Role:- Created a structure that shows the hierarchy of Customer Group,
      Customer, Account Group, and Account, which represents the tree structure of
      limits and balances of children and parents`,
      exp : 1
    },
  ]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  showProjects(){
    this.router.navigate(['/projects']);
  }

  showExp1(){
    this.exp1 = true;
  }
  showExp2(){
    this.exp2 = true;
  }
  showExp3(){
    this.exp3 = true;
  }

  goBack(){
    this.router.navigate(['/profile']);
  }

  goNext(){
    this.router.navigate(['/projects']);
  }
}
