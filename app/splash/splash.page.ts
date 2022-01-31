import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private util: UtilService) {
    this.navigateHomePage();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.navigateHomePage();
  }

  navigateHomePage() {
    setTimeout( () => {
      //this.router.navigateByUrl('home');
      this.util.navigate('home');
    }, 1000);
  }

}
