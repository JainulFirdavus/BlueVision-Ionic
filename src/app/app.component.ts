import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menuList: any
  constructor() { }

  ngOnInit() {

    if (localStorage.getItem('token')) {
      var uses = JSON.parse(localStorage.getItem('token'))
      if (uses.role == 'admin') {
        this.menuList = [
          {
            name: 'Dashboard',
            icon: 'aperture-outline',
            url: '/dashboard'
          },
          {
            name: 'Orders',
            icon: 'bicycle-outline',
            url: '/orders'
          },
          {
            name: 'Information',
            icon: 'flame-outline',
            url: '/customerinformation'
          },
          {
            name: 'Visit',
            icon: 'bicycle-outline',
            url: '/customervisit'
          },
          {
            name: 'Report',
            icon: 'ribbon-outline',
            url: '/report'
          },
          {
            name: 'My Profile',
            icon: 'bicycle-outline',
            url: '/profile'
          },
          {
            name: 'Create Account',
            icon: 'bicycle-outline',
            url: '/createaccount'
          },
          {
            name: 'Settings',
            icon: 'settings-outline',
            url: '/settings'
          },
          {
            name: 'Logout',
            icon: 'settings-outline',
            url: 'logout'
          },

        ]
      } else {
        this.menuList = [
          {
            name: 'Orders',
            icon: 'bicycle-outline',
            url: '/orders'
          },
          {
            name: 'Information',
            icon: 'flame-outline',
            url: '/customerinformation'
          },
          {
            name: 'Visit',
            icon: 'bicycle-outline',
            url: '/customervisit'
          },
          {
            name: 'My Profile',
            icon: 'bicycle-outline',
            url: '/profile'
          },
          {
            name: 'Logout',
            icon: 'settings-outline',
            url: 'logout'
          },

        ]
      }
    }

  }


}
