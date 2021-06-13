import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  // fileTransfer: FileTransferObject = this.transfer.create();
  baseUrl = environment.baseUrl;
  orderForm: FormGroup;
  submitted: boolean = false;
  orderList: any

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: HttpClient, /* private transfer: FileTransfer, private file: File */) { }
  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      reportfor: [''], from: [''], to: [''],
    })
    /* 
      this.http.post(this.baseUrl + '/order/getorders', {}).subscribe(data => {
        if (data['response'] && data['response']) {
          this.orderList = data['response'].data
        }
      }) */
  }


  submit() {
    console.log("submit");

    this.http.post(this.baseUrl + '/order/orderReport', this.orderForm.value).subscribe(data => {
      console.log(data);
      if (data['status'] == 1 && data['response'] && data['response']) {
        this.orderList = data['response'].documentData;
        // this.orderList.resetForm()
       
      } else {
        this.orderList = []
      }
    })
  }





}




