import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  myToast: any;

  constructor(public toast: ToastController) { }

  showToast() {
    this.myToast = this.toast.create({
      message: 'Address Added Successfully',
      cssClass: 'toast_success',
      color: 'success',
      position: 'bottom',
      duration: 3000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.myToast = this.toast.dismiss();
  }
}
