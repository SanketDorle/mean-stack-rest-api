import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashBoard.html'
})
export class DashBoardPage {
  title = 'Angular' ; 
  constructor(private router: Router) { }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
