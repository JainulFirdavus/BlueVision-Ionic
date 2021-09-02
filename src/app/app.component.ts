import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menuList: any
  userName: String
  userSub: Subscription;
  constructor(private AppService: AppService) { }

  ngOnInit() {

    this.AppService.stringSubject.subscribe(items => {
      if (items == 'admin') {
        this.userName = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).username) ? JSON.parse(localStorage.getItem('token')).username : 'Blue Vision';
        this.menuList = [
          {
            name: 'Dashboard',
            icon: 'aperture-outline',
            url: '/dashboard'
          },
          {
            name: 'Orders',
            icon: 'reorder-four-outline',
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
            icon: 'create-outline',
            url: '/newemployee'
          },
          {
            name: 'Settings',
            icon: 'settings-outline',
            url: '/settings'
          },
          {
            name: 'Branches',
            icon: 'location-outline',
            url: '/branches'
          },
          {
            name: 'Logout',
            icon: 'log-out-outline',
            url: 'logout'
          },

        ]
      } else {
        this.menuList = [
          {
            name: 'Orders',
            icon: 'reorder-four-outline',
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
            icon: 'log-out-outline',
            url: 'logout'
          },
        ]
      }
      // this.menuList = items;
    });
    // this.AppService.passValue(value)


    if (localStorage.getItem('token')) {
      var uses = JSON.parse(localStorage.getItem('token'))
      this.userName = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).username) ? JSON.parse(localStorage.getItem('token')).username : 'Blue Vision';

      if (uses.role == 'admin') {
        this.menuList = [
          {
            name: 'Dashboard',
            icon: 'aperture-outline',
            url: '/dashboard'
          },
          {
            name: 'Orders',
            icon: 'reorder-four-outline',
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
            name: 'Create Employee',
            icon: 'create-outline',
            url: '/newemployee'
          },
          {
            name: 'Branches',
            icon: 'location-outline',
            url: '/branches'
          },
          {
            name: 'Settings',
            icon: 'settings-outline',
            url: '/settings'
          },
          {
            name: 'Logout',
            icon: 'log-out-outline',
            url: 'logout'
          },

        ]
      } else {
        this.menuList = [
          {
            name: 'Orders',
            icon: 'reorder-four-outline',
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
            icon: 'log-out-outline',
            url: 'logout'
          },
        ]
      }
    }
  }





  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}
