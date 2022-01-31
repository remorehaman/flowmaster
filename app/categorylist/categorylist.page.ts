import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.page.html',
  styleUrls: ['./categorylist.page.scss'],
})
export class CategorylistPage implements OnInit {

  constructor(private util: UtilService) { 
    this.util.loaderPromise('Please wait...');
  }

  ngOnInit() {
  }

}
