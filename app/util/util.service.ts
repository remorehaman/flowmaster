import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private isMenuEnabled = new Subject<boolean>();

  constructor(
    private nav: NavController, 
    private router: Router, 
    private toastController: ToastController, 
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  // Creating method to handle Side Menu State (Enabled or Disabeld)
  setMenuState(enabled) {
    this.isMenuEnabled.next(enabled);
  }

  // Method for get the Menu State
  getMenuState(): Subject<boolean> {
    return this.isMenuEnabled;
  }

  navigate(link, forward?) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
  }

  navigateWithExtra(context:any, data:any) {
    //let navigationExtras: NavigationExtras = { state: { param: data} };
    //this.nav.navigateRoot(context, navigationExtras);
    this.router.navigate([context, data]);
  }

  navigateExtraWithState(context:any, data:any, resourceName: any) {
    let navigationExtras: NavigationExtras = { state: { param: data, resourceName: resourceName} };
    this.nav.navigateRoot(context, navigationExtras);
  }

  back() {
    this.nav.back();
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  async showExitConfirm() {
    this.alertController.create({
      header: 'Confirmation',
      message: 'Do you really want to close this app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

  async exitApp() {
    this.alertController.getTop().then(r => {
      if (r) {
        navigator['app'].exitApp();
      }
    }).catch(e => {
      console.log(e);
    })
  }

  async loaderPromise(message: string = null) {
    this.loadingController.create({
      message: message,
      duration: 2000
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
      });
    });
  }
  async dismiss() {
   this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  setCurrency() {
    return '$';
  }

  calculate(price, discount) {
    price = price - (price * discount / 100);
    return price.toFixed(2);
  }

  setPriceFormat(price) {
    if(price) {
      let tempPrice = parseFloat(price)
      return tempPrice.toFixed(2);
    } else {
      return '';
    }
    
  }

  titleCaseWord(str: string) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
  }

}
