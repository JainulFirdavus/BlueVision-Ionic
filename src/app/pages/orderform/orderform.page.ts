import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.page.html',
  styleUrls: ['./orderform.page.scss'],
})



export class OrderformPage implements OnInit {


  ramdon_id: String;
  current_employee: String;
  orderForm: FormGroup;
  settings: any;
  branchList: []
  _id: String;
  submitted: boolean = false;
  baseUrl = environment.baseUrl;
  user_home = '/orders' // (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/orders';
  employee_id = JSON.parse(localStorage.getItem('token')).user_id ? JSON.parse(localStorage.getItem('token')).user_id : ''
  employee_name = JSON.parse(localStorage.getItem('token')).user_id ? JSON.parse(localStorage.getItem('token')).username : ''



  validation_messages = {
    'order_date': [{ type: 'required', message: 'Order Date is required.' }],
    'next_visit': [{ type: 'required', message: 'Next Visit is required.' }],
    'paid_status': [{ type: 'required', message: 'Paid Status is required.' }],
    'delivery_date': [{ type: 'required', message: 'Delivery Date  is required.' }],
    'customer_phone': [{ type: 'required', message: 'Phone  is required.' }, { type: 'pattern', message: 'Your Phone must contain only numbers .' }],
    'customer_name': [{ type: 'required', message: 'Name is required.' }],
    'customer_address': [{ type: 'required', message: 'Address  is required.' }],
    'customer_age': [{ type: 'required', message: 'Age is required.' }, { type: 'pattern', message: 'Your Phone must contain only numbers .' }],
    'customer_gender': [{ type: 'required', message: 'Gender  is required.' }],
    'lens_type': [{ type: 'required', message: 'Len Type  is required.' }],
    'tint': [{ type: 'required', message: 'Tint is required.' }],
    'tint_discount': [{ type: 'required', message: 'Tint Discount is required.' }],
    'lens_price': [{ type: 'required', message: 'Tint Discount is required.' }],
    'lens_tax': [{ type: 'required', message: 'Lens Tax is required.' }, { type: 'pattern', message: 'Your Price must contain only numbers .' }],
    'frame_type': [{ type: 'required', message: 'Frame Type  is required.' }],
    'frame_price': [{ type: 'required', message: 'Frame Price  is required.' }, { type: 'pattern', message: 'Your Price must contain only numbers .' }],
    'frame_brand': [{ type: 'required', message: 'Frame Brand  is required.' }],
    'frame_warrenty': [{ type: 'required', message: 'Frame Warrenty  is required.' }],
    'lens_warrenty': [{ type: 'required', message: 'Lens Warrenty  is required.' }],
    'lens_brand': [{ type: 'required', message: 'Lens Brand  is required.' }],
    'frame_discount': [{ type: 'required', message: 'Frame Discount  is required.' }],
    'frame_tax': [{ type: 'required', message: 'Frame Tax  is required.' }],
    'total_amount': [{ type: 'required', message: 'Total  is required.' }, { type: 'pattern', message: 'Your Total must contain only numbers .' }],
    'discount': [{ type: 'required', message: 'Discount  is required.' }, { type: 'pattern', message: 'Your Discount must contain only numbers .' }],
    'advance': [{ type: 'required', message: 'Advance  is required.' }, { type: 'pattern', message: 'Your Advance must contain only numbers .' }],
    'balance': [{ type: 'required', message: 'Balance  is required.' }, { type: 'pattern', message: 'Your Balance must contain only numbers .' }],
    // 'next_visit': [{ type: 'required', message: 'G Total is required.' }, { type: 'pattern', message: 'Your Total must contain only numbers .' }],
    'delivery_status': [{ type: 'required', message: 'Delivery Status is required.' }],

  }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private http: HttpClient, private auth: HttpClient, public toastController: ToastController) {

    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this._id = params.id
      }
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      order_id: [''/* { value: '', disabled: true } */, Validators.required],
      userId: [''],
      order_date: ['', Validators.required],
      // created: ['', Validators.required],
      delivery_date: ['', Validators.required],
      customer_phone: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      customer_name: ['', Validators.required],
      customer_address: ['', Validators.required],
      customer_age: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      customer_gender: ['', Validators.required],
      lens_type: ['', Validators.required],
      lens_price: ['', Validators.required],
      // tint: ['', Validators.required],
      // tint_discount: ['', [Validators.required,]],
      lens_tax: ['', [Validators.required,]],
      frame_type: ['', Validators.required],
      frame_price: ['', [Validators.required,]],
      frame_brand: ['', Validators.required],
      lens_brand: ['', Validators.required],
      frame_tax: ['', [Validators.required]],
      // frame_discount: ['', [Validators.required]],
      frame_details: this.formBuilder.group({
        right: this.formBuilder.group({
          dv_sph: ['', Validators.required],
          dv_cyl: ['', Validators.required],
          dv_axi: ['', Validators.required],
          nv_sph: ['', Validators.required],
          nv_cyl: ['', Validators.required],
          nv_axi: ['', Validators.required],
        }),
        left: this.formBuilder.group({
          dv_sph: ['', Validators.required],
          dv_cyl: ['', Validators.required],
          dv_axi: ['', Validators.required],
          nv_sph: ['', Validators.required],
          nv_cyl: ['', Validators.required],
          nv_axi: ['', Validators.required],

        }),
      }),
      total_amount: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      frame_warrenty: ['', [Validators.required]],
      lens_warrenty: ['', [Validators.required]],
      advance: ['', [Validators.required]],
      balance: ['', [Validators.required]],
      // grand_total: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      next_visit: ['', Validators.required],
      refered_by: [''],
      branch: [''],
      order_taken: [this.employee_name],
      employee_id: [this.employee_id, Validators.required],
      delivery_status: ['', Validators.required],
      paid_status: ['', Validators.required],

    })

    /*  if (localStorage.getItem('order')) { // testing
       this.orderForm.patchValue(JSON.parse(localStorage.getItem('order')))
     } */

    this.http.post(this.baseUrl + '/admin/getsettings', {}).subscribe(data => {
      this.settings = data['response'];
    })


    this.http.post(this.baseUrl + '/branches/list', {}).subscribe(data => {
      this.branchList = data['response'].data;
    })
    if (this._id) {
      console.log("exist");
      this.http.post(this.baseUrl + '/order/getordeById', { _id: this._id }).subscribe(data => {
        if (data['response']) {
          this.ramdon_id = data['response'].order_id;
          this.orderForm.patchValue(data['response']);
          this.orderForm.patchValue({
            _id: data['response']._id,
            /* advance: data['response'].advance,
            balance: data['response'].balance,
            customer_address: data['response'].customer_address,
            customer_age: data['response'].customer_age,
            customer_gender: data['response'].customer_gender,
            customer_name: data['response'].customer_name,
            customer_phone: data['response'].customer_phone,
            total_amount: data['response'].total_amount,
            delivery_status: data['response'].delivery_status,
            discount: data['response'].discount,
            paid_status: data['response'].paid_status, */
            next_visit: new Date(data['response'].next_visit).toISOString(),
            delivery_date: new Date(data['response'].delivery_date).toISOString(),
            order_date: new Date(data['response'].order_date).toISOString()
          })

        }
      })
    } else {
      console.log("Notexist");

      this.getorderId();
    }
  }

  getorderId() {
    this.http.get(this.baseUrl + '/order/lastorder', {}).subscribe(data => {
      if (data['response'] && data['response'].order_id) {
        this.ramdon_id = 'BL-' + (Number(data['response'].order_id.split('-')[1]) + 1);
        this.orderForm.patchValue({
          order_id: this.ramdon_id,
          order_taken: this.employee_name,
          employee_id: this.employee_id,
        })
      } else {
        this.ramdon_id = 'BL-1001';
        this.orderForm.patchValue({
          order_id: 'BL-1001'
        })
      }
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.orderForm.controls; }
  getuser() {
    this.http.post(this.baseUrl + '/user/userDetails', { phone: this.orderForm.value['customer_phone'] }).subscribe(data => {
      if (data['response'] && data['status'] == 1) {
        this.orderForm.patchValue({
          userId: data['response']._id,
          customer_name: data['response'].name,
          customer_address: data['response'].address,
          customer_age: data['response'].age,
          customer_gender: data['response'].gender,
        });
      }
    })
  }


  updateCalc() {

    let lens_price = parseInt(this.orderForm.value.lens_price);
    // let lens_discount: number = parseInt(this.orderForm.value.lens_price) * (parseInt(this.orderForm.value.tint_discount) / 100)
    let lens_tax = ((lens_price/*  - lens_discount */) * parseInt(this.orderForm.value.lens_tax) / 100)
    let lens_cal = (lens_price) + lens_tax;

    let frame_price = parseInt(this.orderForm.value.frame_price);
    // let frame_discount: number = parseInt(this.orderForm.value.frame_price) * (parseInt(this.orderForm.value.frame_discount) / 100)
    let frame_tax = ((frame_price/*  - frame_discount */) * parseInt(this.orderForm.value.frame_tax) / 100)
    let frame_cal = (frame_price) + frame_tax;

    this.orderForm.patchValue({
      total_amount: Math.round(lens_cal + frame_cal)
    })

    if (this.orderForm.value.total_amount > 0) {
      this.orderForm.patchValue({
        // discount: Math.round(frame_discount + lens_discount),
        balance: Math.round((lens_cal + frame_cal) - this.orderForm.value.discount/*  - (lens_discount + frame_discount) */) - this.orderForm.value.advance
      })
    }
  }

  reset() {
    this.getorderId();
    this.orderForm.reset();
  }

  onSubmit() {


    // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing

    for (let el in this.orderForm.controls) {
      if (this.orderForm.controls[el].errors) {

        this.presentToast(this.validation_messages[el][0].message)
        console.log(this.validation_messages[el][0].message);
        return;
        /* console.log(el.split('_')[0], el.split('_')[1])
          this.presentToast((el.split('_')[0] + ' ' + el.split('_')[1] ? el.split('_')[1] : '') + ' Required')
         return; */
      }
    }

    this.submitted = true;
    this.orderForm.patchValue({
      created: Date.now()
    })
    if (this.orderForm.invalid) {
      this.presentToast('invalid details')
      return;
    } else {
      if (this._id) {
        this.orderForm.value._id = this._id
      }
      console.log(this.orderForm.value);

      this.http.post(this.baseUrl + '/order/save', this.orderForm.value).subscribe((result) => {
        if (result['status'] == 0) {
          this.presentToast('invalid details')
          // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing
        } else {
          this.presentToast('Order Place Successfully')
          // localStorage.removeItem('order');
          // this.orderForm.patchValue({})
          this.orderForm.reset();
          // this.getorderId();
          this.submitted = false;

          this.router.navigate(['/orders']);
          // this.orderForm.patchValue({})
        }
      })
    }
  }





}
