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
  settingForm: FormGroup;
  submitted = false;
  userList: any;
  constructor(public formBuilder: FormBuilder, private auth: PageService, private router: Router, public toastController: ToastController) {
    this.settingForm = this.formBuilder.group({
      title: ['', [Validators.minLength(6), Validators.maxLength(15)]],
      email: [''],
      _id: [''],
      /*   reminder: [''],
  positions: [''],
     branchs: [''], */
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
        console.log(response);
        this.settingForm.patchValue(response['response'])
      }
    })
  }
  onSubmit() {
    console.log(this.settingForm.value)
    this.submitted = true;
    if (this.settingForm.invalid) {
      this.presentToast('invalid')
      return;
    } else {
      this.settingForm.patchValue({
        created: Date.now()
      })
      this.auth.savesettings(this.settingForm.value).subscribe((response) => {
        console.log(response);
        if (response['status'] == 0) {
          // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing
        } else {

          // localStorage.removeItem('order');
          // this.router.navigate(['/orders']);
          // this.settingForm.patchValue({})
        }
      })
    }

  }

}
