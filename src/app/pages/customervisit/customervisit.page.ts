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
  }


  submit() {
    this.submitted = true;
    console.log('All fields are required.')
    if (!this.getuser.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log(this.getuser.value)
      this.auth.customerVisit(this.getuser.value).subscribe((response) => {
        console.log(response);
        this.userList = response;
      })
    }
  }

}
