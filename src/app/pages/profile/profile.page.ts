import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PageService } from '../pages.service';
@Component({
  selector: 'app-settings',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  settinguserForm: FormGroup;
  submitted = false;
  userList: any;
  constructor(public formBuilder: FormBuilder, private auth: PageService, private router: Router, public toastController: ToastController) {
    this.settinguserForm = this.formBuilder.group({
      username: ['', [Validators.minLength(6), Validators.maxLength(15)]],
      firstname: [''],
      lastname: [''],
      address: [''],
      _id: [''],
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
        this.settinguserForm.patchValue(response['response'])
      } else {
        this.presentToast('No Record')
      }
    })
  }

  onSubmit() {
    if (this.settinguserForm.invalid) {
      this.presentToast('invalid')
      return;
    } else {
      this.settinguserForm.patchValue({
        created: Date.now()
      })
      this.auth.updateemployee(this.settinguserForm.value).subscribe((response) => {
        if (response['status'] == 0) {
          this.presentToast('invalid')
          // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing
        } else {
          this.presentToast('Updated Succefully')
          this.router.navigate(['/orders']);
          // localStorage.removeItem('order');
          // this.router.navigate(['/orders']);
          // this.settinguserForm.patchValue({})
        }
      })
    }

  }


}
