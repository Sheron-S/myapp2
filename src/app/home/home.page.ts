import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  userid: string;
  password: string;
  error: string;
    constructor(public router: Router){ }
 
    ngOnInit() {
    }
    login(){
      console.log('userid',this.userid);
      console.log('password',this.password);
      if(this.userid === 'venisha')
      {
       if(this.password !== '12345')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
        this.router.navigate(['countries']);
       }
      }
      if(this.userid === 'aarthi')
      {
       if(this.password !== '12345')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
        this.router.navigate(['countries']);
       }
      }
      if(this.userid === 'Sudha')
      {
       if(this.password !== '12345')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
        this.router.navigate(['countries']);
       }
      }
      if(this.userid === 'sheron')
      {
       if(this.password !== '12345')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
        this.router.navigate(['countries']);
       }
      }
 
    }
}
