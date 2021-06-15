import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.scss'],
})
export class NewemployeeComponent implements OnInit {
  id: any;
  baseUrl = environment.baseUrl;
  user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/orders';

  employeeForm: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private route: ActivatedRoute,
    public toastController: ToastController) {

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

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


  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: [false],
      // confirmpass: ['', [Validators.required, Validators.minLength(4)]],

    })
  }

  get password() {
    return this.employeeForm.get("password");
  }
  /*  get confirmpass() {
     return this.employeeForm.get("confirmpass");
   } */
  get email() {
    return this.employeeForm.get("email");
  }
  get phone() {
    return this.employeeForm.get("phone");
  }
  get username() {
    return this.employeeForm.get("username");
  }

  get role() {
    return this.employeeForm.get("role");
  }

  onSubmit() {

    this.http.post(this.baseUrl + '/employee/register', this.employeeForm.value).subscribe(response => {
      if (response['response'].status == 1) {
        // this.router.navigate(['/home']);
        this.employeeForm.reset();
        /*   this.employeeForm.patchValue({
  
          }) */
        this.router.navigate(['/dashboard']);
        this.toastController.create({
          message: 'Account Created Successfully',
          // duration: 2000
        });
      } else {
        this.toastController.create({
          message: 'Invalid Credentials',
          // duration: 2000
        });
      }
    });
  }
}
