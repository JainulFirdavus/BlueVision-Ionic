import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';

// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  // fileTransfer: FileTransferObject = this.transfer.create();
  baseUrl = environment.baseUrl;

  orderForm: FormGroup;
  submitted: boolean = false;
  orderList: any

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: HttpClient, public toastController: ToastController/* private transfer: FileTransfer, private file: File */) { }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      delivery_status: [''],
      customer: [''], date: [''],
    })

    this.http.post(this.baseUrl + '/order/getorders', {}).subscribe(data => {
      if (data['response'] && data['response']) {
        this.orderList = data['response'].data
      }
    })
  }


  resetForm() {
    this.orderForm.reset()
    // this.orderList = []
    this.http.post(this.baseUrl + '/order/getorders', this.orderForm.value).subscribe(data => {
      if (data['response'] && data['response']) {
        this.orderList = data['response'].data
      }
    })
  }

  search() {
    this.http.post(this.baseUrl + '/order/getorders', this.orderForm.value).subscribe(data => {
      if (data['response'] && data['response']) {
        this.orderList = data['response'].data
      }
    })
  }

  export() {
    this.http.post(this.baseUrl + '/order/orderExport', this.orderForm.value).subscribe(data => {
      if (data['response'] && data['status'] == 1) {
        this.presentToast('Report Send Your E-Mail')

        console.log(data['response']);

        /*  const url = 'http://www.example.com/file.pdf';
         this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => { 
         }, (error) => {
           // handle error
         }); */
      } else {
        this.presentToast(data['response'])

      }
    })
  }




  getdetails(value) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: value
      }
    };
    this.router.navigate(['ordersdetails'], navigationExtras);

    // this.router.navigate(['/ordersdetails']);
    /* this.http.post(this.baseUrl+ '/order/getordeById', { _id: value }).subscribe(data => { 
      if (data['response'] && data['response']) {
        this.orderList = data['response'].data

      }
    }) */
  }

}
