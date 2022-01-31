import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { UtilService } from './util/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  navigate  : any;
  fMenuList : any;

  constructor(private platform: Platform, private util: UtilService) {
    this.sideMenu();  
    this.initializeApp();
  }

  initializeApp() {  
    this.platform.ready().then(() => {  
      //this.statusBar.styleDefault();   
      //this.splashScreen.hide();  
      this.util.navigate('splash');
    });  
  }

  sideMenu() {  
    this.navigate =   
    [  
      { 
      title : 'All Products',
      url   : '/categorylist',
      icon  : 'apps' 
      },
      { 
        title : 'My Order',  
        url   : '/home',  
        icon  : 'basket'  
      },   
      {  
        title : 'My Wishlist',  
        url   : '/home',  
        icon  : 'heart'   
      },  
      {  
        title : 'My Cart',  
        url   : '/home',  
        icon  : 'cart'  
      },  
      
      {
        title : 'Login',
        url   : '/login',
        icon  : 'person'
      }, 
      // {
      //     title : 'My Account',
      //     url   : '/myaccount',
      //     icon  : 'person'
      // },
      // {
      //   title : 'Signup',
      //   url   : '/signup',
      //   icon  : 'person'
      // },
      // {
      //   title : 'Address',
      //   url   : '/addressbook',
      //   icon  : 'location'
      // },
      // {
      //   title :  'Address List',
      //   url   : '/address-list',
      //   icon  : 'location'
      // },
      // {
      //   title : 'Update Address',
      //   url   : '/update-address',
      //   icon  : 'location'
      // }
      
    ];

    this.fMenuList = [
      {
        title : 'About Us',  
        url   : 'cmspage',
        slug  : 'about-us'
      },
      {
        title : 'FAQ',  
        url   : 'faq',
        slug  : 'faq'
      },
      {
        title : 'Contact Us',  
        url   : 'contactus',
        slug  : 'contact-us'
      },
      {
        title : 'Terms & Conditions',  
        url   : 'cmspage',
        slug  : 'terms-and-conditions'
      },
      {
        title : 'Privacy Policy',  
        url   : 'cmspage',
        slug  : 'privacy-policy'
      },
      {
        title : 'Shipping Policy',  
        url   : 'cmspage',
        slug  : 'shipping-policy'
      },
      {
        title : 'Return policy',  
        url   : 'cmspage',
        slug  : 'return-policy'
      }
    ];
  } 

  pageNavigateBySlug(menuURL: string, i: any) {
    if(menuURL == 'contactus')
      this.util.navigate(menuURL);
    else if(menuURL == 'faq')  
      this.util.navigate(menuURL);
    else 
      this.util.navigateWithExtra('cmspage', i);
  }

}
