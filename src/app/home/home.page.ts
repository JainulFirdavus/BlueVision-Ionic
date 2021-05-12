import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
/* 
export class HomePage {

  credentials = { email: '', password: '', remember: 'yes' }; // select remember by default

  constructor() {

  }

  ngOnInit() {
    console.log("d");

  }

  updateStatus() {

    if (this.credentials.remember == 'no') {

      this.credentials.remember = 'yes';
    } else {

      this.credentials.remember = 'no';
    }
  }

  public login() {

    console.log('a', this.credentials);

  }
} */


export class HomePage implements OnInit {
  myForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  fetchDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorCtr() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log(this.myForm.value)
    }
  }
}