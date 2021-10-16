import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmpService {
  isUserLogged: boolean;

  constructor() {
    this.isUserLogged = false;
   }

  setUserLoggedIn() {
    this.isUserLogged = true;
  }
  setUserLoggedOff() {
    this.isUserLogged = false;
  }
  getUserLogged() {
    return this.isUserLogged;
  }
}



