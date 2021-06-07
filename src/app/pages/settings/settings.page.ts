import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PageService } from '../pages.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settinguserForm: FormGroup;
  submitted = false;
  userList: any;
  constructor(public formBuilder: FormBuilder, private auth: PageService, private router: Router, public toastController: ToastController) {
    this.settinguserForm = this.formBuilder.group({
      username: ['', [Validators.minLength(6), Validators.maxLength(15)]],
      firstname: [''],
      lastname: [''],
      address: [''],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      //  password: ['', [Validators.required, Validators.minLength(4)]],
      //  role: [false],
      // confirmpass: ['', [Validators.required, Validators.minLength(4)]],

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
    this.auth.getDeatils({ _id: JSON.parse(localStorage.getItem('token')).user_id }).subscribe((response) => {
      if (response['status'] != 0) {
        console.log(response);
        this.settinguserForm.patchValue(response['response'])
      } else {
        this.presentToast('No Record')
      }
    })
  }

}
