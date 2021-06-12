import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  baseUrl = environment.baseUrl;
  orderForm: FormGroup;
  submitted: boolean = false;
  todayOrder: String
  totalOrder: String

  todayValue: String
  todaycount: String

  todayAdvance: String
  todayBalance: String
  todaySettled: String

  totalValue: String
  totalcount: String

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: HttpClient) { }

  ngOnInit() {

    this.http.post(this.baseUrl + '/admin/dashboard', {}).subscribe(data => {

      if (data['response'] && data['response']) {
        this.todayOrder = data['response'].today
        this.totalOrder = data['response'].total

        this.todayValue = this.todayOrder[0] ? this.todayOrder[0]['totalAmount'] : 0
        this.todaycount = this.todayOrder[0] ? this.todayOrder[0]['count'] : 0

        this.todayAdvance = this.todayOrder[0] ? this.todayOrder[0]['advance'] : 0
        this.todayBalance = this.todayOrder[0] ? this.todayOrder[0]['balance'] : 0
        this.todaySettled = this.todayOrder[0] ? this.todayOrder[0]['count'] : 0


        this.totalValue = this.totalOrder[0] ? this.totalOrder[0]['totalAmount'] : 0
        this.totalcount = this.totalOrder[0] ? this.totalOrder[0]['count'] : 0
      }
    })
  }

  getmenu() {
    console.log("getmenu");
  }

}
