import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.page.html',
  styleUrls: ['./orderform.page.scss'],
})



export class OrderformPage implements OnInit {
  ramdon_id: String;
  current_employee: String;
  orderForm: FormGroup;
  submitted: boolean = false;

  empolyee_id = JSON.parse(localStorage.getItem('token')).user_id ? JSON.parse(localStorage.getItem('token')).user_id : ''

  baseUrl = environment.baseUrl;

  validation_messages = {
    'order_date': [
      { type: 'required', message: 'Order Date is required.' },
      /*  { type: 'minlength', message: 'Username must be at least 5 characters long.' },
       { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
       { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
       { type: 'validUsername', message: 'Your username has already been taken.' } */
    ],
    'delivery_date': [{ type: 'required', message: 'Delivery Date  is required.' }],
    'customer_phone': [{ type: 'required', message: 'Phone  is required.' }, { type: 'pattern', message: 'Your Phone must contain only numbers .' }],
    'customer_name': [{ type: 'required', message: 'Name  is required.' }],
    'customer_address': [{ type: 'required', message: 'Address  is required.' }],
    'customer_age': [{ type: 'required', message: 'Age is required.' }, { type: 'pattern', message: 'Your Phone must contain only numbers .' }],
    'customer_gender': [{ type: 'required', message: 'Gender  is required.' }],
    'lens_type': [{ type: 'required', message: 'Len Type  is required.' }],
    'tint': [{ type: 'required', message: 'Tint is required.' }],
    'tint_discount': [{ type: 'required', message: 'Tint Discount is required.' }],
    'lens_tax': [{ type: 'required', message: 'Lens Tax is required.' }, { type: 'pattern', message: 'Your Price must contain only numbers .' }],
    'frame_type': [{ type: 'required', message: 'Frame Type  is required.' }],
    'frame_price': [{ type: 'required', message: 'Frame Price  is required.' }, { type: 'pattern', message: 'Your Price must contain only numbers .' }],
    'frame_brand': [{ type: 'required', message: 'Frame Brand  is required.' }],
    'frame_discount': [{ type: 'required', message: 'Frame Discount  is required.' }],
    'frame_tax': [{ type: 'required', message: 'Frame Tax  is required.' }],
    'total_amount': [{ type: 'required', message: 'Total  is required.' }, { type: 'pattern', message: 'Your Total must contain only numbers .' }],
    'discount': [{ type: 'required', message: 'Discount  is required.' }, { type: 'pattern', message: 'Your Discount must contain only numbers .' }],
    'advance': [{ type: 'required', message: 'Advance  is required.' }, { type: 'pattern', message: 'Your Advance must contain only numbers .' }],
    'balance': [{ type: 'required', message: 'Balance  is required.' }, { type: 'pattern', message: 'Your Balance must contain only numbers .' }],
    'grand_total': [{ type: 'required', message: 'G Total is required.' }, { type: 'pattern', message: 'Your Total must contain only numbers .' }],
    'delivery_status': [{ type: 'required', message: 'Delivery Status is required.' }],

  }
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: HttpClient) { }
  ngOnInit() {

    // console.log(JSON.parse(localStorage.getItem('token')));

    this.orderForm = this.formBuilder.group({
      order_id: [''/* { value: '', disabled: true } */, Validators.required],
      userId: [''],
      order_date: ['', Validators.required],
      created: ['', Validators.required],
      delivery_date: ['', Validators.required],
      customer_phone: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      customer_name: ['', Validators.required],
      customer_address: ['', Validators.required],
      customer_age: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      customer_gender: ['', Validators.required],
      lens_type: ['', Validators.required],
      lens_price: ['', Validators.required],
      tint: ['', Validators.required],
      tint_discount: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      lens_tax: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      frame_type: ['', Validators.required],
      frame_price: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      frame_brand: ['', Validators.required],
      frame_tax: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      frame_discount: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
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


      total_amount: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      discount: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      advance: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      balance: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      grand_total: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      next_visit: ['', Validators.required],
      refered_by: [''],
      empolyee_id: [this.empolyee_id, Validators.required],
      delivery_status: ['', Validators.required],
    })

    /* if (localStorage.getItem('order')) { // testing
      this.orderForm.patchValue(JSON.parse(localStorage.getItem('order')))
    } */


    this.http.get(this.baseUrl + '/order/lastorder', {}).subscribe(data => {
      console.log('2', data)
      if (data['response'] && data['response'].order_id) {
        this.ramdon_id = 'BL-' + (Number(data['response'].order_id.split('-')[1]) + 1);
        this.orderForm.patchValue({
          order_id: this.ramdon_id
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
        console.log(data['response']);
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

    let lens_price = parseFloat(this.orderForm.value.lens_price);
    let lens_discount: number = parseFloat(this.orderForm.value.lens_price) * (parseFloat(this.orderForm.value.tint_discount) / 100)
    let lens_tax = ((lens_price - lens_discount) * parseFloat(this.orderForm.value.lens_tax) / 100)
    let lens_cal = (lens_price /* - lens_discount */) + lens_tax;

    let frame_price = parseFloat(this.orderForm.value.frame_price);
    let frame_discount: number = parseFloat(this.orderForm.value.frame_price) * (parseFloat(this.orderForm.value.frame_discount) / 100)
    let frame_tax = ((frame_price - frame_discount) * parseFloat(this.orderForm.value.frame_tax) / 100)
    let frame_cal = (frame_price /* - frame_discount */) + frame_tax;

    this.orderForm.patchValue({
      total_amount: lens_cal + frame_cal
    })


    // let advance = this.orderForm.value.advance

    if (this.orderForm.value.total_amount > 0) {
      this.orderForm.patchValue({
        discount: frame_discount + lens_discount,
        balance: ((lens_cal + frame_cal) - (lens_discount + frame_discount)) - this.orderForm.value.advance
      })
    }
    /*  
      frame_price
      frame_tax
      lens_tax
      tint_discount
      frame_discount
  
      total_amount
  
      discount
   */


  }



  onSubmit() {
    console.log(this.orderForm.value)
    this.submitted = true;
    if (!this.orderForm.invalid) {
      return;
    } else {
      this.orderForm.patchValue({
        created: Date.now()
      })
      this.http.post(this.baseUrl + '/order/save', this.orderForm.value).subscribe((result) => {
        console.log(result);
        if (result['status'] == 0) {
          // localStorage.setItem('order', JSON.stringify(this.orderForm.value)); // testing
        } else {
          // localStorage.removeItem('order');
          this.router.navigate(['/orders']);
          this.orderForm.patchValue({})
        }
      })
    }
  }

  



}
