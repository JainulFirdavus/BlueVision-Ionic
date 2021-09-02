import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PageService } from '../pages.service';
// import {IonTagsInputModule} from "ionic-tags-input";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settingForm: FormGroup;
  submitted = false;
  userList: any;
  branchs: any = [];
  positions: any = [];

  user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/order';
  constructor(public formBuilder: FormBuilder, private auth: PageService, private router: Router, public toastController: ToastController) {
    this.settingForm = this.formBuilder.group({
      title: ['', [Validators.minLength(6), Validators.maxLength(15)]],
      email: [''],
      _id: [''],
      url: [''],
      reminder: [''],
      positions: [this.positions],
      branchs: [this.branchs],
      // branchs: this.formBuilder.array([123]),
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],

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
    this.auth.getsettings().subscribe((response) => {
      if (response['status'] != 0) {
        this.settingForm.patchValue(response['response'])
      }
    })
  }
  onSubmit() {

    this.submitted = true;
    if (this.settingForm.invalid) {
      this.presentToast('invalid')
      return;
    } else {
      this.settingForm.patchValue({
        created: Date.now()
      })
      this.auth.savesettings(this.settingForm.value).subscribe((response) => {
        if (response['status'] == 0) {
          this.presentToast('invalid')
          // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing
        } else {
          this.presentToast('Updated Succefully')
          // localStorage.removeItem('order');
          // this.router.navigate(['/orders']);
          // this.settingForm.patchValue({})
        }
      })
    }

  }

}
