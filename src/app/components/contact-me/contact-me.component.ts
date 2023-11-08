import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  email : any = "harshalshelar8251@gmail.com"
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  openMap(){
    window.open("https://www.google.com/maps/place/16%C2%B056'59.5%22N+74%C2%B024'31.8%22E/@16.9498792,74.4084696,121m/data=!3m1!1e3!4m12!1m7!3m6!1s0x3bc111e397d3afa1:0x87a72d90c7b145a!2sGanapati+Mandir!8m2!3d16.9500258!4d74.4100129!16s%2Fg%2F12hk_z0_1!3m3!8m2!3d16.949867!4d74.408835?entry=ttu");
  }

  openGmail(){
    window.open("https://mail.google.com/mail/u/0/#inbox");
  }

  goBack(){
    this.router.navigate(['/resume']);
  }

}
