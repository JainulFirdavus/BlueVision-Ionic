import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from "@angular/forms";
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage {


  constructor(public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    file: [null],
    fullName: this.fb.group({
      firstName: [''],
      lastName: ['']
    }),
    email: [''],
    phoneNumber: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      cityName: ['']
    }),
    gender: [''],
    PasswordValidation: this.fb.group({
      password: [''],
      confirmPassword: ['']
    }),
    addDynamicElement: this.fb.array([])
  })


}
