import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthProvider, private router: Router) { }


  ngOnInit() {
    this._authService.logout();
    this.router.navigate(['home']);
  }

}
