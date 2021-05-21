import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthProvider } from '../providers/auth';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})

export class CreateaccountPage {

  registerForm: FormGroup;
  public errorMessages = {
    password: [
      { type: 'required', message: 'Password is required' },
      // { type: 'maxlength', message: 'Name cant be longer than 100 characters' },
      { type: 'pattern', message: 'Not Valid Email' }
    ],
    /*   confirmpass: [
        { type: 'required', message: 'Name is required' },
        // { type: 'maxlength', message: 'Name cant be longer than 100 characters' },
        { type: 'pattern', message: 'Not Valid Email' }
      ], */
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'minLength', message: 'Please enter a min 4 letter' }
    ],
    phone: [
      { type: 'required', message: 'phone is required' },
      { type: 'minLength', message: 'Please enter a min 10 numbers' }
    ],
    username: [
      { type: 'required', message: 'Name is required' },
      { type: 'minLength', message: 'Please enter a min 4 letter' }
    ],
  }

  constructor(public formBuilder: FormBuilder, private auth: AuthProvider, private router: Router) {

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      // confirmpass: ['', [Validators.required, Validators.minLength(4)]],

    })

  }
  /*  pwdMatchValidator(frm: FormGroup) {
     return frm.get('password').value === frm.get('confirmpass').value
       ? null : { 'mismatch': true };
   } */
  get password() {
    return this.registerForm.get("password");
  }
  /*  get confirmpass() {
     return this.registerForm.get("confirmpass");
   } */
  get email() {
    return this.registerForm.get("email");
  }
  get phone() {
    return this.registerForm.get("phone");
  }
  get username() {
    return this.registerForm.get("username");
  }


  submit() {
    console.log("sd", this.registerForm.value);

    if (!this.registerForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log(this.registerForm.value)

      // this.registerForm.value['user'] = 'test';

      this.auth.register(this.registerForm.value).subscribe((response) => {
        console.log(response)
        if (response['response'].status == 1) {
          this.router.navigate(['/home']);
        }
      });
    }
  }



}



