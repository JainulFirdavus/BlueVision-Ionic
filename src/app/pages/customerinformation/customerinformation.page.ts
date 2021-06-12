import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PageService } from '../pages.service';

@Component({
  selector: 'app-customerinformation',
  templateUrl: './customerinformation.page.html',
  styleUrls: ['./customerinformation.page.scss'],
})
export class CustomerinformationPage implements OnInit {
  getuser: FormGroup;
  submitted = false;
  userList: any;

  constructor(public formBuilder: FormBuilder, private auth: PageService, private router: Router, public toastController: ToastController) {
    this.getuser = this.formBuilder.group({
      phone: ['', [Validators.required]],

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
    /*  this.auth.customerDetails({ phone: '9597070570' }).subscribe((res) => {
   
       this.userList = res.response;
 
     }) */
  }


  submit() {
    this.submitted = true;
    if (!this.getuser.valid) {
      this.presentToast('Phone Number required.')
      return false;
    } else {
      this.auth.userorderList(this.getuser.value).subscribe((res) => {
        if (res.status == 0) {
          this.presentToast('No Record')
        } else {

          this.userList = res.response;
        }

      })
    }
  }

}
