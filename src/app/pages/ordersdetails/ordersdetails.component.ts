import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-ordersdetails',
  templateUrl: './ordersdetails.component.html',
  styleUrls: ['./ordersdetails.component.scss'],
})
export class OrdersdetailsComponent implements OnInit {
  id: any;
  baseUrl = environment.baseUrl;
  order_id: string;
  orderForm: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.id = params.id
      }
    });
  }



  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      order_date: ['', Validators.required],
      created: ['', Validators.required],
      advance: ['', Validators.required],
      balance: ['', Validators.required],
      customer_address: ['', Validators.required],
      customer_age: ['', Validators.required],
      customer_gender: ['', Validators.required],
      customer_name: ['', Validators.required],
      customer_phone: ['', Validators.required],
      delivery_date: ['', Validators.required],
      total_amount: ['', Validators.required],
      delivery_status: ['', Validators.required],
      discount: ['', Validators.required],
      paid_status: ['', Validators.required],
    })

 
    this.http.post(this.baseUrl + '/order/getordeById', { _id: this.id }).subscribe(data => {
      if (data['response']) { 
        this.order_id = data['response'].order_id;
        this.orderForm.patchValue({
          advance: data['response'].advance,
          balance: data['response'].balance,
          customer_address: data['response'].customer_address,
          customer_age: data['response'].customer_age,
          customer_gender: data['response'].customer_gender,
          customer_name: data['response'].customer_name,
          customer_phone: data['response'].customer_phone,
          delivery_date: new Date(data['response'].delivery_date).toISOString(),
          total_amount: data['response'].total_amount,
          delivery_status: data['response'].delivery_status,
          discount: data['response'].discount,
          order_date: new Date(data['response'].order_date).toISOString(),
          paid_status: data['response'].paid_status
        })
      }
    })
  }



  updateCalc() {

    this.orderForm.patchValue({
      total_amount: 0
    })
  }


  submit() {
    this.http.post(this.baseUrl + '/order/getorders', this.orderForm.value).subscribe(data => { 
      if (data['response'] && data['response']) {
        this.router.navigate(['/orders']);
      }
    })
  }

}
