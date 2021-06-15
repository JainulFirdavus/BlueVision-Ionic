import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
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
  user_home = (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).role == 'admin') ? '/dashboard' : '/order';
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: HttpClient, public toastController: ToastController, /* private transfer: FileTransfer, private file: File */) { }


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
      reportfor: [''], from: [''], to: [''],
    })
    /* 
      this.http.post(this.baseUrl+ '/order/getorders', {}).subscribe(data => {
        if (data['response'] && data['response']) {
          this.orderList = data['response'].data
        }
      }) */
  }

  resetForm() {
    this.orderForm.reset();
    this.orderList = []
  }


  submit() {
    let count = 0;
    console.log("submit");
    for (let el in this.orderForm.controls) {
      console.log(this.orderForm.controls[el].value);
      if (this.orderForm.controls[el].value != 0) {
        count++;
      }
      /*  if (this.orderForm.controls[el].errors) {
         console.log(el.split('_')[0], el.split('_')[1])
         this.presentToast((el.split('_')[0] + ' ' + el.split('_')[1] ? el.split('_')[1] : '') + ' Required')
         return;
       } */
    }

    if (count != 0) {
      this.http.post(this.baseUrl + '/order/orderReport', this.orderForm.value).subscribe(data => {
        console.log(data);
        if (data['status'] == 1 && data['response'] && data['response']) {
          this.orderList = data['response'].documentData;
          // this.orderList.resetForm()
        } else {
          this.presentToast('No Record Found')

          this.orderList = []
        }
      })
    } else {
      this.presentToast('Select Any Options')

    }
  }





}




