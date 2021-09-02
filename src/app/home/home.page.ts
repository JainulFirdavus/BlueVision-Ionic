import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { AppService } from '../app.service';
import { AuthProvider } from '../providers/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  loginForm: FormGroup;
  baseUrl = environment.baseUrl;
  submitted = false;
  public errorMessages = {
    password: [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Not Valid Email' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'minLength', message: 'Please enter a min 4 letter' }
    ],

  };
  constructor(public formBuilder: FormBuilder, private auth: AuthProvider, private router: Router, public toastController: ToastController, public AppService: AppService) {
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
      this.AppService.stringSubject.next(uses.role)
      if (uses.token) {
        if (uses.role == 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/orderform']);
        }
      }
    }
    // this.presentToast('Url: ' + this.baseUrl)
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
      return false;
    } else {
      this.auth.login(this.loginForm.value).subscribe((response) => {
        if (response && response.status == 1) {
          this.AppService.stringSubject.next(response.response.role)
          if (response.response.role == 'admin') {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/orders']);
          }
        } else {
          this.presentToast('User Not Exist')
        }
      });
    }
  }

  gotoHome() {
    this.router.navigate(['/createaccount']);  // define your component where you want to go
  }
}