import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  // fileTransfer: FileTransferObject = this.transfer.create();
  baseUrl = environment.baseUrl;

  orderForm: FormGroup;
  submitted: boolean = false;
  orderList: any
  update_status: string
  skip: number = 0
  limit: number = 10

  constructor(public alertController: AlertController, private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: HttpClient, public toastController: ToastController/* private transfer: FileTransfer, private file: File */) { }
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

    this.http.post(this.baseUrl + '/order/getorders', { skip: this.skip, limit: this.limit }).subscribe(data => {
      if (data['response'] && data['response']) {
        console.log(data['response']);

        this.orderList = data['response'].data
      }
    })
  }

  async showAlert(order_id, orderId) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Order-' + orderId,
      inputs: [
        {
          name: 'Pending',
          type: 'radio',
          label: 'Pending',
          value: 'Pending',
          handler: () => {
            this.update_status = 'Pending';
          },
          checked: true
        },
        {
          name: 'Fitting',
          type: 'radio',
          label: 'Fitting',
          value: 'Fitting',
          handler: () => {
            this.update_status = 'Fitting';

          }
        },
        {
          name: 'Ready Delivered',
          type: 'radio',
          label: 'Ready Delivered',
          value: 'Ready',
          handler: () => {
            this.update_status = 'Ready';

          }
        },
        /*  {
           name: 'Delivered',
           type: 'radio',
           label: 'Delivered',
           value: 'Delivered',
           handler: () => {
             this.update_status = 'Delivered';
 
           }
         } */
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            if (this.update_status) {
              console.log(this.update_status);
              // return
              this.http.post(this.baseUrl + '/order/save', { _id: order_id, delivery_status: this.update_status }).subscribe(data => {
                if (data['response'] && data['response']) {
                  this.router.navigate(['/orders']).then(() => {
                    console.log("ss");

                    window.location.reload();
                  });
                }
              })
            } else {
              console.log("sss");

            }
          }
        }
      ]
    });

    alert.present();
  }


  newOrder() {
    this.router.navigate(['/orderform']).then(() => {
      window.location.reload();
    });

  }

  resetForm() {
    this.orderForm.reset()
    // this.orderList = []
    this.http.post(this.baseUrl + '/order/getorders', { skip: this.skip, limit: this.limit }).subscribe(data => {
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
    // this.router.navigate(['ordersdetails'], navigationExtras);
    this.router.navigate(['orderform'], navigationExtras).then(() => {
      console.log("ss");
      window.location.reload();
    });

    // this.router.navigate(['/ordersdetails']);
    /* this.http.post(this.baseUrl+ '/order/getordeById', { _id: value }).subscribe(data => { 
      if (data['response'] && data['response']) {
        this.orderList = data['response'].data

      }
    }) */
  }



  loadData(event) {

    setTimeout(() => {
      let skip = this.orderForm.value.skip ? this.orderForm.value.skip : this.skip;
      this.orderForm.value.skip = skip + this.limit;
      this.orderForm.value.limit = this.limit;
      console.log(this.orderForm.value);

      this.http.post(this.baseUrl + '/order/getorders', this.orderForm.value).subscribe(data => {
        if (data['response'] && data['response'].data) {
          console.log(data['response']);
          for (let i = 0; i < this.limit; i++) {
            if (data['response'].data && data['response'].data[i]) {
              this.orderList.push(data['response'].data[i])
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
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
