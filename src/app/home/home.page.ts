import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthProvider } from '../providers/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  public errorMessages = {
    password: [
      { type: 'required', message: 'Name is required' },
      // { type: 'maxlength', message: 'Name cant be longer than 100 characters' },
      { type: 'pattern', message: 'Not Valid Email' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'minLength', message: 'Please enter a min 4 letter' }
    ],
    /* phone: [
       { type: 'required', message: 'Phone number is required' },
       { type: 'pattern', message: 'Please enter a valid phone number' }
     ],
     street: [
       { type: 'required', message: 'Street name is required' },
       {
         type: 'maxlength',
         message: 'Street name cant be longer than 100 characters'
       }
     ],
     city: [
       { type: 'required', message: 'City name is required' },
       {
         type: 'maxlength',
         message: 'City name cant be longer than 100 characters'
       }
     ],
     state: [
       { type: 'required', message: 'State is required' },
       {
         type: 'maxlength',
         message: 'State cant be longer than 100 characters'
       }
     ],
     zip: [
       { type: 'required', message: 'Zip code is required' },
       {
         type: 'pattern',
         message: 'Please enter a valid zip code'
       }
     ] */
  };
  constructor(public formBuilder: FormBuilder, private auth: AuthProvider, private router: Router, public toastController: ToastController) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
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
    if (localStorage.getItem('token')) {
      var uses = JSON.parse(localStorage.getItem('token'))
      if (uses.token) {
        if (uses.role == 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/orderform']);
        }
      }
    }
  }

  get password() {
    return this.loginForm.get("password");
  }
  get email() {
    return this.loginForm.get("email");
  }



  submit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value).subscribe((response) => {
        console.log(response)
        if (response && response.status == 1) {
          if (response.response.role == 'admin') {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/orderform']);
          }
        } else {
          this.presentToast('invalid details')
        }
      });
    }
  }

  gotoHome() {
    this.router.navigate(['/createaccount']);  // define your component where you want to go
  }
}