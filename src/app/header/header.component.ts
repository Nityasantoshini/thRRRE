import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private service:EmpService) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['login']);
    this.service.setUserLoggedOff();
    alert("logged off");
  }

}
