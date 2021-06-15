import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PageService } from '../pages.service';
@Component({
  selector: 'app-customervisit',
  templateUrl: './customervisit.page.html',
  styleUrls: ['./customervisit.page.scss'],
})
export class CustomervisitPage implements OnInit {
  getuser: FormGroup;
  submitted = false;
  userList: any;
  user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/orders';
  constructor(public formBuilder: FormBuilder, private auth: PageService, private router: Router, public toastController: ToastController) {
    this.getuser = this.formBuilder.group({
      date: ['', [Validators.required]],

    })
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    /* this.auth.customerVisit({ date: "2021-08-08T02:37:36.836+05:30" }).subscribe((res) => {
      if (res.status != 0) {
        this.userList = res.response[0].documentData;
       

      } else {
        this.presentToast('No Record')
      }
    }) */
  }


  submit() {
    this.submitted = true;
    if (!this.getuser.valid) {
      this.presentToast('Date Required')
      return false;
    } else {
      this.auth.customerVisit(this.getuser.value).subscribe((res) => {

        if (res.status != 0) {
          let data = res.response[0] ? res.response[0].documentData : [];
          if (data.length > 0) {
            this.userList = data;
          } else {
            this.presentToast('No Record')
          }
        } else {
          this.presentToast('No Record')
        }
      })
    }
  }
}
