import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // fileTransfer: FileTransferObject = this.transfer.create();
  baseUrl = environment.baseUrl;
  branchList: any
  employeeList: any
  orderForm: FormGroup;
  submitted: boolean = false;
  orderList: any
  response: number = 0
  total: number = 0
  discount: number = 0
  skip: number = 0
  limit: number = 5
  issubmit: boolean = false
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
      reportfor: [''], from: [''], to: [''], branch: [''], employee: ['']
    })

    this.http.post(this.baseUrl + '/admin/getsettingsDetails', {}).subscribe(data => {
      console.log(data['response']);
      this.employeeList = data['response'].employee;

    })


    this.http.post(this.baseUrl + '/branches/list', {}).subscribe(data => {
      this.branchList = data['response'].data;

    })
    /* this.http.post(this.baseUrl+ '/order/getorders', {}).subscribe(data => {
        if (data['response'] && data['response']) {
          this.orderList = data['response'].data
        }
      }) */
  }

  resetForm() {
    this.orderForm.reset();
    this.orderList = [];
    this.response = 0.00;
    this.total = 0.00;
    this.discount = 0.00;
    this.issubmit = false
  }


  submit() {
    let count = 0;
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
      this.issubmit = true
      this.orderForm.value.skip = this.skip;
      this.orderForm.value.limit = this.limit;
      this.http.post(this.baseUrl + '/order/orderReport', this.orderForm.value).subscribe(data => {
        if (data['status'] == 1 && data['response'] && data['response']) {
          this.orderList = data['response'].documentData;
          this.response = data['response'].total_amount;
          this.total = data['response'].total_amount - data['response'].discount;
          this.discount = data['response'].discount;

          // this.orderList.resetForm()
        } else {
          this.presentToast('No Record Found')
          this.orderList = []
          this.response = 0.00
          this.total = 0.00
          this.discount = 0.00;

        }
      })
    } else {
      this.presentToast('Select Any Options')
    }
  }
  refresh() {
    this.issubmit = false
  }

  loadData(event) {
    if (this.issubmit) {
      setTimeout(() => {
        this.orderForm.value.skip = this.orderForm.value.skip + this.limit;;
        this.orderForm.value.limit = this.limit;
        this.http.post(this.baseUrl + '/order/orderReport', this.orderForm.value).subscribe(data => {
          if (data['response'] && data['response'].documentData) {
            console.log(data['response']);
            for (let i = 0; i < this.limit; i++) {
              if (data['response'].documentData && data['response'].documentData[i]) {
                this.orderList.push(data['response'].documentData[i])
              }
            }
          }
        })
        event.target.complete();
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.orderList.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);
    } else {
      event.target.complete();
    }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}




