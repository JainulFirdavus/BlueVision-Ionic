import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  baseUrl = environment.baseUrl;
  orderForm: FormGroup;
  submitted: boolean = false;
  orderList: any

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: HttpClient) { }
  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      delivery_status: [''],
      customer: [''], date: [''],
    })

    this.http.post(this.baseUrl + '/order/getorders', {}).subscribe(data => {
      console.log('2', data)
      if (data['response'] && data['response']) {
        this.orderList = data['response'].data
      }
    })
  }


  search() {
    console.log('2', this.orderForm.value)

    this.http.post(this.baseUrl + '/order/getorders', this.orderForm.value).subscribe(data => {
      console.log('2', data)

      if (data['response'] && data['response']) {
        this.orderList = data['response'].data
      }
    })
  }




  getdetails(value) {
    this.http.post(this.baseUrl + '/order/getordeById', { _id: value }).subscribe(data => {
      console.log('2', data)
      if (data['response'] && data['response']) {
        this.orderList = data['response'].data
      }
    })
  }




}
