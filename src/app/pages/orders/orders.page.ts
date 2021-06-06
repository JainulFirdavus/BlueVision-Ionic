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
    this.http.post(this.baseUrl + '/order/getorders', {}).subscribe(data => {
      console.log('2', data)
      if (data['response'] && data['response']) {
        this.orderList= data['response'].data
      }
    })
  }



}
