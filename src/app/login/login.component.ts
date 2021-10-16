import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: string;
  password: string;
  emp:any;

  constructor(private router: Router, private service: EmpService) { 
    this.loginId =' ';
    this.password =' ';
    this.emp = [{name: 'Alex', age: 23, salary: 10000, gender: 'Male',DOJ: '1-01-1998', loginId: 'alex', password: 'alex', country: 'Australia', phone: 1406534899},
      {name: 'Bob', age: 25, salary: 10220, gender: 'Male', DOJ: '2-12-1996', loginId: 'bob', password: 'bob', country: 'India', phone: 9449689989},
      {name: 'Carol', age: 47, salary: 15000, gender: 'Female',DOJ: '3-01-1974', loginId: 'carol', password: 'carol', country: 'India', phone: 9346204358},
      {name: 'Derek', age: 33, salary: 11000, gender: 'Male',DOJ: '4-01-1988', loginId: 'derek', password: 'derek', country: 'UK', phone: 1257332456},
      {name: 'Emmy', age: 37,salary: 12000, gender: 'Female',DOJ: '5-01-1984', loginId: 'emmy', password: 'emmy', country: 'Australia', phone: 2787654332}, 
    ];
  }

  ngOnInit(): void {
  }

  loginSubmit(){
    if(this.loginId === 'HR' && this.password === 'HR') {
      this.service.setUserLoggedIn();
      //this.router.navigate('products');
    } else{
      this.emp.forEach((employee: any) => {
        if(this.loginId === employee.loginId) {
          alert('Welcome to employee.name home page');
        } else {
          alert('Login failure...');
        }
    });
  }
}
  submitForm(loginForm: any) {
    if(loginForm.loginId === 'username' && loginForm.password === 'password') {
      alert('Welcome');
      this.service.setUserLoggedIn();
      this.router.navigate(['RRR']);
    } else{
      this.emp.forEach((employee: any) => {
        if(loginForm.loginId === employee.loginId) {
          this.service.setUserLoggedIn();
          this.router.navigate(['RRR']);
        } 
    });
  }
  }
}


